import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/10/girl-reading.jpg",
    "alt": "girl reading book",
    "href": "/media/2010/10/girl-reading.jpg",
    "width": 210,
    "height": 280,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Ever get so mad at someone that you see red? When that happens to the narrator of ",
      {
        "type": "link",
        "href": "http://www.roalddahl.com/",
        "external": true,
        "children": [
          "Roald Dahl"
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "http://www.quentinblake.com/",
        "external": true,
        "children": [
          "Quentin Blake’s"
        ]
      },
      " book ",
      {
        "type": "emphasis",
        "children": [
          "The Magic Finger"
        ]
      },
      ", she points her magic finger and well … things happen."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Veg kids will probably relate when the narrator gets angry at her friends and neighbors, the Greggs, for hunting deer and ducks, and they’ll be delighted to find out that the result of her finger-pointing is that the Greggs and the ducks change places for a night. When the ducks take up arms and confront the Greggs about the slaughter of their family, the lesson is brought home. The Greggs promise never to hunt again; instead, they destroy their guns and put flowers on the graves of the dead ducks."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 8-12. For more reviews, visit ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/book/show/6670.The_Magic_Finger",
        "external": true,
        "children": [
          "Goodreads"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
