import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/04/rabbit-problem-cover.jpg",
    "alt": "The Rabbit Problem",
    "href": "/media/2011/04/rabbit-problem-cover.jpg",
    "width": 210,
    "height": 263,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Illustrating Fibonacci’s famous Rabbit Problem, in which the mathematician explored the numerical ramifications of a hypothetical world in which a rabbit population increases exponentially, Emily Gravett’s ",
      {
        "type": "link",
        "href": "http://www.guardian.co.uk/books/gallery/2011/feb/22/emily-gravett-in-pictures#/?picture=371574110&index=8",
        "external": true,
        "children": [
          "delightful picture book"
        ]
      },
      " follows a rabbit family through a year. Set up like a calendar, the book serves two equally important purposes: 1) to interest kids in math, and 2) to demonstrate how a population can balloon out of control."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Families interested in animal welfare will appreciate that the book can serve as an entrée into discussing the ",
      {
        "type": "link",
        "href": "http://www.humanesociety.org/issues/pet_overpopulation/facts/why_spay_neuter.html",
        "external": true,
        "children": [
          "importance of spaying and neutering"
        ]
      },
      " companion animals. Parents should be aware, however, that the book’s heavy focus on reproduction could lead to some loaded questions."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This humorous book is highly recommended for ages 6 to adult."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
