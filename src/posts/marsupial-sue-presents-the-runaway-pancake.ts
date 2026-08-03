import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Marsupial Sue Presents The Runaway Pancake",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 207,
    "height": 137,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "My kids immediately fell in love with this book, and it quickly became one of their favorites. ",
      {
        "type": "link",
        "href": "http://www.curledupkids.com/msuepanc.htm",
        "external": true,
        "children": [
          "The story"
        ]
      },
      ", written by talented actor and author ",
      {
        "type": "link",
        "href": "http://lollipopbookclub.blogspot.com/2009/05/john-lithgow-childrens-author.html",
        "external": true,
        "children": [
          "John Lithgow"
        ]
      },
      ", takes you along on a fun journey of a pancake being made by Auntie May, who intends to eat it for lunch. The pancake jumps out of the oven and runs away from Auntie May, teasing all the while."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "On its journey, it manages to get away from quite a few characters who would like to make it their lunch. Outwitting the lot of them, the pancake meets its match in the sly old fox, getting too close to him while being so arrogant. The fox, in return, eats it. Yet the pancake lives on its stomach, continuing to sing along."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This entertaining story is catchy, and carries a tune that may get stuck in your head for days. If you can get a copy with the CD of John Lithgow reading the book, your kids will be even more delighted."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegan parents may want to know that the pancake, in the beginning of the story, is made using ",
      {
        "type": "link",
        "href": "http://www.veganoutreach.org/whyvegan/",
        "external": true,
        "children": [
          "eggs, butter and milk"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8. For activities to accompany the book, and other pancake-themed lore, visit ",
      {
        "type": "link",
        "href": "http://www.universalpreschool.com/how-to/pancake_curriculum.asp",
        "external": true,
        "children": [
          "Universal Preschool"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
