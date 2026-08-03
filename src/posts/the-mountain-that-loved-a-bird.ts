import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/11/mountainlovedbird.jpg",
    "alt": "The Mountain that Loved a Bird",
    "href": "/media/2011/11/mountainlovedbird.jpg",
    "width": 210,
    "height": 291,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "When a bird named Joy alights for a rest on a bare, lonely mountain in the middle of nowhere, their conversation sets in motion a series of events that will forever change the mountain. ",
      {
        "type": "link",
        "href": "http://alicemclerran.us/Home.html",
        "external": true,
        "children": [
          "Alice McLerran’s"
        ]
      },
      " ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/0689833199/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0689833199",
            "external": true,
            "children": [
              "The Mountain that Loved a Bird"
            ]
          }
        ]
      },
      " is the tender, touching tale of a friendship that spans the ages."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The mountain begs Joy to stay but Joy must fly on. She passes word to her offspring to visit the mountain as they migrate, and they in turn pass word to their daughters. “Each Joy will have a daughter Joy,” the original Joy tells the mountain, “so that no matter how many years pass, you will always have a friend to greet you and fly above you and sing to you.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "After one hundred years of these entirely too-brief visits, the poor mountain can stand no more and bursts into tears. The tears of despair end up being just what the mountain needs most, for the tears turn into a stream. The next year, Joy brings a seed with her and tucks it into a crack. This seed becomes what is the first of many plants and trees that will take root, attracting insects and others. Eventually, the mountain and surrounding areas become beautiful, lush habitats and Joy returns not just with a seed but with a stick for a nest. The mountain is complete."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The prose of this touching story is abundant and beautiful. Bright illustrations by ",
      {
        "type": "link",
        "href": "http://www.eric-carle.com/home.html",
        "external": true,
        "children": [
          "Eric Carle"
        ]
      },
      " harmonize with the tale, but don’t be fooled — this story isn’t for the ",
      {
        "type": "emphasis",
        "children": [
          "The Very Hungry Caterpillar"
        ]
      },
      " set. It is a more complex book for children 6 and up to enjoy, and enjoy they will."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
