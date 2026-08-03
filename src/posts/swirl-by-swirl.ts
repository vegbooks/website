import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/11/swirl-by-swirl-hres.jpg",
    "alt": "Swirl by Swirl",
    "href": "/media/2011/11/swirl-by-swirl-hres.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Through poetry and illustration, Joyce Sidman and Beth Krommes explore all the diverse places — from snail shells to ",
      {
        "type": "link",
        "href": "http://animals.nationalgeographic.com/animals/mammals/chipmunk/",
        "external": true,
        "children": [
          "hibernating chipmunks"
        ]
      },
      " — that spirals appear in the natural world in ",
      {
        "type": "emphasis",
        "children": [
          "Swirl by Swirl"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This stunning book brings readers underground to woodchuck burrows, up close to observe snails, and into a torrent of ocean. While the text is simple enough for a toddler, the illustrations and endpapers of the book teem with details, certain to hold the attention of an older child (or even an adult, if you’re anything like me). We learn both that a spiral “reaches out . . . exploring the world” (presented along with images of common octopus and spiny sea horse), and also that the “number of sprial rows of florets in a sunflower — or scales on a pinecome, or bumps on a pineapple — follow a patter called the Fibonacci sequence” (in the end notes)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "People concerned with animal rights will delight to see free-roaming ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Merino#Animal_welfare_developments",
        "external": true,
        "children": [
          "merino sheep"
        ]
      },
      " engaged in social interactions and ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Circus#Controversy",
        "external": true,
        "children": [
          "elephants"
        ]
      },
      " and monkeys in their native habitats."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I highly recommend this book for kids ages 3 to 8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
