import { describe, expect, it } from 'vitest';
import { buildSearchIndex, SearchEngine } from '.';

const engine = new SearchEngine(
  buildSearchIndex([
    {
      id: 'ducklings',
      url: '/make-way-for-ducklings/',
      title: 'Make Way for Ducklings',
      body: 'A classic story about a family of ducks in Boston.',
      date: '2009-11-17',
      categories: ['Books'],
      tags: ['Birds', 'Kindergarten'],
      reviewer: 'Jane Reviewer',
    },
    {
      id: 'shark',
      url: '/sniff-like-a-shark/',
      title: 'What if You Could Sniff Like a Shark?',
      body: 'Ocean animal superpowers for curious young readers.',
      date: '2021-08-09',
      categories: ['Books'],
      tags: ['Ocean Animals', 'Picture Book'],
    },
    {
      id: 'movie',
      url: '/shark-tale/',
      title: 'Shark Tale',
      body: 'A colorful animated movie review.',
      date: '2009-11-25',
      categories: ['Movies'],
      tags: ['Ocean Animals'],
    },
  ])
);

describe('SearchEngine', () => {
  it('ranks weighted title matches ahead of body matches', () => {
    const result = engine.search({ query: 'shark' });
    expect(result.hits.map((hit) => hit.document.id)).toEqual([
      'movie',
      'shark',
    ]);
  });

  it('supports prefix search and accent-insensitive normalization', () => {
    expect(engine.search({ query: 'duckl' }).hits[0]?.document.id).toBe(
      'ducklings'
    );
    expect(engine.search({ query: 'BÓSTON' }).hits[0]?.document.id).toBe(
      'ducklings'
    );
    expect(engine.search({ query: 'reviewer' }).hits[0]?.document.id).toBe(
      'ducklings'
    );
  });

  it('supports category, tag, and year filters', () => {
    const result = engine.search({
      query: 'shark',
      filters: {
        categories: ['Books'],
        tags: ['Ocean Animals'],
        years: [2021],
      },
    });
    expect(result.hits.map((hit) => hit.document.id)).toEqual(['shark']);
  });

  it('returns facets and deterministic pagination', () => {
    const result = engine.search({ query: 'ocean', match: 'any', limit: 1 });
    expect(result.total).toBe(2);
    expect(result.hits).toHaveLength(1);
    expect(result.facets.categories).toEqual([
      { value: 'Books', count: 1 },
      { value: 'Movies', count: 1 },
    ]);
  });

  it('supports filter-only browsing with an empty query', () => {
    const result = engine.search({
      query: '',
      filters: { categories: ['Movies'] },
    });
    expect(result.hits.map((hit) => hit.document.id)).toEqual(['movie']);
  });

  it('round trips through serializable JSON', () => {
    const restored = new SearchEngine(
      JSON.parse(JSON.stringify(buildSearchIndex([])))
    );
    expect(restored.search({ query: 'anything' }).total).toBe(0);
  });
});
