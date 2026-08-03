import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/09/louise-the-adventures-of-a-chicken.jpg",
    "alt": "Louise, The Adventures of a Chicken",
    "href": "/media/2010/09/louise-the-adventures-of-a-chicken.jpg",
    "width": 210,
    "height": 232,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Whoever uses the word “chicken” to mean cowardly has certainly not met Louise, the feathered heroine of Kate DiCamillo’s book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Louise longs for adventure and wanders off the farm to find it. She narrowly escapes pirates who want to eat her, spends time in the circus, and frees herself and other chickens from captivity. Vegetarian and vegan parents will find a lot of good seeds for discussion — even though some might be uncomfortable with the portrayal of the circus as wholesome entertainment, or the fact that the lion is depicted as vicious, or even that Louise returns to the farm at the end of her adventures."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Not only does ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.helpreaderslovereading.com/2008/10/louise-adventures-of-chicken-by-kate.html",
            "external": true,
            "children": [
              "Louise, The Adventures of a Chicken"
            ]
          }
        ]
      },
      " have all these interesting themes, but also striking illustrations by and ",
      {
        "type": "link",
        "href": "http://www.harrybliss.com/",
        "external": true,
        "children": [
          "Harry Bliss"
        ]
      },
      " (the illustrator of ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/diary-of-a-worm-guest-post-by-jacqueline-bodnar/",
            "children": [
              "Diary of a Worm"
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
            "href": "/reviews/diary-of-a-spider/",
            "children": [
              "Diary of a Spider"
            ]
          }
        ]
      },
      "). And it’s just plain funny."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I recommend this book for kids ages 4 to 8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
