import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "The Adventures of an Aluminum Can (and The Adventures of a Plastic Bottle)",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Both of these books deal with subjects that everyone should care about. They are stories of recycling, one about the aluminum can and one about ",
      {
        "type": "link",
        "href": "http://everydaytrash.com/2009/11/10/green-books-campaign-the-adventures-of-a-plastic-bottle/",
        "external": true,
        "children": [
          "plastic bottles"
        ]
      },
      ". Each take the reader on a journey to learn about the recycling process of each."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "With both books taking a diary entry approach, it keeps the reader interested. Plus, each are followed up with a list that defines all the new words kids will learn along the way. These are the type of books that are great for teaching children to be eco-friendly."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Another bonus with both of these books is that they are made from 100 percent postconsumer waste recycled paper. They also contain 100 percent vegetable based ink."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "So while they have an eco-friendly message, they also stick to the mission during the printing process."
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
