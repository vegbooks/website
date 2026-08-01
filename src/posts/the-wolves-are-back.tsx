import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1223",
  "slug": "the-wolves-are-back",
  "url": "/reviews/the-wolves-are-back/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/03/25/the-wolves-are-back/",
  "title": "The Wolves Are Back",
  "publishedAt": "2010-03-25",
  "publishedLabel": "March 25th, 2010",
  "excerpt": "Author Jean Craighead George and artist Wendell Minor have teamed up to bring us the beautifully illustrated tale in The Wolves Are Back. Using the story of a male wolf and his pup to trace the re-introduction of…",
  "categories": [
    {
      "name": "Books",
      "slug": "books",
      "url": "/books/"
    }
  ],
  "tags": [
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Jean Craighead George",
      "slug": "jean-craighead-george",
      "url": "/topics/jean-craighead-george/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Wendell Minor",
      "slug": "wendell-minor",
      "url": "/topics/wendell-minor/"
    },
    {
      "name": "Wolves",
      "slug": "wolves",
      "url": "/topics/wolves/"
    },
    {
      "name": "Yellowstone",
      "slug": "yellowstone",
      "url": "/topics/yellowstone/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Gannett",
    "slug": "jennifer-gannett",
    "url": "/contributors/jennifer-gannett/",
    "aliases": [
      "JENNIFER G",
      "JENNIFER GANNETT"
    ]
  },
  "seo": {
    "description": "Author Jean Craighead George and artist Wendell Minor have teamed up to bring us the beautifully illustrated tale in The Wolves Are Back. Using the story of a male wolf and his pup to trace the re-introduction of…"
  },
  "previous": {
    "title": "The Easter Egg",
    "url": "/reviews/easter-egg/"
  },
  "next": {
    "title": "Bears Barge In",
    "url": "/reviews/bears-barge-in/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"Author "}<a href={"http://www.jeancraigheadgeorge.com/bio.html"} target="_blank" rel="noopener noreferrer">{"Jean Craighead George"}</a>{" and artist "}<a href={"http://www.minorart.com/index.html"} target="_blank" rel="noopener noreferrer">{"Wendell Minor"}</a>{" have teamed up to bring us the beautifully illustrated tale in "}<em><a href={"http://www.powells.com/biblio/62-9780525479475-0"} target="_blank" rel="noopener noreferrer">{"The Wolves Are Back"}</a></em>{". Using the story of a male wolf and his pup to trace the re-introduction of "}<a href={"http://www.nps.gov/yell/naturescience/wolves.htm"} target="_blank" rel="noopener noreferrer">{"wolves in Yellowstone"}</a>{", they also have provided a chance to explore the backstory of their eradication and discuss the role of this apex carnivore in balancing the ecosystem."}</p>
      <p>{"This book has much to recommend it: it is filled with interesting facts about Yellowstone and the creatures that live there, told in a child-friendly but unsentimental way. Parents should know that there is straightforward mention of carnivores’ elk and bison kills as well as a brief discussion of the wolf hunts that killed off the animals. I love the way the author has woven in the return of other plants and animals to the area to highlight the interrelated nature of the ecosystem. A wonderful read for ages 4 and up."}</p>
    </div>
  );
}
