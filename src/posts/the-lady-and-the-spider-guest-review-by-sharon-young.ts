import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.goodreads.com/book/show/976709.The_Lady_and_the_Spider",
            "external": true,
            "children": [
              "The Lady and the Spider"
            ]
          }
        ]
      },
      " has a warm and important message: despite a common revulsion for spiders they have a “tiny, very important life.” This timeless book written by ",
      {
        "type": "link",
        "href": "http://www.providencephoenix.com/books/other_stories/documents/04619025.asp",
        "external": true,
        "children": [
          "Faith McNulty"
        ]
      },
      " and gorgeously illustrated by ",
      {
        "type": "link",
        "href": "http://www.marstallstudio.com/",
        "external": true,
        "children": [
          "Bob Marstall"
        ]
      },
      "introduces the lives of both a lady and a spider. The lady enjoys picking lettuce each day from her garden while the spider is enjoying a cozy home in the lettuce leaves. Their lives intersect when the lady picks the head of lettuce in which the spider lives. When faced with a choice about what to do with the spider, the lady’s decision touches both their lives."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Readers will delight in the lady’s discovery of things she has never noticed and enjoy what seems the realistic perspective of the small hidden creatures who live alongside us. Without any pointed moralizing, the book gently leads to a consideration of compassion and understanding for animals who appear so unlike ourselves."
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
