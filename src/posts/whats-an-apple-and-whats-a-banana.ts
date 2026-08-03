import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2017/01/9781419721403.jpg",
    "alt": "9781419721403",
    "width": 1110,
    "height": 1110
  },
  {
    "type": "paragraph",
    "children": [
      "I received these two books from the publisher for review. They are cute books appropriate for a baby or young toddler."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Each book is a silly celebration of the fruit in the title. The basic structure is the same for each. A bunch of silly things are proposed for each fruit–“You can wash it, try to squash it, or pretend that it’s a ball”–each with cute drawings of two children doing the action described. But in the end it is decided that to eat the fruit is best."
    ]
  },
  {
    "type": "image",
    "src": "/media/2017/01/9781419721397.jpg",
    "alt": "9781419721397",
    "width": 792,
    "height": 792
  },
  {
    "type": "paragraph",
    "children": [
      "The books would make great baby gifts."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
