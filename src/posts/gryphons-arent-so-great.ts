import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2015/08/9781596436527.jpg",
    "alt": "9781596436527",
    "width": 210,
    "height": 205,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I received a publisher’s review copy of ",
      {
        "type": "link",
        "href": "http://us.macmillan.com/gryphonsarentsogreat/jamessturm",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Gryphons Aren’t So Great"
            ]
          }
        ]
      },
      " and my mother-in-law remarked at the spelling in the title so I looked into it. Griffin and grphyon seem to be variants meant to describe the same mythical creature with the body of a lion (except for the front feet which feature talons) and the head and wings of an eagle. (Source: ",
      {
        "type": "link",
        "href": "https://en.wikipedia.org/wiki/Griffin",
        "external": true,
        "children": [
          "https://en.wikipedia.org/wiki/Griffin"
        ]
      },
      ") For Harry Potter fans, a Hippogriff is the child of a griffin and a mare (who knew?)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Anyway, back to this cute little book. My son loved the idea of a knight and horse being best friends — even jumping into water together and having adventures — but he was sad when the knight abandoned her stalwart friend for a flying one, the titular Gryphon. The knight is ignored when the Gryphon meets one of his own kind and realizes she should have stayed loyal to the horse, Edward. I like that the horse has a name but the knight doesn’t, kind of a turnabout."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It is a quick, graphic novel style read and after one go through my son was ready to re-tell the story from the pictures. A good book for beginning readers but probably too short for older kids. Pre-K to 2nd grade is probably ideal."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
