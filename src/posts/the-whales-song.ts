import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "The Whales’ Song",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0140559973/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0140559973",
        "external": true,
        "children": [
          "beautiful little story book"
        ]
      },
      " is lovely to read aloud to young children."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It’s about the relationship between Lilly, her grandmother, and the whales who appear at the ocean nearby, to sing their mysterious and haunting songs."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Grumpy Great Uncle Fredrick reminds Lilly and her grandmother that whales were hunted for their meat, oil, and blubber and can’t see why they’re so sentimental. Lilly ignores his outburst and Uncle Fredrick stomps out of the room. That night Lilly dreams about the whales and when she awakens, she goes down to the ocean and throws a flower into the water for them. Lilly waits and waits and eventually she is rewarded when she catches sight of some whales nearby."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Read and try not to cry!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-8. For activities related to the book, visit ",
      {
        "type": "link",
        "href": "http://www.jmes.co.uk/ReadingBooks.aspx?ID=111",
        "external": true,
        "children": [
          "Jackson McCormack"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
