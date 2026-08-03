import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/10/girl-reading.jpg",
    "alt": "The Stray Dog",
    "href": "/media/2010/10/girl-reading.jpg",
    "width": 210,
    "height": 280,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.goodreads.com/book/show/1507001.The_Stray_Dog",
            "external": true,
            "children": [
              "The Stray Dog"
            ]
          }
        ]
      },
      " recounts a true story of rescuing a homeless dog. With a stunning backdrop of Manhattan, the Brooklyn Bridge, and what I would venture to guess is Prospect Park, Marc Simont’s Caldecott Honor Book depicts a nameless family who encounter a dog while picnicking in the park. Assuming that the dog belongs to someone, they say goodbye at the end of the day and return to the city, only to find themselves preoccupied with the fate of the little dog they’ve named Willy. Upon returning to the park, they discover from an animal control officer that Willy is in fact homeless, and they immediately come to his aid."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book has two particularly touching scenes: one in which the boy offers his belt as Willy’s collar and the girl offers her hair ribbon as his leash, and the second where Willy is curled up on a dog bed “where he belong[s].” This sweet book is a good pick for families concerned with animal welfare. It would be hard to justifying buying a dog from a pet shop, rather than ",
      {
        "type": "link",
        "href": "http://www.popcrunch.com/kellan-lutz-peta-ad-adopt-dont-buy/",
        "external": true,
        "children": [
          "adopting"
        ]
      },
      ", after reading this book. Vegetarian parents should note, however, that the family is depicted as eating burgers and hot dogs."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-7. For activities based on the book, visit ",
      {
        "type": "link",
        "href": "http://www.liveoakmedia.com/client/guides/92107.pdf",
        "external": true,
        "children": [
          "Live Oak Media"
        ]
      },
      " or ",
      {
        "type": "link",
        "href": "http://school.familyeducation.com/literature/childrens-book/34856.html",
        "external": true,
        "children": [
          "Family Education"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
