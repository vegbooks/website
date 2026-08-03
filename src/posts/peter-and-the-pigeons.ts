import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/10/girl-reading.jpg",
    "alt": "Peter and the Pigeons",
    "href": "/media/2010/10/girl-reading.jpg",
    "width": 210,
    "height": 280,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Children’s literature is ",
      {
        "type": "link",
        "href": "/reviews/gorilla/",
        "children": [
          "notoriously easy on the zoo industry"
        ]
      },
      ". Zoos are depicted as places that animals want to be — with little mention of whether it’s natural for elephants to stand on concrete, or whether lions should really be pacing in their enclosures. So when a kids book is even a little skeptical of zoos, it’s reason to rejoice."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The boy in ",
      {
        "type": "emphasis",
        "children": [
          "Peter and the Pigeons"
        ]
      },
      " loves pigeons, so his father decides to bring him to the zoo. The two move from exhibit to exhibit, watching and admiring the animals — and with each species, Peter’s father asks him if this animal is his favorite. His inevitable answer is no. At the end, Peter tells his father that pigeons are his favorite because he sees them every day, knows their sounds, and even the feel of their feathers. “If I knew the others better,” Peter says, “maybe I’d choose them. But right now, it’s pigeons I like best.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I like this book not only because there is passing criticism of zoos (Peter tells his father that the lion should be in a jungle), but also because it debunks ",
      {
        "type": "link",
        "href": "http://www.wildlife.org.nz/zoocheck/myths.htm",
        "external": true,
        "children": [
          "the myth that viewing captive animals makes people care for them"
        ]
      },
      ". People love the animals most familiar to them — which makes you wonder why we lock up wild animals at all."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-6."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
