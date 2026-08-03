import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/one-red-apple-cover.jpg",
    "alt": "One Red Apple",
    "href": "/media/2011/07/one-red-apple-cover.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/book/show/6588611-one-red-apple",
        "external": true,
        "children": [
          "charming book"
        ]
      },
      " has beautiful paintings and a lovely message for all ages. It follows the journey of a red apple from a tree to being picked, driven to market, purchased, and enjoyed. (I will mention that the pages where the apples are driven to market do include a family farm countryside with farm animals in the grass outside in case that imagery is of concern to someone.) The apple core is left for the birds to eat and the seeds scatter on the wind to later become trees. The page illustrating the apple tree’s growth is a lift the flap that transitions a small tree into a large one which is a neat feature."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The thing that touched me most about ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.superkidsnutrition.com/nutrition_resources/bc_oneredapple.php",
            "external": true,
            "children": [
              "One Red Apple"
            ]
          }
        ]
      },
      " is the ending where children holding bags of apples say, “Thank you, bird, winds, sun, and bees. Thank you, earth, for one red apple.” I think the book is a wonderful choice for veg families and the living things in the book (bees, birds, dogs, humans) are all exemplifying respect and gratitude for nature and one another."
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
