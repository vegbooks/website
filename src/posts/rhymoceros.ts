import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2015/03/9781419715143-rhymoceros-cv.jpg",
    "alt": "9781419715143_Rhymoceros_CV",
    "width": 210,
    "height": 231,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Another board book to share! Following up on the 2012 smash hit ",
      {
        "type": "link",
        "href": "/reviews/hippopposites/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Hippopposites"
            ]
          }
        ]
      },
      ", Janik Coat is back with another visually driven, humorous book that parents are sure to like as much as their toddlers do."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Our protagonist this time around is, as the title suggests, a rhinoceros. Juxtaposing a single word on each page, Coat plays with rhyme and design to create surprising contrasts. For example, on one page, the titular rhinoceros is being “caring” by walking a dog on a leash. On the facing page, she (he?) is “daring,” walking along a tightrope between two skyscrapers with the dog perched calmly on her head."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Unfortunately, the anti-captivity theme of Coat’s previous book does not reappear in this book, but still, there is a subtle message of kindness to animals. The little dog, who appears about halfway through the book, reappears again on the last page. After the rhinoceros is depicted as being “sad,” she is joined by her canine companion, at which time her mood turns to “glad.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I highly recommend this darling book for newborns through age 3."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "I received this book as a review copy from the ",
          {
            "type": "link",
            "href": "http://www.abramsbooks.com/appleseed.html",
            "external": true,
            "children": [
              "publisher"
            ]
          },
          "."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
