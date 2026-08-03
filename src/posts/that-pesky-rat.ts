import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/04/9780763618735.jpg",
    "alt": "That Pesky Rat",
    "href": "/media/2011/04/9780763618735.jpg",
    "width": 210,
    "height": 247,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.powells.com/biblio/1-9780763618735-4",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "That Pesky Rat"
            ]
          }
        ]
      },
      " by British children’s author/illustrator ",
      {
        "type": "link",
        "href": "http://www.milkmonitor.com/main.htm",
        "external": true,
        "children": [
          "Lauren Child"
        ]
      },
      " is a wonderful story about a brown rat who doesn’t quite fit in with his life circumstances. As he introduces himself and takes us on a tour of his world, including his friends’ diverse homes and lifestyles, it becomes clear that the rat would like to both be and have a companion. He posts a notice to that effect at the local pet store despite no small degree of skepticism on the part of the shop owner and the rat himself (his posting seeking a home is perhaps one of the best portions of any book that I’ve read in some time). Lo and behold, in a humorous twist, his posting receives interest and the story ends with our affable hero happily ensconced in a new home."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This story provides us with the voice of a modern-day rat — a creature so often maligned — and gives us the opportunity to stretch our empathy muscles. The fantastic mixed media illustrations are a wonderful complement to this witty, humorous story. Note that companion animals are referred to as pets, there is the aforementioned pet store, and one of the rat’s friends is a circus performer. Nonetheless, this book is a treat for kids aged 4 years and up, as well as the adults sharing the story."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
