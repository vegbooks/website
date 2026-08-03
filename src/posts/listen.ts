import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2020/01/listen-mc-ghee.jpg",
    "alt": "Listen",
    "href": "/media/2020/01/listen-mc-ghee.jpg",
    "width": 268,
    "height": 300,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781250318121",
        "external": true,
        "children": [
          "LISTEN by Holly M. McGhee"
        ]
      },
      " is a gentle, sweet book that leads readers towards empathy by reminding us all to slowly take in our surroundings and revel in our connectedness. Aimed at ages 4-7, it will work for slightly younger and much older children and adults as a tool for meditation and calm."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The repetitive structure and relaxed pace serve the picture book’s purpose in encouraging living in the moment and listening to our hearts – and observing with all our senses. The lovely illustrations by Pascal Lemaitre are at once detailed and simple; they suit the story perfectly."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Messages centered on connecting to the world around us, allowing nature to inspire and comfort, and hoping that a new generation will learn empathy for others and themselves intertwine throughout ",
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781250318121",
        "external": true,
        "children": [
          "LISTEN"
        ]
      },
      ". This is a wonderful read aloud (and read alone) book for the open-hearted of all ages."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
