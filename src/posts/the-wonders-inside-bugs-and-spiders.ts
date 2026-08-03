import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/wonders-bugs-spiders-723.jpg",
    "alt": "The Wonders Inside: Bugs and Spiders",
    "href": "/media/2010/06/wonders-bugs-spiders-723.jpg",
    "width": 265,
    "height": 311,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.silverdolphinbooks.com/",
        "external": true,
        "children": [
          "Silver Dolphin Books"
        ]
      },
      " has published the equivalent of a coffee table book for the elementary crowd. ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://apatchworkofbooks.blogspot.com/2010/01/non-fiction-monday-wonders-inside-bugs.html",
            "external": true,
            "children": [
              "The Wonders Inside: Bugs and Spiders"
            ]
          }
        ]
      },
      " is gigantic, glossy, and gorgeous. Featuring see-through plastic overlays and realistic illustrations, the book teaches kids about metamorphosis, predator-prey relationships, and the anatomical structure of some of the most common kinds of insects and spiders."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Given how bugs are reviled in our culture, it’s nice to see a book that discusses their natural histories without playing up the “yuck” factor. My only criticism of this book, from a vegan perspective, is that its focus on who eats whom seems a little much at times. I’d be interested to learn more about cooperative relationships among bugs and spiders — whether within a hive, or via cross-species ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Symbiosis",
        "children": [
          "symbiosis"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 8-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
