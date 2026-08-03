import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/09/061855744-x-lres.jpg",
    "alt": "Bats at the Beach",
    "href": "/media/2010/09/061855744-x-lres.jpg",
    "width": 210,
    "height": 168,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Vacillating between anthropomorphism and a playful look at bats as bats, ",
      {
        "type": "emphasis",
        "children": [
          "Bats at the Beach"
        ]
      },
      " is a fun read for kids ages 4 to 8. Some of the images are designed to make kids squirm — marshmallows made of bugs, for example — but all in all, most kids will enjoy the storyline of bats having a holiday by moonlight on the beach."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Given how reviled bats are in our culture, I think this book by ",
      {
        "type": "link",
        "href": "http://www.amazon.com/Brian-Lies/e/B001JSFENK/ref=ntt_athr_dp_pel_pop_1",
        "external": true,
        "children": [
          "Brian Lies"
        ]
      },
      " does a nice job of portraying bats in a positive light. His bats express emotion, care for family members, and have fun, allowing kids an opportunity to relate."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "For fans of the book, Mr. Lies has two more recent titles featuring bats — ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://notjustforkids.blogspot.com/2010/06/rave-review-bats-at-ballgame-by-brian.html",
            "external": true,
            "children": [
              "Bats at the Ballgame"
            ]
          }
        ]
      },
      " and ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.goodreads.com/book/show/3308834.Bats_at_the_Library",
            "external": true,
            "children": [
              "Bats at the Library"
            ]
          },
          "."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
