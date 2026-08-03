import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany movie review",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "As children of the 80’s, my wife and I are very familiar with Fievel and his family. We can belt out ",
      {
        "type": "emphasis",
        "children": [
          "Somewhere Out There"
        ]
      },
      " with the best of them. When I saw ",
      {
        "type": "link",
        "href": "https://film.avclub.com/coming-to-america-19-movies-about-u-s-immigration-1798257916",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "An American Tail"
            ]
          },
          " on a list of recommended movies"
        ]
      },
      " about immigrants in America, I decided to watch it with my children for family movie night."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I’m always filled with trepidation when revisiting a childhood favorite. Will it hold up? I’m here to tell you that this one does! My kids were singing ",
      {
        "type": "emphasis",
        "children": [
          "There Are No Cats in America!"
        ]
      },
      " for days. The story was understandable for my 4 year old but still interesting for my 9 year old. And it was fun and funny and exciting, which made it a big hit for family movie night."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "What I hadn’t remembered, but was happily surprised by, was that a major character in this film is a vegetarian. My family cheered when Tiger, the massive cat that guards Feivel’s cage after he’s captured by the cat gang, lets Feivel free because Tiger’s a vegetarian. Tiger and Feivel become fast friends, and Tiger even helps him find his family."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Common Sense Media recommends this movie for ages 5+. It was enjoyed by my kids ages 4 and 9. I highly recommend this movie for your entire family."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
