import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/05/how-birds-find-thr-way-pb-c-9780064451505.jpg",
    "alt": "How Do Birds Find Their Way?",
    "href": "/media/2012/05/how-birds-find-thr-way-pb-c-9780064451505.jpg",
    "width": 210,
    "height": 166,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "My kiddo’s kindergarten class has been focusing on nonfiction books lately, both reading and writing/illustrating books that make a detailed exploration of the science and natural history of wild animals. Of course, with my passion for wildlife, I’ve taken this opportunity to find new books for our bookshelves at home!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "One of the fabulous books I’ve discovered, which is just right for kids in the early grades, particularly those reading on their own, is ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://browseinside.harpercollinschildrens.com/index.aspx?isbn13=9780064451505",
            "external": true,
            "children": [
              "How Do Birds Find Their Way?"
            ]
          }
        ]
      },
      "As part of the Let’s-Read-And-Find-Out-About-Science series (along with ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/oil-spill/",
            "children": [
              "Oil Spill"
            ]
          }
        ]
      },
      "), this colorful book, illustrated by Paul Mirocha, is all about bird migration. Rather than simply lay out the facts, author Roma Gans explains how scientists have discovered what they know about migration — describing two noninvasive experiments conducted on bird migration — and what there is left to discover. I particularly like the ending:"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "Even though people have watched birds for thousands of years, we still do not have all the answers about bird migration. But ornithologists keep trying — maybe you will be one of them."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kids need to know that adults don’t know everything, and they need to envision how they will contribute to the world. These words, together with an illustration of a girl looking through binoculars, may provide particular inspiration to kids who love animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5 to 9."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
