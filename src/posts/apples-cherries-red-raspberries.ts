import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/04/apples-cherries-c.jpg",
    "alt": "Apples, Cherries, Red Raspberries",
    "href": "/media/2011/04/apples-cherries-c.jpg",
    "width": 209,
    "height": 257,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In our house, we’ve really enjoyed a math-themed book by ",
      {
        "type": "link",
        "href": "http://www.brianpcleary.com/",
        "children": [
          "the author"
        ]
      },
      " of ",
      {
        "type": "link",
        "href": "http://www.powells.com/biblio/74-9781580135894-0",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Apples, Cherries, Red Raspberries: What is in the Fruit Group?"
            ]
          }
        ]
      },
      " and since it has been such a beloved read, so I was excited to see what this book all about fruit would be like. In general, it is an enjoyable read. The book discusses all different types of fruit and their health benefits, doing so in a pleasing rhyme. (This may be the first time you realize that honeydew rhymes with the phrase “number two.”) The illustrations are lively and serve to reinforce the silly elements of the book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There was a major disappointment in this book though, and that was that this book extolling the virtues of fruit managed to incorporate an insensitive portion discussing hooking, frying and boiling fish. Sensitive children and adults will want to give this book a pass."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "If you are willing to abide a page about fishing, the fruity elements of this book are fun and serve to reinforce the idea that fruit is healthy and yummy. It is unfortunate that even a book about fruit depicts the veg-unfriendly idea of hooking and cooking fish."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
