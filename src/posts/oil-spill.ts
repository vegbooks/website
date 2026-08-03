import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/07/oil-spill.jpg",
    "alt": "Oil Spill!",
    "href": "/media/2010/07/oil-spill.jpg",
    "width": 210,
    "height": 170,
    "align": "right"
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0064451216",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      "I probably should’ve bitten my tongue in ",
      {
        "type": "link",
        "href": "/reviews/baby-whales-drink-milk/",
        "children": [
          "an earlier post"
        ]
      },
      ", because here I find myself reviewing yet another publication in the “Let’s Read and Find out Science” series. At the “Sea & Me” Gallery in the children’s museum where I do my 9-5, I spotted ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/0064451216?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0064451216",
            "external": true,
            "children": [
              "Oil Spill!"
            ]
          }
        ]
      },
      " by Melvin Berger in our book nook. Although it focuses on the Exxon Valdez spill from the late ’90s, the book’s information reviews how and why spills occur, the damage they inflict on marine animals, and ways humans attempt to clean up the mess. As I’ve been interacting with the museum’s young patrons in this particular exhibit, I’ve discovered most of them are aware and very concerned about what’s taken place in the Gulf and this book is not only timely, but quite comprehensive."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Artist Paul Mirocha’s illustrations are engaging and, when featuring otters, seals and other critters, very cute. The activist in me loves the “How to Help Prevent Oil Spills” section, where Berger encourages youth to write letters to members of Congress and consider saving electricity and driving smaller cars, since they both require oil. Less demand, less supply, less tankers, fewer spills (in theory)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The ",
      {
        "type": "link",
        "href": "http://www.nwf.org/Kids/Ranger-Rick/Activities/Help-Nature/Mixture-of-Species/How-People-Help-Nature-In-Oil-Spills.aspx",
        "external": true,
        "children": [
          "National Wildlife Federation offers a nice website"
        ]
      },
      " for kids (remember Ranger Rick?), featuring other wetland- and oil spill- related titles and additional resources."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5-9."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
