import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/04/978-0-375-85218-3.jpg",
    "alt": "Here Comes the Garbage Barge",
    "href": "/media/2010/04/978-0-375-85218-3.jpg",
    "width": 183,
    "height": 150,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This book relates ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/mpd/permalink/m33WDA9WOCZHE6",
        "external": true,
        "children": [
          "the story of a garbage barge"
        ]
      },
      " leaving the New York City area and traveling thousands of miles, trying to find someplace to leave the garbage. The barge makes several stops along its journey, and learns that nobody is willing to take on someone else’s trash."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Meanwhile, the tons of garbage being pulled around become unbearably stinky for the captain, who eventually has to take it back to where they started from. After a journey of 162 long and stinky days, the garbage arrives back home, where it was created."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book demonstrates that ",
      {
        "type": "link",
        "href": "http://www.epa.gov/teachers/waste.htm",
        "external": true,
        "children": [
          "we are all responsible for creating garbage"
        ]
      },
      ", and that we can’t just send it away for others to deal with. We need to take responsibility for the garbage we produce. Best of all, this book is based on a true event involving a garbage barge that departed from Islip, New York in 1987."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book is well written, holds a child’s attention, has great illustrations, a solid message, and provides an opportunity for learning about and discussing garbage. The only thing that veg parents may not care for is a reference to New Orleans being home to blackened redfish."
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
