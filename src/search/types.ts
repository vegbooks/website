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

export interface SearchFilters {
  categories?: readonly string[];
  tags?: readonly string[];
  years?: readonly number[];
}

export interface SearchRequest {
  query: string;
  filters?: SearchFilters;
  match?: 'all' | 'any';
  prefix?: boolean;
  limit?: number;
  offset?: number;
}

export interface SearchHit {
  document: SearchDocument;
  score: number;
  matchedTerms: readonly string[];
}

export interface SearchFacetValue {
  value: string;
  count: number;
}

export interface SearchResponse {
  total: number;
  hits: readonly SearchHit[];
  facets: {
    categories: readonly SearchFacetValue[];
    tags: readonly SearchFacetValue[];
    years: readonly SearchFacetValue[];
  };
  elapsedMs: number;
}
