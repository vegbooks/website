import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/11/msb-goes-upstream.jpg",
    "alt": "The Magic School Bus Goes Upstream",
    "href": "/media/2011/11/msb-goes-upstream.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "The Magic School Bus series of ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/The_Magic_School_Bus",
        "external": true,
        "children": [
          "books"
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/The_Magic_School_Bus_%28TV_series%29",
        "external": true,
        "children": [
          "cartoons"
        ]
      },
      " are a reliable source of good information about science for elementary aged kids. We have read a number of these books and enjoyed them, so I picked up ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0590922327/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0590922327",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "The Magic School Bus Goes Upstream: A Book About Salmon Migration"
            ]
          }
        ]
      },
      "thinking that this would be a good introduction to the life cycle of anadromous fish."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book starts out shakily for veg folks because Ms. Frizzle’s class is assigned to catch salmon for the school’s annual Fish Fry. However, if you and your family can push through some of the more fantastical elements typical of the class’s adventures (yes, the Magic School Bus does indeed turn into a female spawning salmon, “laying eggs” in the form of Ms. Frizzle’s students — eggs which then get fertilized by a nearby male salmon), there are a lot of interesting facts and information to be gleaned because the life cycle of anadromous fish is indeed fascinating. The plot follows salmon as they move from ocean to river to stream, navigating very real hazards such as sharks, seals and a dam."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Veg kids and parents will cheer at the end, for after experiencing the life of a salmon, Ms. Frizzle’s students have a newfound respect for the fish. Instead of bringing salmon to the Fish Fry, they serve up fish-shaped potato sticks."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As mentioned above, there are short but graphic depictions of reproductive processes."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A fun and very informational book for ages 5 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
