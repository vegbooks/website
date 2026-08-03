import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/05/9781435828605.png",
    "alt": "Make and Eat Vegetarian Food",
    "href": "/media/2010/05/9781435828605.png",
    "width": 211,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Most children love helping to cook, and learning to cook healthy vegetarian food is a skill that will last them a lifetime."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Make and Eat Vegetarian Food"
        ]
      },
      " by Susannah Blake is a vegetarian cookbook for kids ages 9-12. The cookbook offers detailed instructions and images showing, step by step, how to prepare each ingredient, making it simple and interesting to follow along."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Young cooks will be introduced to making such dishes as chunky pasta, ",
      {
        "type": "link",
        "href": "http://www.theppk.com/recipes/dbrecipes/recipe.php?MainID=1",
        "external": true,
        "children": [
          "tofu"
        ]
      },
      " kebabs, tasty hummus, and baked potato with chili, among other recipes. The book also includes helpful information about kitchen equipment, which will be easy for kids to understand."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://veganhealth.org/articles/realveganchildren",
        "external": true,
        "children": [
          "Vegan parents"
        ]
      },
      " should take note that not all of the recipes are vegan; dairy is touted as a healthy part of a balanced diet, and a recipe is included for scrambled eggs. One of the downsides to this book is that the author could have put more emphasis on ",
      {
        "type": "link",
        "href": "http://www.vrg.org/nutrition/protein.htm",
        "external": true,
        "children": [
          "plant-based protein"
        ]
      },
      ", rather than including so much discussion of non-vegetarian sources and dairy. She also states that meat and fish provide protein and that, if you take them out of your diet, you need to find other good sources to replace them. In actuality, many vegetarian children have never had those items in their diet to begin with."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
