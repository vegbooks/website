import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/01/9780316122351-388.jpg",
    "alt": "All Kinds of Kisses",
    "href": "/media/2012/01/9780316122351-388.jpg",
    "width": 210,
    "height": 186,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Lavishly illustrated, ",
      {
        "type": "link",
        "href": "http://www.kirkusreviews.com/book-reviews/nancy-tafuri/all-kinds-kisses/#review",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "All Kinds of Kisses"
            ]
          }
        ]
      },
      " by Caldecott Medalist Nancy Tafuri is a big and bright book that follows animal parents kissing their babies. The unifying narrative that is noteworthy for veg parents, however, is that the animals featured are all connected by living on the same farm, ending with the human mother in the farmhouse kissing her baby."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Before writing reviews for Vegbooks, I never considered that images and stories that depict life on a farm as idyllic, with chickens scratching around out of doors, a farmer lovingly hand feeding sheep apples, and pigs playing in a pool of water, is a form of propoganda. A strong word, I know, but the classic image of the American subsistence farmer is heavily marketed to children with books, toys, and songs. At any rate, I still think this book is beautiful, the illustrations really take advantage of the large size of the book and even have visual goodies like a different bug hiding on each page. The animal baby and parent theme is common enough that veg parents can decide whether to check this one out (",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/kangaroo/",
            "children": [
              "Does a Kangaroo Have a Mother, Too?"
            ]
          }
        ]
      },
      " comes to mind as an alternative) but I think we’ll be keeping ",
      {
        "type": "link",
        "href": "http://www.hachettebookgroup.com/kids_books_9780316210140.htm",
        "external": true,
        "children": [
          "this review copy"
        ]
      },
      " on our shelves."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 1-4."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Do you have a favorite book with hidden details?"
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
