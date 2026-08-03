import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "alt": "Big Cat Conservation",
    "href": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "width": 210,
    "height": 320,
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
            "href": "http://search.barnesandnoble.com/Big-Cat-Conservation/Peggy-Thomas/e/9780761332312",
            "external": true,
            "children": [
              "Big Cat Conservation"
            ]
          }
        ]
      },
      " starts off on shaky ground when early on, author Peggy Thomas exclaims how happy she is that she can see a beautiful tiger in his enclosure in the Buffalo Zoo. However, from there she goes on to discuss fascinating work that is being done worldwide to conserve big cats."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There are eight chapters in all, and seven of them are devoted to various angles of big cat conservation. The level of detail provided in the second chapter, High Tech Tracking, was really informative, teaching us about the role of technology in projects in Florida and India– think cell phones that interact with collars and cameras. (Since this book was published a decade ago, it is exciting to think about the ways that technology has expanded its scope of assistance.) Scat studies (including a scat tracking dog named ",
      {
        "type": "link",
        "href": "http://conservationbiology.net/meet-the-dogs/",
        "external": true,
        "children": [
          "Moja"
        ]
      },
      "), artificial insemination, the role of wildlife veterinarians, cloning, field biology and captive enrichment programs are also discussed in depth in the rest of the book. My two favorite chapters were at the end of the book—one deals with the ",
      {
        "type": "link",
        "href": "http://www.lab.fws.gov/",
        "external": true,
        "children": [
          "U.S. Fish and Wildlife Services’ Forensics Laboratory"
        ]
      },
      " and the work done there. The other discusses possible solutions to one of the greatest problems facing wildlife all over the world: loss and fragmentation of habitat. One potential solution highlighted in this chapter is the concept of wildlife corridors, and a ",
      {
        "type": "link",
        "href": "http://www.defenders.org/programs_and_policy/habitat_conservation/habitat_and_highways/wildlife/florida_panther.php",
        "external": true,
        "children": [
          "panther-friendly underpass in Florida"
        ]
      },
      " is used to illustrate some of the benefits of such a concept."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book has a heavy pro-zoo angle but provides us with a lot of facts about other conservation work being done to assist big cat survival in all corners of the globe. Thomas takes a lot of heavy, complex information and distills it nicely into a child-friendly read. Although my younger child tuned in for some of this book, I think it is most suitable for ages 7 and over."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
