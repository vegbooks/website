import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/04/the-happy-egg.jpg",
    "alt": "The Happy Egg",
    "href": "/media/2011/04/the-happy-egg.jpg",
    "width": 210,
    "height": 277,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Ruth Krauss and Crockett Johnson, the team behind ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/the-carrot-seed/",
            "children": [
              "The Carrot Seed"
            ]
          }
        ]
      },
      ", created this lovely little book, which captures the life of an egg in simple terms for young listeners and beginning readers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While the use of the pronoun “it” may cause some people to cringe, vegans will appreciate that this book celebrates the egg as a newly born but not yet hatched bird. And everyone will appreciate the parental care depicted: the egg is sat on and sat on and sat on."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Although the story uses a few big words, the repetition and use of phonetic words (such as “sat”) make this a good choice for beginning readers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages o to 5."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
