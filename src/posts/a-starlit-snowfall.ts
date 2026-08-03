import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/12/9780316183666.jpg",
    "alt": "A Starlit Snowfall",
    "href": "/media/2011/12/9780316183666.jpg",
    "width": 210,
    "height": 273,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I received ",
      {
        "type": "link",
        "href": "http://rcm.amazon.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=vegbooks-20&o=1&p=8&l=as4&m=amazon&f=ifr&ref=ss_til&asins=0316183660",
        "external": true,
        "children": [
          "this book"
        ]
      },
      " as a review copy. It is the story of two friends making plans as winter approaches. Bear has a nice warm cave and invites Rabbit to stay with him until spring arrives. Rabbit says no at first, enjoying the freedom of the brisk fall mornings. But then the first frost of the season occurs and Rabbit reconsiders. It’s cold out there!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rabbit tries to relax in Bear’s cozy den, but he gets a little bored. Look at the way the moon reflects on the beautiful snow! Rabbit tries to share the beauty with Bear, but Bear is fast asleep. Rabbit feels trapped in the cave and breaks free into the beauty of the night – bouncing gleefully in all that winter has to offer."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is a beauty. The illustrations are just gorgeous. It’s illustrated by the award-winning illustrator of ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/the-lion-the-mouse/",
            "external": true,
            "children": [
              "The Lion and the Mouse"
            ]
          }
        ]
      },
      ". The text is not as captivating as the art. Like Rabbit in the cave, I found it a little boring. But it’s a sweet story about animal friends and the beauty of winter, and the pictures are beautiful, so maybe that’s enough."
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
