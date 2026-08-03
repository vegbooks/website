import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/05/9780763623555.jpg",
    "alt": "Necks Out for Adventure!",
    "href": "/media/2011/05/9780763623555.jpg",
    "width": 210,
    "height": 211,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "If you’re ready for a quirky adventure story told from the perspective of a clam, then ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://literatelives.blogspot.com/2008/02/necks-out-for-adventure.html",
            "external": true,
            "children": [
              "Necks Out for Adventure!"
            ]
          }
        ]
      },
      " by Timothy Basil Ering is the book for you."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "“",
      {
        "type": "emphasis",
        "children": [
          "For as long as anyone could remember, the wiggleskins would not leave the mud. While the currents flowed back and forth over their heads, they all lived by a simple system. Necks out to eat and necks in to hide"
        ]
      },
      ".”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "So begins the story — true, we’re told — of Edwin Wiggleskin, a clam who dared to ask a very big question: What would happen if the wiggleskins left the mud and flowed with the current? When his people are snatched by a clammer, Edwin doesn’t just ask the question, but he puts his neck out for adventure and gives it a go. Daring to go where no clam has gone before, Edwin ventures onto shore and to the clammer’s shack, where he narrowly avoids a soup pot and ends up saving his mom, dad, and all the clams by convincing them to leave their shells and venture out on their own."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegan and vegetarian families will appreciate that this story illustrates what it must feel like to be someone else’s food. While we can’t know for sure ",
      {
        "type": "link",
        "href": "http://www.thefishsite.com/articles/199/can-fish-suffer-perspectives-on-sentience-pain-fear-and-stress",
        "external": true,
        "children": [
          "whether clams are actually sentient"
        ]
      },
      ", like this story portrays, we do know that it’s better to ",
      {
        "type": "link",
        "href": "http://www.veganoutreach.org/enewsletter/fish.html",
        "children": [
          "err on the side of caution"
        ]
      },
      "."
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
