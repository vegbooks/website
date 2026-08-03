import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "Check out the stories, poems, and (most importantly) pictures of the dogs loved by ",
      {
        "type": "link",
        "href": "http://www.maisyfunclub.com/maisyframe.asp?section=lucy",
        "external": true,
        "children": [
          "Lucy Cousins"
        ]
      },
      ", ",
      {
        "type": "link",
        "href": "http://www.librarything.com/author/westmanbarbara",
        "external": true,
        "children": [
          "Barbara Westman"
        ]
      },
      ", ",
      {
        "type": "link",
        "href": "http://books.missouri.org/node/735",
        "external": true,
        "children": [
          "Lisa Campbell Ernst"
        ]
      },
      ", ",
      {
        "type": "link",
        "href": "http://www.minorart.com/",
        "external": true,
        "children": [
          "Wendell Minor"
        ]
      },
      ", ",
      {
        "type": "link",
        "href": "http://www.jacketflap.com/persondetail.asp?person=16010",
        "external": true,
        "children": [
          "Betsey Everitt"
        ]
      },
      ", and other children’s book illustrators."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "From the sweet to the sublime, these brief write-ups capture some of the intimate moments people share with their canine companions."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
