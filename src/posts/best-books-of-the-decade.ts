import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      {
        "type": "strong",
        "children": [
          "By ",
          {
            "type": "link",
            "href": "/about/",
            "children": [
              "JESSICA ALMY"
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Common Sense Media has compiled a list of the ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/book-lists/best-books-decade-2000-2009-top-10-preschoolers",
        "external": true,
        "children": [
          "top-ten books for preschoolers"
        ]
      },
      " published during the last decade. Two of their picks are among kiddo’s favorite: the delightful ",
      {
        "type": "emphasis",
        "children": [
          "My Friend Rabbit"
        ]
      },
      "from Eric Rohmann, author-illustrator of the eminently veg-friendly book ",
      {
        "type": "link",
        "href": "http://vegbooks.wordpress.com/2009/10/25/the-cinder-eyed-cats/",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "The Cinder-Eyed Cats"
            ]
          }
        ]
      },
      ", and ",
      {
        "type": "emphasis",
        "children": [
          "Fancy Nancy"
        ]
      },
      " by Jane O’Connor and Robin Glasser, the first book in the series that includes the pro-animal shelter ",
      {
        "type": "link",
        "href": "http://vegbooks.wordpress.com/2009/10/25/fancy-nancy-and-the-posh-puppy/",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Fancy Nancy and the Posh Puppy"
            ]
          }
        ]
      },
      ". We also loved ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.commonsensemedia.org/book-reviews/kittens-first-full-moon",
            "external": true,
            "children": [
              "Kitten’s First Full Moon"
            ]
          }
        ]
      },
      "by Kevin Henkes when we borrowed it from the library."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is the decade that most of us became parents (or godparents or aunties). So what are your thoughts? What new kids books are your favorites? And which of the classics does your child absolutely love?"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
