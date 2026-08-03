import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/11/love-that-dog.jpg",
    "alt": "Love That Dog",
    "href": "/media/2010/11/love-that-dog.jpg",
    "width": 210,
    "height": 303,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.powells.com/biblio/61-9780060852788-0",
            "external": true,
            "children": [
              "Love That Dog"
            ]
          }
        ]
      },
      " by ",
      {
        "type": "link",
        "href": "http://www.sharoncreech.com/",
        "external": true,
        "children": [
          "Sharon Creech"
        ]
      },
      " is an extraordinary book of poetry, telling a story that will tug at your heartstrings. The book is a frank, open account of a young student who is both simultaneously discovering the power of writing and, as it turns out, processing the death of his beloved dog. As I observe my own child blossom in his writing program, Jack’s tale seems especially poignant and raw. Kids will enjoy this book on a different level, relating in many ways to the universal experiences of being a school kid (Jack takes his teacher’s suggestions and directions very literally) and working through their assignments. One of Ms. Creech’s gifts is to her ability to appeal to both adults and children on different levels, and though we never directly meet Jack’s teacher, Miss Stretchberry, it is clear from Jack’s responses to her directions that she is a supportive, influential educator."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Not only is this book an illustration of the love between a boy and his dog, it also gives us a reminder to respect childrens’ own processes. I suspect that many of the thoughts and feelings that Jack pens are not shared with many (if any) adults. Children who read this book may also be motivated to reach out to those who inspire them, as Jack does – successfully – with ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Walter_Dean_Myers",
        "external": true,
        "children": [
          "Walter Dean Myers"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I highly recommend this book for ages 7-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
