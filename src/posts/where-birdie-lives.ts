import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2019/02/where-birdie-lives.jpg",
    "alt": "Where Birdie Lives",
    "href": "/reviews/where-birdie-lives/",
    "width": 300,
    "height": 300,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "The curiosity of preschoolers is tapped into throughout the very sweet oversized board book ",
      {
        "type": "strong",
        "children": [
          {
            "type": "link",
            "href": "https://www.indiebound.org/book/9781948418003",
            "external": true,
            "children": [
              "WHERE BIRDIE LIVES"
            ]
          }
        ]
      },
      "written and illustrated by Elena Tsvetaeva. It’s a sturdy lift-the-flap book that will have children following along as a friendly dog journeys to find out where a passing bird lives."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As the dog searches, she looks under leaves and in burrows and under lily pads, discovering new friends along the way. The bright but gentle colors change with each page, and the simple, wide-eyed illustrations are perfect for the birth through three-year old set."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Where Birdie Lives"
        ]
      },
      "is clearly meant as a read-aloud book, but after several reads, children may choose to look through the book on their own, naming animals and habitats as they go along. In addition, the illustrations lend themselves to creative use like counting the veins on a leaf or using a finger to trace the path of a mole family in its burrow."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This interactive board-book is recommended for ages 0-3."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
