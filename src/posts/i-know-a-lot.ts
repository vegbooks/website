import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/09/9781419704000-i-know-a-lot-cv.jpg",
    "alt": "9781419704000_IKnowALot_CV",
    "href": "/media/2013/09/9781419704000-i-know-a-lot-cv.jpg",
    "width": 210,
    "height": 292,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "It’s nothing short of incredible how much children learn in the first few years of life! I remember how my kiddo surprised me one day when I quoted a passage from a favorite board book and, in response, she crawled to her bedroom and retrieved that particular book from shelves of dozens. In some ways, children are like foreign language learners, often able to understand much more than they’re able to articulate."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The charming board book ",
      {
        "type": "link",
        "href": "https://www.youtube.com/watch?v=5mu63zMD-k8",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "I Know A Lot!"
            ]
          }
        ]
      },
      " (which I received as a review copy) celebrates the vast array of knowledge that children acquire in the first years of life. I love how author Stephen Krensky uses the first person — it’s so empowering! The book is simultaneously about what the narrator, an adorable African-American girl, knows and what the listener knows."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "With just a few simple words and bright illustrations on each page, this book is a perfect start for any parent who wants to begin reading to a baby or toddler (",
      {
        "type": "link",
        "href": "http://www.zerotothree.org/child-development/early-language-literacy/qa/is-it-too-early-to-begin-to-read.html",
        "external": true,
        "children": [
          "so important!"
        ]
      },
      ") and would likely do double-duty as an early reader, particularly for children with younger siblings or friends to read to."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Recommended for babies and toddlers."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
