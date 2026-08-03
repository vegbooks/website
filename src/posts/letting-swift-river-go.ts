import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Letting Swift River Go",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Award-winning author ",
      {
        "type": "link",
        "href": "http://janeyolen.com/",
        "external": true,
        "children": [
          "Jane Yolen"
        ]
      },
      " penned this poignant tale of urban versus rural conflict set in the first half of the 20th century. ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.powells.com/biblio?PID=28772&cgi=product&isbn=0316968609",
            "external": true,
            "children": [
              "Letting Swift River Go"
            ]
          }
        ]
      },
      "is a fictionalized account of the true story of the damming of the Swift River, which flooded several small rural Massachusetts towns to create the giant ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Quabbin_Reservoir",
        "external": true,
        "children": [
          "Quabbin Reservoir"
        ]
      },
      "— the source of Boston’s drinking water. The six year old narrator describes life in one of the small towns which were eventually “drowned”, and observes the decision-making process and subsequent events as a young resident. While her family ends up moving to nearby New Salem, other community members scatter. When she is older, she and her father return to boat through their old area, talking through and processing their memories and feelings."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is very moving– I grew up in Massachusetts and have walked the roads and woods through the ",
      {
        "type": "link",
        "href": "http://www.mass.gov/dcr/parks/central/quabbin.htm",
        "external": true,
        "children": [
          "Quabbin"
        ]
      },
      ". I was surprised at how quickly those memories came back to me, in part because of award-winner ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Barbara_Cooney",
        "external": true,
        "children": [
          "Barbara Cooney’s"
        ]
      },
      " beautiful illustrations. Now that I have a child, I find myself wondering how I would have explained the situation to him. And I also remain aware of the very real and topical tensions between the needs of the urban populations and the those of rural citizenry around the world."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a wonderful story but not an easy read, and raises some unsettling questions about what price societies are willing to pay for clean water. In this case, society (including the ",
      {
        "type": "link",
        "href": "http://www.thefreelibrary.com/The+Quabbin+Water+and+wilderness+came+at+a+price-a0187946750",
        "external": true,
        "children": [
          "Massachusetts Supreme Judicial Court"
        ]
      },
      ") decided that “drowning” several rural towns was acceptable so that Boston and environs could be assured a steady supply of clean water. As Ms. Yolen so eloquently states in her author’s note, “such reservoirs are trade-offs, which, like all trades, are never easy, never perfectly fair.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I recommend this for ages 5 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
