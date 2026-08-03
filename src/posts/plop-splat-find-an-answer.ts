import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2014/03/cover-cropped.jpg",
    "alt": "Plop & Splat cover",
    "href": "/reviews/plop-splat-find-an-answer/",
    "width": 210,
    "height": 196,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "A fellow ",
      {
        "type": "link",
        "href": "http://thepollinationproject.org/",
        "external": true,
        "children": [
          "Pollination Project"
        ]
      },
      " awardee, David Walega, is a new acquaintance of mine who runs ",
      {
        "type": "link",
        "href": "http://artforanimalssake.com/",
        "external": true,
        "children": [
          "Art for Animals’ Sake"
        ]
      },
      ", an organization which strives to inspire a message of compassion through teaching artistic skills as a tool to empowerment and developing healthy social coping mechanisms. In other words, they’re an arts education nonprofit solely focused on animal issues and developing empathy. Pure awesome."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "David collaborated on a children’s book, ",
      {
        "type": "link",
        "href": "http://plopandsplat.com/about.html",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Plop & Splat"
            ]
          }
        ]
      },
      ", a story about a bird named Splat:"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "splat had a small, simple brain. she wandered the skies searching for an unknown answer to an unknown question."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I do take issue with this “small, simple brain” piece. All the ",
      {
        "type": "link",
        "href": "http://www.birdminds.com/",
        "external": true,
        "children": [
          "latest science"
        ]
      },
      " shows that birds are highly intelligent, even city birds such as crows. Maybe if the book goes to reprint they could address this."
    ]
  },
  {
    "type": "image",
    "src": "/media/2014/03/plopsplat-page-6.jpg",
    "alt": "Image from Plop & Splat",
    "href": "/reviews/plop-splat-find-an-answer/",
    "width": 273,
    "height": 222,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "Splat eventually meets her soul mate, Plop, who turns out to be the answer to that unknown question. The answer, the author tells us, lies in each other’s hearts (awww). Together Plop & Splat collaborate to make ‘splat-art’ with their poop."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I love this book for one simple reason: it challenges kids to see art anywhere and interpret it. It also has a wonderful collage feel where the pages are filled with photographic backgrounds, crafty birds made with mixed media, typed writing on ripped up paper, and scrapbook-like images from Kelley’s splat-art archive."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kelley and Walega are onto something with this splat-art, and I’m glad proceeds from the sales benefits Art for Animals’ Sake."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
