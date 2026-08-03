import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/08/bugs-by-the-numbers-hi-res.jpg",
    "alt": "Bugs by the Numbers",
    "href": "/media/2011/08/bugs-by-the-numbers-hi-res.jpg",
    "width": 210,
    "height": 267,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In the world in which we live, bugs usually get a bad rap! People fear them, don’t understand them and, well, tend to run from them. But one read through a book like ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://wherethebestbooksare.blogspot.com/2011/04/bugs-by-numbers.html",
            "external": true,
            "children": [
              "Bugs by the Numbers"
            ]
          }
        ]
      },
      " and people may start to turn a new leaf."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book piqued my interest from the moment I picked it up. I love the creative ways that the bugs are presented throughout the book. They are gathered in the shapes of numbers, and the numbers all relate to a fact about that particular creature. There are interesting fold-out flaps, lots of facts, and a lot of great information."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is animal-friendly, people-friendly and downright interesting! Although it is geared toward children, I really enjoyed reading through it every bit as much as they did. Adding this book to your collection will help your child learn interesting facts about a variety of bugs, including everything from spiders to mosquitoes, and fleas to cockroaches, and it does so in a fun way. As a member of a vegetarian family, I didn’t see anything that would be objectionable. This is just the type of book most vegetarian families will want in their collection!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
