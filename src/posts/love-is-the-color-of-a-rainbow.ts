import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/11/rainbow-front-cover.jpg",
    "alt": "RAINBOW front cover",
    "href": "/media/2013/11/rainbow-front-cover.jpg",
    "width": 211,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I really enjoyed ",
      {
        "type": "emphasis",
        "children": [
          "Love is the Color of a Rainbow"
        ]
      },
      " by ",
      {
        "type": "link",
        "href": "http://www.kathyparra.com/",
        "children": [
          "Kathy Parra"
        ]
      },
      ". It’s about love, peace, nature, and discovering the world through your senses. It shows us the meaning of color, and how it is connected to our feelings. It’s a very feel good, calming story."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Willow, who is a blind young girl, goes outside with her mama for a nature walk. Mama introduces Willow to all of the colors of a rainbow by using her senses. Despite being blind, Willow experiences the beauty in nature, and feels color strongly. For example, she feels the gentleness of the green leaves, the energy and life of a red tomato and the peacefulness of the blue sky. Together, all of the colors of the rainbow feel like love."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "After reading this book, you are filled with a sense of peace. It’s beautifully written, and the illustrations are soft and simple. It’s one of those books that temporarily transports you to another world. In this case, it’s the natural world. It would be a great book to use to encourage children to think creatively about how they would describe the colors in nature, using their senses."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-7."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The author provided an electronic galley of this book for review."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
