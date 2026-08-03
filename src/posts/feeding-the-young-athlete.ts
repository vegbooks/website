import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/11/cover-feeding-the-young-athlete.jpg",
    "alt": "Cover-Feeding the Young Athlete",
    "href": "/media/2013/11/cover-feeding-the-young-athlete.jpg",
    "width": 208,
    "height": 320,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "As a parent raising two veg kids I am always a little skeptical when I come across books recommending food. You just never know what you will get. But I have two athletic children (and a very athletic vegetarian husband) and was interested in seeing what ",
      {
        "type": "emphasis",
        "children": [
          "Feeding the Young Athlete"
        ]
      },
      " had to offer."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book is written in nice and easy terms and has a good layout that makes it appealing to the reader. It does offer some good information regarding being hydrated, making homemade sports drinks, and some snacks. But there are also a lot of messages in there that vegetarian and vegan parents may want to avoid sending to their young athletes."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Throughout the book there is really an emphasis on meat and eggs as the best protein sources. Eggs are especially promoted to the vegetarian athlete. Other plant-based sources are mentioned, but the overall message is animal products are superior. The author even goes as far when discussing amino acids as to say that eating a roasted chicken leg is cool because it contains all eight amino acids, while vegetarian athletes need to “combine certain foods to make sure they get all eight in their diet.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Overall, this is not an ideal book for the vegetarian or vegan child. The message is tipped in favor of eating animals in order to feed the young athlete."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.readerstoeaters.com/",
            "external": true,
            "children": [
              "The publisher"
            ]
          },
          " provided a review copy of this book."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
