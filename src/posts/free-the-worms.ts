import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/05/free-the-worms.jpg",
    "alt": "Free the Worms!",
    "width": 209,
    "height": 314,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.katiekazoo.com/books.html",
        "external": true,
        "children": [
          "Katie Kazoo, Switcheroo"
        ]
      },
      " is a series of books about a young girl. In ",
      {
        "type": "emphasis",
        "children": [
          "Free the Worms"
        ]
      },
      ", she is at odds with the notion that she is a vegetarian and her teacher wants the class to gather worms to feed to the classroom snake."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While gathering worms with the other students, she learns that they will become food for the snake. She sets hers free and tells the other kids to do the same. She is uncomfortable being responsible for the death of the worm, and at the notion that any will be fed to the snake."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "After the children return to school, a magic wind comes along, allowing Katie the chance to see what it is like to be the snake. When the magic wind turns her back into herself, she comes to terms with the idea of feeding the worms to the snake."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "What she learned is that humans have ",
      {
        "type": "link",
        "href": "http://www.hsus.org/farm/news/ournews/greger_dvds_nutrition_06209.html",
        "external": true,
        "children": [
          "dietary choices"
        ]
      },
      ", but that other animals in nature are not created the same way."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is helpful in teaching kids about why they may be vegetarian and yet ",
      {
        "type": "link",
        "href": "http://kidsplanet.org/tt/index.html",
        "external": true,
        "children": [
          "other animals are not"
        ]
      },
      ". It is refreshing to read that Katie is a vegetarian and not afraid to let her teacher and class know about her beliefs."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
