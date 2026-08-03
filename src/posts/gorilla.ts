import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/01/gorilla1.jpg",
    "alt": "Gorilla",
    "href": "/media/2010/01/gorilla1.jpg",
    "width": 243,
    "height": 216,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "If your kiddo likes ",
      {
        "type": "emphasis",
        "children": [
          "Good Night, Gorilla"
        ]
      },
      ", I suggest you ",
      {
        "type": "link",
        "href": "http://www.freecycle.org/",
        "external": true,
        "children": [
          "freecycle"
        ]
      },
      " (or maybe just recycle) the zoo propaganda and pick up a secondhand copy of ",
      {
        "type": "link",
        "href": "http://entertainment.timesonline.co.uk/tol/arts_and_entertainment/books/article6464248.ece",
        "external": true,
        "children": [
          "Anthony Browne’s"
        ]
      },
      " ",
      {
        "type": "emphasis",
        "children": [
          "Gorilla"
        ]
      },
      " instead."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/book/show/460285.Gorilla",
        "children": [
          "heartwarming picture book"
        ]
      },
      " details the enchanted evening a little girl Hannah, somewhat neglected at home, experiences with her toy gorilla-turned-real. What makes this book a keeper from my perspective is Hannah’s reaction to viewing primates — gorillas, an orangutan, and a chimpanzee — in the zoo. Despite her joy at seeing these animals in person, ",
      {
        "type": "link",
        "href": "http://www.childrenslaureate.org.uk/Anthony-Browne/Illustration-Gallery",
        "external": true,
        "children": [
          "she views them through cage bars"
        ]
      },
      " and observes that they are “sad.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The next morning, Hannah awakes to an attentive father who offers to do finally what she’s been asking him to do all along: bring her to the zoo. Whether the pair goes is ambiguous. I like to think that they spent a leisurely day in the park instead."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
