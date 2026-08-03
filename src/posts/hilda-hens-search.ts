import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Hilda Hen’s Search",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Accompanied by striking linocut illustrations, ",
      {
        "type": "emphasis",
        "children": [
          "Hilda Hen’s Search"
        ]
      },
      " is a cute story of a hen’s hunt for the perfect place to lay her eggs. After finding several appealing places that aren’t quite right — such as the basket of a bicycle — Hilda finally finds a place to hatch her brood inside a dollhouse."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.goodreads.com/author/show/445502.Mary_Wormell",
        "external": true,
        "children": [
          "Mary Wormell’s sweet book"
        ]
      },
      " is based on a real-life hen named Hilda, and it’s an excellent introduction to chickens for young children, especially given its emphasis on Hilda as an individual and her love for her unhatched chicks."
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
