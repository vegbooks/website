import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/07/munchie.jpg",
    "alt": "Munchie Madness",
    "href": "/media/2010/07/munchie.jpg",
    "width": 213,
    "height": 320,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Being a big fan of getting kids interested in cooking, I was excited to come across a vegetarian cookbook that is aimed at teens. ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.vegfamily.com/book-reviews/munchie-madness.htm",
            "external": true,
            "children": [
              "Munchie Madness: Vegetarian Meals for Teens"
            ]
          }
        ]
      },
      " is a cookbook that goes right to the heart of most teenagers, giving them information on how to make many of their favorites – everything from pizzas and smoothies to burgers, tasty treats and desserts!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Refreshingly, this book opens by providing information about the conditions that most animals endure in the meat and dairy industry. It then progresses from providing information about cruelty to animals to offering a bevy of nutritional tips for the vegetarian teen. Finally, it offers quick lunch ideas and a host of recipes for foods that most teens would adore, including French fries, chili dogs, and even falafel."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While the broader term “vegetarian” is depicted in the title, all 120 quick recipes appeared to be vegan and are easy enough for teens to follow. If you have a teen vegetarian or know one, this is an ideal book to help them start learning how to prepare their own tasty, healthy, vegan meals!"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
