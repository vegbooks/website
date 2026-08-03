import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2018/11/when-you-grow-up-to-vote.jpg",
    "alt": "When You Grow Up to Vote",
    "width": 209,
    "height": 300,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "Eleanor Roosevelt first published ",
      {
        "type": "link",
        "href": "https://us.macmillan.com/books/9781626728790",
        "external": true,
        "children": [
          "WHEN YOU GROW UP TO VOTE"
        ]
      },
      " in 1932 to help children learn about leaders and public employees, local first responders and elected leaders from local to national, and everything in between. This knowledge, she hoped, would help future voters make responsible and informed decisions when casting a ballot. Frankly, current voters could probably benefit from reading through the book as well."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Updated by Michelle Markel, who is Eleanor Roosevelt’s granddaughter, and illustrated by Grace Lin with images that reflect the diversity and growing equality of the United States of America, this short and informative book will help readers feel empowered to become an active part of government instead of exasperated and confused by it."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Starting with the important and micro-local work of fire fighters, police officers, and garbage collectors, the book moves on to town and state governments, and how a bill is made into law at the state level. The deepest levels of detail are rolled out for federal government. Not only are the three branches of government mentioned, but each of the sixteen cabinet members (fifteen secretaries and the vice president) and how taxes fuel the entire system."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Eleanor Roosevelt’s sincere desire to entice young people comes through in a conversational tone that is at once simple and straightforward while managing to be entertaining as well. Grace Lin’s illustrations are simple enough for young people to understand, but the diverse and specific details, especially at the federal level, are impressive and instructive. This is a lovely, useful, even fun book that teaches the basics of government and the tenets of citizenship."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Highly recommended for ages 6-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
