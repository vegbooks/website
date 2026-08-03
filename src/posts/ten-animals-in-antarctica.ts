import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2021/03/ten-animals-in-antarctica.jpeg",
    "alt": "Ten Animals in Antarctica",
    "href": "/media/2021/03/ten-animals-in-antarctica.jpeg",
    "width": 300,
    "height": 300,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "In blues, browns, and greys, punctuated with the occasional bright red, ",
      {
        "type": "strong",
        "children": [
          {
            "type": "link",
            "href": "https://www.indiebound.org/book/9781623542320",
            "external": true,
            "children": [
              "TEN ANIMALS IN ANTARCTICA by Moira Court"
            ]
          }
        ]
      },
      "turns a simple counting book into a world of cold, windy, seemingly barren discovery. The descriptive list that brings up animals like leopard seals, orcas, krill, and even snow petrels with a depth of adjectives for the animals as well as the landscape. Children will love noticing the spots on the seals, the many legs and appendages of the krill, and the jagged teeth on the blackfin icefish. (Hint: They don’t all have the same amount of teeth, so it’s a counting bonus!)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The illustrations are collages of all different sizes, and Court’s ability to help the animals express anthropomorphic emotions which will appeal to the target audience of 2-5 year olds. Highly Recommended."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
