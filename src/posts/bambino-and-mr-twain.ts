import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2019/04/bambino-and-mr-twain.jpg",
    "alt": "Bambino and Mr. Twain",
    "href": "/",
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
            "href": "https://www.charlesbridge.com/products/bambino-and-mr-twain",
            "external": true,
            "children": [
              "BAMBINO AND MR. TWAIN"
            ]
          }
        ]
      },
      "by P.I. Maltbie is beautiful picture book about a journey through the grieving process, helped along by a sympathetic cat. It uses language and scenes that younger readers will find accessible and even relatable. With gorgeous collage-influenced pictures by Daniel Miyares, the moody, rich tones of the beginning of the story slowly give way to the brighter colors of spring and finding motivation to heal from grief. Aimed at ages 5-8, we believe ",
      {
        "type": "strong",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Bambino and Mr. Twain"
            ]
          }
        ]
      },
      "could work for slightly older readers as well."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "More text-heavy than many early elementary picture books, this story of a cat’s companionship, and the sudden loss thereof, will appeal to children who have a special stuffed animal or house-pet. All through a sad winter following the death of Samuel Clemens’ wife Livy, the family cat Bambino sits with him and mourns with him. And it is a sudden departure on Bambino’s part that prompts an end to Clemens’ self-imposed exile from society."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Lovers of literary trivia will enjoy the storyline as it explains how Samuel Clemens began wearing white suits as well as anecdotal background on his daughters and home life. The author’s note at the end of the book reiterates the storyline in condensed form and provides additional detail about Clemens’ relationship, both working and personal, with his wife."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Overall, ",
      {
        "type": "emphasis",
        "children": [
          "Bambino and Mr. Twain"
        ]
      },
      " is a lovely picture book that addresses the difficult topic of loss and mourning without falling into morbidity or a saccharin approach that condescends to the reader. Highly recommended."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
