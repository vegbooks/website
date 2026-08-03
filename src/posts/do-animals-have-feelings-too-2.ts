import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2009/11/feelcover1.jpg",
    "alt": "Do Animals Have Feelings Too?",
    "href": "/media/2009/11/feelcover1.jpg",
    "width": 168,
    "height": 205,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Written by ",
      {
        "type": "link",
        "href": "http://www.jacketflap.com/persondetail.asp?person=34895",
        "external": true,
        "children": [
          "David L. Rice"
        ]
      },
      " and illustrated by ",
      {
        "type": "link",
        "href": "http://www.jacketflap.com/profile.asp?member=TrudyCalv",
        "external": true,
        "children": [
          "Trudy Calvert"
        ]
      },
      ", ",
      {
        "type": "emphasis",
        "children": [
          "Do Animals Have Feelings Too?"
        ]
      },
      " explores the animal kingdom emotion by emotion. Kids will learn that chimpanzees exhibit compassion, elephants grieve, and orcas can be vengeful."
    ]
  },
  {
    "type": "image",
    "src": "/media/2009/11/feelpage4-511.jpg",
    "alt": "",
    "href": "/media/2009/11/feelpage4-511.jpg",
    "width": 372,
    "height": 227,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Mr. Rice’s anecdotes are at once funny and touching — and by implication, they touch on the ways that people treat animals unkindly. Under the heading of “Joy,” for example, he recounts an incident where a young ",
      {
        "type": "link",
        "href": "http://www.circuses.com/",
        "external": true,
        "children": [
          "circus elephant"
        ]
      },
      "observed children playing on the swings and tried to join in the fun by trying to sit on one of the swings herself. Why, children might ask, are elephants forced to perform — and how do they get from place to place?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This lovely book celebrates the attributes we share with other animals and is a welcome addition to any bookshelf."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 6-10."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
