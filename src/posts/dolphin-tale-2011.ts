import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany movie review",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "My kids, ages 3 and 8, are obsessed with “Dolphin Tale.” I reviewed the ",
      {
        "type": "link",
        "href": "/reviews/dolphin-tale-the-junior-tale/",
        "children": [
          "junior novel"
        ]
      },
      " based on the screenplay recently, and the plot is exactly the same. But the movie, with real people (Ashley Judd, Harry Connick Jr., and Morgan Freeman) and actually featuring Winter the dolphin, has won the hearts of both of my kids who watch it once a week on Nerflix."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I highly recommend this movie. ",
      {
        "type": "link",
        "href": "https://www.commonsensemedia.org/movie-reviews/dolphin-tale",
        "external": true,
        "children": [
          "Common Sense Media"
        ]
      },
      " recommends it for age 7+ but I think it’s fun for all ages, adults included."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated PG."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
