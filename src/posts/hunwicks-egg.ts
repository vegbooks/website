import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/09/0152163182-lres-1.jpg",
    "alt": "Hunwick’s Egg",
    "href": "/media/2010/09/0152163182-lres-1.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.memfox.net/hunwicks-egg.html",
        "external": true,
        "children": [
          "Mem Fox"
        ]
      },
      " spent seven years writing this lovely little book about a rabbit-eared bandicoot — an adorable Australian desert animal — and the devotion he showers on an egg that he has found."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While there’s some ambiguity about whether the egg is in fact an egg, or just a rock (since it does not hatch), this tale is great for vegan kids. At the heart of veganism is love for other animals and a desire that they be simply who they are, and Hunwick befriends the egg and cares for it out of sheer love, expecting nothing in return."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book also offers a good launchpad for discussing ",
      {
        "type": "link",
        "href": "http://www.enchantedlearning.com/biomes/desert/desert.shtml",
        "external": true,
        "children": [
          "desert biomes"
        ]
      },
      ", ",
      {
        "type": "link",
        "href": "http://www.amnh.org/nationalcenter/Endangered/index.html",
        "external": true,
        "children": [
          "endangered and imperiled animals"
        ]
      },
      ", or ",
      {
        "type": "link",
        "href": "http://www.ausinternet.com/kids.htm",
        "external": true,
        "children": [
          "Australia"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
