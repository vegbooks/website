import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Carrot Soup",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 219,
    "height": 145,
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
            "href": "http://www.goodreads.com/book/show/1452004.Carrot_Soup",
            "external": true,
            "children": [
              "Carrot Soup"
            ]
          }
        ]
      },
      " is a tasty little tale about a rabbit who grows an assortment of carrots for his favorite meal: carrot soup. Rabbit does all the familiar farm labor of hoeing, planting, watering, and waiting… and waiting… and waiting… until it is finally harvest time. But when he goes to pull the carrots, he can’t find them anywhere! So he begins interrogating his friends one by one, who suggest a different friend to question. All of his friends deny or avoid answering his questions about his carrots, except for pig, who can’t be found anywhere. Finally, rabbit gives up and despondently returns home only to discover what really happened to all his carrots!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.johnsegaldesign.com/booksbyjohnsegal.html",
        "external": true,
        "children": [
          "John Segal"
        ]
      },
      " creates a funny, yummy mystery full of visual clues for children. The animal characters are illustrated with funny and expressive faces in watercolor and ink. The background scenes as rabbit interrogates individuals depict other animals carting off barrels and wagons of carrots. The pictures hint at the answers to rabbit’s mystery, but he is quite oblivious to all except his immediate surroundings and current suspect."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Besides the clever visual humor, I especially enjoyed the page to identify a variety of different types of carrots as well as a carrot soup recipe in the back. Unfortunately the soup recipe calls for chicken broth and butter but those could ",
      {
        "type": "link",
        "href": "http://vegweb.com/index.php?board=447.0",
        "external": true,
        "children": [
          "easily be substituted"
        ]
      },
      " by the reader. Besides the recipe,",
      {
        "type": "emphasis",
        "children": [
          "Carrot Soup"
        ]
      },
      " is otherwise a veg-friendly book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
