import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/08/wiener-dog1.jpg",
    "alt": "The Wiener Dog Magnet",
    "href": "/media/2012/08/wiener-dog1.jpg",
    "width": 210,
    "height": 120,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Hayes Roberts’ ironic tone intrigues both children and adults. In ",
      {
        "type": "link",
        "href": "http://www.bluebison.net/books/dog_magnet/the-wiener-dog-magnet.pdf",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "The Wiener Dog Magnet"
            ]
          }
        ]
      },
      ", he pokes fun at what can be a parent’s nightmare – when a child wants a pet. In this case, Kiki Marie, the main character, uses her allowance to buy a magnet shaped like an animal. Faced with all the choices she might find in a pet store, she choses a weiner dog. Presumptively, as we are not told, her parents sigh with a sense of relief that for a fraction of the cost and no responsibility their daughter is satisfied with a magnet rather than a real live dog."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The adjective “wiener” implies that the purchaser of the magnet is a sucker. Buyer beware, this seemingly benign magnet becomes soon becomes a disaster. Like a real wiener dog, its cuteness soon becomes the center of attention. All wiener dogs are magnetically drawn to and stick to this little magnet. Soon the dogs become too heavy for Kiki Marie to carry."
    ]
  },
  {
    "type": "image",
    "src": "/media/2012/08/the-wiener-dog-magnet-book.jpg",
    "alt": "",
    "href": "/media/2012/08/the-wiener-dog-magnet-book.jpg",
    "width": 210,
    "height": 140,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "As the story unfolds, you will find yourself bursting with laughter and a sigh of relief when Kiki Marie devises a clever way to solve her problem."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Hayes Roberts has a way of adding subtle humor to everyday dilemmas. ",
      {
        "type": "emphasis",
        "children": [
          "Mom, can I please please buy that toy?"
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
