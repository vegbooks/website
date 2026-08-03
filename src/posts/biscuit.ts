import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/toddler-baby-reading.jpg",
    "alt": "Biscuit",
    "href": "/media/2011/07/toddler-baby-reading.jpg",
    "width": 210,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Biscuit, the little golden pup in ",
      {
        "type": "link",
        "href": "http://www.alyssacapucilli.com/",
        "external": true,
        "children": [
          "Alyssa Satin Capucilli"
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "http://biography.jrank.org/pages/1891/Schories-Pat-1952.html",
        "external": true,
        "children": [
          "Pat Schories’s"
        ]
      },
      " early reader book, wants all the same things as kids do when he’s getting ready for bed. He wants a snack, a drink, a kiss, a hug, one more story, the light on … and his young friend patiently provides them all. By the end of the night, he’s curled up next to her bed and the two are sharing the duvet."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Little kids will identify with Biscuit and will learn that companion animals need lots of love, care, and attention."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-6."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
