import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2015/10/i-am-abe.jpg",
    "alt": "IAmAbe",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I’ve been interested in Brad Meltzer’s Ordinary People Change the World series since hearing about them on a local morning radio talk show. (",
      {
        "type": "link",
        "href": "http://www.bing.com/videos/search?q=brad+meltzer+interview+elliot+in+the+morning&qpvt=brad+melzter+interview+elliot+in+the+morning&FORM=VDRE#view=detail&mid=9B025279B0C326255B7A9B025279B0C326255B7A",
        "external": true,
        "children": [
          "Here’s a link"
        ]
      },
      "; skip to the 5:47 mark.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Meltzer’s book series attempts to humanize American heroes to make them relatable and interesting to children. So I was happy to stumble across ",
      {
        "type": "emphasis",
        "children": [
          "I Am Abraham Lincoln"
        ]
      },
      " while visiting the Ford’s Theatre Museum store with my six-year-old begging for me to buy her a souvenir."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is truly amazing. It’s not a focus on Abraham Lincoln as president, but more the early story of events in his life that built the great man that later became president. It touches on his experiences with bullying and injustices and on his love of books in ways that will inspire children in their daily lives."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story of most interest for Vegbooks followers is a story about a ten year old Abraham Lincoln standing up for turtles being abused by a group of boys in his town. Abraham Lincoln’s love of animals is chronicled in ",
      {
        "type": "link",
        "href": "/reviews/abe-lincoln-loved-animals/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Abe Lincoln Loved Animals"
            ]
          }
        ]
      },
      ", which would be a great follow-up to ",
      {
        "type": "emphasis",
        "children": [
          "I Am Abraham Lincoln"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
