import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "The Lorax (2012)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 321,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "“Unless someone like you cares a whole awful lot, nothing is going to get better, it’s not!” – Dr. Seuss"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "For anyone who is already a fan of ",
      {
        "type": "emphasis",
        "children": [
          "The Lorax"
        ]
      },
      " book by Dr. Seuss, “",
      {
        "type": "link",
        "href": "http://www.veggiehomes.com/2012/03/11/movie-night-and-vegan-options-at-the-theater/",
        "external": true,
        "children": [
          "The Lorax"
        ]
      },
      "” movie lives up to the hype. There are many connections to be drawn to the vegan lifestyle, including concepts such as buying power and ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Unintended_consequences",
        "children": [
          "unintended consequences"
        ]
      },
      " and the interconnectivity with protecting animals, promoting good health, and preserving the environment."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Characters such as “The Once-ler,” an entrepreneur, are complex. You want to hate him for what he did, but he is so – human. The movie illustrates that anyone (even a young boy named Ted) can make a difference. At a pivotal point in the film, when Ted stands up to educate his complacent community (emulating The Lorax), a real live young boy one row behind me in the theater actually gasped at his courage and later said, “That was so scary.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Alas, Ted’s motivation is for a girl, which will likely make the younger kids groan and through it all, Ted is being stalked by a greedy businessman that might be a little scary for younger children, especially because it seems like Ted is going to get in trouble. [Adults might be reminded of a George Orwell’s",
      {
        "type": "lineBreak"
      },
      " ",
      {
        "type": "emphasis",
        "children": [
          "Nineteen Eighty-Four"
        ]
      },
      " “Big Brother is watching you” kind of creepy.]"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While this film is thoroughly entertaining and your kids might beg for the soundtrack, it roots a little closer to reality than your average PG rated film. Even the lack of a syrupy “happily ever after” highlights that there is opportunity for a happy ending, but it’s up to the people to make it happen. Depending on the age and maturity of both children and adults alike, the characters and content will provide ",
      {
        "type": "link",
        "href": "http://www.meettheshannons.net/2012/03/cupcakes-unofficially-inspired-by-lorax.html",
        "external": true,
        "children": [
          "fodder for conversation"
        ]
      },
      " and reference far beyond the end of the movie."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Recommended for ages 6 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
