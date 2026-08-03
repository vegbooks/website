import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/01/9781434219923.jpg",
    "alt": "Wonder Woman Rumble in the Rainforest",
    "href": "/media/2011/01/9781434219923.jpg",
    "width": 210,
    "height": 295,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Meet Gorilla Grodd, a brainiac super ape with the power of mind control and a zest for conquering the world. And Poison Ivy, a femme fetal with a keen relationship with all things plant-based and a self-preserving interest in their wellbeing. Normally these two DC Comic villains would be involved in serious combat with heroine Wonder Woman (whose everyday persona is Princess Diana of Themyscira), but in ",
      {
        "type": "link",
        "href": "http://www.capstonepub.com/product/9781434219923",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Rumble in the Rainforest"
            ]
          }
        ]
      },
      " they’re in cahoots to defeat an even bigger threat: Mr. Javlar of Javlar Industries."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Javlar owns a sizeable portion of the rainforest on which he claims to operate a water treatment plant, but Wonder Woman’s gut instincts inform her he’s up to something more sinister. In reality, Javlar is harvesting old growth lumber in the forest — unsustainably of course — and setting fire to the remaining tracts of desolate land. All this has caused massive soil erosion, muddied waters, and devastation for animal and plant life, the latter being the reason for Gorilla Grodd and Poison Ivy’s involvement."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I love this book for its fast-paced, energetic momentum, but also for its messaging. Wonder Woman, I think, sums it up nicely in one of her poignant reflections:"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "How does one “own” a tree? What about the animals that made it a home, the oxygen it produced, the carbon dioxide it clean from the air? Could a person “own” all of that?"
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
