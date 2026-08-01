import { tokenize } from './tokenize';
import type { SearchDocument, SearchIndex } from './types';

export interface SearchFieldWeights {
  title: number;
  summary: number;
  body: number;
  categories: number;
  tags: number;
  reviewer: number;
}

const defaultWeights: SearchFieldWeights = {
  title: 8,
  summary: 3,
  body: 1,
  categories: 4,
  tags: 5,
  reviewer: 4,
};

export function buildSearchIndex(
  documents: readonly SearchDocument[],
  weights: Partial<SearchFieldWeights> = {}
): SearchIndex {
  const fieldWeights = { ...defaultWeights, ...weights };
  const terms = new Map<string, { document: number; frequency: number }[]>();
  let totalLength = 0;

  const indexedDocuments = documents.map((document, documentIndex) => {
    const frequencies = new Map<string, number>();
    let length = 0;

    addField(document.title, fieldWeights.title);
    addField(document.summary ?? '', fieldWeights.summary);
    addField(document.body ?? '', fieldWeights.body);
    addField(document.categories?.join(' ') ?? '', fieldWeights.categories);
    addField(document.tags?.join(' ') ?? '', fieldWeights.tags);
    addField(document.reviewer ?? '', fieldWeights.reviewer);

    for (const [term, frequency] of frequencies) {
      const postings = terms.get(term) ?? [];
      postings.push({ document: documentIndex, frequency });
      terms.set(term, postings);
    }

    totalLength += length;
    return { ...document, length };

    function addField(value: string, weight: number) {
      const tokens = tokenize(value);
      length += tokens.length;
      for (const token of tokens) {
        frequencies.set(token, (frequencies.get(token) ?? 0) + weight);
      }
    }
  });

  const vocabulary = [...terms.keys()].sort();
  return {
    version: 2,
    documents: indexedDocuments.map((document) => [
      document.id,
      document.url,
      document.title,
      document.summary ?? '',
      document.date ?? '',
      document.categories ?? [],
      document.tags ?? [],
      document.reviewer ?? '',
      document.length,
    ]),
    terms: vocabulary.map((term) => [term, packPostings(terms.get(term)!)]),
    averageLength: documents.length === 0 ? 0 : totalLength / documents.length,
  };
}

function packPostings(
  postings: readonly { document: number; frequency: number }[]
): number[] {
  let previousDocument = 0;
  return postings.flatMap((posting) => {
    const documentDelta = posting.document - previousDocument;
    previousDocument = posting.document;
    return [documentDelta, posting.frequency];
  });
}
