import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "I remember loving Beatrix Potter’s book ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/The_Tale_of_Peter_Rabbit",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "The Tale of Peter Rabbit"
            ]
          }
        ]
      },
      " when I was a little girl, so it’s fun to look at it again as an adult. While it’s true that the animals wear shoes and jackets (which is a little strange), I still love the mischievous Peter and his narrow escape from Mr. McGregor, whose garden he raids."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As an adult, I have found even more to admire in this sweet little book. I, for one, could stand to learn from Mrs. Rabbit’s unwavering patience with Peter — especially in comparison to Mr. McGregor’s terrible temper. And I hope my daughter takes a cue from Peter’s love of veggies."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Top that all off with the fact that the illustrations are delightful, no matter how many times we look at them, and this classic book remains one of our all-time favorites."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8. For games and activities related to the book, visit ",
      {
        "type": "link",
        "href": "http://www.peterrabbit.com/index.asp",
        "external": true,
        "children": [
          "PeterRabbit.com"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
