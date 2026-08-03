import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Four Famished Foxes and Fosdyke",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In this story by ",
      {
        "type": "link",
        "href": "http://www.pameladuncanedwards.com/",
        "external": true,
        "children": [
          "Pamela Duncan Edwards"
        ]
      },
      ", Fosdyke is different from his siblings. Rather than wanting to go out hunting each night like they do, he likes to cook French food. Each evening, as the other foxes head out for a night of carnivorous hunting, he whips up delicacies that they laugh at him for, claiming he cannot truly be a fox, due to his dietary choices."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Fosdyke is a strong-willed fox, however, who holds his ground and continues to eat the way he prefers to eat, despite their teasing. Then, in an interesting twist, the other foxes find that they are not successful hunters and they are famished. So Fosdyke fixes them one of his French feasts, which they all partake of, loving every bite!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It should be noted that fondue is served at the end, and the feast table features an illustration of fish, although there is no direct mention of it in the story."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Overall, this is a good book about standing up to peer pressure when you make different food choices. It is also a fun story to read, as the author tries to use as many “F’s” as possible."
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
