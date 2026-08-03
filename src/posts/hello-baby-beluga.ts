import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/01/hello-baby-beluga.jpg",
    "alt": "Hello, Baby Beluga",
    "href": "/media/2011/01/hello-baby-beluga.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I didn’t give the new picture book from ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/author/show/641069.Darrin_Lunde",
        "external": true,
        "children": [
          "Darrin Lunde"
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "http://web.me.com/patriciawynne/Patricia_J._Wynne/Home.html",
        "external": true,
        "children": [
          "Patricia J. Wynne"
        ]
      },
      " ",
      {
        "type": "emphasis",
        "children": [
          "Hello, Baby Beluga"
        ]
      },
      " enough credit when I first picked it up. Scanning through it on my own, I got the impression that the way it presented facts, without any real storyline, was a little dry."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My 5-year-old daughter, however, was immediately drawn to the book. She leafed through it to look at Baby Beluga and her pod, and asked questions — such as, What does Baby Beluga eat? — that tracked the text almost perfectly. When we settled down to read it together, she was engaged by every page and she brought the book to bed with her that night."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As someone who has worked to protect wildlife for most of my adult life, I can forget how extraordinary and miraculous the diversity of life is. Looking at ",
      {
        "type": "emphasis",
        "children": [
          "Hello, Baby Beluga"
        ]
      },
      " through my daughter’s eyes, I was reminded at how awesome it is that belugas exist — especially given their size, their natural history, and just how “other” they can seem. And, once I gave it a chance, I was impressed by what a nice job the book does at teaching children what’s mind-blowing about belugas while also highlighting the ways in which they, like many other animals, are like us: they have families and they have emotions (fear)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "With so many kids books out there that are geared more to parents than kids, this engaging book is a nice change of pace. It is perfect for children ages 3-6."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
