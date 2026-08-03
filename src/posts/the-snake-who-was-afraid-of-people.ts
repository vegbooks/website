import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/12/the-snake1.jpg",
    "alt": "The Snake Who Was Afraid of People",
    "href": "/media/2010/12/the-snake1.jpg",
    "width": 210,
    "height": 192,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Barry Louis Polisar’s ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.powells.com/biblio/17-9780938663164-0",
            "external": true,
            "children": [
              "The Snake Who Was Afraid of People"
            ]
          }
        ]
      },
      " is the tale of a young snake named Leo, who is afraid of people — a fear stemming from his observations of how humans treat the natural world, including snakes. This fear of people leads other snakes to make fun of him, and even his parents attempt to jolly him out of his fearful mindset, but Leo continues to attempt to avoid humans. One day, while out with a friend, Leo is captured by a boy who does not treat him well, and after some harrowing moments, he escapes to the safety of a community of former captive reptiles who now run an underground railroad specifically for snakes. Eventually, Leo is reunited with his family with the help of this underground railroad, and after hearing about his escapades, no one in his community derides him again for his concern."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There are many things to like about this book, including how the author taps into ",
      {
        "type": "link",
        "href": "http://www.examiner.com/adventure-travel-in-chicago/snakes-are-more-afraid-of-humans-than-we-are-of-them",
        "external": true,
        "children": [
          "the fear of snakes that people often exhibit"
        ]
      },
      " and shows that it is possible that others may be afraid of us. By illustrating the human impact on the natural habitat and giving a different perspective on creatures in captivity, this story is a compelling, sympathetic one. The funny, mischievous illustrations by ",
      {
        "type": "link",
        "href": "http://www.creativeshake.com/profile.html?MyUrl=davclark",
        "external": true,
        "children": [
          "David Clark"
        ]
      },
      " are a big part of the joy of the book and they add welcome depth to the story."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I recommend this story for ages 4 and up, though parents of sensitive children will want to know that part of the reason Leo is afraid of humans stems from being shot at with a gun."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
