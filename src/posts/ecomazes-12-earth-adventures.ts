import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/10/eco-mazes-cvr.jpg",
    "alt": "EcoMazes: 12 Earth Adventures",
    "href": "/media/2010/10/eco-mazes-cvr.jpg",
    "width": 210,
    "height": 207,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "You’re a scientist on an Alpine High Mountain hiking from Base Camp to Upper Camp. No, no, wait. You’re snorkeling with a friend between fragile coral reefs, passing stingrays and moray eels on the way back to the beach. Feeling up to helping a baby elephant find his herd in the Savanna? How about trekking through tundra, wetlands, grasslands, and the other ecosystems Roxie Munro depicts in ",
      {
        "type": "link",
        "href": "http://www.roxiemunro.com/home.html",
        "external": true,
        "children": [
          "EcoMazes"
        ]
      },
      "? (The website offers a few mazes for download.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Illustrated over a two-page spread, each environment challenges readers to finagle their way through a maze and discover over 350 animals scattered throughout the book. Informative answer keys are provided in the back, outlining the path that solves the maze, as well as location IDs for all the animals, and mini essays on each ecosystem. Any kid would be enraptured with these inviting puzzles (I found myself relentlessly trying to solve one or two) and appreciate the diversity found on Earth."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A few downsides to my enthusiasm for Munro’s work are two other titles she’s undertaken including one involving circuses and the other rodeos. We all know ",
      {
        "type": "link",
        "href": "http://www.peta.org/actioncenter/entertainment.asp",
        "external": true,
        "children": [
          "performing animals"
        ]
      },
      " lead very depressing, abusive lives in such venues."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4–8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
