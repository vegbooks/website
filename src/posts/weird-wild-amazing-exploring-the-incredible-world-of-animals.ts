import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2020/05/weird-wild-amazing.jpg",
    "alt": "Weird, Wild, Amazing! Exploring the Incredible World of Animals",
    "href": "/media/2020/05/weird-wild-amazing.jpg",
    "width": 301,
    "height": 400,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781324015437",
        "external": true,
        "children": [
          "Tim Flannery’s WEIRD, WILD, AMAZING!"
        ]
      },
      " is a must-have for any child who loves fauna of any kind. And who doesn’t? If the Star-Nosed Moles don’t convince you, perhaps the Hoatzins will. And if animals you are unfamiliar with aren’t what you prefer, weird and gross facts about whales, giraffes, and lions may be what convince you to return to this delightful collection of details, figures, and silly (but true!) anecdotes about animals from every type of environment. The bright illustrations by Sam Caldwell ensure that both children and adults will find reasons to flip the pages back and forth for hours on end."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This busy and vibrant picture book is filled with strange eating habits and astounding talents of various animals. However, what makes it especially impressive is the sheer volume of bizarre and funny highlights that show us how very different and surprisingly similar various animals around our Earth are. Children of a certain age will appreciate the various references to poop, and others will be grossed out with curiosity by the meals preferred by various birds and furry critters. The illustrations are age appropriate in that they hint at nature’s gore without being overly realistic."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Which sea dweller is born with a baby mustache that falls off within a week? Which mammal has venomous “spurs” that can be used as a deadly defense? And which desert animal emits a piercing shriek when threatened? Kids and adults will have a lot of fun – and learn even more – as they travel through this fantastic book together."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Highly recommended."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
