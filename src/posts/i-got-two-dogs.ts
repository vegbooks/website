import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "I Got Two Dogs",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 216,
    "height": 143,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "If you are familiar with any of ",
      {
        "type": "link",
        "href": "http://authors.simonandschuster.com/John-Lithgow/1664402",
        "external": true,
        "children": [
          "John Lithgow"
        ]
      },
      "’s books, you may already know that they are usually a bit quirky. But that’s just what kids seem to love about them. He writes books that are fun and humorous, and that tell a cute story. With ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://poshpetlife.com/stuff/kids/i-got-two-dogs-by-john-lithgow/",
            "external": true,
            "children": [
              "I Got Two Dogs"
            ]
          }
        ]
      },
      ", he manages to do this all over again, in a story about having two dogs."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a fun book to read and even more entertaining if you can get your hands on a copy with the CD. On it, Lithgow reads the book, adding his own charm to bring the characters to life. The story, about having two dogs and being loyal and devoted to them, is one that younger children will enjoy hearing and parents will enjoy reading."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kids will especially like this book if they are dog lovers. Vegetarian parents will be happy that the book provides a solid message about being devoted to and loving the family’s pet dogs."
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
