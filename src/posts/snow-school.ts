import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/02/snow-school-300.jpg",
    "alt": "Snow School",
    "href": "/media/2013/02/snow-school-300.jpg",
    "width": 210,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "With just 3,500 left in the wilderness of their Pakistani home in the Hindu Kush Mountains, snow leopards are a rare and mesmerizing endangered species for any age group to read about and study. Beautifully white with spotted fur and (sometimes) piercing blue eyes, snow leopards remind us of the seemingly untouched, pristine territories that still exist in the world. In ",
      {
        "type": "link",
        "href": "http://www.charlesbridge.com/productdetails.cfm?PC=5724",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Snow School"
            ]
          }
        ]
      },
      ", author Sandra Markle lyrically tells the story of twin cubs and their struggle to learn life’s immediate lessons:"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "Outside the den, it’s a dangerous world; No matter what, stay clear of humans."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "For Vegbooks readers, although Markle has a beautiful command of descriptive vocabulary (“the little male is a fuzzy ball of muscle and curiosity,” “mother and cubs climb on big paws to the crest of giant sloping slabs of rock”), her words are spent largely on the daily struggle to hunt food, or live prey. And the talented watercolor illustrator, Alan Marks, does a lovely, but stark job of depicting these kills. It’s a sensitive subject with sensitive imagery, I think, for a demographic like ours which is so attuned to the sentience of all beings and the suffering they can endure in the last moments of life. Personally, I think there are many lessons that all baby mammals learn, and perhaps more time could’ve been spent on these other aspects rather than on hunting (take for example, Marc Bekoff’s ",
      {
        "type": "link",
        "href": "/reviews/animals-at-play-rules-of-the-game/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Animals at Play"
            ]
          }
        ]
      },
      " which investigates the reasons and joys of animal play)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-7."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "A review copy was provided by the publisher."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
