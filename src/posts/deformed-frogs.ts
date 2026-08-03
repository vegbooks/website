import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/11/9781429645331.jpg",
    "alt": "Deformed Frogs",
    "href": "/media/2010/11/9781429645331.jpg",
    "width": 210,
    "height": 242,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "If anything, ",
      {
        "type": "emphasis",
        "children": [
          "Deformed Frogs"
        ]
      },
      " is a unique way to approach and support an organic lifestyle. The premise of this non-fiction, educational work is for the reader to sleuth their way through the enigma of why, in some habitats, up to 60% of frogs are disfigured, either with abnormal, additional or missing limbs. What we discover is that there are three very plausible explanations: pesticide use on farmsteads, flatworm parasites that cause cysts in tadpoles, and a weak ozone layer that allows harmful UV-B rays to shine through."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Like any animal, frogs play a large role in their ecosystem, eating pesky insects and serving as a food source for others. Their demise could greatly affect the health of their environment and also foreshadow our own future, suggests author Kathy Allen, as both species share similar characteristics."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Students will appreciate how scientists approach such baffling issues and attempt to advocate for and protect frogs. Check out the ",
      {
        "type": "link",
        "href": "http://www.savethefrogs.com/students/index.html",
        "children": [
          "Save The Frogs"
        ]
      },
      " campaign for neat ways your kid can help these rather cute amphibians, including the establishment of a frog pond at their school. Find other titles of interest (polar bears, whales) from ",
      {
        "type": "link",
        "href": "http://www.capstonepub.com/product/9781429645331",
        "children": [
          "Capstone"
        ]
      },
      "."
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
