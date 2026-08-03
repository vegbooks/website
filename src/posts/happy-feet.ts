import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Happy Feet (2007)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarians who forgo fish for environmental reasons will adore “",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/movie-reviews/happy-feet",
        "external": true,
        "children": [
          "Happy Feet"
        ]
      },
      ".” Along with giving kids a glimpse into the natural history of penguins, this animated movie also deals with issues of ",
      {
        "type": "link",
        "href": "http://overfishing.org/",
        "external": true,
        "children": [
          "overfishing"
        ]
      },
      ", environmental destruction, and animal suffering in zoos. Kids will learn that we need to leave the fish in the oceans for the penguins, and leave the penguins in the wild."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While the pop music and dancing isn’t for everyone, the animation is beautiful and ",
      {
        "type": "link",
        "href": "http://thislittlepiggyhadtofu.blogspot.com/2010/05/my-happy-daughter-and-her-happy-feet.html",
        "external": true,
        "children": [
          "the dialogue is witty"
        ]
      },
      " — and there’s even a depiction how the legislative process can effect change. To view the trailer, visit ",
      {
        "type": "link",
        "href": "http://trailers.apple.com/trailers/wb/happyfeet/",
        "external": true,
        "children": [
          "iTunes"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated PG. Ages 5 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
