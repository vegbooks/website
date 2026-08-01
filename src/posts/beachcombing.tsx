import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2539",
  "slug": "beachcombing",
  "url": "/reviews/beachcombing/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/08/beachcombing/",
  "title": "Beachcombing",
  "publishedAt": "2010-07-08",
  "publishedLabel": "July 8th, 2010",
  "excerpt": "Nothing says summer like spending time at the beach. Lucky Jim Arnosky and his wife, Deanna, had the difficult task of visiting 26 different beaches along the Atlantic and Gulf coasts – for “research” purposes, of…",
  "image": {
    "src": "/media/2010/07/beachcombing.jpg",
    "alt": "Beachcombing",
    "width": 215,
    "height": 286
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
      "name": "Beach",
      "slug": "beach",
      "url": "/topics/beach/"
    },
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
      "name": "Jim Arnosky",
      "slug": "jim-arnosky",
      "url": "/topics/jim-arnosky/"
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
    "description": "Nothing says summer like spending time at the beach. Lucky Jim Arnosky and his wife, Deanna, had the difficult task of visiting 26 different beaches along the Atlantic and Gulf coasts – for “research” purposes, of…",
    "image": "https://vegbooks.org/media/2010/07/beachcombing.jpg"
  },
  "previous": {
    "title": "Deep in the Jungle",
    "url": "/reviews/deep-in-the-jungle/"
  },
  "next": {
    "title": "Eating Animals and Reading About Them",
    "url": "/reviews/eating-animals-and-reading-about-them/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/07/beachcombing.jpg"}><img src={"/media/2010/07/beachcombing.jpg"} alt={"Beachcombing"} width={215} height={286} /></a>
      </figure>
      <p>{"Nothing says summer like spending time at the beach. Lucky Jim Arnosky and his wife, Deanna, had the difficult task of visiting 26 different beaches along the Atlantic and Gulf coasts – for “research” purposes, of course- in order to write this wonderful morsel on a very vegan-friendly seaside activity: beachcombing! Its entertainment in its simplest form – “all you need is sunblock (with SPF of 30 or higher), a broad-rimmed hat to shade your head, sunglasses to protect your eyes, and a bucket to carry shells and other treasures you find.” Chronicled in the book are handy identification guides on shells, crab molts, washed up corals, shark teeth, animals found on the shoreline (man-of-wars, gulls, terns) and even special finds like eggs cases for "}<a href={"http://en.wikipedia.org/wiki/Whelk"} target="_blank" rel="noopener noreferrer">{"whelks"}</a>{" and "}<a href={"http://en.wikipedia.org/wiki/Skate"} target="_blank" rel="noopener noreferrer">{"skates"}</a>{". (I didn’t know what these last two were either!)"}</p>
      <p>{"But what I think I love most about this book is that it shows great care of the natural world. For example, Mr. Arnosky suggests to his readers that they should “collect only empty shells. If you find any shells that are still inhabited, return them to the water.”"}</p>
      <p>{"Bring a copy with you to the beach and show your kids how fascinating even the smallest of things can be!"}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
