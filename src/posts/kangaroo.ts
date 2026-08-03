import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/01/does-kangaroo-pb-c.jpg",
    "alt": "Does a Kangaroo Have a Mother Too?",
    "href": "/media/2012/01/does-kangaroo-pb-c.jpg",
    "width": 210,
    "height": 169,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "We are Eric Carle fans so I love discovering new (to us) books with his illustrations. ",
      {
        "type": "emphasis",
        "children": [
          "Does a Kangaroo Have a Mother, Too?"
        ]
      },
      " is a great book with a veg and family friendly theme (and a wonderful companion to ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/mister-seahorse/",
            "children": [
              "Mister Seahorse"
            ]
          }
        ]
      },
      "). Each page asks if a different animal has a mother, responding on each following page to the affirmative. The featured animals are kangaroo, lion, giraffe, penguin, swan, fox, dolphin, sheep, bear, elephant, and monkey. The final pages ask and answer:"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "And do animal mothers love their babies?"
        ]
      },
      {
        "type": "lineBreak"
      },
      " ",
      {
        "type": "emphasis",
        "children": [
          "YES! YES! Of course they do."
        ]
      },
      {
        "type": "lineBreak"
      },
      " ",
      {
        "type": "emphasis",
        "children": [
          "Animal mothers love their babies, just as yours loves you."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I thought this book would be perfect for Vegbooks because it asks children to relate to the love their mothers feel for them and feel compassion in the process. As with many Eric Carle books, there is an informational page in the back, this time listing the animal baby, mother, father, and group names. Did you know, for instance, that a group of monkeys is called a group, troop, or tribe? My favorite new (to me) fact is that a group of giraffe can be called a tower. What have you learned lately from reading a children’s book?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 1 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
