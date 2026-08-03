import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/03/here-come-humpbacks-300-2.jpg",
    "alt": "Here Come the Humpbacks!",
    "href": "/media/2013/03/here-come-humpbacks-300-2.jpg",
    "width": 210,
    "height": 163,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "We’re in the midst of whale watching season here in coastal California and what better way to get in the mood than with this stunningly illustrated book: ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.charlesbridge.com/productdetails.cfm?PC=5717",
            "external": true,
            "children": [
              "Here Come the Humpbacks!"
            ]
          }
        ]
      },
      "by April Pulley Sayre. One of the strongest assets of this book are the pastel illustrations by Maine-based artist Jamie Hogan which take you into the vibrant waters with the whales. Kids will want to slap their fins on the surface of the water, blow bubbles from their blowhole, absorb the natural beauty of this underwater world, and narrowly escape danger, just as protagonists – mamma whale and her baby – do in this whale of a tale (forgive me for being so cliche)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story narrates the migratory experience of these two Atlantic Ocean humpbacks, from the warm waters of the Caribbean to their secondary home off the Maine Coast and all that they encounter along the way, starting with the baby’s birth and addressing his first encounters with whale song, play, whale-watching tourists, skirmishes between whales, pollution, feeding, shipping lanes, hungry orcas, and even whale poop (did you know, it can be pink?)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Sayre has told a beautifully poetic story, one that will surely leave an impact on any reader. While the main text pops with more energetic text and onomatopoeia (“splash,” “whiss,” “snort”), a secondary narrative can be read throughout the book which explains phenomenon in further detail: humpback songs, whale-watching rules, escort whales, and much more. Overall, I give this book two big thumbs up for its beauty, writing style, information, and conservation message."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 – 7."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The publisher provided a review copy of this book."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
