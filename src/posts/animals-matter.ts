import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/11/9781590305225.jpg",
    "alt": "9781590305225",
    "href": "/media/2013/11/9781590305225.jpg",
    "width": 210,
    "height": 315,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This is a book that has been written for those in high school and beyond. It provides great insight into the many ways that animals are impacted by humans. Not only does it provide facts and information, but it also offers thought-provoking questions. Marc Bekoff takes the reader through animal well-being and protection, to making decisions about animal use, animal sentience, the difference between animal rights and animal welfare, alternatives to eating animals, dissection, and so much more."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Animals Matter"
        ]
      },
      "is a great book not only for every high school student to read, but for adults as well. It’s provides a wealth of information that has been condensed into a nice readable length book and is kept in simple terms. This would also make for a good book for parents to read along with their middle school students. It provides a great opportunity to learn and open a discussion about how animals are used in our society and what we can do about it."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The foreword is done by Dr. Jane Goodall, one of my idols, who also nicely adds to the book. She opens with a quote that is so important to all veg parents, which is: “Whether an individual respects, ignores, or harms different kinds of animals depends, to a large extent, on the kind of environment in which the child grew up.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian and vegan parents will appreciate the honest information and opportunity for dialogue set forth in this book."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
