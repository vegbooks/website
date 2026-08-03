import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/allthe-seasons.jpg",
    "alt": "All the Seasons of the Year",
    "href": "/media/2011/07/allthe-seasons.jpg",
    "width": 210,
    "height": 261,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Year-long Forecast: 100% chance of love."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.deborahleerose.com/",
        "children": [
          "Deborah Lee Rose"
        ]
      },
      " writes a sweet story of cherishing children through each literal and metaphorical season of the year. She rains poetic descriptions of each season beginning with fall and follows up with warm rhymes demonstrating examples of outdoor quality time activities with the child. Written like a loving note a parent sends to a child, it simultaneously sends a personal message to children as well as models affectionate parenting. Kay Chorao offers sunny and colorful illustrations depicting an anthropomorphized mother cat and her child enjoying each season together."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
