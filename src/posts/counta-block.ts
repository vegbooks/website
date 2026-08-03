import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2014/09/countablock.jpg",
    "alt": "Countablock",
    "width": 210,
    "height": 204,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Counting books are a dime a dozen, with good reason. When kids are learning their numbers (usually around age 3 or 4), repetition helps a lot, and books are a fun way to add a bit of story and some visual appeal. Even before kids are ready to count themselves, counting books help young children understand math concepts. Interestingly, research shows that ",
      {
        "type": "link",
        "href": "http://www.dailymail.co.uk/sciencetech/article-1357480/How-babies-count-just-18-months-old.html",
        "external": true,
        "children": [
          "toddlers as young as 18 months have some sense of numeracy"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "One recent addition to this rich genre is Christopher Franceschelli and Peskimo’s ",
      {
        "type": "emphasis",
        "children": [
          "Counta Block"
        ]
      },
      ". The first thing that struck me when I received a review copy from ",
      {
        "type": "link",
        "href": "http://www.abramsbooks.com/",
        "external": true,
        "children": [
          "the publisher"
        ]
      },
      " is the thickness of the book. All board books are thick, but this one is extra thick. The reason: it goes well beyond 10, teaching numbers all the way to 100."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The illustrations are super-cute, and I found myself engaged by this book, even though my number-learning days (and those of my kiddo) are long in the past."
    ]
  },
  {
    "type": "image",
    "src": "/media/2014/09/40-eggs.jpg",
    "alt": "40Eggs",
    "width": 280,
    "height": 233,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "Since much of the book is concerned with growing vegetables and preparing food, I did pause when I got to the number 40. “Forty eggs become…” one page prompts, and I held my breath as a I flipped to the next, fearing an omelet. The response? Enthralling. “Forty eggs become … thirty-nine chicks and one dinosaur!”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This vegan-friendly number book would make a welcome addition to any bookshelf. Count me among its fans!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 1 to 4."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
