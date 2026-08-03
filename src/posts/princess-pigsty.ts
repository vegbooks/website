import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Princess Pigsty",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Joining ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/princess-smartypants/",
            "children": [
              "Princess Smartypants"
            ]
          }
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "/reviews/do-princesses-wear-hiking-boots/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Do Princesses Wear Hiking Books?"
            ]
          }
        ]
      },
      " in the growing genre of anti-/ alterna-princess lit is the English translation of the German book ",
      {
        "type": "emphasis",
        "children": [
          "Princess Pigsty"
        ]
      },
      ". Fiesty and funny, Cornelia Funke’s picture book even struck a chord with my daughter who genuinely ",
      {
        "type": "emphasis",
        "children": [
          "adores"
        ]
      },
      " princesses."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Families willing to put up with the fact that the heroine of the book, Isabella, cheerfully helps out in the kitchen by plucking pheasants, will delight in the fact that Isabella thoughtfully suggests to her father the king that ",
      {
        "type": "link",
        "href": "http://www.nytimes.com/2009/11/10/science/10angier.html",
        "external": true,
        "children": [
          "pigs are smart"
        ]
      },
      " and perhaps we should not eat them. Veg parents will also appreciate that the story ends by recounting that the young princess sometimes returns to the barn to sleep among the pigs."
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
