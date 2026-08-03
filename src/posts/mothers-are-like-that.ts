import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/09/0395883512-lres.jpg",
    "alt": "Mothers Are Like That",
    "href": "/media/2010/09/0395883512-lres.jpg",
    "width": 210,
    "height": 150,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "A mother and son team create a warm and peaceful book about animal mothers of all types and the things they do to care for their babies. Carol Carrick uses the refrain “mothers are like that” repeatedly throughout the book like a mantra. One sentence on each page describes how mothers care for their young and accompanying it is an intimate family portrait with different animals on each page, illustrated by Paul Carrick."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I like that a human mother and child are grouped in with the animal mothers and children and the words and emotions can apply to all of them equally. Phrases like “she can find them in a crowd” and “mother takes them out and shows them off” with images of cows or ducks has a compassionate message implicit in the pairing. As a mother, I definitely feel more empathy now for ",
      {
        "type": "link",
        "href": "http://photography.nationalgeographic.com/photography/photo-of-the-day/piglet-africa-pod/",
        "external": true,
        "children": [
          "other mothers"
        ]
      },
      ", especially other species. Carrick & Carrick subtlely tap into our compassion without a blatant use of anthropomorphism."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I recommend this gentle book about a mother’s steadfast love and care for any mother and child."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
