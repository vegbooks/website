import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/10/bronto-cera-frontcover-copy.jpg",
    "alt": "BRONTO-CERA_frontcover_copy-924x1024",
    "href": "/media/2013/10/bronto-cera-frontcover-copy.jpg",
    "width": 216,
    "height": 240,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I received a review copy of the latest adventure featuring Bronto recently, to the delight of my children who really enjoyed ",
      {
        "type": "link",
        "href": "/reviews/bronto-the-pterodactyl-eggs/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Bronto & the Pterodactyl Eggs"
            ]
          }
        ]
      },
      ". Charlotte Vivian Rodenberg not only brings Bronto the Apatosaurus back in ",
      {
        "type": "emphasis",
        "children": [
          "Bronto, Friend of Ceratops"
        ]
      },
      ", she uses similar narrative devices alongside new friends for Bronto."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Bronto dreams of swimming in the sea as a wildfire rages only to be awakened by lightning strikes and a resulting fire. Bronto seeks his friends to warn them of the danger the fire poses but finds them falling prey to a Tyrannosaurus Rex. Once a fellow Apatosaurus arrives to assist Bronto, the T. Rex flees and Bronto, the Ceratops herd, and Bronto’s friend Arbol escape in the nearby river."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book continues the theme of Bronto being kind to his fellow dinosaurs and nature being in turmoil for all dinosaurs. Many young readers will need assistance sounding out the complex words in the book but the use of accurate terminology will hopefully spark curiosity."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
