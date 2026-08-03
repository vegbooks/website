import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/duck-soup-hc-c.jpg",
    "alt": "Duck Soup",
    "href": "/media/2010/06/duck-soup-hc-c.jpg",
    "width": 222,
    "height": 212,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In ",
      {
        "type": "emphasis",
        "children": [
          "Duck Soup"
        ]
      },
      " by ",
      {
        "type": "link",
        "href": "http://www.jackieurbanovic.com/",
        "external": true,
        "children": [
          "Jackie Urbanovic"
        ]
      },
      ", all of Max’s friends believe he must have fallen into a pot of soup he was preparing. Frantic to get their friend out of the pot of soup, they strain it and search for him in all of the vegetables they come across, questioning whether they might be body parts."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Meanwhile, Max (who is a duck) has actually slipped outside into the herb garden to gather chives, which he feels is the missing ingredient in his soup. When Max comes back in, much to the surprise of his friends, he finds that they have pretty much dumped his entire pot of soup down the drain in an effort to save him."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.goodreads.com/book/show/2619209.Duck_Soup",
        "external": true,
        "children": [
          "This is a cute story about helping friends"
        ]
      },
      ", and conceivably saving a duck from being eaten, at the same time. In the end, the soup is lost, but the friends all gather to dine on pizza, salad, etc. Vegetarian parents may care to know that other non-vegetarian soups are mentioned as ones that Max had made in the past, and that, in the end, the pizza is topped with fish."
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
