import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/12/i1915-scholrdrlvl3-4cc.jpg",
    "alt": "Pet Heroes",
    "href": "/media/2010/12/i1915-scholrdrlvl3-4cc.jpg",
    "width": 210,
    "height": 315,
    "align": "right"
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0545258375",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      "Nicole Corse’s ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0545258375?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0545258375",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Pet Heroes"
            ]
          }
        ]
      },
      " is a short book of fourteen stories about animals who have acted heroically to save lives. Some are companion animals, and others trained service dogs who have been called to duty. While most of the lives saved are human, some of the hero animals are given credit for saving non-humans. Some of the animals to whom we are introduced include a pot-bellied pig who escaped through a dog door to seek help, a border collie who acts as a guide dog for another border collie, and a rabbit who alerted his people to a fire. The profiles of the animals include photographs of them, often with those who they have saved."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Pet Heroes"
        ]
      },
      " is a good way to open a discussion with kids about the connections between animals (human and non-human), and what behaviors our culture considers heroic. Not all veg parents will appreciate the constant reference to the animals as “pets.” Another consideration for parents of sensitive children is that the situations in which the animal rescuers are involved are often scary or concerning for young children (e.g. September 11, 2001, fires, medical emergencies and numerous other perilous circumstances)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Pet Heroes"
        ]
      },
      " is for ages 5 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
