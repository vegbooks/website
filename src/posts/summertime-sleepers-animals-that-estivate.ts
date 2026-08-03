import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2021/03/summertime-sleepers.jpeg",
    "alt": "Summertime Sleepers: Animals that Estivate",
    "href": "/media/2021/03/summertime-sleepers.jpeg",
    "width": 300,
    "height": 240,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "strong",
        "children": [
          {
            "type": "link",
            "href": "https://www.indiebound.org/book/9781580897167",
            "external": true,
            "children": [
              "SUMMERTIME SLEEPERS: Animals that Estivate"
            ]
          }
        ]
      },
      " by Melissa Stewart will introduce readers to animals that sleep all throughout the summer. Including butterflies, crabs, fish, snails, and even a hedgehog, the variety of animals that choose to chill out during the hot summer months is varied and surprising. Did YOU know that ladybugs estivated? Well, now you do!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Aimed at early elementary, the picture book provides layered information about whether animals estivate solo or in groups, where they are found, how they find their sleeping spaces, and why they sleep during the hotter, dryer months. Some standout details include the Leopard Gecko’s ability to get energy from fat stored in its tail and the Pixie Frog’s habit of eating its homemade cocoon for some immediate energy."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The Illustrations are mainly in muted colors, appropriate for estivating, and they are split into two parts. In full color, illustrator Sarah S. Brannen shows readers the animals in their chosen estivation location. The ladybugs are shown clustered within a cluster of leaves, and the killifish leave then water to hide together inside a damp log. Also included for each animal is a black and white drawing that shows details as well as life-size depictions of the smaller animals. The full name, scientific name, size, and common location is also included."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "More detail about the animals and both the author’s and illustrator’s notes are included at the end of ",
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781580897167",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Summertime Sleepers"
            ]
          }
        ]
      },
      ", as well as some additional sources for intrepid readers. This is the perfect book for the start to warmer weather!"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
