import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/05/9781584691921.jpg",
    "alt": "9781584691921",
    "href": "/media/2013/05/9781584691921.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I received this book as a review copy from the ",
      {
        "type": "link",
        "href": "http://www.dawnpub.com/",
        "external": true,
        "children": [
          "publisher"
        ]
      },
      " and I’m excited that I’ll soon be able to share it with my new baby. It’s the perfect book for babies because it’s full of silly sounds that babies love to hear. Each page features a bold illustration of an insect and describes the sounds each one makes. Infants will chuckle at the sounds, and young toddlers will enjoy singing along. My daughter loved animal noises when she was first learning to talk and I’m sure this book would have been a hit with her. CHIRP-CHIRP-CHIRP KERAAAAAK TICK-TICK-TICK ZEEZEEZEEZEEZEE. We can all enjoy singing along with insects."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages Baby-Toddler."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
