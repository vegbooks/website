import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2009/10/9780753458389.jpg",
    "alt": "Animal Babies on the Farm",
    "href": "/media/2009/10/9780753458389.jpg",
    "width": 205,
    "height": 216,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This is a book where ",
      {
        "type": "link",
        "href": "http://us.macmillan.com/animalbabiesonthefarm",
        "external": true,
        "children": [
          "the publisher"
        ]
      },
      " compiled adorable photos of animals – with some close-ups worthy of ",
      {
        "type": "link",
        "href": "http://cuteoverload.com/",
        "external": true,
        "children": [
          "Cute Overload"
        ]
      },
      " – and added simple text. Each page is told from an animal’s perspective."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "How you’ll feel about this book ultimately depends on how you believe farmed animals should be portrayed. I am divided on this issue. On one hand, I want kiddo to know how animals are treated on ",
      {
        "type": "link",
        "href": "http://factoryfarming.com/",
        "external": true,
        "children": [
          "factory farms"
        ]
      },
      " where the vast majority live. On the other, why expose her to such ugliness at such a young age?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is about who animals are, not how we treat them. The animals in this book are portrayed with their mothers, and often their siblings, in sanctuary-like surroundings. The words emphasize the bond between the baby and her mother."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In the end, I decided that I liked this book, but I’m curious: what do you think?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 0-3."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
