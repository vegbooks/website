import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "My six-year-old daughter loves this book. It is a collection of short poems designed to be read by two people, each taking a turn to read one or two lines, indicated by different colored text."
    ]
  },
  {
    "type": "image",
    "src": "/media/2016/04/f4d3072a580f7ba38dd3645653a0e27a.jpg",
    "alt": "You Read to Me cover",
    "width": 1024,
    "height": 1334
  },
  {
    "type": "paragraph",
    "children": [
      "It is simple enough for a new reader and more fun than books we with which normally practice reading because we get to read it together. We first got this from the library and loved it so much that we picked up a copy to keep at home."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The first story is of most interest to vegetarian families. One reader is a cat, and the other reader is trying to convince the cat not to eat a mouse:"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "Eating mice is really rude"
        ]
      },
      {
        "type": "paragraph",
        "children": [
          "It’s not a proper thing to do"
        ]
      },
      {
        "type": "paragraph",
        "children": [
          "Think how sad you would feel if you were eaten for a meal."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It was a pleasant surprise to find these lines in this book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5 to 8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
