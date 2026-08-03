import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/11/9780805093162.jpg",
    "alt": "Suryia and Roscoe",
    "href": "/media/2011/11/9780805093162.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Ack! Why does something so sweet and well-intentioned have to be such a letdown? ",
      {
        "type": "emphasis",
        "children": [
          "Suryia and Roscoe"
        ]
      },
      ", in theory, is a perfect tale for preschoolers and early elementary students about a unique friendship between an orangutan and a rescued dog who live at the T.I.G.E.R.S. “Preservation Station” in South Carolina. The book and the “zoo” it represents is also the perfect example of the fine line conservation groups walk in terms of “educating” vs. “entertaining” potential donors, children and the public at large. Unfortunately, T.I.G.E.R.S. crosses that line, and I wouldn’t encourage anyone to purchase this book and continue its exploitative practices."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The author “Doc” Bhagavan Antle celebrates the fact that he’s a trainer (you can even see in their promo video the implementation of the cruel bull-hook with their elephant), and that his animals have starred in over 500 films, television shows, commercials and advertisements worldwide. That doesn’t sound like conservation efforts to me; just a way to make a buck. And more than anyone, I fully understand the need for nonprofits to start thinking in business terms, especially in this economic downturn, but certainly not if it jeopardizes the welfare of the animals and gives people a misguided, commoditized view of wildlife. At its Preservation Stations, guests can take photos with the wild animals, pet them and generally treat them like they would a cat or dog, which they are far from."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "And unlike some of the other genuine children’s tales addressing different species bonding (",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/best-friends-the-true-story-of-owen-and-mzee/",
            "children": [
              "Owen & Mzee"
            ]
          }
        ]
      },
      ", ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/tarra-and-bella-the-elephant-and-dog-who-became-best-friends/",
            "children": [
              "Tarra & Bella"
            ]
          }
        ]
      },
      "), the photographs in this book are entirely staged, unauthentic and just manipulative…in my humble opinion."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I don’t recommend this book for anyone."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
