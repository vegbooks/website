import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/10/cmt-pfinaljpg.jpg",
    "alt": "Children Make Terrible Pets",
    "href": "/media/2010/10/cmt-pfinaljpg.jpg",
    "width": 210,
    "height": 278,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "From the author of ",
      {
        "type": "link",
        "href": "/reviews/the-curious-garden/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "The Curious Garden"
            ]
          }
        ]
      },
      " comes this “first pet story” where the tables are turned and a ballerina-looking bear by the name of Lucy finds a boy named “Squeaker” to be her first companion animal. Named for the sounds he makes, Squeaker seems to enjoy his days napping and playing alongside Lucy. Despite Mama Bear’s warning about children making terrible pets, the cub tries to be a responsible guardian despite Squeakers inability to potty train and restrain himself from destroying furniture."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Later in the text, Squeaker is M.I.A. and Lucy, through her snooping-sleuthing-nostrils, finds him in the forest dining at the table with his human family. For the sake and wellbeing of all parties involved, she leaves him in this better suited environment."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Clad in 70’s-styled artwork, ",
      {
        "type": "link",
        "href": "http://www.peterbrownstudio.com/",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Children Make Terrible Pets"
            ]
          }
        ]
      },
      "is a fantastic find for discussing the idea of domestication and the needs of domesticated and wild animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
