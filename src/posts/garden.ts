import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/whats-in-garden-eng.jpg",
    "alt": "What’s in My Garden?",
    "href": "/media/2010/08/whats-in-garden-eng.jpg",
    "width": 210,
    "height": 244,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "What better way for baby to learn the colors of the rainbow than from the garden? ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.starbrightbooks.org/details.php?id=283",
            "external": true,
            "children": [
              "What’s in My Garden?"
            ]
          }
        ]
      },
      ", a board book by Cheryl Christian, will entice babies with the illustrated, cut-out veggies that slide up from behind a garden scene."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This simple book lacks a story, and instead invites interaction, a boon to fostering communication in tiny ones. Every other page presents a vegetable with, for example, “I see tomatoes” and then asks the same question, “What color are they?” Older babies who recognize the vegetables from supper can participate in answering the question, and all can help slide the veggie up that awaits discovery on the opposing page and learn the color."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 0-3."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
