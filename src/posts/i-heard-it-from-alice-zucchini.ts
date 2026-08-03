import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/07/alice-zucchini.jpg",
    "alt": "I Heard It from Alice Zucchini",
    "href": "/media/2010/07/alice-zucchini.jpg",
    "width": 210,
    "height": 309,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.powells.com/biblio?show=HARDCOVER:USED:9780811839624:7.95",
            "external": true,
            "children": [
              "I Heard It From Alice Zucchini: Poems About the Garden"
            ]
          }
        ]
      },
      " spans the course of all four seasons. The poems are narrated by various garden denizens at different places and times in their growing grounds, and the book offers the opportunity to contemplate gardening from a perspective other than that of a human gardener. One of our favorite poems was ",
      {
        "type": "link",
        "href": "http://books.google.com/books?id=q5aCW1spc5UC&dq=i+heard+it+from+alice+zucchini&printsec=frontcover&source=bn&hl=en&ei=rqcVTO2DJsH68Abqr5mJCg&sa=X&oi=book_result&ct=result&resnum=4&ved=0CCcQ6AEwAw#v=onepage&q&f=false",
        "external": true,
        "children": [
          "the first one"
        ]
      },
      ", entitled “When I Grow Up,” in which we listen in on the chatter of seeds as they envision what lies ahead– especially enjoyable because at the time we were sprouting our own seeds for our small garden. ",
      {
        "type": "emphasis",
        "children": [
          "Cinderella"
        ]
      },
      " fans will enjoy a poetic retelling of an aspect of the fairy tale in this volume."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The enjoyable illustrations round out the short poetry pieces and feature an expressive little fairy in each one. I recommend this book for ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
