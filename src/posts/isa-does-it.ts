import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2014/02/e9a6e178e0d2454e0463d845e2983a90.jpg",
    "alt": "Isa Does It!",
    "href": "/reviews/isa-does-it/",
    "width": 210,
    "height": 262,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "There is something about getting a new cookbook that is so exciting! It’s the promise of a new and unique meal. It’s the hope that there will be something in those pages that will jump out you. Luckily, ",
      {
        "type": "emphasis",
        "children": [
          "Isa Does It"
        ]
      },
      " does not disappoint!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This vegan cookbook is filled with recipes that make you want to spend more time in the kitchen. The dishes are also all designed to be simple, thus taking on excuses for not having time to cook. From Jerk Sloppy Joes to Carrot Cake Pancakes and many mouthwatering dishes in between, this book provides a lot of variety. There are many full color photos, additional tips and notes, and variations to provide even more options."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The first recipe that jumped out at me, wanting to be prepared, was the one for Classic Baked Tofu. It is a simple recipe that is easy to follow, yet ended up making a delicious base for a family dinner, creating a dish that even the kids loved. This book provides families with nearly 200 recipes that will help busy families get a great meal on the table with minimal effort and time."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The ",
          {
            "type": "link",
            "href": "http://hachettebookgroup.com/titles/isa-chandra-moskowitz/isa-does-it/9780316221900/",
            "external": true,
            "children": [
              "publisher"
            ]
          },
          " provided a copy of this book for review purposes."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
