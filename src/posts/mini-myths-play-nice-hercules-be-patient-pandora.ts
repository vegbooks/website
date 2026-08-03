import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2014/09/mini-myths-hercules.jpg",
    "alt": "MiniMythsHercules",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Loosely based on Greek myths, ",
      {
        "type": "emphasis",
        "children": [
          "Mini Myths: Play Nice, Hercules"
        ]
      },
      " and ",
      {
        "type": "emphasis",
        "children": [
          "Be Patient, Pandora"
        ]
      },
      "are board books that feature cute illustrations. Geared to toddlers and preschoolers, the story lines here are so simple they can hardly be characterized as stories. In the Hercules book, for example, a little boy knocks over his sister’s blocks, she cries, he creates a pyramid of blocks for her, and they knock it over together."
    ]
  },
  {
    "type": "image",
    "src": "/media/2014/09/mini-myths-pandora.jpg",
    "alt": "MiniMythsPandora",
    "width": 210,
    "height": 210,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "Although these aren’t particularly fun books to read aloud, parents will likely will be amused by the hero Hercules depicted as a rough-and-tumble toddler and the goddess Pandora incarnated as a modern-day curious kid. A brief synopsis of each myth is included at the end."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Some parents will also enjoy these books as parables that speak to the temptations and challenges that young children routinely face. Others may find them to be a bit heavy-handed."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 1 to 4."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "I received review copies of these books from ",
          {
            "type": "link",
            "href": "http://www.abramsbooks.com/appleseed.html",
            "external": true,
            "children": [
              "the publisher"
            ]
          },
          "."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
