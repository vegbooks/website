import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Simple Pleasures",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.naturalearthpaint.com/shop/simple-pleasures/",
            "external": true,
            "children": [
              "Simple Pleasures"
            ]
          }
        ]
      },
      " is a sweet story depicting children at play using only natural objects and their imaginations. The text of the story emphasizes the importance of deepening connection with the natural world and community, reminding us that, “simple pleasures in life are free, whether you’re ninety or three.” Highlighting this pleasantly relaxed book are the illustrations by ",
      {
        "type": "link",
        "href": "http://www.fanningart.com/",
        "external": true,
        "children": [
          "Leah Mebane"
        ]
      },
      ". Her spirited art shows youngsters involved in all sorts of outdoor activities: skipping stones, watching bees, racing a leaf and a feather in a stream, playing hopscotch. On another stylistic note, some adults may find the book’s font, Comic Sans, distracting."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In our plugged-in era, this book is a welcome reminder that some of the most simple activities can provide joy and meaning. The message of this story is a welcome one for parents, educators and friends, especially those who are suffering from fatigue over screen time negotiations."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
