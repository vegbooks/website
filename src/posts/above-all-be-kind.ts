import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/04/0-86571-493-2-aba.jpg",
    "alt": "Above All, Be Kind",
    "href": "/media/2010/04/0-86571-493-2-aba.jpg",
    "width": 219,
    "height": 329,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://zoeweil.com/",
        "external": true,
        "children": [
          "Zoe Weil"
        ]
      },
      " has penned a list of books that aim to make the world a better place. With this one, she goes right to the heart by trying to reach the children through their parents. Those parents who want to raise the next generation to be compassionate, caring individuals will want to read this book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Above All, Be Kind"
        ]
      },
      " focuses on providing information, tips, advice, and real-world experiences to help parents raise a humane child in a world that is not always so kind. The information provided offers a method by which parents can instill respect and compassion for animals and nature in their children. There are sections that touch on each childhood stage, from birth through the teen years."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Weil’s four principals for raising a humane child include providing information, teaching critical thinking, instilling reverence, respect and responsibility, and offering positive choices. Each of these areas is fleshed out throughout the book, helping parents apply the principals to their own life, as well as demonstrate them to their children."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "For adults."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
