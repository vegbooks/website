export interface SearchDocument {
  id: string;
  url: string;
  title: string;
  summary?: string;
  body?: string;
  date?: string;
  categories?: readonly string[];
  tags?: readonly string[];
  reviewer?: string;
}

export interface IndexedDocument extends SearchDocument {
  length: number;
}

export type PackedSearchDocument = readonly [
  id: string,
  url: string,
  title: string,
  summary: string,
  date: string,
  categories: readonly string[],
  tags: readonly string[],
  reviewer: string,
  length: number,
];

export type PackedSearchTerm = readonly [
  term: string,
  postings: readonly number[],
];

export interface SearchIndex {
  version: 2;
  documents: readonly PackedSearchDocument[];
  terms: readonly PackedSearchTerm[];
  averageLength: number;
}

export interface SearchRequest {
  query: string;
  /** @deprecated retained for index compatibility; UI exposes query-only search. */
  filters?: {
    categories?: readonly string[];
    tags?: readonly string[];
    years?: readonly number[];
  };
  /** @deprecated query matching is always all-term prefix matching. */
  match?: 'all' | 'any';
  limit?: number;
  offset?: number;
}

export interface SearchHit {
  document: SearchDocument;
}

export interface SearchResponse {
  total: number;
  hits: readonly SearchHit[];
  /** @deprecated no longer rendered by the search page. */
  facets: {
    categories: readonly unknown[];
    tags: readonly unknown[];
    years: readonly unknown[];
  };
}
