import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Where the Wild Things Are (2009)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 316,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "The words that come to mind to describe “Where the Wild Things Are” are not ones I often use to describe things geared to kids. They’re words like melancholy, dark, and eerie."
    ]
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0060254920",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      "Reading Maurice Sendak’s book ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0060254920?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0060254920",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Where the Wild Things Are"
            ]
          }
        ]
      },
      " as an adult, the story enchants me as a vivid portrayal of a child’s imagination — but I remember reading the book as a child and finding its surrealism to be downright scary. ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/movie-reviews/where-wild-things-are",
        "external": true,
        "children": [
          "Director Spike Jonze’s film"
        ]
      },
      " captures exactly the ",
      {
        "type": "emphasis",
        "children": [
          "feeling"
        ]
      },
      " I got from the book as a child, even though the fuller storyline he develops is nothing like I imagined. In the film, Max is older than in the book — perhaps 11 or 12, instead of 7 or 8 — and so “Where the Wild Things Are” is transformed into a kind of coming-of-age film."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There’s a dreaminess to this film that’s captivating, and ",
      {
        "type": "link",
        "href": "http://www.imdb.com/name/nm2504006/",
        "external": true,
        "children": [
          "vegetarian actor Max Records"
        ]
      },
      " is in fact the perfect Max. I also love what this film does to blur species lines. Not only does Max become “king of the Wild Things,” but another character KW befriends two owls, much to the chagrin of her friend Carol who would prefer that she spend her time with the Wild Things instead. (I cringed a bit watching how she handled the owls, but she’s a monster, so I suppose it’s to be expected. Her affection for them did seem sincere.) I also came to a new appreciation of the word used to describe the monsters in both the book and the film: Things. If these are Things, I found myself thinking, then so am I."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This film is rated PG. Ages 9 to adult."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
