import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Chicken in the Kitchen",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Uh oh"
        ]
      },
      ", I thought when I first viewed this title in our local library. ",
      {
        "type": "emphasis",
        "children": [
          "I’m going to hate this book."
        ]
      },
      " Happily, I soon discovered that no harm comes to the chicken in ",
      {
        "type": "link",
        "href": "http://www.jacketflap.com/persondetail.asp?person=154542",
        "external": true,
        "children": [
          "Tony Johnston"
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "http://authors.simonandschuster.net/Eleanor-Taylor/19010824",
        "external": true,
        "children": [
          "Eleanor Taylor’s"
        ]
      },
      " silly book. When she invades the dog’s kitchen, the canine doesn’t so much as shoo her out. He tries to feed her, he listens to her heart with a stethoscope to make sure she’s OK, and he even goes so far as to chop up his broom to create nesting materials for her. So far, so good."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Before long, however, the chicken brings the straw from the broom into the kitchen and it’s obvious that she’s going to lay some eggs. ",
      {
        "type": "emphasis",
        "children": [
          "OK, here’s where it all will fall apart"
        ]
      },
      ", the vegan voice inside me chimed. ",
      {
        "type": "emphasis",
        "children": [
          "The dog’s going to fry up her eggs."
        ]
      },
      " But no! The dog watches patiently as the hen nests, and when chicks hatch from the eggs, his reaction is this: “How my heart quickens — a whole kitchen full of chickens!”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This delightful book is a steal on ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0689856415/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0689856415",
        "external": true,
        "children": [
          "Amazon"
        ]
      },
      " ($1.89 + shipping, last I checked). It would make a nice addition to any vegetarian kid’s bookshelf."
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
