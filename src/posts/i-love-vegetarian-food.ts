import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/02/i-love-vegetarian-food.jpg",
    "alt": "I Love Vegetarian Food",
    "href": "/media/2013/02/i-love-vegetarian-food.jpg",
    "width": 216,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "The ",
      {
        "type": "link",
        "href": "http://www.etsy.com/listing/124901374/i-love-vegetarian-food-coloring-book-for",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "I Love Vegetarian Food"
            ]
          },
          " coloring book"
        ]
      },
      " by Ashley Lucas features cute, delightful drawings of a variety of yummy veg food, all just waiting to be colored or painted by little — or big — hands."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "/reviews/i-love-ny-food/",
        "children": [
          "I reviewed Ms. Lucas’s ",
          {
            "type": "emphasis",
            "children": [
              "I Love New York Food"
            ]
          },
          " coloring book"
        ]
      },
      " in 2011 and there is no difference in her style from that coloring book to this one. Her brightly sketched but simple illustrations are just right for kids of all ages. Note the title of this book, it is indeed vegetarian but very vegan friendly. Vegan families: there are some mentions of dairy. As I observed in my review of ",
      {
        "type": "emphasis",
        "children": [
          "I Love New York Food"
        ]
      },
      ", many veg kids are used to vegan versions of foods like cheese and meat, so my suspicion is that this will not be an issue (it hasn’t been in our house). There are also pages devoted to falafel, vegan cupcakes, tofu and all different types of produce as well as some simple recipes sprinkled throughout."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I really like Ms. Lucas’s style with her friendly, smiley food and generous smatterings of hearts. I look forward to seeing what she comes up with next, but more tellingly, I will share that my child glanced at some of the pages on my screen as I was reviewing it. After scrolling through the entire book twice, I was beseeched to get it for our family because “it looks so cool with so many foods I love that are drawn with hearts around them.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Copious amounts of coloring ensued."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Great for ages 1 to 100."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "A review copy was provided by the author."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
