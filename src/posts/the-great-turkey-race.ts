import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/03/great-turkey-race.jpg",
    "alt": "The Great Turkey Race",
    "href": "/media/2012/03/great-turkey-race.jpg",
    "width": 210,
    "height": 265,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The Great Turkey Race"
        ]
      },
      "starts with a silly premise. The turkeys have overheard the farmer saying one of them will be the Thanksgiving turkey, and so they begin a competition — the great turkey race — to determine who the lucky bird will be."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Of course, vegetarian and vegan kids know that the Thanksgiving turkey is not lucky at all, and fortunately, the turkeys in this story figure it out too, leaping over the barnyard fence to freedom."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Like ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/turk-and-runt/",
            "children": [
              "Turk and Runt"
            ]
          }
        ]
      },
      "and ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/run-turkey-run-2/",
            "children": [
              "Run, Turkey, Run"
            ]
          }
        ]
      },
      ", this book gives kids a chance to root for the Thanksgiving turkey — all the while providing a non-threatening approach to beginning to think about ",
      {
        "type": "link",
        "href": "/reviews/garlic-onion-beet-spinach-mango-carrot-grapefruit-juice/",
        "children": [
          "what it must be like to be food"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "With the turkeys gone, readers will be delighted to discover, the farmers sit down to a Thanksgiving dinner replete with veggies."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Although Thanksgiving comes but once a year, many vegetarian and vegan kids will enjoy this book year-round. And when you start planning your Thanksgiving fare, pair this delectable book with Nathalie VanBalen’s ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/happy-thanksliving/",
            "children": [
              "Happy Thanksliving"
            ]
          }
        ]
      },
      " for a literary feast!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3 to 7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
