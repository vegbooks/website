import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4908",
  "slug": "the-ocean-story",
  "url": "/reviews/the-ocean-story/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/05/04/the-ocean-story/",
  "title": "The Ocean Story",
  "publishedAt": "2011-05-04",
  "publishedLabel": "May 4th, 2011",
  "excerpt": "How do you write a story about one of the greatest, biggest, and most delicate stories of all time: the ocean? Husband and wife, author John Seven and illustrator Jana Christy, make a mighty effort to relate a…",
  "image": {
    "src": "/media/2011/05/9781404867857.jpg",
    "alt": "The Ocean Story",
    "width": 210,
    "height": 178
  },
  "categories": [
    {
      "name": "Books",
      "slug": "books",
      "url": "/books/"
    }
  ],
  "tags": [
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Fish",
      "slug": "fish",
      "url": "/topics/fish/"
    },
    {
      "name": "Jana Christy",
      "slug": "jana-christy",
      "url": "/topics/jana-christy/"
    },
    {
      "name": "John Seven",
      "slug": "john-seven",
      "url": "/topics/john-seven/"
    },
    {
      "name": "Marine Animals",
      "slug": "marine-animals",
      "url": "/topics/marine-animals/"
    },
    {
      "name": "Ocean",
      "slug": "ocean",
      "url": "/topics/ocean/"
    },
    {
      "name": "Oil Spill",
      "slug": "oil-spill",
      "url": "/topics/oil-spill/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    }
  ],
  "reviewer": {
    "name": "Carolyn M. Mullin",
    "slug": "carolyn-m-mullin",
    "url": "/contributors/carolyn-m-mullin/",
    "aliases": [
      "CAROLYN M. MULLIN"
    ]
  },
  "seo": {
    "description": "How do you write a story about one of the greatest, biggest, and most delicate stories of all time: the ocean? Husband and wife, author John Seven and illustrator Jana Christy, make a mighty effort to relate a…",
    "image": "https://vegbooks.org/media/2011/05/9781404867857.jpg"
  },
  "previous": {
    "title": "The Story of Mrs. Lovewright and Purrless Her Cat",
    "url": "/reviews/the-story-of-mrs-lovewright-and-purrless-her-cat/"
  },
  "next": {
    "title": "Open Season",
    "url": "/reviews/open-season/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/05/9781404867857.jpg"}><img src={"/media/2011/05/9781404867857.jpg"} alt={"The Ocean Story"} width={210} height={178} /></a>
      </figure>
      <p>{"How do you write a story about one of the greatest, biggest, and most delicate stories of all time: the ocean? Husband and wife, author John Seven and illustrator Jana Christy, make a mighty effort to relate a reader’s involvement in "}<a href={"http://www.capstonepub.com/product/9781404867857"} target="_blank" rel="noopener noreferrer"><em>{"The Ocean Story"}</em></a>{" by briefly and poetically (“Jellyfish look like dreams floating into space…”), mentioning the numerous ways one interacts with saltwater: boating, sea shell-collecting, the water cycle, and the beautiful, dangerous and strange sea creatures that fascinate us."}</p>
      <p>{"Seven spends more time explaining some parts of this story (oil spills) than others. In a page with a picture of fish all caught in a net, the accompanying words simply say, “Sometimes the ocean story is filled with wind and waves and fury,” leaving much to the reader to infer and interpret. Another spread shows fossilized remains of a prehistoric creature (my interpretation) with no explanation in the text. But this just leaves more to explore and discuss with each read."}</p>
      <p>{"Expressively written and superbly illustrated, this is a timely read for the 1-year anniversary of the Gulf Oil Spill."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
