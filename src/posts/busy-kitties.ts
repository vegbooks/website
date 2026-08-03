import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2009/11/busy-kitties1.jpg",
    "alt": "Busy Kitties",
    "width": 236,
    "height": 168,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This rhyming board book by ",
      {
        "type": "link",
        "href": "http://www.randomhouse.com/author/results.pperl?authorid=105156",
        "external": true,
        "children": [
          "John Schindel"
        ]
      },
      " and Sean Franzen is a great primer on cat behavior for little ones. The kitties stroll, roll, hiss, kiss, think, and drink."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The photos are delightful, showing a variety of cats (none purebred, as far as I can tell) engaged in all sorts of things that cats do. When she was smaller, kiddo enjoyed discussing the different colors in the book, as well as comparing the cats — some have long hair, some have short, and one appears to only have one eye."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 0-3. For other reviews, click ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/book/show/760562.Busy_Kitties",
        "external": true,
        "children": [
          "here"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
