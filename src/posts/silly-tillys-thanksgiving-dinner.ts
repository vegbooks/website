import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/11/s-thanksgiving-dinner.jpg",
    "alt": "Silly Tilly’s Thanksgiving Dinner",
    "href": "/media/2010/11/s-thanksgiving-dinner.jpg",
    "width": 210,
    "height": 326,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Silly Tilly is a sweet, and yes silly, mole who invites her friends over for Thanksgiving dinner. She inadvertently a) forgets to make the dinner; and b) gives them recipes instead of invitations. Thinking they’ve been invited to a potluck, the friends converge on Tilly’s home with acorn jam, pine nut cake, cranberry stew, oat bran pudding, and a sweet potato pie."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian and vegan kids will love when the turkey arrives late, exclaiming, “Don’t you know you can’t have Thanksgiving without Mr. Turkey?” and proceeds to take a seat at the table. The tale concludes with the friends popping the corn that the turkey has brought."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This ",
      {
        "type": "link",
        "href": "http://lookingglassreview.com/books/silly-tilly%E2%80%99s-thanksgiving-dinner",
        "external": true,
        "children": [
          "early reader book"
        ]
      },
      " is a great pick for a vegetarian Thanksgiving."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
