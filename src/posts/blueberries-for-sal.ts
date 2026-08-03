import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Blueberries for Sal",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Robert McCloskey’s classic book describes a chance encounter between a child and her momma and a bear cub and his momma."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "When both families head to Blueberry Hill to stock up on fruit for the winter, the little ones get separated from their mothers and begin to follow the wrong mothers instead. The lesson in the book is in how each mother reacts when she finds someone unexpected following her. She takes a good look and backs away, because — McCloskey tells us — “She was old enough to be shy of people/bears, even a very small [one].” The families are reunited and everyone makes it home OK."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This sweet book emphasizes our connection to nature and encourages respect for wild animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2 to 5. For more reviews, visit ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/book-reviews/Blueberries-for-Sal.html",
        "external": true,
        "children": [
          "Common Sense Media"
        ]
      },
      " or ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/book/show/133526.Blueberries_for_Sal",
        "external": true,
        "children": [
          "Goodreads"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
