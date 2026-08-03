import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/08/how-things-work-in-the-yard-hi-res.jpg",
    "alt": "How Things Work in the Yard",
    "href": "/media/2011/08/how-things-work-in-the-yard-hi-res.jpg",
    "width": 210,
    "height": 264,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "As a nature lover, exposing my children to and helping them to learn about the great outdoors is paramount to me. From discussing things that fly by to taking nature walks, creating an appreciation for the natural world is an important mission."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I was excited when ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://100scopenotes.com/2011/04/11/nonfiction-monday-how-things-work-in-the-yard-by-lisa-campbell-ernst/",
            "external": true,
            "children": [
              "How Things Work in the Yard"
            ]
          }
        ]
      },
      " came in the mail, and so was my daughter. The book offers tidbits of information about a variety of things you may find in the backyard. It tells you how those things “work.” As you read along, you learn a lot about each thing, and develop an even deeper appreciation for nature."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "From dandelions to clouds and snails, wagons to fireflies, and a lot in between, this book offers an interesting look at your backyard. This is a great book for anyone who wants to help their child explore some of what nature, and our yards, have to offer."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A vegetarian or vegan family may want to know that there is a brief mention of a cheese ball, and of wagons being pulled by horses. But overall, this book makes a great addition to any child’s collection (and it’s one that even adults will find interesting)!"
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
