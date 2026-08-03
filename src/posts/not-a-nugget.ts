import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2015/11/not-a-nugget-cover.jpg",
    "alt": "Not A Nugget Cover",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Not a Nugget"
        ]
      },
      " by Stephanie Dreyer (aka ",
      {
        "type": "link",
        "href": "http://veegmama.com/",
        "external": true,
        "children": [
          "VeegMama"
        ]
      },
      ") is a really sweet book that combines a dose of fun facts with a strong vegan message."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegan books that are gentle, fun-spirited, informational, and toddler age-appropriate are hard to come by, but the author really accomplishes all this in her book. This book connects each animal (including sea creatures) with the food they typically get turned into, so for example a cow becomes a hamburger and an egg becomes an omelet. I think this is an important connection for kids to understand, especially for the young ones who are just learning about where their food comes from."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "On the first page spread, there’s a cute chicken with the words, “not a nugget” followed by a question about chickens and then a fun fact that relates to the question. I like this combination of statement, question and fact, and the way the book sticks to this same pattern throughout its entirety. It’s simple and predictable in a good way that makes sense to kids. The facts themselves are interesting, especially because so most of them connect to our own human behaviors and relationships. This association is important for kids in developing empathy, which leads to compassion."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The images were sweet and really effective at keeping the focus on the animals, without having the distraction of a busy background. I thought the illustrator’s portrayal of the animals’ eyes was remarkable; they were animated and warm and seemed to pop out of the page! I really liked ",
      {
        "type": "link",
        "href": "http://veegmama.com/not-a-nugget/",
        "external": true,
        "children": [
          "this book"
        ]
      },
      ", and it was a perfect read for my two kids under 5 years old! Highly recommend."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2 to 6."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Note: Vegbooks contributor Diane Vukovic also ",
          {
            "type": "link",
            "href": "http://plenteousveg.com/not-a-nugget-review/",
            "external": true,
            "children": [
              "reviewed this book on her blog Plenteous Veg"
            ]
          },
          ". Let us know what you think in the comments!"
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
