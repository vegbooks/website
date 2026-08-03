import { readFileSync, readdirSync } from 'node:fs';
import { renderToStringSync } from '@askrjs/askr/ssr';
import { imageSize } from 'image-size';
import { deliveryImagePath } from '../image-paths.ts';
import { ArticleContent } from '../components/article-content';
import { describe, expect, it } from 'vitest';
import { loadArticle } from './content';
import { manifest } from '../generated/manifest';
import ApplesPost from '../posts/apples-cherries-red-raspberries';
import BabyShowerPost from '../posts/baby-shower-gifts-for-veg-moms';
import FriendsPost from '../posts/friends-true-stories-of-extraordinary-animal-friendships';
import HuffPuffPost from '../posts/huff-puff';
import LittleIslandPost from '../posts/the-little-island';
import OneSmallHopPost from '../posts/one-small-hop';
import PurpliciousPost from '../posts/purplicious';
import SmudgeBunnyPost from '../posts/smudge-bunny';
import MonsterOnTheHillPost from '../posts/monster-on-the-hill';
import PlantCookEatPost from '../posts/plant-eat-cook-a-childrens-cookbook';
import StretchToTheSunPost from '../posts/stretch-to-the-sun-from-a-tiny-sprout-to-the-tallest-tree-in-the-world';
import TwasTheNightPost from '../posts/twas-the-night-before-thanksgiving';
import VegetarianCookingPost from '../posts/vegetarian-cooking-for-beginners';
import WildOrcaPost from '../posts/wild-orca-the-oldest-wisest-whale-in-the-world';

describe('migrated WordPress content', () => {
  const renderContent = (blocks: readonly import('./types').ContentBlock[]) =>
    renderToStringSync(() => <ArticleContent blocks={blocks} />);
  const manifestArticle = (slug: string) =>
    manifest.articles.find((article) => article.slug === slug)!;
  it('keeps review loader data JSON-serializable for hydration', async () => {
    const data = await loadArticle('the-zoo-box');
    expect(JSON.parse(JSON.stringify(data))).toEqual(data);
    expect(data).not.toHaveProperty('Post');
    expect(data.article.previous).toEqual({
      title: 'The Girl and the Bicycle',
      url: '/reviews/the-girl-and-the-bicycle/',
    });
    expect(data.article.next).toEqual({
      title: 'I Am So Brave!',
      url: '/reviews/i-am-so-brave/',
    });
  });

  it('preserves early and late review bodies without copied WordPress HTML', () => {
    const early = renderContent(PurpliciousPost);
    const late = renderContent(OneSmallHopPost);
    expect(manifestArticle('purplicious').publishedAt).toBe('2009-11-03');
    expect(manifestArticle('one-small-hop').publishedAt).toBe('2021-06-24');
    expect(early).toContain('Purplicious');
    expect(late).toContain('last bullfrog in Maine');
    expect(`${early}${late}`).not.toMatch(/<script|style=|wp-/i);
  });

  it('normalizes visible reviewer bylines while preserving their images', () => {
    const body = renderContent(StretchToTheSunPost);
    expect(
      manifestArticle(
        'stretch-to-the-sun-from-a-tiny-sprout-to-the-tallest-tree-in-the-world'
      ).reviewer.name
    ).toBe('Kristin Wald');
    expect(body).not.toMatch(/review by/i);
    expect(body).toContain('<img');
  });

  it('preserves tables, addresses, lists, quotations, and hard line breaks', () => {
    expect(renderContent(FriendsPost)).toContain('<table>');
    expect(renderContent(LittleIslandPost)).toContain('<address');
    expect(renderContent(BabyShowerPost)).toMatch(/<[ou]l/);
    expect(renderContent(WildOrcaPost)).toContain('<blockquote');
    expect(renderContent(SmudgeBunnyPost)).toMatch(/<br\s*\/?>/);
    expect(
      `${renderContent(FriendsPost)}${renderContent(LittleIslandPost)}`
    ).not.toMatch(/<h[1456]>/);
  });

  it('resolves the two missing thumbnails to archived full-size originals', () => {
    expect(renderContent(ApplesPost)).toContain(
      '/media/2011/04/apples-cherries-c.jpg'
    );
    expect(renderContent(HuffPuffPost)).toContain(
      '/media/2012/05/9781419701702-huff-puff-cv.jpg'
    );
  });

  it('uses the highest-resolution source when media names collide', () => {
    const image = deliveryImagePath('/media/2009/12/cover.jpg', 'webp');
    expect(image).toBeDefined();
    const dimensions = imageSize(
      readFileSync(new URL(`../../public${image}`, import.meta.url))
    );
    expect(dimensions).toMatchObject({ width: 450, height: 306 });
  });

  it('uses the review title for an undocumented leading image alt', () => {
    expect(manifestArticle('one-small-hop').image?.alt).toBe(
      manifestArticle('one-small-hop').title
    );
  });

  it('preserves author and publisher destinations wrapped around images', () => {
    expect(renderContent(TwasTheNightPost)).toMatch(
      /<a href="http:\/\/www\.pilkey\.com\/"[^>]*><picture>/
    );
    expect(renderContent(VegetarianCookingPost)).toMatch(
      /<a href="http:\/\/www\.myubam\.com\/ecommerce\/details\.asp\?[^">]+"><picture>/
    );
    expect(renderContent(MonsterOnTheHillPost)).toContain(
      '<a href="http://yeahwrite.me/moonshine/"><img'
    );
    expect(renderContent(PlantCookEatPost)).toContain(
      '<a href="https://www.charlesbridge.com/products/plant-cook-eat-a-childrens-cookbook"'
    );
  });

  it('preserves and repairs the legacy Amazon affiliate links', () => {
    const postRoot = new URL('../posts/', import.meta.url);
    const affiliateLinks = readdirSync(postRoot)
      .filter((file) => file.endsWith('.ts'))
      .flatMap((file) => {
        const source = readFileSync(new URL(file, postRoot), 'utf8');
        return [...source.matchAll(/"href":\s*("(?:[^"\\]|\\.)*")/g)].map(
          (match) => JSON.parse(match[1]) as string
        );
      })
      .filter((href) => href.includes('tag=vegbooks-20'));

    expect(affiliateLinks).toHaveLength(194);
    for (const href of affiliateLinks) {
      const url = new URL(href);
      expect(url.protocol).toMatch(/^https?:$/);
      expect(url.hostname).toMatch(/(^|\.)amazon\.com$/);
      expect(url.searchParams.get('tag')).toBe('vegbooks-20');
      expect(href).not.toMatch(/%22|%3e|https?:\/\/.*https?:\/\//i);
    }
  });
});
