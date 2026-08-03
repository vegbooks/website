import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2014/06/fetchpix.jpg",
    "alt": "fetchpix",
    "href": "/reviews/this-little-piggy/",
    "width": 210,
    "height": 285,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "What a cute book! My nine-month-old received this as a gift recently and he loves it. It’s a finger puppet book of the classic rhyme. My son alternates between giggling at the wiggly piggies and wanting to eat them. It’s a fun book to read with a baby his age."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "What I love about the book (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0545030382/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0545030382&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ") is the new words to the classic poem. The original poem is not friendly for vegetarian families with the line “This little Piggy had roast beef.” In this version, the piggy has cookies, which makes it even more fun to read to my son. I highly recommend buying this for any baby in your life."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
