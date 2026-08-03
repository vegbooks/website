import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/11/9780823960040.jpg",
    "alt": "ASPCA: The American Society for the Prevention of Cruelty to Animals",
    "href": "/media/2010/11/9780823960040.jpg",
    "width": 215,
    "height": 324,
    "align": "right"
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0823960048",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0823960048?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0823960048",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "ASPCA: The American Society for the Prevention of Cruelty to Animals"
            ]
          }
        ]
      },
      " is part of Reading Power’s Helping Organizations series. It is a great little book, providing very comprehensive information on the history of ",
      {
        "type": "link",
        "href": "http://aspca.org/",
        "external": true,
        "children": [
          "America’s oldest humane organization"
        ]
      },
      ". While many adults may be familiar with ",
      {
        "type": "link",
        "href": "http://www.aspca.org/about-us/history.html",
        "external": true,
        "children": [
          "founder Henry Bergh"
        ]
      },
      " and his legacy, not all of us know about some of the small facts that are presented (for example, the ASPCA began an ambulance service for overworked horses in 1876 — two years before the first ambulance service for humans), nor do we always appreciate the scope of programs that the organization provides. The book quickly traces the history and evolution of the organization through the 20th century while retaining the reader’s interest. We really liked this book. While some of the statistics are a bit dated, I didn’t feel that it affected our enjoyment of the story."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I recommend this book for ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
