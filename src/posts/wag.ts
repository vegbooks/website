import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/04/wag.jpg",
    "alt": "Wag!",
    "href": "/media/2010/04/wag.jpg",
    "width": 261,
    "height": 259,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Why does Earl’s tail wag – ",
      {
        "type": "emphasis",
        "children": [
          "fwip fwip fwip"
        ]
      },
      "? Young readers will love the simple storyline of this book and its use of repetition, and parents will adore ",
      {
        "type": "link",
        "href": "http://www.hsus.org/about_us/celebrity_support/patrick_mcdonnell/",
        "external": true,
        "children": [
          "Patrick McDonnell’s"
        ]
      },
      " sweet little mutt and his appreciation of just about everything."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Mr. McDonnell is a hero for animals and the people who love them, bringing simple messages of kindness and raising awareness through his widely read comic strip ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://muttscomics.com/",
            "external": true,
            "children": [
              "Mutts"
            ]
          },
          "."
        ]
      },
      "With ",
      {
        "type": "emphasis",
        "children": [
          "Wag"
        ]
      },
      ", now even the littlest kids can enjoy his work."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-7. Toddlers and preschoolers will enjoy listening, while bigger kids will be able to read this by themselves."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
