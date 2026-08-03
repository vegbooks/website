import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/07/beachcombing.jpg",
    "alt": "Beachcombing",
    "href": "/media/2010/07/beachcombing.jpg",
    "width": 215,
    "height": 286,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Nothing says summer like spending time at the beach. Lucky Jim Arnosky and his wife, Deanna, had the difficult task of visiting 26 different beaches along the Atlantic and Gulf coasts – for “research” purposes, of course- in order to write this wonderful morsel on a very vegan-friendly seaside activity: beachcombing! Its entertainment in its simplest form – “all you need is sunblock (with SPF of 30 or higher), a broad-rimmed hat to shade your head, sunglasses to protect your eyes, and a bucket to carry shells and other treasures you find.” Chronicled in the book are handy identification guides on shells, crab molts, washed up corals, shark teeth, animals found on the shoreline (man-of-wars, gulls, terns) and even special finds like eggs cases for ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Whelk",
        "external": true,
        "children": [
          "whelks"
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Skate",
        "external": true,
        "children": [
          "skates"
        ]
      },
      ". (I didn’t know what these last two were either!)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "But what I think I love most about this book is that it shows great care of the natural world. For example, Mr. Arnosky suggests to his readers that they should “collect only empty shells. If you find any shells that are still inhabited, return them to the water.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Bring a copy with you to the beach and show your kids how fascinating even the smallest of things can be!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
