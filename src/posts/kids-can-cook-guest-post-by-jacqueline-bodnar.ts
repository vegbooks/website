import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/01/kids-can-cook1.jpg",
    "alt": "Kids Can Cook",
    "href": "/media/2010/01/kids-can-cook1.jpg",
    "width": 210,
    "height": 242,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "As most parents know, it is important to get vegetarian kids in the kitchen. The more they cook, the more they learn how to prepare healthy and tasty vegetarian food, which are skills that can last a lifetime. Those kids that have their own cookbook like the idea of getting in the kitchen and cooking even more."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Kids Can Cook"
        ]
      },
      " is a vegetarian cookbook that is specifically for kids. The recipes are designed to be easy to follow, with manageable tasks. Most recipes will require the help of an adult if kids are not yet ready to use a sharp knife or use the stove."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Some recipes call for honey, eggs or milk. However, it is simple to make substitutions in order to have vegan recipes. There are a limited number of black and white photos included, which makes being able to imagine the prepared dishes a little more necessary."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The recipes are tasty and the kids will likely enjoy them, especially such dishes as the BBQ tofu, apple walnut salad, and banana pudding. This book is a great way to get vegetarian kids more interested in cooking — especially if given the opportunity to choose what recipes to prepare."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
