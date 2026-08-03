import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2019/01/mrs-frisby-and-the-rats-of-nimh.jpg",
    "alt": "Mrs. Frisby and the Rats of NIMH",
    "width": 258,
    "height": 397,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "My 9-year old daughter and I really enjoyed reading ",
      {
        "type": "emphasis",
        "children": [
          "Mrs. Frisby and the Rats of NIMH"
        ]
      },
      " together. I had seen the movie ",
      {
        "type": "link",
        "href": "/reviews/the-secret-of-nimh/",
        "external": true,
        "children": [
          "The Secret of NIMH"
        ]
      },
      " as a kid, but it has been a long time. This book, a Newbery Award winner, is amazing. Now to (re)watch the movie! (",
      {
        "type": "strong",
        "children": [
          "editor’s note: We’ve reviewed that too! ",
          {
            "type": "link",
            "href": "/reviews/the-secret-of-nimh/",
            "external": true,
            "children": [
              "Click here"
            ]
          },
          "."
        ]
      },
      ")"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "After her husband dies, Mrs. Frisby, a mouse, meets the rat colony that lives on the same farm as she does, and she learns that her husband and the rats were once part of an government study (sponsored by the National Institute of Mental Health). The study was to change the genetic make up of mice and rats in an effort to teach them to read and live longer, and it was very successful. The rats tell Mrs. Frisby that they were captured while living on the streets, then trapped in cages and experimented on for years. They also share how they finally escaped after years of planning. The rats were trapped in tiny cages, given shots to enhance their abilities, and separated from all other rats. There is more to the novel, including the threat of losing her home and the NIMH scientists’ return, but the story of the rats is probably a full third of the book, and it’s definitely the most compelling."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The novel was written in 1971, so gender representation is stuck in the past. Mrs. Frisby, the main character, is a very brave and well developed character, but we never even learn her first name, although at one point she is referred to as Mrs. Jonathan Frisby. Additionally the rat colony, which started with only 20 rats, has grown to more than 150. Presumably there are some female rats, or the colony wouldn’t be growing. You wouldn’t know it from the story though; the named rats are all male. While this gender-biased story telling may be expected from a book from this time, it did dampen my enjoyment of an otherwise fantastic book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Amazon recommends this book for ages 8-12, and that sounds about right to me."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
