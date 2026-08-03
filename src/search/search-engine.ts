import { tokenize } from './tokenize';
import type {
  IndexedDocument,
  SearchIndex,
  SearchRequest,
  SearchResponse,
} from './types';

interface Candidate {
  score: number;
  groups: Set<number>;
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
    const queryTerms = [...new Set(tokenize(request.query))];
    const candidates = new Map<number, Candidate>();
    const allowPrefix = true;

    if (queryTerms.length === 0) {
      this.documents.forEach((_, document) => {
        candidates.set(document, {
          score: 0,
          groups: new Set<number>(),
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
          };
          candidate.score +=
            inverseDocumentFrequency * this.bm25(frequency, document);
          candidate.groups.add(group);
          candidates.set(documentIndex, candidate);
        }
      }
    });

    const ranked = [...candidates.entries()]
      .filter(([, candidate]) => candidate.groups.size === queryTerms.length)
      .filter(([document]) =>
        this.matchesFilters(this.documents[document], request)
      )
      .sort((left, right) =>
        right[1].score !== left[1].score
          ? right[1].score - left[1].score
          : this.documents[left[0]].url.localeCompare(
              this.documents[right[0]].url
            )
      )
      .map(([document]) => ({ document: this.documents[document] }));
    const facetValues = (
      values: (document: IndexedDocument) => readonly string[]
    ) => {
      const counts = new Map<string, number>();
      for (const hit of ranked)
        for (const value of new Set(values(hit.document)))
          counts.set(value, (counts.get(value) ?? 0) + 1);
      return [...counts]
        .map(([value, count]) => ({ value, count }))
        .sort((left, right) => left.value.localeCompare(right.value));
    };

    const offset = Math.max(0, request.offset ?? 0);
    const limit = Math.min(100, Math.max(1, request.limit ?? 20));
    return {
      total: ranked.length,
      hits: ranked.slice(offset, offset + limit),
      facets: {
        categories: facetValues((document) => document.categories ?? []),
        tags: facetValues((document) => document.tags ?? []),
        years: facetValues((document) =>
          document.date ? [document.date.slice(0, 4)] : []
        ),
      },
    };
  }

  private matchesFilters(
    document: IndexedDocument,
    request: SearchRequest
  ): boolean {
    const filters = request.filters;
    if (!filters) return true;
    const includes = (
      values: readonly string[] | undefined,
      wanted: readonly string[] | undefined
    ) =>
      !wanted?.length ||
      !!values?.some((value) =>
        wanted.some(
          (item) => value.toLocaleLowerCase() === item.toLocaleLowerCase()
        )
      );
    return (
      includes(document.categories, filters.categories) &&
      includes(document.tags, filters.tags) &&
      (!filters.years?.length ||
        (!!document.date &&
          filters.years.includes(Number(document.date.slice(0, 4)))))
    );
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
