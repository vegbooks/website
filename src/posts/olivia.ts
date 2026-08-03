import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/i-stock-000009594887-x-small.jpg",
    "alt": "Olivia",
    "href": "/media/2011/07/i-stock-000009594887-x-small.jpg",
    "width": 210,
    "height": 288,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "We love ",
      {
        "type": "link",
        "href": "http://www.oliviathepiglet.com/",
        "external": true,
        "children": [
          "Olivia"
        ]
      },
      "! This piglet is smart, funny, and just a little mischievous. She admires Degas, imitates Pollock, and dreams of performing in an opera."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Adult readers will surely catch on that Ian Falconer’s protagonist Olivia is not in fact a pig but a little girl, but this book provides a great opportunity to talk to kids about what pigs are really like. We know ",
      {
        "type": "link",
        "href": "http://www.tonic.com/article/mirror-use-reflects-pigs-intelligence-hunger/",
        "external": true,
        "children": [
          "pigs are smart"
        ]
      },
      ". Are they as smart as Olivia? Are they funny and mischievous? Olivia likes to build sand castles on the beach. What would pigs do if they were in charge? And how does that compare to how they’re routinely kept in ",
      {
        "type": "link",
        "href": "http://www.goveg.com/factoryFarming_pigs_farms.asp",
        "external": true,
        "children": [
          "factory farms"
        ]
      },
      "?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3 to 7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
