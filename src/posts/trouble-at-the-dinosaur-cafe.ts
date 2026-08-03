import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock.jpg",
    "alt": "Trouble at the Dinosaur Cafe",
    "href": "/media/2010/06/boy-book-pic-from-istock.jpg",
    "width": 216,
    "height": 143,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "One of the things that many children seem to go through while growing up is a phase of liking dinosaurs. In ",
      {
        "type": "emphasis",
        "children": [
          "Trouble at the Dinosaur Café"
        ]
      },
      "by Brian Moses, a group of vegetarian dinosaurs are dining in a restaurant when in walks a meat-eating dinosaur."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The carnivorous dinosaur starts trouble in the diner when he realizes that they serve only plant-based foods. He turns on the other dinosaurs and threatens to eat them, because he wants meat so badly. In response, the other dinosaurs team up to tackle him to the ground and proceed to tickle his feet until he can no longer take it. This makes him give up and decide to leave in search of easier meat."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.goodreads.com/book/show/2133870.Trouble_at_the_Dinosaur_Cafe",
            "external": true,
            "children": [
              "Trouble at the Dinosaur Café"
            ]
          }
        ]
      },
      " is a cute book, especially for vegetarian children who may be dinosaur fans. Through its action, they may learn about standing up for themselves and using creative ways to take on someone who challenges their way of life."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian parents may want to know that the book includes some images of meat dishes, as the carnivorous dinosaur discusses what he is hungry for."
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
