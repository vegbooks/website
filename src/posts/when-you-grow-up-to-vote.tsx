import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10685",
  "slug": "when-you-grow-up-to-vote",
  "url": "/reviews/when-you-grow-up-to-vote/",
  "legacyUrl": "https://vegbooks.org/index.php/2018/11/30/when-you-grow-up-to-vote/",
  "title": "When You Grow Up to Vote",
  "publishedAt": "2018-11-30",
  "publishedLabel": "November 30th, 2018",
  "excerpt": "Eleanor Roosevelt first published WHEN YOU GROW UP TO VOTE in 1932 to help children learn about leaders and public employees, local first responders and elected leaders from local to national, and everything in…",
  "image": {
    "src": "/media/2018/11/when-you-grow-up-to-vote.jpg",
    "alt": "When You Grow Up to Vote",
    "width": 209,
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
      "name": "citizenship",
      "slug": "citizenship",
      "url": "/topics/citizenship/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eleanor Roosevelt",
      "slug": "eleanor-roosevelt",
      "url": "/topics/eleanor-roosevelt/"
    },
    {
      "name": "Grace Lin",
      "slug": "grace-lin",
      "url": "/topics/grace-lin/"
    },
    {
      "name": "Michelle Merkel",
      "slug": "michelle-merkel",
      "url": "/topics/michelle-merkel/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "When You Grow Up to Vote",
      "slug": "when-you-grow-up-to-vote",
      "url": "/topics/when-you-grow-up-to-vote/"
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
    "description": "Eleanor Roosevelt first published WHEN YOU GROW UP TO VOTE in 1932 to help children learn about leaders and public employees, local first responders and elected leaders from local to national, and everything in…",
    "image": "https://vegbooks.org/media/2018/11/when-you-grow-up-to-vote.jpg"
  },
  "previous": {
    "title": "Little Otter Learns to Swim",
    "url": "/reviews/little-otter-learns-to-swim/"
  },
  "next": {
    "title": "The Truth About Elephants",
    "url": "/reviews/the-truth-about-elephants/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <img src={"/media/2018/11/when-you-grow-up-to-vote.jpg"} alt={"When You Grow Up to Vote"} width={209} height={300} />
      </figure>
      <p>{"Eleanor Roosevelt first published "}<a href={"https://us.macmillan.com/books/9781626728790"} target="_blank" rel="noopener noreferrer">{"WHEN YOU GROW UP TO VOTE"}</a>{" in 1932 to help children learn about leaders and public employees, local first responders and elected leaders from local to national, and everything in between. This knowledge, she hoped, would help future voters make responsible and informed decisions when casting a ballot. Frankly, current voters could probably benefit from reading through the book as well."}</p>
      <p>{"Updated by Michelle Markel, who is Eleanor Roosevelt’s granddaughter, and illustrated by Grace Lin with images that reflect the diversity and growing equality of the United States of America, this short and informative book will help readers feel empowered to become an active part of government instead of exasperated and confused by it."}</p>
      <p>{"Starting with the important and micro-local work of fire fighters, police officers, and garbage collectors, the book moves on to town and state governments, and how a bill is made into law at the state level. The deepest levels of detail are rolled out for federal government. Not only are the three branches of government mentioned, but each of the sixteen cabinet members (fifteen secretaries and the vice president) and how taxes fuel the entire system."}</p>
      <p>{"Eleanor Roosevelt’s sincere desire to entice young people comes through in a conversational tone that is at once simple and straightforward while managing to be entertaining as well. Grace Lin’s illustrations are simple enough for young people to understand, but the diverse and specific details, especially at the federal level, are impressive and instructive. This is a lovely, useful, even fun book that teaches the basics of government and the tenets of citizenship."}</p>
      <p>{"Highly recommended for ages 6-12."}</p>
    </div>
  );
}
