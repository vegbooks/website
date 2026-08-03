import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/10/unos-garden.jpg",
    "alt": "Uno’s Garden",
    "href": "/media/2011/10/unos-garden.jpg",
    "width": 210,
    "height": 225,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "With a story reminiscent of Dr. Seuss’s ",
      {
        "type": "emphasis",
        "children": [
          "The Lorax"
        ]
      },
      " and Bill Peet’s ",
      {
        "type": "emphasis",
        "children": [
          "The Wump World, Uno’s Garden"
        ]
      },
      " features the vivid illustrations of Graeme Base (",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/animalia/",
            "children": [
              "Animalia"
            ]
          }
        ]
      },
      ") and a story of how plants, animals and humans can either live in harmony or not, depending on the choices those humans make."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While hiking one day, elf-like Uno discovers a forest, where he decides to build his home. The forest is filled with animals from Base’s imagination: winged “moopaloops;” bunny-faced “puddlebuts;” and a “snortlepig.” It is a wondrous forest, and other people join Uno. Soon the settlement grows into a village. While the number of buildings and people increase, the number of animals and plants decrease. The village becomes a town, and tourists descend upon it. Yet, “Uno kept working in his garden.” A train, spewing smoke and ash into the air, whizzes around the now polluted, sprawling city. Smokestacks, resembling long bottlenecks, release smoke into the air. Only a few animals remain, including two “pricklebacks,” green, snail-like animals with lumpy conical shells on their backs."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Eventually, the citizens of this crowded, polluted city abandon it: all except Uno, who tends his garden in an alley surrounded by towering, empty buildings. Uno’s children and grandchildren record the resurgence of plants and animals and build structures that blend into the forest rather than destroy it. At the book’s end, a fold-out page reveals a forest teeming with life and a city that is in perfect balance with it."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Throughout the book, Base notes at the top of each two-page spread how many animals and plants survive in comparison to the number of buildings that populate the forest. This book provides younger children with an introduction to the ideas of conservation and sustainability, and they and their parents will appreciate the story’s simplicity as well as the rich illustrations that accompany it."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 to 8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
