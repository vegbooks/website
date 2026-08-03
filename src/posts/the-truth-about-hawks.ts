import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2020/01/the-truth-about-hawks.jpg",
    "alt": "The Truth About Hawks",
    "href": "/media/2020/01/the-truth-about-hawks.jpg",
    "width": 243,
    "height": 300,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781250198457",
        "external": true,
        "children": [
          "THE TRUTH ABOUT HAWKS"
        ]
      },
      " by Maxwell Eaton III starts with a surprise, and it doesn’t pull any punches when it comes to how hawks get their meals, as the rabbit who begins the book learns. But the surprise to most readers will be that eagles are actually hawks. Joining them are kites, harriers, and over 200 other types of birds."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Readers are presented with features shared by hawks, hunting patterns, and meal preferences. Did you know that golden eagles can knock sheep off cliffs in order to kill and eat them? Or that apple snails are the favorite of some kites? Gourmands of the sky!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Mating, nest-building, and chick-rearing are all included, as are migration habits, and the effects of loss of habitat and human-created pollution and use of pesticides. Throughout the book, Eaton infuses his usual humor and dry wit. The illustrations are clear and fun in a cartoon-style that doesn’t gloss over the animal kingdom realities, but keeps topics child-friendly."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As with most animal-centered books, there is a list of books for further research for those children who fall in love with all things hawks. ",
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781250198457",
        "external": true,
        "children": [
          "THE TRUTH ABOUT HAWKS"
        ]
      },
      " is a fun and informative book for ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
