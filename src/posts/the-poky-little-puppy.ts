import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/06/978-0-375-86535-0.jpg",
    "alt": "The Poky Little Puppy",
    "href": "/media/2011/06/978-0-375-86535-0.jpg",
    "width": 210,
    "height": 245,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I have a soft spot for ",
      {
        "type": "emphasis",
        "children": [
          "The Poky Little Puppy"
        ]
      },
      " because it reminds me of my childhood. And since the book was originally published in 1942, my mother probably read it to me because she remembered it from her childhood."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Using repetition and simple illustrations, ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://jkrbooks.typepad.com/blog/2011/03/golden-baby-series.html",
            "children": [
              "The Poky Little Puppy"
            ]
          }
        ]
      },
      " is both a comforting bedtime book and a good choice for beginning readers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story follows a litter of mischievous puppies who escape under the fence of their yard. Each time, four of the puppies scramble up to the top of a hill only to discover that their brother, the poky little puppy, has failed to follow them. And each time, when they return to him, he’s reached an observation based on one of his senses that sends the puppies scrambling home. The first two times this happens, the mother dog punishes the four puppies who return home first, depriving them of the delicious desserts she has prepared. The third time, however, the four puppies atone for their misbehavior by filling in the hole under the fence before the poky little puppy has returned home. He makes it home okay, but that time, he’s the one who goes to bed without dessert."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Some families may not like that the mother dog alternatively uses food (particularly sweets) as a punishment and a reward. Still, if you’re anything like me, the sheer nostalgia that this book evokes is enough to overcome any slight misgivings."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
