import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/10/9780316070454.jpg",
    "alt": "All the Awake Animals",
    "href": "/media/2012/10/9780316070454.jpg",
    "width": 210,
    "height": 209,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I received a review copy of ",
      {
        "type": "emphasis",
        "children": [
          "All the Awake Animals"
        ]
      },
      " (by ",
      {
        "type": "link",
        "href": "http://dragonwagon.com/",
        "external": true,
        "children": [
          "Crescent Dragonwagon"
        ]
      },
      " and illustrated by David McPhail) at just the right time. We have been trying to convince our two-year-old that sleep is not something he should fight and the theme of the book, that animals curl up and go to sleep the same ways we do, was a neat approach. The illustrations are engaging and restful, with each sleeping animal also reflecting a letter of the alphabet illustrated in script on each page. For my two-year-old this made the book a little long for him but my four-year-old’s attention stayed constant through the whole book. The only downside to the beautiful scripted letters was that some were confusing. My daughter thought the “I” in “Ibex” was the same letter as the “J” for “Jaguar” and even to my eyes they look almost identical."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book uses a lot of alliteration within the alphabetical theme, so “Nightingale naps in a nest near the ground” and “Rabbit relaxes into restful repose, dreaming of ripe red radishes.” As a result, there are some great vocabulary words that will potentially be new to younger readers. I think that the book is a beautifully done bedtime alphabet book for the preschool and up set."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
