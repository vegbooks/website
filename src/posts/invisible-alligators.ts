import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/08/alligators.jpg",
    "alt": "Invisible Alligators",
    "href": "/media/2012/08/alligators.jpg",
    "width": 210,
    "height": 167,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I am a lover of books, in particular the feel of the pages, so I was reluctant to peruse the world of e-books. But the title of Hayes Roberts’ e-book ",
      {
        "type": "link",
        "href": "http://www.magickeys.com/books/invis-allig/index.html#pictop",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Invisible Alligators"
            ]
          }
        ]
      },
      " caught my eye and the first line captured my attention. “For the red furies” — a dedication to all those bothersome things that happen. The remote control suddenly vanishes. The last slice of cake is suddenly eaten. You fall asleep in the bathtub and your skin gets pruney. Sari, a young monkey and the main character, seeks an explanation for these disruptions in daily life. Her quest makes the reader question if there is some mysterious otherworldly force that takes the order out of life."
    ]
  },
  {
    "type": "image",
    "src": "/media/2012/08/invisible-alligators.jpg",
    "alt": "",
    "href": "/media/2012/08/invisible-alligators.jpg",
    "width": 210,
    "height": 163,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "When Sari climbs the steps of her favorite castle, it is like she crosses a portal into another world, much like Alice falls down a rabbit hole into Wonderland or the children find Narnia in a Wardrobe. ",
      {
        "type": "emphasis",
        "children": [
          "Invisible Alligators"
        ]
      },
      " is a child’s way of trying to make sense out of things that cannot be explained in a whimsical way. These things just happen, there is no conspiracy, no plan made an underground clan of invisible alligators. There are just some things in life that we cannot control. Sari must learn that life is not like the solution to an algebra problem, it is unpredictable."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In life, things will get unruly. Bridges will break. Llamas will run loose. Wild blue goats will pose danger. Part of growing up is realizing that unpleasant things happen. We must deal with these unpleasant things so we can enjoy life. Sari learns this when she sees she can fix the bridge, herd the lamas and tame the wild goats. Then she can go to algebra class and her ordered everyday life resumes."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The illustrations are vibrant and reminiscent of ",
      {
        "type": "link",
        "href": "/reviews/the-lorax-2/",
        "external": true,
        "children": [
          "Dr. Seuss books"
        ]
      },
      " and the movie “",
      {
        "type": "link",
        "href": "/reviews/ice-age-guest-post-by-jennifer-gannett/",
        "children": [
          "Ice Age"
        ]
      },
      ".” The animated style of the illustrations lend well for an e-book format. Hayes Roberts’ style gave a die-hard printed book reader something to think about. Roberts adds a modern twist to childhood classics."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "This book is also available in ",
          {
            "type": "link",
            "href": "http://www.lulu.com/shop/hayes-roberts/invisible-alligators/paperback/product-4771683.html",
            "external": true,
            "children": [
              "softcover"
            ]
          },
          "."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
