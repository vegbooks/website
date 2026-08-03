import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2009/12/diaryofaworm-hc-c11.jpg",
    "alt": "Diary of a Worm",
    "href": "/media/2009/12/diaryofaworm-hc-c11.jpg",
    "width": 215,
    "height": 284,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This book is cleverly set up as a diary that was written by a worm. It gives the reader an inside look at what it might be like to be a worm, and how the big world, and humans, appear from their perspective. The worm writes about things kids can relate to, such as doing homework, playing, good manners, and even going to the dentist."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It is a silly story that provides clean, fun entertainment. But the underlying message here is that even worms have feelings and should be respected. This book may help young vegetarian children to see how even the smallest of animals are interesting and deserving of compassion. There is one reference to fishing, in which the worm states that, as fishing season started, the worms all dug deeper in the dirt in order to hide."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "If you are a vegetarian parent trying to teach your kids to have compassion for animals, ",
      {
        "type": "emphasis",
        "children": [
          "Diary of a Worm"
        ]
      },
      " is a big hit. This book will help children see that even the smallest animals have interests and thoughts of their own."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
