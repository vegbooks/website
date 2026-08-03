import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Butterfly Counting"
        ]
      },
      " is much more than a colorful counting book. It is a butterfly-focused collection of gorgeous artwork, a language book, and a mini-encyclopedia of facts about butterflies, moths, a grasshopper, and even a penguin!"
    ]
  },
  {
    "type": "image",
    "src": "/media/2016/01/butterfly-counting.jpg",
    "alt": "butterfly-counting",
    "width": 480,
    "height": 360,
    "align": "center"
  },
  {
    "type": "paragraph",
    "children": [
      "The author’s sense of humor comes through in the introductory pages that point out that there are no butterflies in Antarctica, and in a gentle joke about counting twenty “butterflies.” The pages are filled with interesting and fun facts about 25 different butterflies from around the world. A particularly fantastic aspect of Butterfly Counting is providing the word for “butterfly” in more than two dozen languages, including Swahili, Portuguese, and Turkish."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The illustrations are detailed and realistic, and they show gorgeous wings, habitats, and even butterfly eggs. Counting the various butterflies will be both engaging and challenging. The designs are astounding and will encourage both children and adults to learn more about the world around them."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3 to 7."
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
            "href": "http://www.charlesbridge.com/",
            "external": true,
            "children": [
              "The publisher"
            ]
          },
          " sent a copy of this book for an honest review."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
