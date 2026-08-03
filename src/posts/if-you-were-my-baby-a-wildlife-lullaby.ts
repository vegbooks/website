import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/baby-cover.jpg",
    "alt": "If You Were My Baby: A Wildlife Lullaby",
    "href": "/media/2010/08/baby-cover.jpg",
    "width": 210,
    "height": 257,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "If you were my baby squirrel,/"
        ]
      },
      {
        "type": "emphasis",
        "children": [
          "I would welcome you to the world/"
        ]
      },
      {
        "type": "emphasis",
        "children": [
          "In a secret nest I made just for you."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "And so begins this tender bedtime story. Following the same format on each page — three poetic lines written from a parental perspective — children are introduced to a different species of wildlife and a sentimental ethic of care or curiosity about that particular animal. Possums carry babies on their back. Mama duck leads her ducklings through “the wonders of lakes and ponds.” A beaver kit (that’s what a young beaver is called) learns how to build through hard work. Etcetera."
    ]
  },
  {
    "type": "image",
    "src": "/media/2010/08/baby-pg-150dpi.jpg",
    "alt": "",
    "href": "/media/2010/08/baby-pg-150dpi.jpg",
    "width": 210,
    "height": 127,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "The delightfully captivating images will keep this book from gathering dust on the shelf. It’s also a wonderful means of instilling in children the idea that animals, like people, have family units which are very important, not only for survival, but for quality of life."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
