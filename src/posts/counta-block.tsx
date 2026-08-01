import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9865",
  "slug": "counta-block",
  "url": "/reviews/counta-block/",
  "legacyUrl": "https://vegbooks.org/index.php/2014/09/29/counta-block/",
  "title": "Counta Block",
  "publishedAt": "2014-09-29",
  "publishedLabel": "September 29th, 2014",
  "excerpt": "Counting books are a dime a dozen, with good reason. When kids are learning their numbers (usually around age 3 or 4), repetition helps a lot, and books are a fun way to add a bit of story and some visual appeal.…",
  "image": {
    "src": "/media/2014/09/countablock.jpg",
    "alt": "Countablock",
    "width": 210,
    "height": 204
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
      "name": "Board Book",
      "slug": "board-book",
      "url": "/topics/board-book/"
    },
    {
      "name": "Christopher Franceschelli",
      "slug": "christopher-franceschelli",
      "url": "/topics/christopher-franceschelli/"
    },
    {
      "name": "Eggs",
      "slug": "eggs",
      "url": "/topics/eggs/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Peskimo",
      "slug": "peskimo",
      "url": "/topics/peskimo/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    }
  ],
  "reviewer": {
    "name": "Jessica Almy",
    "slug": "jessica-almy",
    "url": "/contributors/jessica-almy/",
    "aliases": [
      "Jessica",
      "JESSICA ALMY"
    ]
  },
  "seo": {
    "description": "Counting books are a dime a dozen, with good reason. When kids are learning their numbers (usually around age 3 or 4), repetition helps a lot, and books are a fun way to add a bit of story and some visual appeal.…",
    "image": "https://vegbooks.org/media/2014/09/countablock.jpg"
  },
  "previous": {
    "title": "What is the Dog Doing: Singular Present Tense Verbs",
    "url": "/reviews/what-is-the-dog-doing/"
  },
  "next": {
    "title": "Mini Myths: Play Nice, Hercules & Be Patient, Pandora",
    "url": "/reviews/mini-myths-play-nice-hercules-be-patient-pandora/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2014/09/countablock.jpg"} alt={"Countablock"} width={210} height={204} />
      </figure>
      <p>{"Counting books are a dime a dozen, with good reason. When kids are learning their numbers (usually around age 3 or 4), repetition helps a lot, and books are a fun way to add a bit of story and some visual appeal. Even before kids are ready to count themselves, counting books help young children understand math concepts. Interestingly, research shows that "}<a href={"http://www.dailymail.co.uk/sciencetech/article-1357480/How-babies-count-just-18-months-old.html"} target="_blank" rel="noopener noreferrer">{"toddlers as young as 18 months have some sense of numeracy"}</a>{"."}</p>
      <p>{"One recent addition to this rich genre is Christopher Franceschelli and Peskimo’s "}<em>{"Counta Block"}</em>{". The first thing that struck me when I received a review copy from "}<a href={"http://www.abramsbooks.com/"} target="_blank" rel="noopener noreferrer">{"the publisher"}</a>{" is the thickness of the book. All board books are thick, but this one is extra thick. The reason: it goes well beyond 10, teaching numbers all the way to 100."}</p>
      <p>{"The illustrations are super-cute, and I found myself engaged by this book, even though my number-learning days (and those of my kiddo) are long in the past."}</p>
      <figure class="content-image content-image--left">
        <img src={"/media/2014/09/40-eggs.jpg"} alt={"40Eggs"} width={280} height={233} />
      </figure>
      <p>{"Since much of the book is concerned with growing vegetables and preparing food, I did pause when I got to the number 40. “Forty eggs become…” one page prompts, and I held my breath as a I flipped to the next, fearing an omelet. The response? Enthralling. “Forty eggs become … thirty-nine chicks and one dinosaur!”"}</p>
      <p>{"This vegan-friendly number book would make a welcome addition to any bookshelf. Count me among its fans!"}</p>
      <p>{"Ages 1 to 4."}</p>
    </div>
  );
}
