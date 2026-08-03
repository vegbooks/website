import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/02/0618007016-lres.jpg",
    "alt": "The Three Pigs",
    "href": "/media/2011/02/0618007016-lres.jpg",
    "width": 210,
    "height": 165,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Wow! I love David Wiesner’s work — ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.goodreads.com/book/show/97860.Tuesday",
            "external": true,
            "children": [
              "Tuesday"
            ]
          }
        ]
      },
      " is a classic around these parts — and so I was delighted to discover the new-to-me title ",
      {
        "type": "emphasis",
        "children": [
          "The Three Pigs"
        ]
      },
      " at the library recently. This book won the 2002 Caldecott Medal, so it’s clearly not a new book, nor an obscure one. Still, because it was published in that period between my own childhood and the birth of my daughter, it feels like a brand new book to me!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarians and vegans will love Wiesner’s spin on the ",
      {
        "type": "link",
        "href": "http://www2.ferrum.edu/applit/bibs/tales/other3pigs.htm",
        "external": true,
        "children": [
          "Three Little Pigs"
        ]
      },
      ". Not only does his book spare the pigs, but they go on to rescue other animals from familiar fairy tales. His secret? Wiesner lets the pigs and other animals “escape” the pages of their storybook, ultimately deciding their own fate by collecting the letters from the written page and arranging them in a new order."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My favorite part of the book is when one of the pigs looks out at the reader and says, “I think … someone’s out there.” (As a vegan, it reminds me of the times I’ve met real pigs and thought, “I think … someone’s in there.”) This is a wonderful book for anyone who questions why things are the way they are, is intrigued by the process of storytelling, or simply loves a good animal rescue tale."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5-8 (and the adults lucky enough to read with them)."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
