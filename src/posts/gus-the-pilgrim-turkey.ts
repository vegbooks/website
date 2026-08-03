import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/11/9780807512661.jpg",
    "alt": "Gus, The Pilgrim Turkey",
    "href": "/media/2010/11/9780807512661.jpg",
    "width": 210,
    "height": 252,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Life on the farm for Gus, a quirky turkey with a penchant for wearing wacky outfits, is carefree and comfortable. He takes a cue from the Pilgrims and flees the farm when he learns from his animal friends that he is to be the main course at Thanksgiving dinner. After an arduous trek, he settles among some penguins in the South Pole. But their idea of a wonderful meal is a fish feast. Considering that Gus barely escaped from becoming dinner himself, this is unsettling and an unsatisfactory ending to the story ."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Teresa Bateman, author of ",
      {
        "type": "emphasis",
        "children": [
          "A Plump and Perky Turkey"
        ]
      },
      ", attempts to portray Gus’s search for a safe place to live in a lively way to children, but her slow-moving prose bogs down the story. Plus, she skips any detailed explanation of the Pilgrims, which is odd considering she compares Gus’s persecution to theirs. Ellen Joy Saski’s illustrations are more appealing than the story itself and add an element of humor, too. Parents wishing to show turkeys as sentient beings that have the determination to survive rather than becoming a meal might opt for another book such as ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/a-turkey-for-thanksgiving/",
            "children": [
              "A Turkey for Thanksgiving"
            ]
          }
        ]
      },
      " by Eve Bunting or ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.derekanderson.net/OTRReviews.html",
            "external": true,
            "children": [
              "Over the River: A Turkey’s Tale"
            ]
          }
        ]
      },
      "by Derek Anderson."
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
