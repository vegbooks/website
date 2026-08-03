import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/11/cover-our-school-garden.jpg",
    "alt": "Cover-Our School Garden!",
    "href": "/media/2013/11/cover-our-school-garden.jpg",
    "width": 210,
    "height": 263,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Our School Garden"
        ]
      },
      " takes kids on a journey through a school that has a garden out back. They learn all about what’s planted, why school gardens are a good idea, and the types of things they may find out in that garden. Children will learn a lot from this well-written book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Some of the things covered in this book include root vegetables, the importance of families eating together, harvest day, pill bugs, victory gardens, compost, the three sisters (corn, squash, and beans), and so much more. This book is filled with great information for young minds. We really enjoyed reading it and loved the variety that it covered, along with it being nicely full-color illustrated."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian and vegan parents will not find anything of concern in this book. In fact, it would make a great addition to any book collection. The book even includes a vegan recipe for “School Garden Stone Soup.” This book should be given to every teacher in America in hopes that more school gardens may be started!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is geared to elementary school students."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The ",
          {
            "type": "link",
            "href": "http://www.readerstoeaters.com/books/will-allen-and-the-growing-table/",
            "external": true,
            "children": [
              "publisher"
            ]
          },
          " provided a review copy of this book."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
