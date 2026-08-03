import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2014/01/noaminals-presskit-1.jpg",
    "alt": "noaminals_PRESSKIT-1",
    "href": "/media/2014/01/noaminals-presskit-1.jpg",
    "width": 210,
    "height": 236,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I have to be honest. The first time I read T",
      {
        "type": "emphasis",
        "children": [
          "here Are No Animals In This Book (Only Feelings)"
        ]
      },
      ", I didn’t get it. I thought it was nonsensical, silly and quite frankly pointless. An unrelated discussion with a friend enlightened me. This book that I thought missed the mark was right on track. The book, primarily through its illustrations, shows readers that we observe feelings by paying close attention to facial expressions, body language and tone of voice. Such subtleties are frequently overlooked much to the dismay and frustration of one expressing his feelings. We all know a cow says ‘moo’ and a pony says ‘neigh’ but how do we know when they are sad, happy, angry or lonely? Simply by paying attention."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "By omitting the obvious, the animals present in this book’s illustrations, the author, in a slyly humorous manner, points out that we see an animal and easily overlook his feelings. So maybe if we get rid of the animals we will see the feelings? Unfortunately, it doesn’t work that way. It’s like trying to see a tree in a cut down forest."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This one takes a while, so be patient. Maybe it is meant to take a while. After all, it takes time to discover something what we overlook."
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
            "href": "http://www.powerhousebooks.com/?p=16486",
            "external": true,
            "children": [
              "The publisher"
            ]
          },
          " provided a copy of this book for review."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
