import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/05/0800-cv-hr.jpg",
    "alt": "The Jumbo Vegetarian Cookbook",
    "href": "/media/2011/05/0800-cv-hr.jpg",
    "width": 210,
    "height": 235,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.kidscanpress.com/Canada/The-Jumbo-Vegetarian-Cookbook-P5485.aspx",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "The Jumbo Vegetarian Cookbook"
            ]
          }
        ]
      },
      " is a handy resource for vegetarian parents who want to involve their children in the kitchen. Vegan families will have to either skip a number of the recipes or arrange for a work-around where dairy products and eggs are called for. The book contains a nice explanation of many cooking and safety techniques for kids who are unfamiliar with working in the kitchen. There is also a legend that accompanies each recipe, indicating the level of difficulty, time required, number of servings and whether the recipe is suitable for vegans."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Most of the recipes are for pretty standard vegetarian fare, such as hummus, tacos and stir-fry, though there are some more offbeat (and yummy!) recipes to be found as well. The larger font and cheerful graphics make this book kid-friendly. I like that this is a book aimed at veg kids– further validating their compassionate eating choices in a culture that bombards them with so many contrary messages."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This cookbook would be a welcome addition to a vegetarian kid’s shelf. Vegan families may want to peruse this book prior to purchase to see if it fits in with their way of approaching food preparation."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 6 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
