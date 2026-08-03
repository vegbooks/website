import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/04/9780374371333.jpg",
    "alt": "Some Dog!",
    "href": "/media/2010/04/9780374371333.jpg",
    "width": 210,
    "height": 241,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.marycasanova.com/pages/books/bk_somedog.html",
        "external": true,
        "children": [
          "Mary Casanova"
        ]
      },
      " and Ard Hoyt’s picture book ",
      {
        "type": "link",
        "href": "http://www.parents-choice.org/product.cfm?product_id=22355&StepNum=1&award=nne",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Some Dog!"
            ]
          }
        ]
      },
      " tells ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/book/show/542633.Some_Dog_",
        "children": [
          "the story"
        ]
      },
      " of George, a quiet but faithful canine companion who is suddenly displaced by the arrival of an energetic stray named Zippity."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "One night, a thunder storm frightens Zippity to the point he’s tearing the house apart, causing the woman in the story to send him outside. Almost immediately, the woman realizes that the frantic dog has disappeared into the storm, and she beseeches George to help her and the man search for the little, frightened dog. George overcomes his jealousy for the smaller, more charismatic dog and uses his sensitive sense of smell and unflappable personality to heroically find and save Zippity, who has fallen into deep mud."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book would be a great read for kids with new siblings in their lives, or to help children understand why their beloved pet might be jealous of a ",
      {
        "type": "link",
        "href": "http://www.humanesociety.org/animals/dogs/tips/bringing_new_dog_home.html",
        "external": true,
        "children": [
          "new arrival"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I like that the dogs in this book have names, while the people do not. I also appreciate how the illustrations capture the dogs’ personalities. Veg parents should be aware, however, that this book depicts fishing as a peaceful activity — even when Zippity dives into the water and catches live fish in his mouth."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-6."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
