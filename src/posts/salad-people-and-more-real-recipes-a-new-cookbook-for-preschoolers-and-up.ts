import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/01/978-1-58246-141-0.jpg",
    "alt": "Salad People and More Real Recipes: A New Cookbook for Preschoolers and Up",
    "href": "/media/2011/01/978-1-58246-141-0.jpg",
    "width": 210,
    "height": 271,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This cookbook is probably a great find for vegetarian families — since all of the recipes, geared to preschoolers, are vegetarian — but for vegans like us, it was a bit of a disappointment. ",
      {
        "type": "link",
        "href": "http://www.molliekatzen.com/salad_people.php",
        "external": true,
        "children": [
          "Mollie Katzen’s recipes"
        ]
      },
      " look good, but nearly every single one incorporates non-vegan ingredients, including eggs, dairy, and honey."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "That said, we did try one of the recipes, substituting soy yogurt for the dairy in the Chewy Power Circles, and my daughter loved following the step-by-step illustrations. She also devoured the end result!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "If only the recipes weren’t so explicitly ",
      {
        "type": "emphasis",
        "children": [
          "not vegan"
        ]
      },
      ", I might have run out to purchase this book for my family. As it is, I returned the copy of ",
      {
        "type": "emphasis",
        "children": [
          "Salad People"
        ]
      },
      " to the library, with a sneaking suspicion I may borrow it again soon."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-7, with adult help."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
