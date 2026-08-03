import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/05/9780807507773.jpg",
    "alt": "Birthday Zoo",
    "href": "/media/2011/05/9780807507773.jpg",
    "width": 210,
    "height": 271,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Birthday Zoo"
        ]
      },
      " is a story that revolves around animals in the zoo who are celebrating a boy’s birthday party. Through clever rhymes, each animal plays a different role at the party. For example, the sloth says, “Spread out a cloth,” and the bats instruct, “Pass out the hats.” My favorite came from the tapir, who says, “Recycle the paper.” It’s always nice to throw a positive message into the mix .Together, the animals create a happy celebration for all! The illustrations are colorful, lively, and full of details. It’s a fun book that will kids will enjoy reading."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "However, that being said, the actual title of the book, ",
      {
        "type": "emphasis",
        "children": [
          "Birthday Zoo"
        ]
      },
      ", is not an ideal title for veg parents. If you can overlook the title and the one reference to the zoo in the story (other than those, you wouldn’t know these animals live at a zoo), this is a nice book. But for those who care about the welfare of animals and who are committed to abolishing ",
      {
        "type": "link",
        "href": "http://as.nyu.edu/docs/IO/1192/Against_Zoos.pdf",
        "external": true,
        "children": [
          "venues and industries that exploit them"
        ]
      },
      ", I would leave this book off your bookshelves."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-5."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
