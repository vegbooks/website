import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Animalia",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 210,
    "height": 140,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In ",
      {
        "type": "link",
        "href": "http://www.powells.com/biblio/0140559965",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Animalia"
            ]
          }
        ]
      },
      ", author and illustrator ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Graeme_Base",
        "external": true,
        "children": [
          "Graeme Base"
        ]
      },
      " treats readers to a remarkably captivating alphabet book. Each letter is represented with an alliterative phrase about a featured animal. Upon closer inspection, it becomes clear that the detailed pictures contain not only illustrations related to the animals described but that there are also depictions of items and creatures that begin with the same letter. This incredible work took Mr. Base over three years to complete."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "From the armoured armadillos to the zany zebras, this enchanting book is a delight. Poring over it with (or without!) a child while examining the many details incorporated into the pictures is a lovely way to spend time. The complexity of the illustrations makes this perfect for ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
