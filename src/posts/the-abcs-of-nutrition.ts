import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/04/cover-r3.jpg",
    "alt": "Cover_r3",
    "href": "/media/2013/04/cover-r3.jpg",
    "width": 210,
    "height": 179,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This is a book for children with active minds and bodies. ",
      {
        "type": "emphasis",
        "children": [
          "The ABCs of Nutrition"
        ]
      },
      " by Robert Orchanian teaches children (ages 2 to 5) the abc’s and introduces them to vegetables and fruit with a colorful cast of home grown characters which the author refers to as the Snack Pack (Smart Nutritionally Active Kids)*. Andrew Birdman’s vegetable characters are playful and as the author says ‘active.’ There is a date in standing tree yoga pose, a fig jumping rope and a golfing quince. Children will learn about all kinds of fruits and vegetables like ugli fruit, quince and kiwis other than the BASICS (bananas, apples, sweet potato, carrot and squash). and will be curious to try different activities like yoga, karate, ballet and lacrosse."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The ABCs of Nutrition"
        ]
      },
      " (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/B00C302JTK/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00C302JTK&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ") is fun and adventuresome; a great tool for teaching the alphabet as well as a way to broaden a child’s palette. I reviewed the online galley of this book but look forward to flipping the pages of the soft-bound book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Personally, I think the title could be better. Fruits and vegetables are only one part of healthy, balanced nutrition. A title like Alphabet Garden or The ABCs of Eating Fruits and Veggies seems more suitable, but then again I have a unique perspective having recovered from an eating disorder."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Overall Orchanian’s book is a sensory delight."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "* ",
      {
        "type": "emphasis",
        "children": [
          "Personally, I would say Smart, Nutritionally Aware Kids."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
