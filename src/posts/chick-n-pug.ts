import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/08/chick-n-pug-rgb.jpg",
    "alt": "Chick ‘n’ Pug",
    "href": "/media/2011/08/chick-n-pug-rgb.jpg",
    "width": 210,
    "height": 212,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "What a ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1599905345/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=1599905345",
        "external": true,
        "children": [
          "cute book"
        ]
      },
      "! My two-year-old daughter received this in her Easter Basket and has enjoyed it for months. We have a pug, so that connection makes the story that much more enjoyable. The pictures are adorable. Some of the jokes may be difficult for little ones to understand, but the pictures and storyline are simple enough to follow. My daughter enjoys it."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Chick is bored with farm life. Laying eggs all day is boring. She longs for some adventure. She spends her time reading a book called ",
      {
        "type": "emphasis",
        "children": [
          "The Adventures of Wonder Pug!"
        ]
      },
      " and decides that she must go out and meet this exciting creature for herself. Chick leaves the chicken coop looking for the Wonder Pug and some adventure."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While chick does find a pug, she does not find much adventure. Like most pugs, this pug likes to sleep and doesn’t care much for adventure (or for Chick’s excitement). Chick tries and tries to get Pug to play with her but Pug just rolls over and goes back to sleep. That is, until Pug’s human comes along and dresses “pugsly wugsly in a whitle outfit.” It is then that we see the Wonder Pug who fights his way out of the outfit. But then he promptly falls back to sleep."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The human returns with a cat (a cat!) for “pugsly wugsly” to play with and that’s when Pug realizes the benefit of Chick who barks at the cat and scares her away. Pug happily takes Chick as his sidekick from that point on."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book gives a subtle message about egg farms. Chickens in farms are bored. They want more adventure in their lives. They don’t want to be stuck laying eggs all day."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
