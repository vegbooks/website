import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Shark Tale (2004)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 321,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Last night, my husband and I enjoyed the zany antics and fun music of “Shark Tale” on DVD. Geared to older kids, the movie is still too mature for kiddo."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian kids will love that Lenny the Shark (Jack Black) shares their outlook on life, and all kids can benefit from this movie’s message about the importance of being true to yourself and accepting those you love."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "You may want to talk to your kids about how this movie challenges stereotypes (with a vegetarian Great White shark) and how it perpetuates them (",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Shark_Tale#Criticisms_and_analysis",
        "external": true,
        "children": [
          "portraying “Italian-American” sharks as mobsters"
        ]
      },
      "). Also, consider visiting ",
      {
        "type": "link",
        "href": "http://www.fishinghurts.com/feat/sharktale/",
        "external": true,
        "children": [
          "PETA’s FishingHurts.com"
        ]
      },
      " to get the inside scoop on what shark behavior featured in the film is cartoon fiction and what’s based on reality."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated PG. Appropriate for ages 8 to 12. For another perspective, visit ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/movie-reviews/shark-tale",
        "external": true,
        "children": [
          "Common Sense Media"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
