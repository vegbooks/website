import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10943",
  "slug": "the-truth-about-hawks",
  "url": "/reviews/the-truth-about-hawks/",
  "legacyUrl": "https://vegbooks.org/index.php/2020/01/22/the-truth-about-hawks/",
  "title": "The Truth About Hawks",
  "publishedAt": "2020-01-22",
  "publishedLabel": "January 22nd, 2020",
  "excerpt": "THE TRUTH ABOUT HAWKS by Maxwell Eaton III starts with a surprise, and it doesn’t pull any punches when it comes to how hawks get their meals, as the rabbit who begins the book learns. But the surprise to most…",
  "image": {
    "src": "/media/2020/01/the-truth-about-hawks.jpg",
    "alt": "The Truth About Hawks",
    "width": 243,
    "height": 300
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
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "elementary readers",
      "slug": "elementary-readers",
      "url": "/topics/elementary-readers/"
    },
    {
      "name": "Maxwell Eaton III",
      "slug": "maxwell-eaton-iii",
      "url": "/topics/maxwell-eaton-iii/"
    },
    {
      "name": "The Truth About Hawks",
      "slug": "the-truth-about-hawks",
      "url": "/topics/the-truth-about-hawks/"
    }
  ],
  "reviewer": {
    "name": "Kristin Wald",
    "slug": "kristin-wald",
    "url": "/contributors/kristin-wald/",
    "aliases": [
      "KRISITN WALD",
      "Kristin Wald",
      "KRISTIN WALD"
    ]
  },
  "seo": {
    "description": "THE TRUTH ABOUT HAWKS by Maxwell Eaton III starts with a surprise, and it doesn’t pull any punches when it comes to how hawks get their meals, as the rabbit who begins the book learns. But the surprise to most…",
    "image": "https://vegbooks.org/media/2020/01/the-truth-about-hawks.jpg"
  },
  "previous": {
    "title": "Listen",
    "url": "/reviews/listen/"
  },
  "next": {
    "title": "White Bird: A Wonder Story",
    "url": "/reviews/white-bird-a-wonder-story/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <a href={"/media/2020/01/the-truth-about-hawks.jpg"}><img src={"/media/2020/01/the-truth-about-hawks.jpg"} alt={"The Truth About Hawks"} width={243} height={300} /></a>
      </figure>
      <p><a href={"https://www.indiebound.org/book/9781250198457"} target="_blank" rel="noopener noreferrer">{"THE TRUTH ABOUT HAWKS"}</a>{" by Maxwell Eaton III starts with a surprise, and it doesn’t pull any punches when it comes to how hawks get their meals, as the rabbit who begins the book learns. But the surprise to most readers will be that eagles are actually hawks. Joining them are kites, harriers, and over 200 other types of birds."}</p>
      <p>{"Readers are presented with features shared by hawks, hunting patterns, and meal preferences. Did you know that golden eagles can knock sheep off cliffs in order to kill and eat them? Or that apple snails are the favorite of some kites? Gourmands of the sky!"}</p>
      <p>{"Mating, nest-building, and chick-rearing are all included, as are migration habits, and the effects of loss of habitat and human-created pollution and use of pesticides. Throughout the book, Eaton infuses his usual humor and dry wit. The illustrations are clear and fun in a cartoon-style that doesn’t gloss over the animal kingdom realities, but keeps topics child-friendly."}</p>
      <p>{"As with most animal-centered books, there is a list of books for further research for those children who fall in love with all things hawks. "}<a href={"https://www.indiebound.org/book/9781250198457"} target="_blank" rel="noopener noreferrer">{"THE TRUTH ABOUT HAWKS"}</a>{" is a fun and informative book for ages 4-8."}</p>
    </div>
  );
}
