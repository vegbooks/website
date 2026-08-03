import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2015/02/three-beavers.jpg",
    "alt": "ThreeBeavers",
    "width": 210,
    "height": 247,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Three Little Beavers"
        ]
      },
      " tells the story of Beatrix the Beaver and her two siblings. Beatrix worries that she’s not as good at anything as her brother and sister, who seem to be good at everything. But when the three beavers get caught in beaver traps, Beatrix’s abilities start to shine. When her siblings are scared and nervous, Beatrix is calm and rational. My daughter loved pointing out the various things that at which Beatrix is very good and it started a discussion regarding different abilities and how everyone brings different strengths."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The peril in this story is one that animal lovers will appreciate. The three beavers are trapped by resort that doesn’t want them destroying their plants and gardens. The resort intends to move the beavers down river. A visitor to the resort says that he came to the resort just to see the beavers proposes a new plan that allows the beavers to share the space with the inn. My daughter very much enjoyed this solution which allowed the beavers to remain in their homes."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My kids received the book jointly as a Christmas present, and are very much enjoying it. It was great illustrations and simple text that can be enjoyed by both my one-year-old son and five-year-old daughter. But for older kids by far the best part of the book is the end where there are four dense pages of beaver facts. My five year old loved this section the most, though it is well above the scope of my one year old. This book (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1607185334/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1607185334&linkCode=as2&tag=vegbooks-20&linkId=4BMTGAK6TQ6VLNRU",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ") is a great addition to our library."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
