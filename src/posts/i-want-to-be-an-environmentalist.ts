import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/12/9780152019396-lres.jpg",
    "alt": "I Want to Be … An Environmentalist",
    "href": "/media/2010/12/9780152019396-lres.jpg",
    "width": 210,
    "height": 265,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/0152019391?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0152019391",
            "external": true,
            "children": [
              "I Want to Be…An Environmentalist"
            ]
          }
        ]
      },
      " is a comprehensive resource for young environmentalists and their families. The book discusses why people characterize themselves as environmentalists (fascination with animals, worries about pollution, enjoying time outdoors exploring nature). One section describes types of environmentalists, including a broad range of scientists as well as attorneys, veterinarians, farmers and economists. There is an opportunity to learn more about what is termed “Related Professions”– including ",
      {
        "type": "link",
        "href": "http://www.fws.gov/",
        "external": true,
        "children": [
          "U.S. Fish and Wildlife Service"
        ]
      },
      " workers, activists and technicians."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "When it comes to discussion of some of the eco-issues of top concern, the book mentions loss of resources, pollution, and global population increase. Interspersed throughout the book are sections that have illustrated information about topics such as environmental vocabulary, history of environmentalism and endangered species. Also discussed are educational issues, recycling, alternatives to our current lifestyles and ways to make a difference."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "I Want to Be…An Environmentalist"
        ]
      },
      " was published in 2000, so while it is not the most current source, it contains a lot of information that is still very relevant. Unfortunately, most of the online resources mentioned at the end of the book are either outdated or have ceased to exist. A few caveats: the book does describe zoos as a place to go and learn more about the earth – without providing a more balanced perspective. The book also features a girl swimming with a dolphin in a captive environment."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A good choice for 3rd graders and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
