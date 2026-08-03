import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/10/miss-spider-tea-party.jpg",
    "alt": "Miss Spider’s Tea Party",
    "href": "/media/2011/10/miss-spider-tea-party.jpg",
    "width": 210,
    "height": 160,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Miss Spider wants to have a tea party. She sets a beautiful table and waits for someone to fly by. She invites ladybugs, ants, bees, and other insects that fly by, but none of them “would dare to share a tea with anyone so spidery.” None of the bugs will have tea with her because they are afraid she is going to eat them, but all she wants is to have a nice tea with friends. After she rescues a rain-drenched moth, unable to fly until he dries out, word spreads of Miss Spider’s friendly intentions. Eleven insects finally join Miss Spider for tea. “Her friends were glad to watch her feast upon the floral centerpiece. It was a great relief to see she ate just flowers and drank just tea.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Though it is never explicitly stated, Miss Spider is a vegetarian spider. We bought ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0439918170/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0439918170",
        "external": true,
        "children": [
          "this book"
        ]
      },
      " because my wife loves tea, but we were pleased to discover the strong vegetarian message. Written as a cute poem, the lyrical text holds the interest of even the youngest readers (my daughter received this a Halloween present when she was just one year old). The pictures are just beautiful (the colorful bugs, Miss Spider’s big sad eyes, the beautiful tea service). There is a counting element (one spider, two lady bugs) incorporated so well into the text that it almost goes unnoticed. It just adds another layer to this charming book. My daughter (now two) loves this book and so do I. It’s a joy to read and a joy to look at. I strongly recommend this book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 1 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
