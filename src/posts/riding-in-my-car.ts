import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/03/9780316052160.jpg",
    "alt": "Riding in My Car",
    "href": "/media/2012/03/9780316052160.jpg",
    "width": 210,
    "height": 161,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I received ",
      {
        "type": "link",
        "href": "http://www.hachettebookgroup.com/kids_books_9780316052160.htm",
        "external": true,
        "children": [
          "this book"
        ]
      },
      " as a review copy. It is a picture book based on the Woody Guthrie song. The book takes the reader on a road trip through the United States, with images from New York City to Washington, D.C., to Mount Rushmore to the Golden Gate Bridge."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is more than a picture book. It’s one of the most involved lift-a-flap books I’ve seen. Every page has multiple moving parts which include car doors that open, horses that jump, cars that drive along a road, and people that dance. There are also flaps that lift to reveal facts about the United States, such as “Route 66 is a famous road that goes from Chicago to Los Angeles.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While I enjoy the interactive nature of this book, I don’t think I’m the target audience because I don’t know the ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Woody_Guthrie",
        "external": true,
        "children": [
          "Woody Guthrie"
        ]
      },
      " song. Maybe someone that knows ",
      {
        "type": "link",
        "href": "http://www.folkways.si.edu/explore_folkways/riding-in-my-car.aspx",
        "external": true,
        "children": [
          "the song"
        ]
      },
      " would enjoy it more than me."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "From an animal rights perspective, I don’t appreciate the fishing scene. The family is depicted happily fishing from their car on a mountain lake coupled with the fact, “The largest freshwater fish ever caught in the United States was a 468-pound white sturgeon.” Unfortunately, I do not recommend this book for families that care about animal welfare."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5+."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
