import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "This cute little board book by Jane Brett and Kate Davies teaches little kids counting while demonstrating a mother hen’s love for her brood. The farm is idyllic — picture ",
      {
        "type": "link",
        "href": "http://farmsanctuary.org/farm/",
        "external": true,
        "children": [
          "Farm Sanctuary"
        ]
      },
      " or ",
      {
        "type": "link",
        "href": "http://www.animalsanctuary.org/",
        "external": true,
        "children": [
          "Poplar Spring"
        ]
      },
      " — unlike industrial factory farms. But given the target audience, I think it’s just right."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 0-3."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
