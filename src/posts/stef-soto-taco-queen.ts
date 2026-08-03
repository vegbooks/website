import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2019/01/stef-soto-taco-queen.jpg",
    "alt": "Stef Soto, Taco Queen",
    "width": 206,
    "height": 300,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "My 9-year old daughter and I really enjoyed reading the novel ",
      {
        "type": "link",
        "href": "https://www.hachettebookgroup.com/titles/jennifer-torres/stef-soto-taco-queen/9780316306867/",
        "external": true,
        "children": [
          "Stef Soto, Taco Queen"
        ]
      },
      " by Jennifer Torres together. Stef is in middle school and is the child of immigrant parents. Throughout the book, she comes to terms with her feelings about her family’s very visible business as owners of a run-down taco truck named Tía Perla. She deals with being teased for smelling like tacos while also being proud of her parents for carving out a moderately successful business for themselves in America."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Through Stef’s eyes, we experience a small part of what it’s like to be in an immigrant family. Stef’s family speaks Spanish at home, and sometimes she is asked to be a translator for her parents in important situations. Stef is very relatable, and much of the story’s conflict is typical of middle school. My daughter and I really enjoyed stepping in this immigrant family’s experience."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "One of Stef’s best friends is a vegetarian “for the sake of the earth.” Stef’s dad delights in the challenge of making new dishes that he will enjoy. My daughter really enjoyed the addition of this character in the book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I highly recommend this book to children in your life. All readers will enjoy Stef and her family and will learn a lot about the immigrant experience along the way. Vegetarian kids will appreciate seeing themselves represented in Stef’s best friend."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Recommended for ages 8-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
