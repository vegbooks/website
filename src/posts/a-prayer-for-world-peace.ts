import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2021/01/9789888240494.jpg",
    "alt": "A Prayer for World Peace",
    "href": "/media/2021/01/9789888240494.jpg",
    "width": 218,
    "height": 400,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "Jane Goodall’s ",
      {
        "type": "strong",
        "children": [
          {
            "type": "link",
            "href": "https://www.indiebound.org/book/9789888240494",
            "external": true,
            "children": [
              "A PRAYER FOR WORLD PEACE"
            ]
          }
        ]
      },
      " is a wide-open call for awareness and understanding of how we are all — people, animals, the environment — connected in our world. The prayer includes whoever wants to join in by reaching our to the “Great Spiritual Power,” and it continues with calls for open mindedness, generosity, and compassion. Soon, however, it leads into more specific and urgent calls that we heal the harm we’ve inflicted on the environment, pray for starving children, those forced into slave labor and prostitution, and child soldiers. Refugees of war and environmental destruction are highlighted, as are myriad forms of animal abuse and exploitation. Goodall writes, “We pray for an end to cruelty whether to humans or other animals…and torture in all its forms.” The book ends with a return to more general prayers for strength through love, understanding, humility, and learning not to take anything for granted."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While some of the sections of this prayer may feel shocking to younger readers, the various sections open up direct and malleable opportunities for families to discuss the impacts and effects, both positive and negative, that each individual can have. Caregivers will want to read through the book prior to sharing it with more sensitive children as the sections that mention abuse to children and animals are detailed enough to beg for elaboration."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Feeroozeh Golmohammadi’s rich and expressive artwork on each page reflects the hopeful sections as effectively as the harsh and painful section. Moving between cool blues and greens to reds, purples, and toxic oranges and browns, the artist evokes reactions and an urge to action together with the words. The abstraction of the images include details that will draw the reader’s eye to the page again and again."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book includes a message from Jane Goodall at the end, as well as information about the Jane Goodall Institute and ",
      {
        "type": "link",
        "href": "http://www.rootsandshoots.org/",
        "external": true,
        "children": [
          "Roots & Shoots"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
