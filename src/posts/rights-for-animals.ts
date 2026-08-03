import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "alt": "Rights for Animals?",
    "href": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0749653469",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      "Now out of print, ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0749653469?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0749653469",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Rights for Animals?"
            ]
          }
        ]
      },
      " in the Viewpoints series provides a close-up, bi-focal look at the myriad of issues plaguing animals, us and our ethics. Thoughtfully including quotes from notable organizations, philosophers, campaigners, and historical figures on either side of the AR debate, each topic is covered over a two-page-spread with colorful, appropriate – albeit at times repugnant – photographs (think a sea-turned-red with blood from battered whales in the Faroe Islands) and brief summative text. All the big ones are covered: vivisection, veg*nism, hunting, fashion, and entertainment, and a few final chapters further discuss the idea of rights, ways to protect animals, etc."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Deidre Rochford’s research and writing provides valuable information for youngsters to use in their school papers, will help diversify their vocabulary with introductions to words such as BSE, culling and shechita, and is overall a concise synopsis of the complexities involved in ethical quandaries."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "For more recent titles on the subject, check out the same publisher’s website, ",
      {
        "type": "link",
        "href": "http://www.franklinwatts.co.uk/searchResults.aspx?submitSearch.x=0&submitSearch.y=0&q=animal+rights",
        "external": true,
        "children": [
          "Franklin Watts"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9-14."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
