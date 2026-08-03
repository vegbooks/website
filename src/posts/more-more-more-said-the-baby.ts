import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/06/9780688156343.jpg",
    "alt": "More More More, Said the Baby",
    "href": "/media/2012/06/9780688156343.jpg",
    "width": 210,
    "height": 240,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "We have this Caldecott Honor Book in board book form and have loved it since we received it as a gift. ",
      {
        "type": "emphasis",
        "children": [
          "More More More, Said the Baby"
        ]
      },
      ", written and illustrated with ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Gouache",
        "external": true,
        "children": [
          "gouache paintings"
        ]
      },
      " by Vera B. Williams, rightly has the subtitle “3 Love Stories.” A father, a grandmother, and a mother, each in separate mini-chapter, shower the children in their care with love and affection. Simple enough, but the whole book has the cadence of a poem that captures snapshots we all can relate to."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Little Guy gets belly kisses from his father, Little Pumpkin’s grandmother swings him around and nibbles on his toes, and Little Bird’s mother kisses and carries her sleeping daughter. Each section ends with the child contentedly saying, “More. More. More.” Each little family is culturally diverse and I love the use of the pet names to describe the toddlers in the book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The blog ",
      {
        "type": "link",
        "href": "http://annieandaunt.blogspot.com/2012/05/building-library-my-top-25-well-33-list.html",
        "external": true,
        "children": [
          "Annie and Aunt"
        ]
      },
      " recently mentioned this as a must-have for a children’s library. My children have enjoyed it from a very young age so definitely go for the board book version if you have little ones."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
