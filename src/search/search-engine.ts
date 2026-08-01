import { tokenize } from './tokenize';
import type {
  IndexedDocument,
  SearchFacetValue,
  SearchHit,
  SearchIndex,
  SearchRequest,
  SearchResponse,
} from './types';

interface Candidate {
  score: number;
  groups: Set<number>;
  terms: Set<string>;
}

export class SearchEngine {
  private readonly documents: readonly IndexedDocument[];
  private readonly vocabulary: readonly string[];
  private readonly terms: ReadonlyMap<string, readonly number[]>;

  constructor(private readonly index: SearchIndex) {
    if (index.version !== 2) {
      throw new Error(`Unsupported search index version: ${index.version}`);
    }
    this.documents = index.documents.map(
      ([
        id,
        url,
        title,
        summary,
        date,
        categories,
        tags,
        reviewer,
        length,
      ]) => ({
        id,
        url,
        title,
        ...(summary ? { summary } : {}),
        ...(date ? { date } : {}),
        categories,
        tags,
        ...(reviewer ? { reviewer } : {}),
        length,
      })
    );
    this.vocabulary = index.terms.map(([term]) => term);
    this.terms = new Map(index.terms);
  }

  search(request: SearchRequest): SearchResponse {
    const started = performance.now();
    const queryTerms = [...new Set(tokenize(request.query))];
    const candidates = new Map<number, Candidate>();
    const allowPrefix = request.prefix ?? true;

    if (queryTerms.length === 0) {
      this.documents.forEach((_, document) => {
        candidates.set(document, {
          score: 0,
          groups: new Set<number>(),
          terms: new Set<string>(),
        });
      });
    }

    queryTerms.forEach((queryTerm, group) => {
      const expandedTerms = this.expand(queryTerm, allowPrefix);
      for (const term of expandedTerms) {
        const postings = this.terms.get(term) ?? [];
        const postingCount = postings.length / 2;
        const inverseDocumentFrequency = Math.log(
          1 +
            (this.documents.length - postingCount + 0.5) / (postingCount + 0.5)
        );
        let documentIndex = 0;
        for (let index = 0; index < postings.length; index += 2) {
          documentIndex += postings[index];
          const frequency = postings[index + 1];
          const document = this.documents[documentIndex];
          const candidate = candidates.get(documentIndex) ?? {
            score: 0,
            groups: new Set<number>(),
            terms: new Set<string>(),
          };
          candidate.score +=
            inverseDocumentFrequency * this.bm25(frequency, document);
          candidate.groups.add(group);
          candidate.terms.add(term);
          candidates.set(documentIndex, candidate);
        }
      }
    });

    const matchAll = (request.match ?? 'all') === 'all';
    const ranked = [...candidates.entries()]
      .filter(
        ([, candidate]) =>
          !matchAll || candidate.groups.size === queryTerms.length
      )
      .filter(([document]) =>
        this.matchesFilters(this.documents[document], request)
      )
      .map(
        ([document, candidate]): SearchHit => ({
          document: this.documents[document],
          score: candidate.score,
          matchedTerms: [...candidate.terms].sort(),
        })
      )
      .sort((left, right) =>
        right.score !== left.score
          ? right.score - left.score
          : left.document.url.localeCompare(right.document.url)
      );

    const offset = Math.max(0, request.offset ?? 0);
    const limit = Math.min(100, Math.max(1, request.limit ?? 20));
    return {
      total: ranked.length,
      hits: ranked.slice(offset, offset + limit),
      facets: {
        categories: facets(ranked, (document) => document.categories ?? []),
        tags: facets(ranked, (document) => document.tags ?? []),
        years: facets(ranked, (document) =>
          document.date ? [document.date.slice(0, 4)] : []
        ),
      },
      elapsedMs: performance.now() - started,
    };
  }

  private expand(term: string, prefix: boolean): readonly string[] {
    if (!prefix || term.length < 2) {
      return this.terms.has(term) ? [term] : [];
    }
    const start = lowerBound(this.vocabulary, term);
    const matches: string[] = [];
    for (let index = start; index < this.vocabulary.length; index++) {
      const candidate = this.vocabulary[index];
      if (!candidate.startsWith(term) || matches.length >= 32) break;
      matches.push(candidate);
    }
    return matches;
  }

  private bm25(frequency: number, document: IndexedDocument): number {
    const k1 = 1.2;
    const b = 0.75;
    const lengthRatio =
      this.index.averageLength === 0
        ? 1
        : document.length / this.index.averageLength;
    return (
      (frequency * (k1 + 1)) / (frequency + k1 * (1 - b + b * lengthRatio))
    );
  }

  private matchesFilters(
    document: IndexedDocument,
    request: SearchRequest
  ): boolean {
    const filters = request.filters;
    if (!filters) return true;
    if (!includesAny(document.categories, filters.categories)) return false;
    if (!includesAny(document.tags, filters.tags)) return false;
    if (
      filters.years?.length &&
      (!document.date ||
        !filters.years.includes(Number(document.date.slice(0, 4))))
    ) {
      return false;
    }
    return true;
  }
}

function lowerBound(values: readonly string[], target: string): number {
  let low = 0;
  let high = values.length;
  while (low < high) {
    const middle = (low + high) >>> 1;
    if (values[middle] < target) low = middle + 1;
    else high = middle;
  }
  return low;
}

function includesAny(
  documentValues: readonly string[] | undefined,
  requestedValues: readonly string[] | undefined
): boolean {
  if (!requestedValues?.length) return true;
  if (!documentValues?.length) return false;
  const normalized = new Set(
    documentValues.map((value) => value.toLocaleLowerCase())
  );
  return requestedValues.some((value) =>
    normalized.has(value.toLocaleLowerCase())
  );
}

function facets(
  hits: readonly SearchHit[],
  values: (document: SearchHit['document']) => readonly string[]
): SearchFacetValue[] {
  const counts = new Map<string, number>();
  for (const hit of hits) {
    for (const value of new Set(values(hit.document))) {
      counts.set(value, (counts.get(value) ?? 0) + 1);
    }
  }
  return [...counts]
    .map(([value, count]) => ({ value, count }))
    .sort(
      (left, right) =>
        right.count - left.count || left.value.localeCompare(right.value)
    );
}
