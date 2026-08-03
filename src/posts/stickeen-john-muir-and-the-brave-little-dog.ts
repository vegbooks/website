import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/12/1883220793.jpg",
    "alt": "Stickeen: John Muir and the Brave Little Dog",
    "href": "/media/2011/12/1883220793.jpg",
    "width": 210,
    "height": 265,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Who doesn’t love a John Muir story? Every year that I visit the always impressive and stupefying Yosemite, I make it a point to attend one of the monologues put on by ",
      {
        "type": "link",
        "href": "http://www.johnmuirlive.com/present.html",
        "external": true,
        "children": [
          "Lee Stetson"
        ]
      },
      ". I don’t want to call him an impersonator per se; he’s far too talented for that, but I suppose actor might be appropriate. He’s a dead ringer for Muir and talks in this quaint, pioneer-like tone, something that harkens images of Muir’s treks in the rugged wilderness cloaked in his solitude. I highly recommend getting a ticket yourself for his show, if you’re ever out this way. If not, you’ll enjoy the tale of Stickeen, one that was certainly new to me, but apparently was Muir’s favorite to tell."
    ]
  },
  {
    "type": "image",
    "src": "/media/2011/12/1883220785-a.jpg",
    "alt": "",
    "href": "/media/2011/12/1883220785-a.jpg",
    "width": 300,
    "height": 195,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "Donnell Rubey serves as an interpreter of sorts in presenting Muir’s languid, verbose and antiquated recounting of the tale to children, but she stays true to Muir’s style and knack for storytelling. The plot is a simple, but highly dramatic one. Stickeen was a little dog (named after an Indian tribe) lent to Muir for one his travels in the glacier-filled world of Alaska. One particular journey that took the better part of a day led them over crevasses, deep canyon-like cavities in the glaciers (let’s just say you don’t want to fall down into one of the bottomless-looking pits). While most were passable there was one that proved quite treacherous, one that even stopped eager beaver Stickeen from attempting to cross. It was too late to turn back, but Muir and Stickeen were uncertain if they would even be able to cross safely. How did they do? You’ll have to read to find out."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is an absolute gem. Christopher Canyon’s illustrations are simply lifelike. I could just see myself reach through the book to touch Muir’s coarse, wiry, frigid beard or feel the snowflakes hitting my face (I sure am glad to live in Southern California !) as I watch the mountains giants in the background. Equally effective in this book is the presentation of a unique, temporary friendship between a man and a dog, a friendship that dramatically changed in the face of adversity. The short-lived nature of their friendship will have children questioning what is in the best interest of our companion animals, a question they should always entertain."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 6+."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
