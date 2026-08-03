import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2009/12/little-yellow-leaf-hc-c1.jpg",
    "alt": "The Little Yellow Leaf",
    "href": "/media/2009/12/little-yellow-leaf-hc-c1.jpg",
    "width": 180,
    "height": 286,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I want to wallpaper my apartment with the illustrations from ",
      {
        "type": "link",
        "href": "http://carinberger.blogspot.com/",
        "external": true,
        "children": [
          "Carin Berger’s"
        ]
      },
      " ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.carinberger.com/carin%20berger%201-36.html",
            "external": true,
            "children": [
              "The Little Yellow Leaf"
            ]
          }
        ]
      },
      "! OK, maybe I’ll just frame a few images."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "All joking aside, this is one of the most beautiful children’s books I’ve ever seen. From the sparse, poetic text to the ",
      {
        "type": "link",
        "href": "http://www.thechildrensbookreview.com/weblog/2008/09/fall-books.html",
        "external": true,
        "children": [
          "elegant illustrations"
        ]
      },
      ", this is a book adults and kids alike will want to read over and over."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Plus, ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/book/show/3367827.The_Little_Yellow_Leaf",
        "external": true,
        "children": [
          "this book"
        ]
      },
      " is a good find for vegetarian and vegan kids, because it celebrates nature, the changing of the seasons, and living fearlessly. The little yellow leaf is scared to fall off the tree, even after he thinks all of the other leaves have fallen — but when he discovers a friend, they leap into the wind together and dance into the distance."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "So what are you doing still reading this review? By all means, run out to your library for this book, then snuggle up with your little one for a good winter’s read."
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
