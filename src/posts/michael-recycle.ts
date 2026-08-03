import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Michael Recycle",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "“…And then something happened that none could explain. It wasn’t a bird and it wasn’t a plane. A green-caped crusader soared through the air, with a colander hat on top of his hair.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As so we’re introduced to the Captain Planet-like hero, ",
      {
        "type": "link",
        "href": "http://www.michaelrecycle.co.uk/",
        "external": true,
        "children": [
          "Michael Recycle"
        ]
      },
      ", who is in the midst of warning the lazy citizens of Abberdoo-Rimey about their brown rivers, surmounting trash piles and the looming threat of 50-foot bugs that will surely take over the town if they don’t shape up and start greening their act."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I wish all humans were as quick to heed the sage advice of us environmental folk as the Abberdoo-Rimians. After initiating a “Be Greener Campaign”, their town gleams and glitters, nothing is wasted, and nobody litters. The story is told and illustrated (thanks to artist Alexandra Colombo) in the same spirit as Dr. Seuss… and who doesn’t enjoy a quick read with Theodore Geisel?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Two thumbs up for ",
      {
        "type": "emphasis",
        "children": [
          "Michael Recycle"
        ]
      },
      " and its humorous green tips, like…."
    ]
  },
  {
    "type": "list",
    "items": [
      [
        "Quick and Clean! Take shorter showers — unless you’re really, really smelly."
      ],
      [
        "Don’t litter! Make sure your trash ends up where it belongs – in a trash can, or in the back of your closet."
      ]
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
