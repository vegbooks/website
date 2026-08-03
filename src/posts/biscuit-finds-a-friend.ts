import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Biscuit Finds a Friend",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter is just learning to read, and she gets easily discouraged when it takes too long to sound out words or figure out a sentence. Luckily, Alyssa Satin Capucilli’s ",
      {
        "type": "link",
        "href": "/reviews/biscuit/",
        "children": [
          "Biscuit"
        ]
      },
      " books are just about right. While there are a lot of sight words (perhaps because they’re geared to “shared reading”), repetition and a short format make these little books appealing to my kiddo."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Biscuit Finds a Friend"
        ]
      },
      "is a particularly cute read. Of course, the plot is very simple: Biscuit finds a duckling who has wandered away from the pond, he and the little girl return the duckling to the duck family, and he plays with the duck until — whoops! — he falls into the pond."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Although the mechanics of animal rescue aren’t expounded in this short little book, the concept it introduces is good: To help wild animals, it’s important to return them to their habitat and their family. I particularly like that Biscuit and the girl focus on helping the duckling before they try to play."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/book/show/1807216.Biscuit_Finds_a_Friend",
        "external": true,
        "children": [
          "perfect for emerging readers"
        ]
      },
      " — whether they’re 3 or 6."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
