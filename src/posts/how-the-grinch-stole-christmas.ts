import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany movie review",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 321,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "The 1966 Dr. Seuss classic ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/movie-reviews/dr-seuss-how-grinch-stole-christmas",
        "external": true,
        "children": [
          "“How the Grinch Stole Christmas”"
        ]
      },
      " is a holiday tradition for my family. Kiddo, being 4, didn’t remember the movie from last year, so it was fun to watch her experience it as if for the first time this morning as snow fell outside."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "What piqued my interest this time around was the Grinch’s relationship with his dog Max. Dr. Seuss tells us that the Grinch’s heart was probably two sizes too small, but you can tell he’s a meany before he ever steals the Whos’ Christmas presents just by watching ",
      {
        "type": "link",
        "href": "http://www.americanhumane.org/about-us/newsroom/fact-sheets/understanding-the-link.html",
        "external": true,
        "children": [
          "how he treats Max"
        ]
      },
      ". He bullies him, pulls him by the tail, works him to exhaustion, and whips him — horrible stuff! Happily, we see that the Grinch’s change of heart transforms his relationship with Max too. At the end of the short film, Max is eating Christmas dinner with the family."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This movie does portray meat consumption — the Whos eat “roast beast” — but kiddo thought it was “maybe a loaf of bread.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-adult."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
