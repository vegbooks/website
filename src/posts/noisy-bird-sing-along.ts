import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "Most children learn that birds TWEET and occasionally QUACK. But John Himmelman’s ",
      {
        "type": "emphasis",
        "children": [
          "Noisy Bird Sing-Along"
        ]
      },
      "will expand their bird vocabulary with its fully illustrated pages. This is a colorful, fun, active book for children to practice bird sounds and to learn about different types of feathered friends."
    ]
  },
  {
    "type": "image",
    "src": "/media/2016/01/9781584695134.jpg",
    "alt": "9781584695134",
    "width": 480,
    "height": 480
  },
  {
    "type": "paragraph",
    "children": [
      "Every two-page section focuses on a different bird with facts and emphasized birdsong in exaggerated type. Beautifully images of each bird include visual reflection of the habitat or habits of each winged creature. Whether it’s a black-capped Chickadee, a tapping Woodpecker, or a nocturnal Owl, children will enjoy imitating the sounds and learning more about each bird."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The end of the book includes Fun Facts About the Birds and additional activities to continue learning. While this book is recommended for ages 4-9, I think ages 3-7 are more appropriate for the level of tone and facts."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.dawnpub.com/",
            "external": true,
            "children": [
              "The publisher"
            ]
          },
          " sent a copy of this book for review."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
