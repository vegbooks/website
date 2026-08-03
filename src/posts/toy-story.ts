import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Toy Story (1995)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "There’s not much to say about “Toy Story” from a vegetarian perspective. Chances are most kids will enjoy the simple but fun plot line, and there’s certainly very little that would offend anyone, much less vegetarians or vegans."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "That said, watching this 1990s Pixar/ Disney flick with my daughter recently, two things did jump out at me. First, while food does not play a central role in this movie — even though one scene takes place at a pizza place — I did notice that Sid, the toy-torturing boy villain next door, only ate junk food (Fruit Loops and Pop Tarts). Second, his dog, who is also rather menacing, is depicted as ",
      {
        "type": "link",
        "href": "http://www.unchainyourdog.org/WaystoHelp.htm",
        "external": true,
        "children": [
          "chained"
        ]
      },
      " in one scene. Both issues are portrayed negatively, and I don’t think there’s any chance a child would try to emulate this bad behavior."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "All in all, this movie has a good message: be kind to those less powerful than you. (Or, don’t torture toys. Depends on your perspective.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated G. ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/movie-reviews/toy-story-1995",
        "external": true,
        "children": [
          "Ages 4 and up."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
