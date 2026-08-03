import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "alt": "Our Choice: Young Readers Edition",
    "href": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "width": 210,
    "height": 314,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Working through complicated problems calls for complex discussions and Al Gore’s ",
      {
        "type": "link",
        "href": "http://ourchoicethebook.com/youngreaders/",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Our Choice: Young Readers Edition"
            ]
          }
        ]
      },
      " is rich with challenging topics and potential solutions based on the myriad of issues presented by our changing climate. The bad news? The book is dense and busy. The good news? After describing specific challenges, each chapter presents concrete possibilities for positive change. The information is relevant and up-to-date, though of course not all of the solutions are without controversy. Ethanol, geothermal technology, population growth, coal use, solar and wind power and ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Super_grid",
        "external": true,
        "children": [
          "super grids"
        ]
      },
      " are just some of the subjects addressed in this book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Citing cigarette smoking’s drastic decline in popularity as an example of how humans can change their entrenched habits, this book contains comprehensive information to guide both children and adults on our way, but more importantly, it gives us optimism for the future."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Appropriate for ages 8 and up, though it is possible that younger children may be interested in the information as well if presented in small bites."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
