import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/s-gba.jpg",
    "alt": "Sally’s Great Balloon Adventure",
    "href": "/media/2010/06/s-gba.jpg",
    "width": 269,
    "height": 358,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This beautifully illustrated book by ",
      {
        "type": "link",
        "href": "http://www.dogmt.com/",
        "external": true,
        "children": [
          "Stephen Huneck"
        ]
      },
      " follows Sally the black dog as she accidentally embarks on a hot air balloon adventure. It’s hard not to fall in love with Mr. Huneck’s technique, which he describes in detail at the end of the book. Kids will also love Sally’s unflappable demeanor in a situation that might be alarming to some."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Veg kids, parents, and ",
      {
        "type": "link",
        "href": "http://www.vegsoc.org/teachers.html",
        "children": [
          "teachers"
        ]
      },
      " will cheer when the whole world comes together to rescue Sally — and an ingenious little girl finally does. Still, while the dog’s fascination with the contents of the balloon gondola is certainly understandable, some veg kids may feel uncomfortable that fried chicken figures so heavily into the plot, especially if their own dog is ",
      {
        "type": "link",
        "href": "http://www.vegandogslife.com/",
        "external": true,
        "children": [
          "vegetarian"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
