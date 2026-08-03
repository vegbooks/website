import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/07/978-0-394-92337-6.jpg",
    "alt": "The Lorax",
    "href": "/media/2012/07/978-0-394-92337-6.jpg",
    "width": 210,
    "height": 290,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "A book can be called a true classic when it gets better as the years go by, much like a fine, aging wine. Dr. Seuss’s ",
      {
        "type": "link",
        "href": "http://suburbansnowwhite.blogspot.com/2012/01/lorax-and-someone-like-you.html",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "The Lorax"
            ]
          }
        ]
      },
      " is one of those unique classics. The story opens with a young boy traversing a ruined land and stumbling upon the mystery of the Lifted Lorax. He wonders who the Lorax was and why he left. The Once-ler (a repentant Scrooge-like character) explains that the land was once rich with truffula trees and healthy animals. Years before, the Once-ler had decided to profit from the land, much to the anger of the little, furry Lorax who “speak[s] for the trees!” Ultimately, the deforestation and smog send the creatures away in very poor health, and the Once-ler is left on his own after the Lorax finally leaves as well."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As a third-grade teacher, I am always intrigued by the way my students (who pride themselves on reading “big kid” chapter books) become instantly quiet and mesmerized by this picture book. The rhyme, meter, and mood of the words lend themselves beautifully to reading aloud. Even if you don’t consider yourself talented at read-alouds, rest assured you will sound good. It can’t be helped with writing like this (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0007305826/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0007305826&linkCode=as2&tag=vegbooks-20&l=as2&o=1&a=0007305826",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ")."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "But beyond the rhyme, it is a very empowering message to a child of any age. As both the Lorax and the Once-ler illustrate, what we decide to spend our money on makes an impact on the world, be it positive or negative. Even if it is only a dollar from one’s allowance, the impact is still there. Kids often feel powerless in the world of grownups. How exciting for them discover it isn’t so!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Additionally empowering is the ending, where Dr. Seuss is essentially handing the baton to the child reading the story."
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "‘But now,’ says the Once-ler, ‘Now that you’re here, the word of the Lorax seems perfectly clear. UNLESS someone like you cares a whole awful lot, nothing is going to get better. It’s not.’"
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book is very friendly for vegetarian and vegan children alike. The only caution I would give is that the word “stupid” is used by the Once-ler, so you might want to quickly preview that with your child if that word is not normally used in your home."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The Lorax"
        ]
      },
      ". A classic that both you and your child will look forward to reading together!"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
