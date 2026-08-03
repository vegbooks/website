import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=097686553X",
    "alt": "Tiger",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/097686553X?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=097686553X",
        "external": true,
        "children": [
          "Sherry Been and Cathy Morrison’s book"
        ]
      },
      " gives kids a taste of natural history by telling them about a tiger’s life in the second person. “If you were a tiger,” the book reads, “we would call you Great Swimmer. You have strong muscles and you love the water….”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I think this approach is an effective way to get kids to consider what animals think, feel, and experience without resorting to anthropomorphism. Still, I wish the author used the second person consistently throughout the book; occasionally she resorts to explaining ",
      {
        "type": "emphasis",
        "children": [
          "about"
        ]
      },
      " tigers without addressing the reader as a tiger. Likewise, some illustrations are beautiful and polished, while others look like preliminary sketches."
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
