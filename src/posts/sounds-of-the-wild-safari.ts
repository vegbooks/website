import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/9781571455567-300.jpg",
    "alt": "Sounds of the Wild: Safari",
    "href": "/media/2010/08/9781571455567-300.jpg",
    "width": 210,
    "height": 169,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I have to admit that one of the reasons I think books are the perfect gift for a child is because, as a rule, they don’t make noise. So I’m more than a little surprised to find myself so enamored with ",
      {
        "type": "emphasis",
        "children": [
          "Sounds of the Wild: Safari"
        ]
      },
      " by ",
      {
        "type": "link",
        "href": "http://www.douggy.com/maurice-pledger-my-dad/",
        "external": true,
        "children": [
          "Maurice Pledger"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Open the first page of ",
      {
        "type": "emphasis",
        "children": [
          "Safari"
        ]
      },
      " and you’re transported to the African plains, complete with the sounds of scampering hooves and the trumpet of an elephant. Page forward and you’ll discover Africa’s lakes, the savanna, a game park, and the Mara River. With realistic pop-out illustrations and detailed explanations, ",
      {
        "type": "emphasis",
        "children": [
          "Safari"
        ]
      },
      " is like a trip to the zoo without the unpleasant ",
      {
        "type": "link",
        "href": "http://www.time.com/time/health/article/0,8599,1203076,00.html",
        "external": true,
        "children": [
          "animal exploitation"
        ]
      },
      ". The only thing better would be a real African safari."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kiddo loves this book as much as I do (although she’s too little to fully appreciate all the details described in the book). Veg parents should be aware that the book takes a straight-forward approach to predator and prey relationships."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
