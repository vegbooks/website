import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/04/struffel-the-bear.jpg",
    "alt": "Struffel",
    "href": "/media/2012/04/struffel-the-bear.jpg",
    "width": 210,
    "height": 199,
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
            "href": "http://struffelseries.authorsxpress.com/",
            "external": true,
            "children": [
              "Struffel"
            ]
          }
        ]
      },
      " is a cute book for toddlers. It includes two short stories in one; both focus on Struffel the bear. The first story is about Struffel enjoying the springtime, which makes it a perfect book to read to kids in the spring months. Struffel walks in the garden, watches flowers bloom, plays ball, chases butterflies, and plays with his animal friends who just like him, are happy that spring has arrived! After reading this book, parents can encourage kids to share some of their favorite springtime activities."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The second story is about Struffel and his new bed. One day Struffel realizes that he is too big for his bed, so he asks his Mom for a new bed. While he is at school she surprises him and buys him a new bed. He loves it, and from that day on, he sleeps soundly in his new bed. This is a good story for kids who are also transitioning from their baby cribs into “big boy or girl” beds. Both of these stories are very simple, and would be best suited for very young kids."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 1 to 5."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
