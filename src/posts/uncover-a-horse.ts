import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/9781592238866.jpg",
    "alt": "Uncover a Horse",
    "href": "/media/2010/08/9781592238866.jpg",
    "width": 210,
    "height": 242,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "David George Gordon’s ",
      {
        "type": "emphasis",
        "children": [
          "Uncover a Horse"
        ]
      },
      " transported me back to the days of ",
      {
        "type": "link",
        "href": "http://nj4h.rutgers.edu/horses/hippology/",
        "external": true,
        "children": [
          "4-H hippology competitions"
        ]
      },
      ". This book is perfect for budding equine enthusiasts who want to know about horses’ anatomy or behavior. Page by page, readers physically deconstruct and reconstruct a horse."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While the book does not speak to animal welfare issues, it does explain what horses are all about and what they need, making it a good primer for kids lucky enough to have a real horse in their lives. Riding and driving horses are not the focus of the book, but they are dealt with in a straightforward manner."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As someone who had horses as childhood companions, ",
      {
        "type": "emphasis",
        "children": [
          "Uncover a Horse"
        ]
      },
      " reminds me how magical, and complex, these animals are. Kids intrigued by dolphins, sharks, or tarantulas will be delighted to learn that Mr. Gordon has penned similar ",
      {
        "type": "link",
        "href": "http://www.davidgeorgegordon.com/buy.html",
        "external": true,
        "children": [
          "“Uncover” books about those species"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 8-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
