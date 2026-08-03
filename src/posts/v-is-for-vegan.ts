import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/12/v-is-for-vegan-cover-lr.jpg",
    "alt": "V is for Vegan cover_LR",
    "href": "/media/2013/12/v-is-for-vegan-cover-lr.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Ruby Roth, the author of ",
      {
        "type": "link",
        "href": "/reviews/thats-why-we-dont-eat-animals-guest-post-by-carolyn-m-mullin/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "That’s Why We Don’t Eat Animals"
            ]
          }
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "/reviews/vegan-is-love/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Vegan Is Love"
            ]
          }
        ]
      },
      " adds another book to her collection. This one, ",
      {
        "type": "emphasis",
        "children": [
          "V Is for Vegan: The ABCs of Being Kind"
        ]
      },
      ", is geared more towards younger kids than her other two. First is the fact that it’s an ABC book, and secondly, the language is lighter and the illustrations are not quite as graphic. Each page has a letter of the alphabet and a concept associated with that letter related to veganism. For example, I is for Insects, P is for Protein and R is for Rescue. My favorite page is the Y page because “Y is for you, because your choices matter.” I think that’s the most important message for kids in the book. This page offers a good opportunity for discussion."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "V is for Vegan"
        ]
      },
      " (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1583946497/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1583946497&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ") is a really good book for toddlers. It addresses healthy eating by talking about legumes, nuts, grains, veggies, fruits, oil, and seeds. It also touches lightly upon vegan issues including zoos, clothing, shelters, animal testing, in an age-appropriate way. If you are raising vegan kids, definitely pick up a copy of this book for your collection."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-5."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The publisher, ",
          {
            "type": "link",
            "href": "http://www.northatlanticbooks.com/",
            "external": true,
            "children": [
              "North Atlantic Books"
            ]
          },
          ", provided a review copy of this book."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
