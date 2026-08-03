import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/01/ll-always-be-your-friend.jpg",
    "alt": "I’ll Always Be Your Friend",
    "href": "/media/2011/01/ll-always-be-your-friend.jpg",
    "width": 210,
    "height": 211,
    "align": "right"
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=006029485X",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      "As the name suggests, ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/006029485X?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=006029485X",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "I’ll Always Be Your Friend"
            ]
          }
        ]
      },
      " is a story about loyalty and trust—but it’s also a story about independence. At the beginning of the story, mother fox and her little fox are playing games together in a field. It starts getting dark, so mother fox calls little fox home—but little fox still wants to play! Surprise, surprise, I think most kids will relate to this. So little fox wanders off and tells his mother that he won’t be her friend anymore. Night approaches quickly, and little fox, who is all alone, gets spooked by the shadows and noises—so he starts running. He runs into his mom, who is waiting for him on the top of the hill. They become “friends” again, and mother fox lovingly tells little fox that she will ",
      {
        "type": "emphasis",
        "children": [
          "always be his friend"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a simple story with a good message. It highlights a mother’s unconditional love for her young and shows that no matter what happens, a mother will always be there. For kids, the message is very reassuring."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
