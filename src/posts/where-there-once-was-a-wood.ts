import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Where There Once Was a Wood",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "For every parent who wants to teach their child about urban sprawl and what happens when the woods are cleared for more houses, ",
      {
        "type": "emphasis",
        "children": [
          "Where Once There Was a Wood"
        ]
      },
      " is a great choice."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book, which is perfect for young children, takes them through pages of what was once in the woods. From the fox to the violets and from the woodchuck to the heron, we learn there are many species of animals that do a variety of things in the woods."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In the end, the woods are replaced by a community of houses, representative of what happens on a large scale across the country. This book is a good book to add to your collection in ",
      {
        "type": "link",
        "href": "http://www.juliantrubin.com/encyclopedia/ecology/classroom_habitat.html",
        "external": true,
        "children": [
          "raising an eco-friendly child"
        ]
      },
      " and a great start to a conversation with them about what happened to the woods and all the animals that once lived in it."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There is nothing in this book that a vegetarian or vegan parent would not want their children to learn about. In fact, I think it fits right in line with the principles that most such parents have and want to raise their child with."
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
