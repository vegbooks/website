import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/05/s-spinach.jpg",
    "alt": "s Spinach",
    "href": "/media/2013/05/s-spinach.jpg",
    "width": 210,
    "height": 208,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Sylvia Spivens refuses to eat spinach, despite her parents’ attempts to cajole her. She engages in some very serious picking-spinach-out-of-her-meal behavior (we see the same behavior with carrots in our house)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "One dreary March day, Sylvia’s teacher hands out a variety of seeds to the class for their upcoming garden project. Sylvia gets the packet containing spinach seeds. Suffice to say she is displeased, but no trades allowed!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As her classmates’ seeds sprout, Sylvia’s spinach remains quiet. This does not engender any new love of the vegetable in her eyes! Finally, the seedlings sprout and Sylvia regularly checks in on her baby spinach plants, caring for them with tenderness. As the growing season progresses, the class transplants their vegetables outside."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "By the last week of school, the children’s garden was progressing but only a couple of plants were ready to harvest. One of them? Sylvia’s spinach! Noticing that others were munching on her just-harvested spinach, Sylvia worked up the gumption to try it herself. You may be able to guess the rest. Yes, another spinach eater created via the magic of gardening!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Sylvia’s Spinach"
        ]
      },
      " (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0983661510/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0983661510&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ") is a very nicely done book which honestly depicts some realities of children’s palates but handily reflects the power of shifting minds and tastebuds with participation in gardening. Vegan caregivers might want to note that there is a mention of eggs."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
