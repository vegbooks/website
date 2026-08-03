import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/06/kidlicious-cover-4c.jpeg",
    "alt": "KidliciousCover-4c",
    "href": "/media/2013/06/kidlicious-cover-4c.jpeg",
    "width": 210,
    "height": 280,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Have you ever wanted a cookbook that was just for kids and offered up healthy, all vegan recipes? Well now you have it! The ",
      {
        "type": "emphasis",
        "children": [
          "Kidlicious"
        ]
      },
      " cookbook is exactly that, and more! This cookbook comes in a convenient-to-use spiral bound that is filled with full color photos."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kids are taken on a journey through this book that includes breakfast, eating rainbows, lunch box options, family meals, and more. There is even information on eating healthy, reading labels, and a few Biblical scriptures to boot. This book is filled with recipes that kids will want to try, and will want to get involved in creating."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian and vegan parents are likely to be quite pleased with the ",
      {
        "type": "emphasis",
        "children": [
          "Kidlicious"
        ]
      },
      " cookbook. My 8-year-old daughter thumbed through it, liking everything she saw, and quickly decided she wanted to make the zebra cake recipe. Together we prepared the zebra cake to take to a vegan potluck we were attending. It turned out fabulous and we had a great time making it together!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "From such vegan recipes as rice crispy treats to sandwiches on a stick, this book offers an array of great recipes to try. There are recipes that pack a healthy punch, some that raise the bar on packing lunches, and some desserts that are sure to please."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Two thumbs up for the ",
      {
        "type": "emphasis",
        "children": [
          "Kidlicious"
        ]
      },
      " cookbook. It’s a book that both kids and their parents are going to love!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The ",
          {
            "type": "link",
            "href": "http://givethemsomethingbetter.com/about",
            "external": true,
            "children": [
              "author"
            ]
          },
          " provided a review copy. It’s now available on Amazon (",
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/0983559414/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0983559414&linkCode=as2&tag=vegbooks-20",
            "external": true,
            "children": [
              "affiliate link"
            ]
          },
          ")."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
