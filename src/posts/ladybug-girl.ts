import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Ladybug Girl",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Wife-and-husband team Jacky Davis and David Soman have collaborated on a delightful book that follows preschool-aged Lulu through a morning when she must entertain herself. Proclaiming herself ",
      {
        "type": "link",
        "href": "http://www.ladybuggirl.com/",
        "external": true,
        "children": [
          "Ladybug Girl"
        ]
      },
      " and flanked by her loyal dog Bingo, Lulu discovers that she’s fearless and powerful. She skips through a “lake” that may or may not have sharks beneath its surface and rescues ants from having to climb over a rock."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This lovely book is priceless not only for its portrayal of a young girl but also for its depiction of a ",
      {
        "type": "link",
        "href": "http://www.vegblogger.com/blog/2010/01/getting-kids-interested-in-nature-and-animals.html",
        "external": true,
        "children": [
          "child in harmony with nature and her animal companion"
        ]
      },
      ". And it’s a book parents and kids alike will enjoy reading and rereading."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3 to 7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
