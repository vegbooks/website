import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/01/97808234162261.jpg",
    "alt": "If Frogs Made Weather",
    "href": "/media/2010/01/97808234162261.jpg",
    "width": 242,
    "height": 245,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This picture book by ",
      {
        "type": "link",
        "href": "http://www.mariondanebauer.com/bkpages/bk_weather.html",
        "external": true,
        "children": [
          "Marion Dane Bauer"
        ]
      },
      " and Dorothy Donahue introduces kids to the ecological needs of animals through touching, even funny, poems — with gorgeous illustrations to boot. Each page could stand on its own, but together they’re downright magical."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "One of the things I love about this book is, cover aside, the realism of the illustrations and the accuracy of the descriptions. If polar bears made weather, we’re told, the world would be a blustery, icy place. (Nice entree into a climate change discussion, if you’d like.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "What a delight at the end then when all of the animals transform into stuffed toys, and the reader realizes that the little boy at the periphery of the story has envisioned each of his toys out in nature!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
