import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/i-stock-000009594887-x-small.jpg",
    "alt": "Tarra and Bella: The Elephant and Dog Who Became Best Friends",
    "href": "/media/2011/07/i-stock-000009594887-x-small.jpg",
    "width": 210,
    "height": 289,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Did you catch the ",
      {
        "type": "link",
        "href": "http://www.cbsnews.com/video/watch/?id=4696315n",
        "external": true,
        "children": [
          "CBS clip"
        ]
      },
      " a while back about the elephant and the stray dog who became best friends? Well, the lovely Carol Buckley, founder of ",
      {
        "type": "link",
        "href": "http://www.elephants.com/",
        "external": true,
        "children": [
          "The Elephant Sanctuary"
        ]
      },
      " in Tennessee, has written a ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/book/show/6567770-tarra-bella",
        "external": true,
        "children": [
          "children’s book"
        ]
      },
      " that features her photos of that unlikely pair of best buds. The result is heartwarming."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kiddo loves this book, and I do too. It’s such a good story that I don’t mind reading it over and over again. It also gives us a good opportunity to talk about ",
      {
        "type": "link",
        "href": "http://www.bornfreeusa.org/a1a6_ringling.php",
        "external": true,
        "children": [
          "why we don’t go to the circus"
        ]
      },
      " or visit elephant exhibits at zoos. I’m sure Tarra the elephant was adorable on roller skates during her performing days, but I’m even more certain that she’s far happier roaming a sanctuary with her friends."
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
