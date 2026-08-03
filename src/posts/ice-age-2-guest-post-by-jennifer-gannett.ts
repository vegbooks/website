import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Ice Age 2: The Meltdown (2006)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 226,
    "height": 341,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "“",
      {
        "type": "link",
        "href": "http://www.apple.com/trailers/fox/ice_age_2/large.html",
        "external": true,
        "children": [
          "Ice Age 2: The Meltdown"
        ]
      },
      "” continues where “",
      {
        "type": "link",
        "href": "/reviews/ice-age-guest-post-by-jennifer-gannett/",
        "children": [
          "Ice Age"
        ]
      },
      "” left off– Manny (mammoth), Sid (sloth) and Diego (smilodon) are an unlikely but bonded herd. They learn of a flood threatening their valley and the film follows their movement to higher ground. The overarching plot is more convoluted than in the first movie but we had many laughs at the antics of our protagonists."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "“Ice Age 2” introduces some new characters: Ellie the mammoth – who in a funny bit believes that she is a possum – and her two possum brothers, Eddie and Crash. This movie seems more dialogue driven than the first. A happy ending ensues (yay!) and throughout the movie, Scrat the squirrel is still after his acorn."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There are some scary underwater reptiles in this movie (they eat a turtle in one scene), and a few scenes where some of our characters face sad or perilous situations. Sid makes no mention of his veg*nism."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated PG. Ages 6 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
