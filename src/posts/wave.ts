import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/09/9780811859240.jpg",
    "alt": "Wave",
    "href": "/media/2010/09/9780811859240.jpg",
    "width": 210,
    "height": 123,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I love wordless or nearly wordless books. I’m simply captivated by Eric Rohmann’s ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/the-cinder-eyed-cats/",
            "children": [
              "The Cinder-Eyed Cats"
            ]
          }
        ]
      },
      " and David Wiesner’s ",
      {
        "type": "emphasis",
        "children": [
          "Tuesday"
        ]
      },
      ". For me, it doesn’t get much better than when illustrations carry the story, and ",
      {
        "type": "link",
        "href": "http://www.roadtripsforfamilies.com/2010/08/top-10-great-kids-books-for-the-road-guest-post-from-vegbooks-org/",
        "external": true,
        "children": [
          "the “reader” is left to choose exactly how to tell it"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Wave"
        ]
      },
      " epitomizes the best of this genre. Depicting a day at the beach, this lovely book by ",
      {
        "type": "link",
        "href": "http://suzyleebooks.com/",
        "external": true,
        "children": [
          "Suzy Lee"
        ]
      },
      " is both funny and poetic — a pretty amazing feat for a work that uses only one color (blue) and not a single word. Vegetarian parents will appreciate the nature theme, and kids not yet able to read will like being able to tell the story all by themselves."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-6."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
