import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/06/41193-ifyouhoppedl-4cc.jpg",
    "alt": "If You Hopped Like a Frog",
    "href": "/media/2012/06/41193-ifyouhoppedl-4cc.jpg",
    "width": 210,
    "height": 274,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "As a boy, author ",
      {
        "type": "link",
        "href": "http://www.davidschwartz.com/",
        "external": true,
        "children": [
          "David M. Schwartz"
        ]
      },
      " wondered what it would take to be able to hop like a frog, eat like a snake and possess other fantastic animal abilities. ",
      {
        "type": "link",
        "href": "http://www.powells.com/biblio/62-9780590098571-0",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "If You Hopped Like a Frog"
            ]
          }
        ]
      },
      " is the result of his inquiry. Schwartz makes calculations about other creatures’ movements and then applies them to create a story of amazing feats that human children could perform if they possessed the strength, agility, quickness and other characteristics of well known insects, animals and reptiles. Illustrations by ",
      {
        "type": "link",
        "href": "http://www.jameswarhola.com/",
        "external": true,
        "children": [
          "James Warhola"
        ]
      },
      " are bright and cheerful and lend a sense of flow to the text. We really enjoyed this book and learning about all of the fun things we could do if we could high jump as high as fleas, had true eagle eyes and were as strong as ants. Since so many of the things portrayed in the book are pretty incredible, this book gives us a sense of appreciation for the special talents different creatures have. Veg parents will want to know that there are depictions of meat when food references are made."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The end of the book breaks down the mathematical calculations that were used throughout the book (for example, a spider can move 33 times the length of its body in one second — so based on your height, how fast could you move?), which is fun if you are a math lover or interesting fact collector."
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
