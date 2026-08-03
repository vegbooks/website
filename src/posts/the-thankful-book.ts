import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/10/9780316181013.jpg",
    "alt": "The Thankful Book",
    "href": "/media/2012/10/9780316181013.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "As soon as my kids and I began reading ",
      {
        "type": "emphasis",
        "children": [
          "The Thankful Book"
        ]
      },
      ", I knew it was going to be good. The dedication included “animal lovers,” which got it off to a good start for me. As one who believes in the ",
      {
        "type": "link",
        "href": "http://urbanbalance.org/gratitude-brings-positivity.html",
        "external": true,
        "children": [
          "Laws of Attraction"
        ]
      },
      ", which includes being thankful, I loved this book!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The Thankful Book"
        ]
      },
      " not only incorporates the idea of the Laws of Attraction, but opens up a discussion, as well. The book goes page by page, discussing the many things to be thankful for. Everything from unique hair and gardens to bubble baths and pets are mentioned. It’s a cute book that helps children see the many things that we take for granted, yet should be thankful for."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "When we finished reading the book, we had a nice conversation about what we were all thankful for. It opened up a dialogue that is important for the kids to engage in, yet one that we don’t focus on often enough."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian and vegan parents will appreciate the solid message and dialogue that this book can inspire. It even points out that healthy food makes you strong, and shows the family sitting around the table with what looks like vegetarian food. Two thumbs up for ",
      {
        "type": "emphasis",
        "children": [
          "The Thankful Book"
        ]
      },
      ", which will help children consider the many things they really do have to be thankful for."
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
            "href": "http://www.hachettebookgroup.com/publishing_little-brown-books-for-young-readers.aspx",
            "external": true,
            "children": [
              "Little, Brown Books for Young Readers"
            ]
          },
          " provided a review copy."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
