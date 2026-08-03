import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/07/harmony-final-art-cover-1.jpg",
    "alt": "Harmony on the Farm",
    "href": "/media/2012/07/harmony-final-art-cover-1.jpg",
    "width": 210,
    "height": 265,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "For those parents who want a good message regarding our relationship with animals, ",
      {
        "type": "link",
        "href": "http://www.harmonyonthefarm.com/",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Harmony on the Farm"
            ]
          }
        ]
      },
      " makes a solid choice. The book follows Harmony, a young girl, who visits her grandparents’ farm. Only the farm is really more of a sanctuary, because her grandparents are vegetarian and the animals will live out their lives peacefully on the farm."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "After befriending each of the animals, it’s time for Harmony to visit the grocery store with her mother. There, she asks questions about what hamburger and bacon are. The story provided a refreshingly honest look at the subject, as her mother gives her straight answers about where such products originate. When Harmony learns the truth about meat, she decides to become a vegetarian, and her parents are supportive and embrace it, as well."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Harmony on the Farm"
        ]
      },
      " is a great book for vegetarian and vegan families, as well as for anyone wanting to help children learn about having compassion for animals. It’s a nice story and sets a good example. After reading this book with my two elementary-age children, who both enjoyed it, my daughter exclaimed that Harmony “made the right choice in becoming vegetarian.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3 to 7. ",
      {
        "type": "emphasis",
        "children": [
          "A review copy was provided by the ",
          {
            "type": "link",
            "href": "http://www.harmonyprime.com/2012/06/vegetarian-themed-childrens-book.html",
            "external": true,
            "children": [
              "author"
            ]
          },
          "."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
