import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Zora’s Zucchini"
        ]
      },
      " tells the story of a young girl who happens upon some free zucchini plants. She takes them home and begins growing her own garden, only to realize that she has more zucchini than she knows what to do with. Rather than waste the excess, she creates a community garden swamp, where others bring their excess garden items and everyone takes what they need, leaving behind what they would like to offer to others."
    ]
  },
  {
    "type": "image",
    "src": "/media/2015/09/zoras-zucchini.jpg",
    "alt": "Zoras-Zucchini",
    "width": 484,
    "height": 475,
    "align": "center"
  },
  {
    "type": "paragraph",
    "children": [
      "This is a great book for kids and vegan and vegetarian parents will appreciate the story, too. There is nothing in this book that is not vegetarian friendly, and it has a good message about growing a garden and sharing with others. After reading this book, kids and adults alike may be interested in participating in their own little community garden swap!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The last page of the book also offers tips on what to do with extra foods that have been grown in the garden, so they are not wasted. This will make a great book for kids who already have gardens and those you may want to inspire to have one."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.readerstoeaters.com/our-books/zoras-zucchini",
            "external": true,
            "children": [
              "The publisher"
            ]
          },
          " sent a review copy of this picture book, which is geared to kids ages 4 to 8."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
