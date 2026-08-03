import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "This cute board book uses sing-songy verse to tell a classic bedtime story. A toddler and his (her?) blanket go on an adventure along the water and up into the sky, only to settle into bed and fall peacefully asleep."
    ]
  },
  {
    "type": "image",
    "src": "/media/2015/03/i-love-you-blankie.jpg",
    "alt": "I-Love-You-Blankie",
    "width": 484,
    "height": 572,
    "align": "center"
  },
  {
    "type": "paragraph",
    "children": [
      "I like that this book’s dreamy quality captures the versatility that so many young children find in a beloved blanket. A blanket can be a cape, a sail, or a balloon. But at the end of the day, it’s also a source of comfort–to “snuggle,” and “hug and cuddle, too.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Babies and toddlers will like this book’s soft padded cover. I recommend this book for newborn through 18 months."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The ",
          {
            "type": "link",
            "href": "https://hachettebookgroup.com/kids/",
            "external": true,
            "children": [
              "publisher"
            ]
          },
          " sent me a review copy of this book."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
