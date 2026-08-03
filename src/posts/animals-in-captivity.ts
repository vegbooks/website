import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/wild-animals-in-captivity.jpg",
    "alt": "Wild Animals in Captivity",
    "href": "/media/2010/06/wild-animals-in-captivity.jpg",
    "width": 206,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "If my buddies ",
      {
        "type": "link",
        "href": "http://www.jonathanbalcombe.com/",
        "external": true,
        "children": [
          "Jonathan Balcombe"
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "http://literati.net/Bekoff/",
        "external": true,
        "children": [
          "Marc Bekoff"
        ]
      },
      ", along with PETA’s own Ingrid Newkirk, are endorsing a kid’s book then you know it’s not only going to be good, but ethically spot-on. Rob Laidlaw, a longtime campaigner for animal protection and founder of ",
      {
        "type": "link",
        "href": "http://www.zoocheck.com/",
        "children": [
          "Zoocheck Canada"
        ]
      },
      ", pens his first children’s book on the plight of wild animals living in captivity (but you gleaned that from the title, right?). He juxtaposes the lives both wild and confined elephants, polar bears, great apes and orcas lead, all while providing scientific facts on each species, their conservation status, familial ties, adaptations, etc."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Any child reading this couldn’t deny that animals, especially the larger species mentioned, require “Five Freedoms,” which are freedom from (1) thirst, hunger and malnutrition, (2) discomfort, (3) pain, injury and disease, (4) fear and distress, and freedom to (5) express normal behavior. Mr. Laidlaw encourages children to assess the welfare of animals they see in a variety of settings: public, roadside and safari park zoos, wild animal and marine parks, and aquariums and report problematic scenes to proper authorities. Nine other ways to help wild animals are outlined in the concluding chapter, including wildlife viewing in natural areas or at sanctuaries, in lieu of zoos."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Other book components that make this an interesting read –"
    ]
  },
  {
    "type": "list",
    "items": [
      [
        "brief synopsis of the history of zoos and their evolution (some have made the effort to switch from cages to “natural” enclosures, but not all);"
      ],
      [
        "overview of zoos’ captive breeding programs (unwanted babies supply roadside zoos and laboratories); and"
      ],
      [
        "selected models of ",
        {
          "type": "link",
          "href": "http://www.desertmuseum.org/",
          "external": true,
          "children": [
            "what zoos could look like"
          ]
        },
        " (sanctuaries, conservation/breeding centers for endangered wildlife) and efforts current zoos can take to improve their lot (such as eliminating elephant enclosures, like the Detroit Zoo)."
      ]
    ]
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=1554551439",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      "Look for Mr. Laidlaw’s next work in October 2010, ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1554551439?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=1554551439",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "On Parade: The Hidden World of Animals in Entertainment"
            ]
          }
        ]
      },
      ". Should be promising!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9 – 12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
