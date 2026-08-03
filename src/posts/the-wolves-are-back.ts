import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "Author ",
      {
        "type": "link",
        "href": "http://www.jeancraigheadgeorge.com/bio.html",
        "external": true,
        "children": [
          "Jean Craighead George"
        ]
      },
      " and artist ",
      {
        "type": "link",
        "href": "http://www.minorart.com/index.html",
        "external": true,
        "children": [
          "Wendell Minor"
        ]
      },
      " have teamed up to bring us the beautifully illustrated tale in ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.powells.com/biblio/62-9780525479475-0",
            "external": true,
            "children": [
              "The Wolves Are Back"
            ]
          }
        ]
      },
      ". Using the story of a male wolf and his pup to trace the re-introduction of ",
      {
        "type": "link",
        "href": "http://www.nps.gov/yell/naturescience/wolves.htm",
        "external": true,
        "children": [
          "wolves in Yellowstone"
        ]
      },
      ", they also have provided a chance to explore the backstory of their eradication and discuss the role of this apex carnivore in balancing the ecosystem."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book has much to recommend it: it is filled with interesting facts about Yellowstone and the creatures that live there, told in a child-friendly but unsentimental way. Parents should know that there is straightforward mention of carnivores’ elk and bison kills as well as a brief discussion of the wolf hunts that killed off the animals. I love the way the author has woven in the return of other plants and animals to the area to highlight the interrelated nature of the ecosystem. A wonderful read for ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
