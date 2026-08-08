import { describe, expect, it } from 'vitest';
import { addSiteBase, normalizeSiteBasePath, stripSiteBase } from './site-base';

describe('site base paths', () => {
  it('normalizes GitHub Pages base paths', () => {
    expect(normalizeSiteBasePath(undefined)).toBe('');
    expect(normalizeSiteBasePath('/')).toBe('');
    expect(normalizeSiteBasePath('website/')).toBe('/website');
    expect(normalizeSiteBasePath('/website/')).toBe('/website');
  });

  it('adds a project-site base to asset URLs without touching external URLs', () => {
    expect(addSiteBase('/', '/website')).toBe('/website/');
    expect(addSiteBase('/reviews/the-zoo-box/', '/website')).toBe(
      '/website/reviews/the-zoo-box/'
    );
    expect(addSiteBase('/website/reviews/', '/website')).toBe(
      '/website/reviews/'
    );
    expect(addSiteBase('https://vegbooks.org/reviews/', '/website')).toBe(
      'https://vegbooks.org/reviews/'
    );
    expect(stripSiteBase('/website/assets/app.js', '/website')).toBe(
      '/assets/app.js'
    );
  });
});
