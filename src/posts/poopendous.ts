import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2020/09/51-i-us-lr-qy-cl.jpg",
    "alt": "Poopendous!",
    "href": "/media/2020/09/51-i-us-lr-qy-cl.jpg",
    "width": 460,
    "height": 352,
    "align": "center"
  },
  {
    "type": "paragraph",
    "children": [
      "As preschoolers, my kids have been told “No Bathroom Talk.” And at home we also tried to curb their use of poopie, doo-doo, and peep (I don’t know why they say it with a ",
      {
        "type": "emphasis",
        "children": [
          "P"
        ]
      },
      " at the end) talk, especially during mealtimes. Now, with middle schoolers, we’ve just about given up the struggle. But with a book like ",
      {
        "type": "strong",
        "children": [
          {
            "type": "link",
            "href": "https://www.indiebound.org/book/9781609051907",
            "external": true,
            "children": [
              "POOPENDOUS!"
            ]
          }
        ]
      },
      " by author ",
      {
        "type": "link",
        "href": "http://artiebennett.com/books.html",
        "children": [
          "Artie Bennett"
        ]
      },
      " you don’t have to worry about scatology at the table because it’s a delight."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Poopendous! is a silly, fun, and very educational collection of information about poop from around the Earth’s animal kingdom. Not only do children learn that monkey dung is sometimes flung (“Monkeys fling with under stress. It helps the monkey decompress.”), a favorite line educated me: “Guano is an Incan word for poop of bat or ocean bird.” ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Guano",
        "children": [
          "I didn’t know it was Incan"
        ]
      },
      "; I thought it was a Spanish word! Poop from so many animals is described and detailed; Hippo Piles and Wombat Cubes are just the beginning. The book also talks about useful roles of poop. Homes are built of it, it is used for fuel in cooking fires, and cow pies are thrown in contests."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "All in all, the book is very cute, and the colorful illustrations by ",
      {
        "type": "link",
        "href": "http://mikemoranillustration.blogspot.com/",
        "children": [
          "Mike Moran"
        ]
      },
      " add to the words in clever and entertaining, and not at all gross, ways. Young children will ask for ",
      {
        "type": "strong",
        "children": [
          {
            "type": "link",
            "href": "https://www.indiebound.org/book/9781609051907",
            "external": true,
            "children": [
              "Poopendous!"
            ]
          }
        ]
      },
      "as a read-aloud again and again, and I can attest that older children will reach for it on the bookshelf into their teens. Highly recommended!"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
