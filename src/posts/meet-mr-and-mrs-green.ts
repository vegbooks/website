import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/02/9780547745596-lres.jpg",
    "alt": "Meet Mr. and Mrs. Green",
    "href": "/media/2012/02/9780547745596-lres.jpg",
    "width": 199,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I love Keith Baker’s ",
      {
        "type": "link",
        "href": "/reviews/who-is-the-beast/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Who Is the Beast?"
            ]
          }
        ]
      },
      " but had never read any of ",
      {
        "type": "link",
        "href": "http://keithbakerbooks.com/",
        "external": true,
        "children": [
          "his other children’s books"
        ]
      },
      ", so when I discovered he had written a series about two alligators, I eagerly sought out a book for my six-year-old daughter."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Meet Mr. and Mrs. Green"
        ]
      },
      " features three short chapters/ stories, at least one of which is also sold separately as a Level 2 early reader, ",
      {
        "type": "emphasis",
        "children": [
          "Camping"
        ]
      },
      "(pictured at right). The stories are charming, featuring vignettes in the couple’s life that children can readily relate to. In ",
      {
        "type": "emphasis",
        "children": [
          "Camping"
        ]
      },
      ", for example, Mrs. Green plans a camping trip. Mr. Green has some fears about the trip, but goes along anyways. The couple walk and walk, ending up in the perfect camping spot: their backyard."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "What I like most about this book is that each story clearly illustrates the love that the ",
      {
        "type": "link",
        "href": "http://www.literaritea.blogspot.com/2012/01/mr-and-mrs-green.html",
        "external": true,
        "children": [
          "two alligators"
        ]
      },
      " have for each other. Despite their differences, they’re kind and companionable, and they clearly have each other’s back. Given how married life is portrayed in contemporary culture, it’s nice to see two spouses who are clearly sweet on each other. How lovely too to learn that they’re based on ",
      {
        "type": "link",
        "href": "http://oregonread.org/conf_handouts_07/antikajian_07/Activities%20for%20The%20Greens.pdf",
        "external": true,
        "children": [
          "Keith Baker’s own parents"
        ]
      },
      "!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian and vegan parents should be aware that ",
      {
        "type": "emphasis",
        "children": [
          "Camping"
        ]
      },
      "refers to a bridge the alligators cross as “the best fishing spot in town,” and ",
      {
        "type": "emphasis",
        "children": [
          "100 Pancakes"
        ]
      },
      " depicts the alligators preparing and eating an obscene number (100, in fact) of pancakes made with eggs."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5 to 8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
