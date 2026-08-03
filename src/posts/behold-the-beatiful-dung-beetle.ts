import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2014/06/behold-beautiful-dung-beetle.jpg",
    "alt": "Behold Beautiful Dung Beetle book cover, depicting an insect",
    "href": "/reviews/behold-the-beatiful-dung-beetle/",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This unique read covers the life and times of the dung beetle, an insect that builds its life around the waste of others. Author Cheryl Bardoe packs a lot of information into the text, perhaps a bit too much at times. Three different kinds of dung beetles are described in depth- dwellers, rollers and tunnelers. The eating, mating and living arrangements for each type are covered."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The watercolors by Alan Marks are beautiful and really do an excellent job illustrating the concepts discussed in the text. Many of the pictures portray the view as we presume it would be seen at the dung beetle’s level, for instance placing us alongside one beetle at the bottom of a dark tunnel, looking up at its mate poking its head in from outside with bright sky overhead."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In the back of the book there is a glossary, bibliography, some additional facts, plus information about where to find dung beetles throughout the world. The glossary comes in handy, as some words and phrases used in the book (such as brood ball, elytra and pupa) are likely to be unfamiliar."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book is intended for children ages 5-8, but it did not hold our seven-year-old’s interest. He said that it would be best for people that are “big fans of bugs.” The text is definitely designed for educational purposes and the reading level seemed higher than designated."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.charlesbridge.com/",
            "external": true,
            "children": [
              "The publisher"
            ]
          },
          " provided a copy of this book for review."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
