import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/05/tuesday-hres.jpg",
    "alt": "Tuesday",
    "href": "/media/2011/05/tuesday-hres.jpg",
    "width": 210,
    "height": 180,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Kiddo and I were surprised that I hadn’t reviewed ",
      {
        "type": "emphasis",
        "children": [
          "Tuesday"
        ]
      },
      " for Vegbooks. We love this book, because as kiddo puts it, “It’s funny and strange.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "With few words and very detailed illustrations, ",
      {
        "type": "link",
        "href": "http://blog.schoollibraryjournal.com/afuse8production/2010/09/29/review-of-the-day-art-max-by-david-wiesner/",
        "external": true,
        "children": [
          "David Wiesner"
        ]
      },
      " has crafted ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/book/show/97860.Tuesday",
        "external": true,
        "children": [
          "a tale about flying frogs"
        ]
      },
      ". Mysteriously, one Tuesday night, the frogs rise up on their lilypads and fly from the wetland into town. They sneak into a woman’s house where they’re mesmerized by the TV, they arouse the curiosity of a local dog who chases them until they chase her, and they give a man having a late-night snack a very good story to tell a news crew the next day."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Probably the most appealing part of this book is the very end, which takes place the following Tuesday, when the sky is filled with flying pigs. This book is sure to appeal to kids who love animals, and anyone who appreciates a well-told tale, particularly when it’s the illustrations that do the talking."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
