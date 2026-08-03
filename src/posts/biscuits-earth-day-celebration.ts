import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/04/s-earth-day-celebration.jpg",
    "alt": "Biscuit’s Earth Day Celebration",
    "href": "/media/2010/04/s-earth-day-celebration.jpg",
    "width": 240,
    "height": 240,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This new title from Alyssa Satin Capucilli introduces kids to the concept of Earth Day and provides suggestions for how kids can take care of the earth. I appreciate that the author considers caring for animals to be a part of caring for the earth. And of course kiddo loves ",
      {
        "type": "link",
        "href": "/reviews/biscuit/",
        "children": [
          "Biscuit"
        ]
      },
      "!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Among the ideas presented are conserving water, planting a garden, cleaning up trash, providing nesting material for birds, and using cloth bags to go shopping. Although it’s not mentioned in the book, veggie kids can add ",
      {
        "type": "link",
        "href": "http://www.treehugger.com/files/2009/03/vegetarian-diet-could-cut-climate-change-mitigation-costs-by-70-percent.php",
        "external": true,
        "children": [
          "eating plant-based foods"
        ]
      },
      " to the list!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-6."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
