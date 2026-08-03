import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/11/9781404860261.jpg",
    "alt": "Eco-Family’s Guide to Going Green",
    "href": "/media/2010/11/9781404860261.jpg",
    "width": 210,
    "height": 169,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Going room by room in an average home, the ",
      {
        "type": "emphasis",
        "children": [
          "Eco-Family’s Guide to Living Green"
        ]
      },
      " provides an alternate twist to the “green” genre of children’s non-fiction. “Oh, no!” and “Way to Go!” bubbles reinforce or help readers reevaluate their enviro-habits in each living space. In the kitchen, there’s an “Oh, No!” for (soy) cheese slices that are wrapped individually (say goodbye to overpackaging!). Out in the backyard, we see the sister receive a “Way to Go!” for hanging her clothes on the line vs. using an energy-zapping dryer."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I generally think this is a great publication, with superb graphic design work. However, some of the tasks may be overkill for most elementary students, but I don’t suppose it hurts to start young and perhaps have readers influence their parents’ green choices, especially if parents read the text too. Examples of this include proper disposal of hazardous waste, like paint, purchasing an energy-efficient car, selecting bamboo flooring, and choosing low- or no-VOC paints."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Along similar lines are ",
      {
        "type": "link",
        "href": "http://www.capstonepub.com/product/9781404860261",
        "external": true,
        "children": [
          "three other Capstone titles"
        ]
      },
      ": ",
      {
        "type": "emphasis",
        "children": [
          "The Eco-Neighbor’s Guide to a Green Community"
        ]
      },
      ", ",
      {
        "type": "emphasis",
        "children": [
          "The Eco-Shopper’s Guide to Buying Green"
        ]
      },
      ", and ",
      {
        "type": "emphasis",
        "children": [
          "The Eco-Student’s Guide to Being Green at School"
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
