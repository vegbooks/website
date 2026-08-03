import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/04/0395797241-lres1.jpg",
    "alt": "The Great Pig Escape",
    "href": "/media/2010/04/0395797241-lres1.jpg",
    "width": 210,
    "height": 200,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "The last laugh is on the farmers in ",
      {
        "type": "emphasis",
        "children": [
          "The Great Pig Escape"
        ]
      },
      " by ",
      {
        "type": "link",
        "href": "http://www.christelow.com/",
        "external": true,
        "children": [
          "Eileen Christelow"
        ]
      },
      ". Bert and Ethel decide to try their hand at pig farming. When it’s time to take the pigs to auction, the pigs concoct an escape plan that includes pilfering clothes, impersonating townspeople and boarding a bus to Florida. Bert and Ethel search all over town for the pigs but don’t discover what happened to them until months later when, having returned to vegetable farming, they receive a box from Florida with the missing clothes and a postcard that merely says “Oink!”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The illustrations really capture the humor and hijinks of the story, enhancing it with nice wit and detail. Children will root for the clever pigs and laugh at the clueless farmers and townsfolk. This is a lighthearted animal liberation story, with the pigs in charge of their own rescue. Great for reading aloud."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
