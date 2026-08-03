import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/04/vegetable-abc.jpg",
    "alt": "The Vegetable Alphabet Book",
    "href": "/media/2012/04/vegetable-abc.jpg",
    "width": 210,
    "height": 168,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Author ",
      {
        "type": "link",
        "href": "http://www.jerrypallotta.com/",
        "external": true,
        "children": [
          "Jerry Pallotta"
        ]
      },
      " has written many ",
      {
        "type": "link",
        "href": "http://www.jerrypallotta.com/catalog-3",
        "external": true,
        "children": [
          "themed alphabet books"
        ]
      },
      " and it shows in the fantastic ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.powells.com/biblio/6-9780881064681-1",
            "external": true,
            "children": [
              "The Vegetable Alphabet Book"
            ]
          }
        ]
      },
      ". Each page is richly illustrated by ",
      {
        "type": "link",
        "href": "http://www.edgarstewart.com/",
        "external": true,
        "children": [
          "Edgar Stewart"
        ]
      },
      " and an adventure in garden lore, informing us about a vegetable or type of gardening. The warm conversational tone of text will appeal to kids in a broad age group. We especially like the little worm hanging out in the soil under the beets on the B page, who gets an aside, “Hey worm, wiggle your way to the W page where you belong!”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Veggie lovers will appreciate that some of the more offbeat veggies are featured players in the pages, including kohlrabi, fiddleheads and daikon. There is also general information about gardening, including brief descriptions of ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Victory_garden",
        "external": true,
        "children": [
          "Victory Gardens"
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Xeriscaping",
        "external": true,
        "children": [
          "xeriscaping"
        ]
      },
      ". The illustrations are so detailed and fine that they may make you hungry, and very possibly interested in trying out some new veggies."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a beautifully done alphabet book which is both informational and very fun to read with preschoolers and early elementary kids. As spring planting season approaches for much of the U.S., this is a great choice if you are looking for a book to help celebrate gardening and welcome a new cycle of opportunities to eat yummy fresh, nutritious vegetables."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3 to 8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
