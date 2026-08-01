import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6130",
  "slug": "you-will-be-my-friend",
  "url": "/reviews/you-will-be-my-friend/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/10/02/you-will-be-my-friend/",
  "title": "You Will Be My Friend",
  "publishedAt": "2011-10-02",
  "publishedLabel": "October 2nd, 2011",
  "excerpt": "What a great new book! In You Will Be My Friend,young Lucy the bear sets out in the world to find a friend. She is so excited she can barely contain herself. However, her excitement soon turns to disappointment…",
  "image": {
    "src": "/media/2011/10/9780316070300.jpg",
    "alt": "You Will Be My Friend",
    "width": 210,
    "height": 267
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
      "name": "Bears",
      "slug": "bears",
      "url": "/topics/bears/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Flamingos",
      "slug": "flamingos",
      "url": "/topics/flamingos/"
    },
    {
      "name": "Friendship",
      "slug": "friendship",
      "url": "/topics/friendship/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Interspecies Friendship",
      "slug": "interspecies-friendship",
      "url": "/topics/interspecies-friendship/"
    },
    {
      "name": "Peter Brown",
      "slug": "peter-brown",
      "url": "/topics/peter-brown/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Robyn Moore",
      "slug": "robyn-moore",
      "url": "/topics/robyn-moore/"
    }
  ],
  "reviewer": {
    "name": "Robyn Moore",
    "slug": "robyn-moore",
    "url": "/contributors/robyn-moore/",
    "aliases": [
      "ROBYN MOORE"
    ]
  },
  "seo": {
    "description": "What a great new book! In You Will Be My Friend,young Lucy the bear sets out in the world to find a friend. She is so excited she can barely contain herself. However, her excitement soon turns to disappointment…",
    "image": "https://vegbooks.org/media/2011/10/9780316070300.jpg"
  },
  "previous": {
    "title": "Uno’s Garden",
    "url": "/reviews/unos-garden/"
  },
  "next": {
    "title": "Uncle Andy’s Cats",
    "url": "/reviews/uncle-andys-cats/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/10/9780316070300.jpg"}><img src={"/media/2011/10/9780316070300.jpg"} alt={"You Will Be My Friend"} width={210} height={267} /></a>
      </figure>
      <p>{"What a great new book! In "}<em><a href={"http://www.nytimes.com/2011/08/21/books/review/childrens-books-about-being-the-new-kid-by-daniel-handler.html"} target="_blank" rel="noopener noreferrer">{"You Will Be My Friend"}</a>{","}</em>{"young Lucy the bear sets out in the world to find a friend. She is so excited she can barely contain herself. However, her excitement soon turns to disappointment quickly as animal after animal rejects her as a friend. For example, the frogs want no part of her after she dives into the frog pond and drains all of the water because she is too big. She also tries to naively scrub the stink out of a skunk, and she eats the honey that belongs to the very bees that she’s trying to befriend. When all her attempts at friendship fail, her feeling of rejection turns to anger and she assertively states to an egg (that hasn’t hatched yet), “You will be my friend!” When that doesn’t work either, Lucy reminds herself to take a deep breath and most importantly, to just be herself and she will find a friend. She feels hopeless and is just about to give up when a flamingo approaches her with the hope of becoming friends. Together they do cartwheels, have picnics, dance, and do all of the things that friends do."}</p>
      <p>{"The message of the book is simple and timeless: Be yourself and you will find the right kind of friend. Yes, you can pretend to hop like a kangaroo, or swim underwater like a fish (as Lucy does), but in the end that is not who you are. Using a bit of humor, this book successfully brings that message to light. The book also has great physical appeal; the illustrations stand out on the matte-finish pages, and the bubble captions offer a unique, fun approach to the dialogue between Lucy and the other animals."}</p>
      <p>{"All in all, this was a great book for kids on many levels. I would especially recommend it as a tool for parents who have kids who are having trouble making friends, or kids who are attending a new school."}</p>
      <p>{"Ages 3-9."}</p>
    </div>
  );
}
