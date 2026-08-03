import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/05/catsofroxville.jpg",
    "alt": "The Cats of Roxville Station",
    "href": "/media/2010/05/catsofroxville.jpg",
    "width": 216,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Do you remember having summer reading lists dished out by your public school? There was always such diversity and intrigue (at least in my opinion) amongst the titles that made it to the list. One that I’ll never forget was ",
      {
        "type": "emphasis",
        "children": [
          "My Side of the Mountain"
        ]
      },
      ", also written by ",
      {
        "type": "link",
        "href": "http://www.jeancraigheadgeorge.com/",
        "children": [
          "Jean Craighead"
        ]
      },
      {
        "type": "link",
        "href": "http://www.jeancraigheadgeorge.com/",
        "children": [
          "George"
        ]
      },
      ". I wanted nothing more to run away, live in a tree and hang with wildlife in the Catskill Mountains. ",
      {
        "type": "emphasis",
        "children": [
          "The Cats of"
        ]
      },
      {
        "type": "emphasis",
        "children": [
          "Roxville"
        ]
      },
      {
        "type": "emphasis",
        "children": [
          "Station"
        ]
      },
      " is in the same vein, but on the urban end, where the protagonist Mike, a teen in the foster care of widowed Mrs. Dibber, becomes enchanted with a curious little feline named Rachet. “A lady in a fur coat” had discarded the kitten off a bridge, but not before Rachet had been kicked and tortured by the children in the family."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The entire book traverses Mike’s attempt to befriend the cat and Rachet’s long-haul in learning the ways of feral (finding a place in the feline hierarchy, giving birth to kittens, hunting mice) and domesticated life (when to trust and when to run from humans). But more importantly it’s an insightful look as to how animals have adapted to the suburban setting. Barn owls find refuge in Mike’s attic, feral cats escape the snow and bitter cold in his basement, and even foxes, raccoons and deer make their appearances in the neighborhood. Mike has the patience to observe animal behavior – ",
      {
        "type": "link",
        "href": "http://www.outdoors.org/education/naturalist/junior/naturalist-home.cfm",
        "children": [
          "a natural naturalist in the making"
        ]
      },
      " – and will inspire readers to investigate their own backyards for the captivating flora and fauna that can be detected."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Warning: George tells nature like it is…kittens perish, people try to poison the cats, and Rachet protects her litter from predators as best she can. Definitely a read for older kids."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9 -12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
