import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "alt": "Big Bob and the Thanksgiving Potatoes",
    "href": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "width": 210,
    "height": 315,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I decided to check out this older early-reader book because it was tagged as “vegetarian” on one of the major online book retailers (and ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/book-reviews/Big-Bob-Thanksgiving-Potatoes.html",
        "external": true,
        "children": [
          "other sites"
        ]
      },
      " have similar synopses). Unfortunately, while it does deal with the issue of vegetarianism, author Daniel Pinkwater’s treatment of the subject is so superficial and silly that I would not recommend it for vegetarian families."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The basic premise is this: Big Bob is ostracized by his class due to his large stature. One day when the class decides to make turkeys in honor of Thanksgiving, Bob objects, saying he is a vegetarian and would rather make potatoes. The teacher consents to his choice, and Bob’s friend Gloria also says she would like to make a Thanksgiving potato."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The problem is that Bob is not a vegetarian, and he uses the fact that he hoodwinked the teacher to garner the respect of the other students. So rather than be the tale of a boy who was willing to stand up for himself and his beliefs, the book quickly deteriorates into much less appealing pandering to the tastes of the other students for the sake of popularity."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is geared to ages 4-8 but is not recommended. Better choices for this age group include ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/perfect-the-pig/",
            "external": true,
            "children": [
              "Perfect the Pig"
            ]
          },
          ","
        ]
      },
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/granny-gomez-and-jigsaw/",
            "children": [
              "Granny Gomez and Jigsaw"
            ]
          },
          ", and ",
          {
            "type": "link",
            "href": "/reviews/thats-why-we-dont-eat-animals-guest-post-by-carolyn-m-mullin/",
            "children": [
              "That’s Why We Don’t Eat Animals"
            ]
          }
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
