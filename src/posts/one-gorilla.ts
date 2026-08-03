import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/02/9780763663520.jpg",
    "alt": "One Gorilla",
    "href": "/media/2013/02/9780763663520.jpg",
    "width": 210,
    "height": 241,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Counting books can be a wonderful way to engage young children. Filled with pictures and numbers it can quickly be used as a tool to help them learn counting skills. With ",
      {
        "type": "emphasis",
        "children": [
          "One Gorilla: A Counting Book"
        ]
      },
      " (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0763663522/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0763663522&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "affiliate link"
        ]
      },
      "), children will gain those beginning counting skills, but they benefit in other ways as well, such as gaining an appreciation for art."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a great book, not as much for the counting as for the amazing artwork throughout it. Each page is illustrated with beautiful images of animals, including a gorilla, orangutans, chimpanzees, mandrills, baboons, and others. Viewing these beautiful pages children will also learn at the end that all the animals in the book have something in common – they are all primates, and all part of our family."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There is nothing in this book that vegetarian and vegan parents would not want their children being exposed to, and plenty that they would! Anthony Browne has written and illustrated this beautiful piece of artwork that makes a great addition to any preschooler’s book collection."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The ",
          {
            "type": "link",
            "href": "http://www.candlewick.com/",
            "external": true,
            "children": [
              "publisher"
            ]
          },
          " provided a copy of this book for review."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
