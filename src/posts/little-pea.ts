import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/01/little-pea.jpg",
    "alt": "Little Pea",
    "href": "/media/2011/01/little-pea.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "There are a few classic books that belong on every nursery shelf. Take for example ",
      {
        "type": "emphasis",
        "children": [
          "Goodnight, Moon"
        ]
      },
      " by Margaret Wise Brown, ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/guess-how-much-i-love-you/",
            "children": [
              "Guess How Much I Love You"
            ]
          }
        ]
      },
      " by Sam McBratney and Anita Jeram, and ",
      {
        "type": "emphasis",
        "children": [
          "Brown Bear, Brown Bear"
        ]
      },
      " by Eric Carle. You know the kind of books I’m talking about. You might hesitate buying them as baby shower gifts, but only because you hope the expectant parents have them already!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Add to that list ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.herbivoreclothing.com/products/Little-Pea-by-Amy-Krouse-Rosenthal,-illustrated-by-Jen-Corace.html",
            "children": [
              "Little Pea"
            ]
          }
        ]
      },
      " by Amy Krouse Rosenthal. You won’t remember it from your childhood, but it’s the kind of book that you’ll hope your child will remember from hers (or his)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Little Pea is an amiable veggie who enjoys doing most things. The problem is, Little Pea can’t seem to stomach the dinner his parents put before him each night. You see, the Peas eat candy every night, and Mama and Papa Pea insist that Little Pea must eat his candy to grow up to be a big, strong pea."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Not only do children love the silliness of the book — after all, Little Pea wants only to get through his candy so he can devour a big bowl of spinach for dessert — but parents will enjoy the book’s simple and timeless illustrations. And hey, if it encourages some healthy eating to boot, then all the better!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages birth to 6."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
