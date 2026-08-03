import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/12/9780312377472.jpg",
    "alt": "Tyrannosaurus Drip",
    "href": "/media/2011/12/9780312377472.jpg",
    "width": 210,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Tyrannosaurus Drip"
        ]
      },
      " is a lovely rhyming story with great illustrations for young children. It’s all about a vegetarian duckbill dinosaur called Drip who ends up being raised by a T Rex family, after his egg lands in their nest."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0312377479/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0312377479",
        "external": true,
        "children": [
          "The story"
        ]
      },
      " is similar in many ways to the Ugly Duckling. Poor little Drip doesn’t fit in with his meat-loving family. Eventually he runs away and shows that he can outsmart the fierce, but rather stupid T Rexs."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-6."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
