import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/01/ma-turkey-cover-small.jpg",
    "alt": "I’m a Turkey",
    "href": "/media/2011/01/ma-turkey-cover-small.jpg",
    "width": 210,
    "height": 163,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This lighthearted picture book gives kids a realistic view of what the lives of wild turkeys are like. If you’ve ever been to a farm or farm sanctuary, you might be surprised to learn that wild turkeys — who have not been fattened up to be someone’s dinner — can fly at 50 miles per hour over treetops."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book reminds us that turkeys have families (“I’ve got a turkey dad/ And a turkey mom./ I’ve got a turkey brother/ And sister, too.”); that they communicate, using a variety of sounds instead of words; and that they have emotions, including fear of those who find them “tasty.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This would make a great read around Thanksgiving, but it’s really perfect anytime. Kids who enjoy the book will delight that ",
      {
        "type": "link",
        "href": "http://www2.scholastic.com/browse/contributor.jsp?id=1247",
        "external": true,
        "children": [
          "Jim Arnosky performs a spoken word version of the text on the Scholastic website"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-5."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
