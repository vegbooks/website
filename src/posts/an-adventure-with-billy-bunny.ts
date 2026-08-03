import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "Billy the baby bunny is on the hunt for a “magical flying creature” called a butterfly. Together with his friends — a nuthatch, field mouse, and a black-nosed mole — he looks in the daffodils and the sweetbriar bush, and under a water lily. Along the way, he discovers a bee, grasshoppers, and a number of birds before falling asleep. Happily, at the end of the book, he is awoken by a flock of butterflies."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kids will enjoy lifting the flaps to see the wild animals, and parents will appreciate the life-like illustrations. ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.goodreads.com/book/show/5054983-an-adventure-with-billy-bunny",
            "external": true,
            "children": [
              "An Adventure with Billy Bunny"
            ]
          }
        ]
      },
      "is a nice book to instill reverence for nature."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-6. This book is out-of-print but is available for used purchase."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
