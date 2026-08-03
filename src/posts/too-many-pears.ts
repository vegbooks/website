import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/too-many-pears-cover.jpg",
    "alt": "Too Many Pears",
    "href": "/media/2010/06/too-many-pears-cover.jpg",
    "width": 207,
    "height": 191,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Pamela the clever cow will stop at nothing for her favorite fruit: pears. This is a cute story about a determined cow who overcomes all efforts to restrain her. The people (from whom Pamela steals the pears) try various methods of containing Pamela, without luck. Finally, the young girl Amy outsmarts Pamela with an idea that resolves her pear addiction."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Jackie French creates a fun story with unique characters and an unusual dilemma. Bruce Whatley’s illustrations are hilarious and expressive and understandably why this book was a winner of a 2004 ",
      {
        "type": "link",
        "href": "http://www.ibpa-online.org/pubresources/benfrank.aspx",
        "external": true,
        "children": [
          "Benjamin Franklin Award"
        ]
      },
      " under the children’s picture book category. My preschooler loved the illustrations and I especially liked the cute little details like Pamela’s facial expressions and the cow spots in shapes of pears and hearts."
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
