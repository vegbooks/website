import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2019/01/goodnight-seahorse.jpg",
    "alt": "Goodnight, Seahorse",
    "width": 300,
    "height": 260,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.indiebound.org/search/book?keys=Goodnight%2C+Seahorse",
        "external": true,
        "children": [
          "GOODNIGHT, SEAHORSE"
        ]
      },
      " by Carly Allen-Fletcher is a lovely bedtime book — or anytime book — for young children. The illustrations are vibrant and gorgeous, and the variety of sea creatures spans from the familiar to the unheard of."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In the style of ",
      {
        "type": "emphasis",
        "children": [
          "Goodnight Moon"
        ]
      },
      ", a little seahorse says “goodnight” to various neighbors on its way to bed. Each one has its own way of getting comfortable, from sprawling to burrowing to snuggling. The layered, collage-like style of the illustration suits the underwater environments perfectly."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The end of ",
      {
        "type": "link",
        "href": "https://www.indiebound.org/search/book?keys=Goodnight%2C+Seahorse",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Goodnight, Seahorse"
            ]
          }
        ]
      },
      " has a collection of 20 sea creatures along with their names. Children who aren’t quite ready for sleep can check those out and go back to discover those mentioned in the story. Highly recommended for infant – two years old."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
