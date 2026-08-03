import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/12/grace-and-cairo-2.jpg",
    "alt": "A Christmas Horse Named Cairo",
    "href": "/media/2011/12/grace-and-cairo-2.jpg",
    "width": 210,
    "height": 140,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "A Christmas Horse Named Cairo: A Rescued Palomino from Sunny Day Farms"
        ]
      },
      " is a fundraiser book for Sunny Day Farms Animal Sanctuary. Using photographs and a simple storyline, the book tells the true story of rescued horse Cairo through the eyes of a little girl who lives on the farm."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book takes readers through daily life at the animal sanctuary, the arrival of the neglected horse, Cairo’s recovery, and his happy life on the farm. Although the book design is amateurish, photographs of cute farm animals are engaging enough to make up for any shortcomings in the design."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Reading ",
      {
        "type": "emphasis",
        "children": [
          "A Christmas Horse Named Cairo"
        ]
      },
      " is the next best thing to visiting a farm animal sanctuary in person. The story is a good introduction to animal activism for young children. Because money from book sales goes directly to the animal sanctuary, in a way, the reader becomes part of the farm community helping the animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "An image of a starved Cairo with his ribs showing may be scary for some children. However, Cairo recovers quickly and looks quite festive dressed up with ribbons for Christmas."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A full preview of the book is available online at ",
      {
        "type": "link",
        "href": "http://www.blurb.com/books/2722365",
        "external": true,
        "children": [
          "blurb.com"
        ]
      },
      ", where you can also purchase the book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
