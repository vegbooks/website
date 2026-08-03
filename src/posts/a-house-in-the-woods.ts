import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/03/9780763652777.jpg",
    "alt": "A House in the Woods",
    "href": "/media/2013/03/9780763652777.jpg",
    "width": 210,
    "height": 243,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In ",
      {
        "type": "emphasis",
        "children": [
          "A House in the Woods"
        ]
      },
      ", friendly neighbors living together in the forest include pigs, a moose and a bear. They shuffle residences and share fun adventures but the living situation seems amiss. Moose has a well-received idea: why not build a house where all could live together? Realizing that this is a task beyond their capabilities, they call their friends the Beaver Builders to assist them (the beavers insist on being paid in peanut-butter sandwiches)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Working together, all of the animals focus on building and furnishing their new home. The story makes a strong case for co-housing, between collaborative shopping for the peanut butter and bread to pay the beavers and assembling the sandwiches together to having some residents clean the kitchen after dinner while others head to bed."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is a cute story of friends illustrates the joy of amicable collaboration and the simple pleasures found in enjoying each other’s company."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The ",
          {
            "type": "link",
            "href": "http://www.candlewick.com/",
            "external": true,
            "children": [
              "publisher"
            ]
          },
          " provided a review copy of this book."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
