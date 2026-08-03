import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/05/how-do-dinosaurs-love-their-cats.jpg",
    "alt": "How Do Dinosaurs Love Their Cats?",
    "href": "/media/2010/05/how-do-dinosaurs-love-their-cats.jpg",
    "width": 256,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "A wide range of dinosaurs — from ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Euoplocephalus",
        "external": true,
        "children": [
          "Euoplocephalus"
        ]
      },
      " to Parasaurolophus — model behavior, good and bad, toward their cats. Kids will learn to clean the litter box, pay attention to their feline friends, and be gentle. The cats pictured come in a wide range of colors and markings, so many kids will recognize their own cat in the illustrations."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The only downside to this animal-friendly read is that it repeatedly refers to cats as objects (as in “She gives ",
      {
        "type": "emphasis",
        "children": [
          "it"
        ]
      },
      " new toys that she makes by herself”)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-5."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
