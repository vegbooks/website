import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/10/9781597020190-lg.jpg",
    "alt": "The Octonauts: And the Great Ghost Reef",
    "href": "/media/2011/10/9781597020190-lg.jpg",
    "width": 210,
    "height": 177,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This is the fourth in a series of books showcasing the Octonauts, a team of eight underwater explorers with a mission to explore, rescue, and protect their ocean surroundings."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1597020192/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=1597020192",
        "external": true,
        "children": [
          "The book"
        ]
      },
      " follows the Octonaut crew as they analyze the fate of a coral reef that has lost its color and started to deteriorate. A resident turtle, Mr. Slowstache, takes them through a variety of ecosystems as they attempt to find him a new home and along the way learn how to help the reef thrive again."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Even to those unfamiliar with other Octonauts books (or the similarly excellent ",
      {
        "type": "link",
        "href": "http://www.octonauts.com/",
        "external": true,
        "children": [
          "television show"
        ]
      },
      ") this one is sure to please. Beautifully illustrated, the colors are vivid and the scenes resplendent. Every page has something to draw the eye, yet is filled to the brim with activity. It’s a very attractive read."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book does a lot to educate readers about the various creatures and their ocean habitats, labeling them alongside their images. The underlying social and environmental message – primarily focused on the responsibility to care for your surroundings – is presented in a subtle yet effective way."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "One part mystery, one part adventure, one part gorgeous, this book will likely be a hit with ages 4-8 and beyond."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
