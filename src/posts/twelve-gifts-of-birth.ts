import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/12/toddler-girl-reading.jpg",
    "alt": "The Twelve Gifts of Birth",
    "href": "/media/2010/12/toddler-girl-reading.jpg",
    "width": 210,
    "height": 320,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "It’s never too early to begin nurturing healthy, humane qualities in children, and ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.twelvegifts.com/",
            "external": true,
            "children": [
              "The Twelve Gifts of Birth"
            ]
          }
        ]
      },
      " by Charlene Costanzo serves as an inspiring and magical touchstone toward character, confidence and self-respect. The story begins by revealing the “secret” that fairy godmothers, or “wisewomen,” bestow 12 gifts upon all children when they are born. The rest of the book reveals these simple gifts (strength, compassion, hope, wisdom, reverence, etc.), offering a blessing for each gift alongside colorized photos and simple colored pencil images."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While a few readers may be troubled by the spiritual overtone, most people will find a worthy, hopeful and inspiring message for their young children, their teens, and even for themselves."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
