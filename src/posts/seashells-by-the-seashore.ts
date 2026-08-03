import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/08/shells-cover.jpg",
    "alt": "Seashells by the Seashore",
    "href": "/media/2012/08/shells-cover.jpg",
    "width": 210,
    "height": 180,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Seashells by the Seashore"
        ]
      },
      " by Marianne Berkes is an interactive guide to seashells which tells a delightful story about children combing the sandy shore for shells to give to Sue’s grandmother as a birthday present. The story is close to my heart for it is reminiscent of childhood summers with my Nana at beaches in Massachusetts. The wonder of finding a seashell evokes curiosity and delight. It is amazing when you think that seashells, nature’s sculptures, are homes to sea dwelling creatures."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I like the various teaching components of the book: counting, recognition, and biology. The style encourages children to keep track of the number of shells collected and the type, univalve or bivalve. A guide in the lefthand column keeps track of the shape and color of each shell found."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The illustrations by Robert Noreika capture the beauty and the mystery of the seashore and all its creations. The use of watercolor makes the pages sparkle like sun on the water."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The addendum is good for older children 8 or 9 with inquisitive minds that want to know more. This a book targeted for children ages 4-9 and one I feel will be read again and again."
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
            "href": "http://www.dawnpub.com/",
            "external": true,
            "children": [
              "Dawn Publications"
            ]
          },
          " provided an ebook for review. The book is also available in print (",
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/1584690348/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1584690348&linkCode=as2&tag=vegbooks-20",
            "external": true,
            "children": [
              "Amazon affiliate link"
            ]
          },
          ")."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
