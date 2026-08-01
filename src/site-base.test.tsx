import { describe, expect, it } from 'vitest';
import type { JSXElement } from '@askrjs/askr/jsx-runtime';
import {
  addSiteBase,
  normalizeSiteBasePath,
  prefixElementSiteUrls,
  stripSiteBase,
} from './site-base';

describe('site base paths', () => {
  it('normalizes GitHub Pages base paths', () => {
    expect(normalizeSiteBasePath(undefined)).toBe('');
    expect(normalizeSiteBasePath('/')).toBe('');
    expect(normalizeSiteBasePath('website/')).toBe('/website');
    expect(normalizeSiteBasePath('/website/')).toBe('/website');
  });

  it('adds and removes a project-site base without touching external URLs', () => {
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
    expect(stripSiteBase('/website/reviews/', '/website')).toBe('/reviews/');
    expect(stripSiteBase('/website/', '/website')).toBe('/');
  });

  it('prefixes internal URLs throughout migrated post markup', () => {
    const element = (
      <div>
        <a href="/reviews/the-zoo-box/">
          <img src="/media/zoo-box.jpg" alt="" />
        </a>
        <a href="https://example.com/">External</a>
      </div>
    );

    prefixElementSiteUrls(element, '/website');

    const children = element.props.children as JSXElement[];
    expect(children[0].props.href).toBe('/website/reviews/the-zoo-box/');
    expect((children[0].props.children as JSXElement).props.src).toBe(
      '/website/media/zoo-box.jpg'
    );
    expect(children[1].props.href).toBe('https://example.com/');
  });
});
