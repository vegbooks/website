import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/06/whatsyour-hc-c.jpg",
    "alt": "What’s Your Sound, Hound the Hound?",
    "href": "/media/2011/06/whatsyour-hc-c.jpg",
    "width": 210,
    "height": 251,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Author, illustrator and Caldecott Honoree ",
      {
        "type": "link",
        "href": "http://www.mowillems.com/",
        "external": true,
        "children": [
          "Mo Willems"
        ]
      },
      " brings us ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.powells.com/biblio?isbn=9780061728457",
            "external": true,
            "children": [
              "What’s Your Sound, Hound the Hound?"
            ]
          }
        ]
      },
      " This simple picture book depicts a number of different adorable animal friends asking each other what sound they make. When Bunny the Bunny is caught flat footed in terms of what his sound may be, all of the other animals rally around his silence and give him a hug."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a cute and catchy book for little animal lovers and their caregivers with a sweet message of supporting and loving our friends. Appropriate from 6 months and up — my kindergartner enjoys it too!"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
