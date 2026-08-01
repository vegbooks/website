import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2944",
  "slug": "big-bob-and-the-thanksgiving-potatoes",
  "url": "/reviews/big-bob-and-the-thanksgiving-potatoes/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/08/22/big-bob-and-the-thanksgiving-potatoes/",
  "title": "Big Bob and the Thanksgiving Potatoes",
  "publishedAt": "2010-08-22",
  "publishedLabel": "August 22nd, 2010",
  "excerpt": "I decided to check out this older early-reader book because it was tagged as “vegetarian” on one of the major online book retailers (and other sites have similar synopses). Unfortunately, while it does deal with the…",
  "image": {
    "src": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "alt": "Big Bob and the Thanksgiving Potatoes",
    "width": 210,
    "height": 315
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
      "name": "Books to Avoid",
      "slug": "books-to-avoid",
      "url": "/topics/books-to-avoid/"
    },
    {
      "name": "Daniel Pinkwater",
      "slug": "daniel-pinkwater",
      "url": "/topics/daniel-pinkwater/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Thanksgiving",
      "slug": "thanksgiving",
      "url": "/topics/thanksgiving/"
    },
    {
      "name": "Vegetarian",
      "slug": "vegetarian",
      "url": "/topics/vegetarian/"
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
    "description": "I decided to check out this older early-reader book because it was tagged as “vegetarian” on one of the major online book retailers (and other sites have similar synopses). Unfortunately, while it does deal with the…",
    "image": "https://vegbooks.org/media/2010/08/i-stock-000000630071-x-small.jpg"
  },
  "previous": {
    "title": "Bear’s New Friend",
    "url": "/reviews/bears-new-friend/"
  },
  "next": {
    "title": "Ladybug Girl at the Beach",
    "url": "/reviews/ladybug-girl-at-the-beach/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/i-stock-000000630071-x-small.jpg"}><img src={"/media/2010/08/i-stock-000000630071-x-small.jpg"} alt={"Big Bob and the Thanksgiving Potatoes"} width={210} height={315} /></a>
      </figure>
      <p>{"I decided to check out this older early-reader book because it was tagged as “vegetarian” on one of the major online book retailers (and "}<a href={"http://www.commonsensemedia.org/book-reviews/Big-Bob-Thanksgiving-Potatoes.html"} target="_blank" rel="noopener noreferrer">{"other sites"}</a>{" have similar synopses). Unfortunately, while it does deal with the issue of vegetarianism, author Daniel Pinkwater’s treatment of the subject is so superficial and silly that I would not recommend it for vegetarian families."}</p>
      <p>{"The basic premise is this: Big Bob is ostracized by his class due to his large stature. One day when the class decides to make turkeys in honor of Thanksgiving, Bob objects, saying he is a vegetarian and would rather make potatoes. The teacher consents to his choice, and Bob’s friend Gloria also says she would like to make a Thanksgiving potato."}</p>
      <p>{"The problem is that Bob is not a vegetarian, and he uses the fact that he hoodwinked the teacher to garner the respect of the other students. So rather than be the tale of a boy who was willing to stand up for himself and his beliefs, the book quickly deteriorates into much less appealing pandering to the tastes of the other students for the sake of popularity."}</p>
      <p>{"This book is geared to ages 4-8 but is not recommended. Better choices for this age group include "}<em><a href={"/reviews/perfect-the-pig/"} target="_blank" rel="noopener noreferrer">{"Perfect the Pig"}</a>{","}</em><em><a href={"/reviews/granny-gomez-and-jigsaw/"}>{"Granny Gomez and Jigsaw"}</a>{", and "}<a href={"/reviews/thats-why-we-dont-eat-animals-guest-post-by-carolyn-m-mullin/"}>{"That’s Why We Don’t Eat Animals"}</a></em>{"."}</p>
    </div>
  );
}
