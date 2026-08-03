import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany Alice in Paris movie review",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 321,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This ",
      {
        "type": "link",
        "href": "http://www.imdb.com/title/tt0126189/",
        "external": true,
        "children": [
          "old movie"
        ]
      },
      ", available on DVD, uses the character of Alice in Wonderland to present a variety of classic children’s stories including one featuring the French orphan Madeline."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Veg parents should know that while this film depicts a child freeing captive animals from cages, the liberated animals ultimately decide to return to the supposed safety of the circus. (Kiddo seems to think the animals were people in costumes; I must admit that I didn’t watch closely enough to be sure.) Similarly, while the film makes a reference to vegetarianism, it also shows people eating chicken and cheese."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated G. Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
