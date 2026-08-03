import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/09/garden-for-pig.jpg",
    "alt": "A Garden for Pig",
    "href": "/media/2010/09/garden-for-pig.jpg",
    "width": 210,
    "height": 298,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "A Garden for Pig"
        ]
      },
      "is a new title that encourages kids to grow and eat their veggies. Based on a true story, in which a pig breaks into a neighboring garden, eats some squash, and “delivers” the seeds to his own pen, Kathryn Thurman’s picture book is sure to get some laughs."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The mischievous character Pig lives on an apple orchard and longs for vegetables. He just can’t help himself from breaking into a neighbor’s vegetable garden and devouring all the beautiful things that are growing there. Vegetarian and vegan parents will enjoy pointing out many of the garden vegetables which are staples of a plant-based diet."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While Pig might be upset about the menu choices he’s offered day after day, I for one found the selections to be tantalizing. I would pretty much be happy eating homemade apple sauce every meal this time of year, so if Pig doesn’t want his ",
      {
        "type": "link",
        "href": "http://www.ifood.tv/recipe/spiced-apple-flambe",
        "external": true,
        "children": [
          "apple flambe"
        ]
      },
      ", he can send it to me! Your kids might even request ",
      {
        "type": "link",
        "href": "http://www.chooseveg.com/vegan-dessert-recipes.asp",
        "external": true,
        "children": [
          "fruit-based desserts"
        ]
      },
      " when they finish this book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Observant readers will delight in Lindsay Ward’s multimedia illustrations, which incorporate apple recipes, and those readers with a bit of land of their own will appreciate Thurman’s organic gardening tips at the back of the book. (The only mention of animal products occurs when Thurman says that along with many other items, eggs can be made into compost.)"
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
