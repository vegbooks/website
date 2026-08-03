import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/9780152163983-lres.jpg",
    "alt": "To Market, To Market",
    "href": "/media/2010/06/9780152163983-lres.jpg",
    "width": 240,
    "height": 219,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Anne Miranda’s brilliant spoof of Mother Goose’s not-so-vegetarian-friendly ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/To_market,_to_market",
        "external": true,
        "children": [
          "nursery rhyme"
        ]
      },
      " “To Market, To Market” is full of humor and compassion, teaching kids that animals make better companions than they do food."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.childrenslit.com/childrenslit/mai_stevens_janet.html",
        "external": true,
        "children": [
          "Janet Stevens"
        ]
      },
      " adds the illustration, overlaying retro photos in black-and-white with witty drawings. Kiddo and I love the expressions on the main character’s face as the animals she buys for food run amok in her house. In the end, the woman and these same animals — who have become her friends — return to the market to buy vegetables for lunch."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The message of this book is as light-handed as it is clear: There are ",
      {
        "type": "link",
        "href": "http://whatdoveganseat.blogspot.com/",
        "external": true,
        "children": [
          "many wonderful things to eat"
        ]
      },
      " without eating animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-6."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
