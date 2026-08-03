import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Up (2009)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 226,
    "height": 341,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "All I’d heard about Pixar’s animated film “",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/movie-reviews/up",
        "external": true,
        "children": [
          "Up"
        ]
      },
      "” was that it was about the loss of a loved one, so was I surprised when I discovered that it’s also about the protection of endangered animals!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "When widower Carl (voiced by animal advocate ",
      {
        "type": "link",
        "href": "http://www.thepetpress-la.com/articles/edasner.htm",
        "external": true,
        "children": [
          "Ed Asner"
        ]
      },
      ") and his stowaway Russell take off for South America in a house buoyed by helium balloons, they end up befriending a golden retriever named Dug and an endangered bird whom Russell names Kevin. They soon find out that Kevin is actually a momma bird, and that Dug’s “master” Charles is a collector who wants to kill Kevin and make her into a museum mount. The rest of the film is about the growing friendship among the old man, the boy, and the dog — and their efforts to keep Kevin and her brood safe from Charles and his pack of dogs."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kids who care about animals will appreciate Carl’s transformation from a grieving man who is desperately trying to hold onto the past to a fearless advocate who risks it all to keep Kevin and her family safe and preserve her species for the future. And everyone will cheer the happy ending, where Carl and Russell rescue the birds and ",
      {
        "type": "link",
        "href": "http://www.examiner.com/x-5831-Animal-Welfare-Examiner~y2009m6d24-Surprising-messages-in-Pixars",
        "external": true,
        "children": [
          "dogs"
        ]
      },
      " alike."
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
