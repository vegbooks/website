import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/11/cover-farmer-w-ill-allen.jpeg",
    "alt": "Cover-Farmer WIll Allen",
    "href": "/media/2013/11/cover-farmer-w-ill-allen.jpeg",
    "width": 210,
    "height": 282,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Farmer Will Allen and the Growing Table"
        ]
      },
      " tells a true story about how a professional basketball player took action after retirement. He wanted to bring more healthy and natural foods to communities that didn’t have access to them, so he bought some land that had greenhouses. From there, his idea took root and flourished!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Farmer Will Allen grew his growing table from a small place to something large enough to offer food to the community. He added many different types of fruits, vegetables, and got the community members involved in helping to make the farm a success. Children learned how to grow their own food and became actively involved in the whole process. The book even explains how composting was used to create good growing soil."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Over all this book has a positive message and my kids enjoyed it. Vegetarian and vegan parents may want to know there is meat included in this farm. There are mentions of ham, and animals were added to the farm, including fish, goats, chickens, turkeys, and bees. There are also illustrations that have flesh on the table, such as fish and a turkey."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 6 to 8."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The ",
          {
            "type": "link",
            "href": "http://www.readerstoeaters.com/books/will-allen-and-the-growing-table/",
            "external": true,
            "children": [
              "publisher"
            ]
          },
          " provided a review copy of this book."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
