import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/10/9780316070300.jpg",
    "alt": "You Will Be My Friend",
    "href": "/media/2011/10/9780316070300.jpg",
    "width": 210,
    "height": 267,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "What a great new book! In ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.nytimes.com/2011/08/21/books/review/childrens-books-about-being-the-new-kid-by-daniel-handler.html",
            "external": true,
            "children": [
              "You Will Be My Friend"
            ]
          },
          ","
        ]
      },
      "young Lucy the bear sets out in the world to find a friend. She is so excited she can barely contain herself. However, her excitement soon turns to disappointment quickly as animal after animal rejects her as a friend. For example, the frogs want no part of her after she dives into the frog pond and drains all of the water because she is too big. She also tries to naively scrub the stink out of a skunk, and she eats the honey that belongs to the very bees that she’s trying to befriend. When all her attempts at friendship fail, her feeling of rejection turns to anger and she assertively states to an egg (that hasn’t hatched yet), “You will be my friend!” When that doesn’t work either, Lucy reminds herself to take a deep breath and most importantly, to just be herself and she will find a friend. She feels hopeless and is just about to give up when a flamingo approaches her with the hope of becoming friends. Together they do cartwheels, have picnics, dance, and do all of the things that friends do."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The message of the book is simple and timeless: Be yourself and you will find the right kind of friend. Yes, you can pretend to hop like a kangaroo, or swim underwater like a fish (as Lucy does), but in the end that is not who you are. Using a bit of humor, this book successfully brings that message to light. The book also has great physical appeal; the illustrations stand out on the matte-finish pages, and the bubble captions offer a unique, fun approach to the dialogue between Lucy and the other animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "All in all, this was a great book for kids on many levels. I would especially recommend it as a tool for parents who have kids who are having trouble making friends, or kids who are attending a new school."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-9."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
