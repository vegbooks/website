import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2014/09/dandelion-seed2.jpg",
    "alt": "Dandelion Seed book cover depicting hot air balloons and a dandelion seed puff, to accompany Jane Cowles' review on Vegbooks, a site that reviews media from a vegan perspective",
    "width": 210,
    "height": 257,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This tenacious little seed never gives up hope despite its bumpy path in life. ",
      {
        "type": "emphasis",
        "children": [
          "The Dandelion Seed’s Big Dream"
        ]
      },
      " (received as a review copy from ",
      {
        "type": "link",
        "href": "http://www.dawnpub.com/",
        "external": true,
        "children": [
          "the publisher"
        ]
      },
      ") sends an inspiring message – with a little determination dreams can come true. This dandelion seed is also accepting of all the challenges in life it faces."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Trapped in a spider web, getting hurt and nearly losing its parachute and traveling into a dark cave – yet anything still seemed possible in its eyes. The author teaches a great lesson to children about setting goals and working towards accomplishing them."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The illustrations are equally as beautiful as the message this book sends. An added bonus is the appendix at the back of the book. It teaches little known facts like the origin of the name dandelion, the dandelion life cycle and projects that can be used in the classroom to teach young students about dandelions."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I love the many possibilities this book offers – it has something for everyone."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
