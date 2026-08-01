import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9174",
  "slug": "our-school-garden",
  "url": "/reviews/our-school-garden/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/11/05/our-school-garden/",
  "title": "Our School Garden",
  "publishedAt": "2013-11-05",
  "publishedLabel": "November 5th, 2013",
  "excerpt": "Our School Garden takes kids on a journey through a school that has a garden out back. They learn all about what’s planted, why school gardens are a good idea, and the types of things they may find out in that…",
  "image": {
    "src": "/media/2013/11/cover-our-school-garden.jpg",
    "alt": "Cover-Our School Garden!",
    "width": 210,
    "height": 263
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
      "name": "Christy Hale",
      "slug": "christy-hale",
      "url": "/topics/christy-hale/"
    },
    {
      "name": "Composting",
      "slug": "composting",
      "url": "/topics/composting/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Garden",
      "slug": "garden",
      "url": "/topics/garden/"
    },
    {
      "name": "Gardening",
      "slug": "gardening",
      "url": "/topics/gardening/"
    },
    {
      "name": "Healthy Living",
      "slug": "healthy-living",
      "url": "/topics/healthy-living/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Rick Swann",
      "slug": "rick-swann",
      "url": "/topics/rick-swann/"
    },
    {
      "name": "Vegetable Books",
      "slug": "vegetable-books",
      "url": "/topics/vegetable-books/"
    }
  ],
  "reviewer": {
    "name": "Jacqueline Bodnar",
    "slug": "jacqueline-bodnar",
    "url": "/contributors/jacqueline-bodnar/",
    "aliases": [
      "JACQUELINE BODNAR"
    ]
  },
  "seo": {
    "description": "Our School Garden takes kids on a journey through a school that has a garden out back. They learn all about what’s planted, why school gardens are a good idea, and the types of things they may find out in that…",
    "image": "https://vegbooks.org/media/2013/11/cover-our-school-garden.jpg"
  },
  "previous": {
    "title": "The Prisoner of Carrot Castle",
    "url": "/reviews/the-prisoner-of-carrot-castle/"
  },
  "next": {
    "title": "Free Birds (2013)",
    "url": "/reviews/free-birds/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/11/cover-our-school-garden.jpg"}><img src={"/media/2013/11/cover-our-school-garden.jpg"} alt={"Cover-Our School Garden!"} width={210} height={263} /></a>
      </figure>
      <p><em>{"Our School Garden"}</em>{" takes kids on a journey through a school that has a garden out back. They learn all about what’s planted, why school gardens are a good idea, and the types of things they may find out in that garden. Children will learn a lot from this well-written book."}</p>
      <p>{"Some of the things covered in this book include root vegetables, the importance of families eating together, harvest day, pill bugs, victory gardens, compost, the three sisters (corn, squash, and beans), and so much more. This book is filled with great information for young minds. We really enjoyed reading it and loved the variety that it covered, along with it being nicely full-color illustrated."}</p>
      <p>{"Vegetarian and vegan parents will not find anything of concern in this book. In fact, it would make a great addition to any book collection. The book even includes a vegan recipe for “School Garden Stone Soup.” This book should be given to every teacher in America in hopes that more school gardens may be started!"}</p>
      <p>{"This book is geared to elementary school students."}</p>
      <p><em>{"The "}<a href={"http://www.readerstoeaters.com/books/will-allen-and-the-growing-table/"} target="_blank" rel="noopener noreferrer">{"publisher"}</a>{" provided a review copy of this book."}</em></p>
    </div>
  );
}
