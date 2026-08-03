import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2020/03/aliens-among-us.jpg",
    "alt": "Aliens Among Us: Extraordinary Portraits of Ordinary Bugs",
    "href": "/media/2020/03/aliens-among-us.jpg",
    "width": 300,
    "height": 263,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781631494260",
        "external": true,
        "children": [
          "ALIENS AMONG US"
        ]
      },
      " by Daniel Kariko is a must-have for any child (or adult!) who is fascinated with or horrified by bugs. Its juxtaposition of basic bug information including a black and white sketch and an up-close and detailed color photograph creates a thrilling effect. Or maybe chilling! These bugs are delightfully creepy in their microscopic close-ups."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The vocabulary is not simplified for young children, but the descriptions are concise and clear enough that interested readers are able to pick up meanings for “exoskeleton,” “formidable,” and “resonance chamber.” In fact, most of the text, written by Tim Christensen, is very accessible despite the technical names and examples of “anticoagulants” being spit into wounds. Seriously, bug-loving kids are going to love this book!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The contents are divided into bug-types like Flightless Arthropods, Diptera, and Hymenoptera. (That’s bugs like silverfish, flies, and wasps to we lay-people.) Each section includes a brief description and then launches into the superstars of the book — the bugs themselves. The black and white illustration of each bug, by Isaac Talley, provides context for the portrait-like, color image facing it. These images are even more impressive once the end-section “Notes on Process” has been read."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Families that focus on compassionate treatment of all animals, including bugs, should know that the subjects in ",
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781631494260",
        "external": true,
        "children": [
          "ALIENS AMONG US"
        ]
      },
      " have been gathered and frozen in order to be photographed. This could create an opportunity for family conversation about the subject as a whole and the understanding and knowledge versus the sacrifice that went into making the book."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
