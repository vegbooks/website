import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "The Snail’s Spell",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 140,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Many of us are inspired to become vegetarians after they learn about the widespread animal exploitation that supports the ",
      {
        "type": "link",
        "href": "http://www.ecosalon.com/the-standard-american-diet-in-pictures-and-numbers/",
        "external": true,
        "children": [
          "Standard American Diet"
        ]
      },
      ". We can only hope that the next generation sees animals differently than ours does — not as ",
      {
        "type": "link",
        "href": "http://www.farmsanctuary.org/issues/factoryfarming/",
        "external": true,
        "children": [
          "commodities to be manipulated to maximize yield"
        ]
      },
      ", but as individuals who deserve our respect."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Joanne Ryder and Lynne Cherry’s storybook ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.goodreads.com/book/show/1042558.The_Snail_s_Spell",
            "external": true,
            "children": [
              "The Snail’s Spell"
            ]
          }
        ]
      },
      " can help us instill those values in the children in our lives. By inviting the reader to become a snail — one of the smallest and most reviled animals in our culture — the story inspires empathy for other beings, and may even spark an interest in the natural histories of the animals around us."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Using sparse language and simple drawings, this book is an ideal pick for a teacher or family member who would like to introduce these concepts to the children they care for without explicitly mentioning the V-word."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
