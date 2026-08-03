import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/05/9780152325800-lres.jpg",
    "alt": "Growing Vegetable Soup",
    "href": "/media/2010/05/9780152325800-lres.jpg",
    "width": 216,
    "height": 214,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I enjoy ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Lois_Ehlert",
        "external": true,
        "children": [
          "Lois Ehlert’s"
        ]
      },
      " colorful, captivating books and ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.powells.com/biblio/0152050558",
            "external": true,
            "children": [
              "Growing Vegetable Soup"
            ]
          }
        ]
      },
      " is no exception. Featuring her trademark bold, graphic illustrations and a simple message laid out in large print, she tells a story perfect for very small children just learning about gardening and growing. Tools are laid out, seeds are planted and with the turn of each page, we delight in watching a vegetable garden sprout and grow. At harvest, a soup is cooked up (the recipe is included in the back) and declared to be the best ever! I especially like that this is a book in which the father appears to be the gardener and cook (many children’s book still feature the mother as grand poo bah around food and kitchen themes)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In my part of the world, we are now in the early growing season and I am looking forward to again sharing the the small bits of gardening we do with our kiddo, who is an enthusiastic garden assistant. It is extremely rewarding to see a child nibble her way through the fruits of her labor! Whether or not you have a large plot or just a few herbs or greens in containers, I hope you can share the same experiences with the youngsters in your life. ",
      {
        "type": "emphasis",
        "children": [
          "Growing Vegetable Soup"
        ]
      },
      " is an inspiration to do so."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I recommend this book for ages 2-5."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
