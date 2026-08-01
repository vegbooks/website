import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4662",
  "slug": "apples-cherries-red-raspberries",
  "url": "/reviews/apples-cherries-red-raspberries/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/04/08/apples-cherries-red-raspberries/",
  "title": "Apples, Cherries, Red Raspberries",
  "publishedAt": "2011-04-08",
  "publishedLabel": "April 8th, 2011",
  "excerpt": "In our house, we’ve really enjoyed a math-themed book by the author of Apples, Cherries, Red Raspberries: What is in the Fruit Group? and since it has been such a beloved read, so I was excited to see what this book…",
  "image": {
    "src": "/media/2011/04/apples-cherries-c.jpg",
    "alt": "Apples, Cherries, Red Raspberries",
    "width": 209,
    "height": 257
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
      "name": "Brian P. Cleary",
      "slug": "brian-p-cleary",
      "url": "/topics/brian-p-cleary/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Fishing",
      "slug": "fishing",
      "url": "/topics/fishing/"
    },
    {
      "name": "Fruit",
      "slug": "fruit",
      "url": "/topics/fruit/"
    },
    {
      "name": "Fruits",
      "slug": "fruits",
      "url": "/topics/fruits/"
    },
    {
      "name": "Healthy Eating",
      "slug": "healthy-eating",
      "url": "/topics/healthy-eating/"
    },
    {
      "name": "Healthy Living",
      "slug": "healthy-living",
      "url": "/topics/healthy-living/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
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
    "description": "In our house, we’ve really enjoyed a math-themed book by the author of Apples, Cherries, Red Raspberries: What is in the Fruit Group? and since it has been such a beloved read, so I was excited to see what this book…",
    "image": "https://vegbooks.org/media/2011/04/apples-cherries-c.jpg"
  },
  "previous": {
    "title": "No Place for a Pig",
    "url": "/reviews/no-place-for-a-pig/"
  },
  "next": {
    "title": "The Story of the Easter Robin",
    "url": "/reviews/the-story-of-the-easter-robin/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/04/apples-cherries-c.jpg"}><img src={"/media/2011/04/apples-cherries-c.jpg"} alt={"Apples, Cherries, Red Raspberries"} width={209} height={257} /></a>
      </figure>
      <p>{"In our house, we’ve really enjoyed a math-themed book by "}<a href={"http://www.brianpcleary.com/"}>{"the author"}</a>{" of "}<a href={"http://www.powells.com/biblio/74-9781580135894-0"} target="_blank" rel="noopener noreferrer"><em>{"Apples, Cherries, Red Raspberries: What is in the Fruit Group?"}</em></a>{" and since it has been such a beloved read, so I was excited to see what this book all about fruit would be like. In general, it is an enjoyable read. The book discusses all different types of fruit and their health benefits, doing so in a pleasing rhyme. (This may be the first time you realize that honeydew rhymes with the phrase “number two.”) The illustrations are lively and serve to reinforce the silly elements of the book."}</p>
      <p>{"There was a major disappointment in this book though, and that was that this book extolling the virtues of fruit managed to incorporate an insensitive portion discussing hooking, frying and boiling fish. Sensitive children and adults will want to give this book a pass."}</p>
      <p>{"If you are willing to abide a page about fishing, the fruity elements of this book are fun and serve to reinforce the idea that fruit is healthy and yummy. It is unfortunate that even a book about fruit depicts the veg-unfriendly idea of hooking and cooking fish."}</p>
      <p>{"Ages 5 and up."}</p>
    </div>
  );
}
