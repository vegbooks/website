import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/12/toddler-girl-reading.jpg",
    "alt": "I Love Dogs",
    "href": "/media/2010/12/toddler-girl-reading.jpg",
    "width": 210,
    "height": 315,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "My goodness, I love dogs! So too does the adorable pajama-clad boy in Barney Saltzberg’s aptly titled picture book ",
      {
        "type": "emphasis",
        "children": [
          "I Love Dogs"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Depicting ",
      {
        "type": "link",
        "href": "http://www.petfinder.com/dog",
        "external": true,
        "children": [
          "dogs of various colors, sizes, and temperaments"
        ]
      },
      ", this simple book is a sure-fire hit for kids who have a special dog in their lives, as well as those who like to visit the dog park to watch other people’s dogs. While the author extols the virtues of dogs — they play, do tricks, and dig holes — he’s clear that he loves them for one reason. “It isn’t their noses, their tails, or their paws./ I love dogs just because.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-5."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
