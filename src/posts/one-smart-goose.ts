import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "One Smart Goose",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Many people have the misconception that animals are not smart. Many of us realize this to be completely untrue, and books like ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://sjkessel.blogspot.com/2009/10/review-one-smart-goose.html",
            "external": true,
            "children": [
              "One Smart Goose"
            ]
          }
        ]
      },
      " can help to further that understanding. This book demonstrates two main points – that some animals are actually quite clever, and that being a leader may not always be the best route to take."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In this story, one goose is different from the others, but he uses those differences cleverly to help camouflage himself from predators. Once the other geese catch on, they follow suit, but they don’t go on to change their outer image quickly enough to keep from getting spotted."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Outwitting the predator time and again, the smart goose goes on to save the others who were making fun of him in the first place. This is a cute tale for animal-loving kids, as they learn that it’s okay to be different, and that you can eliminate those who tease you peacefully by making friends with them."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
