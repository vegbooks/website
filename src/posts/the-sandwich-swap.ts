import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "The Sandwich Swap",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In the aptly titled story ",
      {
        "type": "link",
        "href": "http://www.powells.com/biblio/1-9781423124849-4",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "The Sandwich Swap"
            ]
          }
        ]
      },
      ", Lily and Salma are best friends who share everything, including a love of sandwiches. Salma’s sandwich of choice is ",
      {
        "type": "link",
        "href": "http://humus101.com/EN/",
        "external": true,
        "children": [
          "hummus"
        ]
      },
      " in a pita, while Lily prefers ",
      {
        "type": "link",
        "href": "http://www.pbjcampaign.org/",
        "external": true,
        "children": [
          "peanut butter and jelly"
        ]
      },
      " on white bread. Though they love each other dearly, they don’t give voice to their feelings about the other’s sandwich, namely, that it seems kind of yucky. They secretly pity one another for having to eat such a gross sandwich at lunch time. At last, Lily cannot hold back anymore and lets Salma know her true feelings about her friend’s hummus pita. Salma responds with an insult to Lily’s pb and j. This causes a rift in the girls’ relationship that escalates throughout the entire cafeteria as other children choose sides. Soon enough, there is a big food fight. Feeling responsible for the chaos, the girls make up with each other and even try one another’s sandwich! And they come up with a way to help everyone embrace each other’s differences: an international potluck."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is an accidentally just-about vegan story! I love that the storyline revolves around two favorite quick, yummy, vegan sandwiches. There is no mention of meat, eggs or dairy in the text. The illustrations, which feature food on most pages, show meat in the form of drumsticks flying through the air during the food fight but all other scenes in the cafeteria and at the potluck are very vague and there is nothing that is clearly meat."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The Sandwich Swap"
        ]
      },
      " contains a sweetly packaged message of tolerance and the value of trying new things — just perfect for the book’s early elementary target audience."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
