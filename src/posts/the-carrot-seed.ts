import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/04/carrot-seed-hc-c1.jpg",
    "alt": "The Carrot Seed",
    "href": "/media/2010/04/carrot-seed-hc-c1.jpg",
    "width": 215,
    "height": 284,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://en.wikipedia.org/wiki/The_Carrot_Seed",
            "external": true,
            "children": [
              "The Carrot Seed"
            ]
          }
        ]
      },
      " is a board book about a little boy who plants a seed and patiently awaits its sprout. While not pertaining to animals, the book illustrates the sense of awe for and love of the earth natural to children."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The little boy ignores his parents and older sibling when they explain that the seed will not sprout. Instead, he lovingly tends to the plot of earth where the seed lies each day despite there being no sign of growth. When a carrot finally comes up, the heretofore monochromatic and delightfully simple illustrations sprout with color. The carrot comes up “just as the little boy had known it would.” The confidence that the boy displays is an important reminder to children to trust themselves–and nature."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages baby to 3."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
