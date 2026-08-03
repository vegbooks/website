import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/12/9780763650223.jpg",
    "alt": "Little Owl Lost",
    "href": "/media/2010/12/9780763650223.jpg",
    "width": 210,
    "height": 220,
    "align": "right"
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0763650226",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0763650226?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0763650226",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Little Owl Lost"
            ]
          }
        ]
      },
      " is a sweet book about the tale of an baby owlet lost in the forest. With the help of other forest creatures, he is eventually reunited with his mom. The book’s uniquely colored and stylized illustrations and font are striking and visually pleasing."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Little Owl Lost"
        ]
      },
      " borrows on the theme found in the classic book ",
      {
        "type": "link",
        "href": "http://www.amazon.com/Are-You-Mother-P-D-Eastman/dp/0394800184/ref=sr_1_1?s=books&ie=UTF8&qid=1291749236&sr=1-1",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Are You My Mother"
            ]
          },
          "?"
        ]
      },
      " but we have fun moving through the forest with Little Owl and his friend Squirrel as they search for – and find – Mama Owl by a process of elimination. The themes of helping others who may be scared or vulnerable and the importance of community are well illustrated for young ones."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I really enjoyed the ",
      {
        "type": "link",
        "href": "http://chrishaughton.com/",
        "external": true,
        "children": [
          "author/illustrator Chris Haughton’s"
        ]
      },
      " description of the evolution of ",
      {
        "type": "emphasis",
        "children": [
          "Little Owl Lost"
        ]
      },
      ", which I read about ",
      {
        "type": "link",
        "href": "http://chrishaughton.com/a-bit-lost-the-making-of",
        "external": true,
        "children": [
          "here"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Recommended for toddlers and up (though note that this is not currently available as a board book)."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
