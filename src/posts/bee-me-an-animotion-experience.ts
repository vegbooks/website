import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "I love this book! I picked it up because of the amazing ",
      {
        "type": "emphasis",
        "children": [
          "animotion"
        ]
      },
      "illustrations on almost every page that make it seem like the book is in motion, with bees flying, dogs running, a boy waving goodbye, a flower blooming. My two-year-old is enthralled by this unique book in motion. Go ",
      {
        "type": "link",
        "href": "https://www.youtube.com/watch?v=2HqFSGfdGSs",
        "external": true,
        "children": [
          "here"
        ]
      },
      " for a video of this book in action."
    ]
  },
  {
    "type": "image",
    "src": "/media/2016/05/9781449443719.jpg",
    "alt": "9781449443719",
    "width": 1000,
    "height": 984
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "lineBreak"
      },
      " I thought this would be a ho-hum book with really cool animation, but I was so wrong. ",
      {
        "type": "emphasis",
        "children": [
          "Bee & Me"
        ]
      },
      " tells the story of a bee that becomes trapped in the room of a young boy who is scared of bees. Desperate to escape, the bee tells the boy why bees are so important, both for growing our fruits and vegetables and for helping to keep our earth beautiful and full of life. The bee says “we are good for so much more than just honey.” The boy is impressed, makes a promise to never swat a bee again, and helps the bee find freedom."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "At the end if the book there is a page of bee facts that an older child would enjoy. Additionally there is a page about how to help our dwinling bee population, an important and timely environmental message."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book has a great animal-friendly environmental message that draws kids in with super cool animation, which is why I love it so much. It does advocate for buying local honey to help the local bee population, a point with which some readers may disagree. Otherwise, I think this book is an excellent addition to any animal-loving environmentalist’s library."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
