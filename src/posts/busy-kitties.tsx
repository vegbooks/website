import type { PostMetadata } from '../content/types';

export const article = {
  "id": "97",
  "slug": "busy-kitties",
  "url": "/reviews/busy-kitties/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/11/06/busy-kitties/",
  "title": "Busy Kitties",
  "publishedAt": "2009-11-06",
  "publishedLabel": "November 6th, 2009",
  "excerpt": "This rhyming board book by John Schindel and Sean Franzen is a great primer on cat behavior for little ones. The kitties stroll, roll, hiss, kiss, think, and drink. The photos are delightful, showing a variety of…",
  "image": {
    "src": "/media/2009/11/busy-kitties1.jpg",
    "alt": "Busy Kitties",
    "width": 236,
    "height": 168
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
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Board Book",
      "slug": "board-book",
      "url": "/topics/board-book/"
    },
    {
      "name": "Cats",
      "slug": "cats",
      "url": "/topics/cats/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "John Schindel",
      "slug": "john-schindel",
      "url": "/topics/john-schindel/"
    },
    {
      "name": "Photography",
      "slug": "photography",
      "url": "/topics/photography/"
    },
    {
      "name": "Sean Franzen",
      "slug": "sean-franzen",
      "url": "/topics/sean-franzen/"
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
    "description": "This rhyming board book by John Schindel and Sean Franzen is a great primer on cat behavior for little ones. The kitties stroll, roll, hiss, kiss, think, and drink. The photos are delightful, showing a variety of…",
    "image": "https://vegbooks.org/media/2009/11/busy-kitties1.jpg"
  },
  "previous": {
    "title": "Horton Hears a Who!",
    "url": "/reviews/horton-hears-a-who-the-book/"
  },
  "next": {
    "title": "‘Twas the Night Before Thanksgiving",
    "url": "/reviews/twas-the-night-before-thanksgiving/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2009/11/busy-kitties1.jpg"} alt={"Busy Kitties"} width={236} height={168} />
      </figure>
      <p>{"This rhyming board book by "}<a href={"http://www.randomhouse.com/author/results.pperl?authorid=105156"} target="_blank" rel="noopener noreferrer">{"John Schindel"}</a>{" and Sean Franzen is a great primer on cat behavior for little ones. The kitties stroll, roll, hiss, kiss, think, and drink."}</p>
      <p>{"The photos are delightful, showing a variety of cats (none purebred, as far as I can tell) engaged in all sorts of things that cats do. When she was smaller, kiddo enjoyed discussing the different colors in the book, as well as comparing the cats — some have long hair, some have short, and one appears to only have one eye."}</p>
      <p>{"Ages 0-3. For other reviews, click "}<a href={"http://www.goodreads.com/book/show/760562.Busy_Kitties"} target="_blank" rel="noopener noreferrer">{"here"}</a>{"."}</p>
    </div>
  );
}
