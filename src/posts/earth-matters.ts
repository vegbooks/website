import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Earth Matters",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "What’s probably most impressive about this publication is the way in which it was manufactured- as green as can feasibly be. Shunning a dust jacket, using vegetable ink, and printing on paper derived from “responsibly managed forests,” its publisher, the monolith ",
      {
        "type": "link",
        "href": "http://us.dk.com/static/cs/us/11/features/madewithcare/homepage.html",
        "external": true,
        "children": [
          "DK"
        ]
      },
      ", implements the most ethical and environmental processes it can source."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The content isn’t all that bad either. Eco adventurist, David de Rothschild, is the consulting editor, among several other contributors. Shy of being a true encyclopedia, this informative, fact and photo-filled 256-page science book introduces readers to Earth’s biomes (polar regions to temperate forests), their reactions to climate change and human influence, and how kids can help better the serious plight facing flora and fauna. Kudos are due for covering, however briefly, the subjects of factory farming, genetically-modified crops, and fair trade coffee and chocolate. Not once is vegetarianism mentioned, however, and sustainably-sourced, local fish and meat is found on several shopping lists in the “Making a Difference” pages. Also of importance are some of the misinformed statements. One that’s quite troubling (p. 28) indicates where carbon dioxide comes from. The book claims: agriculture (4%), transportation (22%), buildings (31%), and industry (40%). Anyone who’s read the famous 2006 UN Report knows that ",
      {
        "type": "link",
        "href": "http://www.goveg.com/environment-globalwarming.asp",
        "external": true,
        "children": [
          "the meat industry produces more greenhouse gases than all the SUVs, cars, trucks, planes, and ships in the world combined"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "On a side note, you might be interested in ",
      {
        "type": "link",
        "href": "http://www.theplastiki.com/",
        "external": true,
        "children": [
          "de Rothschild’s other effort"
        ]
      },
      " — a sea voyage from San Francisco to Sydney, aboard a catamaran made from 12,000 plastic bottles that will traverse the Great Pacific Garbage Patch, “huge, floating clouds of plastic trash caught in a swirling vortex of ocean currents.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
