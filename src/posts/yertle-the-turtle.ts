import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "My three-year-old son has recently become interested in Dr. Seuss’s ",
      {
        "type": "emphasis",
        "children": [
          "Yertle the Turtle"
        ]
      },
      ", which seems appropriate in this political climate. My seven-year-old has even started asking to read it."
    ]
  },
  {
    "type": "image",
    "src": "/media/2016/12/9780394800875.jpg",
    "alt": "Yertle",
    "width": 2474,
    "height": 3375
  },
  {
    "type": "paragraph",
    "children": [
      "It’s Dr. Seuss, but it seems more poignant than most of his stories. It’s the story of a turtle who is king of his pond, of all he can see, but yearns for more. So he commands the other turtles to pile themselves up into a tower so that he can see more, and thus be king of more: “I’m king of a house! I”m king of a cow! I’m king of a tree!”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As his hunger for power grows, a turtle at the bottom of the pile comes up with a plan to topple the mighty king’s tower. In the end, Yertle the Turtle King is only king of the mud. It ends with my favorite line, “And the turtles, of course… all turtles are free, as turtles and maybe, all creatures should be.” There is so much to this story that can be used to start great conversations."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Amazon recommends this book for ages 5-9 (",
      {
        "type": "link",
        "href": "http://amzn.to/2ibZ1NS",
        "external": true,
        "children": [
          "affiliate link"
        ]
      },
      "), but it seems 3-9 is more appropriate."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
