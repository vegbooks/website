import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Girls book pic",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "We’ve decided to enter the world of chapter books with our four-year-old. Since I have a fear of spiders, ",
      {
        "type": "emphasis",
        "children": [
          "Charlotte’s Web"
        ]
      },
      " came up in conversation one night, so we started with this one. I remember fondly this book being read to me in early elementary school."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Because our daughter is sensitive to the plight of animals, I told her from the start that it was a book about a pig that a farmer wanted to slaughter but that she should remember throughout that the pig lives. This tactic seemed to work well. She was so intrigued by how the pig could possibly get saved that her interest in the book stayed strong."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0064400557/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0064400557&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ") was a perfect read aloud for a four-year-old. The language was simple enough and the topic was simple enough that she could follow along. We’ve tried other books and she often can’t follow the storyline. I am planning to try other books by E.B. White because this one was so perfect."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book is so beautifully written that when Charlotte dies at the end, all three of us (myself, my wife, and my daughter) were in tears. Many people warned us not to read this book with our daughter because of the death of Charlotte. However, Charlotte dies of old age and she dies with dignity, which is a stark contrast to the death that Wilbur faced prior to being saved by Charlotte. Our daughter handled Charlotte’s death quite well, but I’m certain that if Wilbur had died she would have been distraught. It is a nice starting point for a conversation about natural death and also a conversation about slaughtering animals for food."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Because this book was written so long ago, there are a few parts that are outdated, but for the most part the story was quite nice. I was very impressed with her interest in reading this together. She would wake up in the morning begging me for a chapter before school. I highly recommend it."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4+ as a read-aloud."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
