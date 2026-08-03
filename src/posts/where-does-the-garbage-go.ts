import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Where Does the Garbage Go?",
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
          "Where Does the Garbage Go?"
        ]
      },
      " is an interesting book to read with children and use as a teaching tool. It demonstrates the entire process of where our garbage goes, how much we produce per day and what we can do to try to do better."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Children will learn what happens when they ",
      {
        "type": "link",
        "href": "http://www.cooperator.com/articles/1323/1/Where-Does-the-Garbage-Go/Page1.html",
        "external": true,
        "children": [
          "throw something in the trash"
        ]
      },
      ", as well as the process something undergoes that was put into the recycling bin. The book also offers various tips for helping the environment, from taking reusable bags to the store to putting wood scraps in the compost pile."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Both adults and children can learn a great deal from this simple, yet explanatory and interesting, book. There is one mention of putting food we don’t eat in the garbage can, such as chicken bones. Beyond that, vegetarian and vegan parents will mostly likely find this book to be a great fit for their collection."
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
