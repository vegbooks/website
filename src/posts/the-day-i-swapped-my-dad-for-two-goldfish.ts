import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/06/thedayiswappedwstickerhc-c.jpg",
    "alt": "The Day I Swapped My Dad for Two Goldfish",
    "href": "/media/2011/06/thedayiswappedwstickerhc-c.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "(Warning: contents include animal and human trade.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "What are two goldfish worth? What is a negligent, newspaper-reading dad worth? A mischievous boy and his friends dicker and deal to trade for what most appeals. One fish, two fish, trade dad for goldfish! And Dad barely notices as he gets transferred from house to house because “he doesn’t pay much attention to anything when he’s reading his newspaper.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Of course, Mom orders the narrator to return the goldfish and fetch Dad home immediately, which leads to a wild-dad-chase since he was bartered for an electric guitar, a gorilla mask, and a white rabbit."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A tall fish story of funny proportions, ",
      {
        "type": "link",
        "href": "http://www.neilgaiman.com/works/Books/",
        "external": true,
        "children": [
          "Neil Gaiman"
        ]
      },
      " does it again creating a modern tall tale with a nibble of biting humor. Add in Dave McKean’s fantastic graphic novelesque, collage-style illustrations and an enhanced CD and this story is quite an attractive and entertaining package for kids of all ages."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As a parent and animal lover, I love how Nathan (the boy with two new goldfish the narrator desires) claims higher value by saying “I’ve got two goldfish and you’ve only got one dad.” My four year old relates to the narrator’s argument that Dad has more value and quotes about her own dad, “He’s as big as a hundred goldfish!”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4+.",
      {
        "type": "strong",
        "children": [
          {
            "type": "lineBreak"
          }
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
