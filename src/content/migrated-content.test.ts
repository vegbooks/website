import { readFileSync, readdirSync } from 'node:fs';
import { renderToStringSync } from '@askrjs/askr/ssr';
import { imageSize } from 'image-size';
import { describe, expect, it } from 'vitest';
import ApplesPost from '../posts/apples-cherries-red-raspberries';
import BabyShowerPost from '../posts/baby-shower-gifts-for-veg-moms';
import FriendsPost from '../posts/friends-true-stories-of-extraordinary-animal-friendships';
import HuffPuffPost from '../posts/huff-puff';
import LittleIslandPost from '../posts/the-little-island';
import OneSmallHopPost, {
  article as oneSmallHop,
} from '../posts/one-small-hop';
import PurpliciousPost, { article as purplicious } from '../posts/purplicious';
import SmudgeBunnyPost from '../posts/smudge-bunny';
import MonsterOnTheHillPost from '../posts/monster-on-the-hill';
import PlantCookEatPost from '../posts/plant-eat-cook-a-childrens-cookbook';
import StretchToTheSunPost, {
  article as stretchToTheSun,
} from '../posts/stretch-to-the-sun-from-a-tiny-sprout-to-the-tallest-tree-in-the-world';
import TwasTheNightPost from '../posts/twas-the-night-before-thanksgiving';
import VegetarianCookingPost from '../posts/vegetarian-cooking-for-beginners';
import WildOrcaPost from '../posts/wild-orca-the-oldest-wisest-whale-in-the-world';

describe('migrated WordPress content', () => {
  it('preserves early and late review bodies without copied WordPress HTML', () => {
    const early = renderToStringSync(PurpliciousPost);
    const late = renderToStringSync(OneSmallHopPost);
    expect(purplicious.publishedAt).toBe('2009-11-03');
    expect(oneSmallHop.publishedAt).toBe('2021-06-24');
    expect(early).toContain('Purplicious');
    expect(late).toContain('last bullfrog in Maine');
    expect(`${early}${late}`).not.toMatch(/<script|style=|wp-/i);
  });

  it('normalizes visible reviewer bylines while preserving their images', () => {
    const body = renderToStringSync(StretchToTheSunPost);
    expect(stretchToTheSun.reviewer.name).toBe('Kristin Wald');
    expect(body).not.toMatch(/review by/i);
    expect(body).toContain('<img');
  });

  it('preserves tables, addresses, lists, quotations, and hard line breaks', () => {
    expect(renderToStringSync(FriendsPost)).toContain('<table>');
    expect(renderToStringSync(LittleIslandPost)).toContain('<address>');
    expect(renderToStringSync(BabyShowerPost)).toMatch(/<[ou]l>/);
    expect(renderToStringSync(WildOrcaPost)).toContain('<blockquote>');
    expect(renderToStringSync(SmudgeBunnyPost)).toMatch(/<br\s*\/?>/);
    expect(
      `${renderToStringSync(FriendsPost)}${renderToStringSync(LittleIslandPost)}`
    ).not.toMatch(/<h[1456]>/);
  });

  it('resolves the two missing thumbnails to archived full-size originals', () => {
    expect(renderToStringSync(ApplesPost)).toContain(
      '/media/2011/04/apples-cherries-c.jpg'
    );
    expect(renderToStringSync(HuffPuffPost)).toContain(
      '/media/2012/05/9781419701702-huff-puff-cv.jpg'
    );
  });

  it('uses the highest-resolution source when media names collide', () => {
    const dimensions = imageSize(
      readFileSync(
        new URL('../../public/media/2009/12/cover.jpg', import.meta.url)
      )
    );
    expect(dimensions).toMatchObject({ width: 450, height: 306 });
  });

  it('uses the review title for an undocumented leading image alt', () => {
    expect(oneSmallHop.image?.alt).toBe(oneSmallHop.title);
  });

  it('preserves author and publisher destinations wrapped around images', () => {
    expect(renderToStringSync(TwasTheNightPost)).toMatch(
      /<a href="http:\/\/www\.pilkey\.com\/"[^>]*><img/
    );
    expect(renderToStringSync(VegetarianCookingPost)).toMatch(
      /<a href="http:\/\/www\.myubam\.com\/ecommerce\/details\.asp\?[^">]+"><img/
    );
    expect(renderToStringSync(MonsterOnTheHillPost)).toContain(
      '<a href="http://yeahwrite.me/moonshine/"><img'
    );
    expect(renderToStringSync(PlantCookEatPost)).toContain(
      '<a href="https://www.charlesbridge.com/products/plant-cook-eat-a-childrens-cookbook"><img'
    );
  });

  it('preserves and repairs the legacy Amazon affiliate links', () => {
    const postRoot = new URL('../posts/', import.meta.url);
    const affiliateLinks = readdirSync(postRoot)
      .filter((file) => file.endsWith('.tsx'))
      .flatMap((file) => {
        const source = readFileSync(new URL(file, postRoot), 'utf8');
        return [...source.matchAll(/href=\{("(?:[^"\\]|\\.)*")\}/g)].map(
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
