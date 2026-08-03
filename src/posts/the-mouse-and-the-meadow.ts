import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2014/04/9781584694823.jpg",
    "alt": "9781584694823",
    "href": "/reviews/the-mouse-and-the-meadow/",
    "width": 210,
    "height": 255,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In this story a young mouse ventures out on his own and finds out that nature can be both beautiful and dangerous when you are a mouse. The mouse makes his way through the meadow, meeting various animals along the way. What the mouse learns is that there are some animals that will be friendly to him, while others may bring danger."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book gives children a good look at nature in the meadow, from the point of view of a mouse, who learns valuable life lessons along the way. While the mouse fears being in nature, because he may become lunch, a friendly animal teaches the mouse that there are many great things about the meadow, too."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There is nothing in this book that vegetarian parents would not want their child exposed to. In fact, it would make a great addition to their book collection. It focuses on nature, is beautifully illustrated, and offers additional educational information in the back, including a look at the idea of animals talking in children’s books. This is a nice book all the way around and one that parents and kids alike will enjoy."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.dawnpub.com/our-books/mouse-and-the-meadow/",
            "external": true,
            "children": [
              "Dawn Publications"
            ]
          },
          " provided a review copy."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
