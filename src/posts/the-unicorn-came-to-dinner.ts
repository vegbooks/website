import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2020/05/the-unicorn-came-to-dinner.jpg",
    "alt": "The Unicorn Came to Dinner",
    "href": "/media/2020/05/the-unicorn-came-to-dinner.jpg",
    "width": 300,
    "height": 300,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781250310408",
        "external": true,
        "children": [
          "THE UNICORN CAME TO DINNER by Lauren DeStefano"
        ]
      },
      " is a story about change and how one girl deals with it…for a while. Like many children who have emotions that feel too big or powerful to deal with, Elizabeth has found a fantastical way to handle her feelings: She becomes something else! As the titular unicorn leaves behind a mess, is rude and grumpy to Elizabeth’s parents, and complains about having to eat carrots, the parents are patient and understanding. By playing along with Elizabeth as a unicorn, her parents walk the fine line of supporting and keeping basic expectations in tact. In the end, Elizabeth finds that she has the ability to adapt without becoming a unicorn."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Young readers and listeners will love the swirling, colorful unicorn mane and tail and caregivers will appreciate the exasperated but loving faces of Elizabeth’s parents, including a line that explains that “Mom closed her eyes and counted to five.” The collage-style illustrations, by Gaia Cornwall, suit the fantastical story with myriad patterns and strong pastel colors. This storybook will become a naptime and bedtime staple for children who love naughty but lovable unicorns."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
