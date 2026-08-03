import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "My 7-year-old daughter has recently decided she wants to be a marine biologist, which is how we ended up reading ",
      {
        "type": "emphasis",
        "children": [
          "Dolphin Tale"
        ]
      },
      " together."
    ]
  },
  {
    "type": "image",
    "src": "/media/2017/05/9780545348423.jpg",
    "alt": "9780545348423",
    "width": 793,
    "height": 1152
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Dolphin Tale"
        ]
      },
      ", the junior novel, is based on the screenplay for the 2011 hit movie with the same name. Based on a true story, it tells of Winter the dolphin who was rescued by the Clearwater Marine Hospital after being stuck in a crab trap. Winter’s tail was so badly damaged in the accident that it had to be removed. This caused Winter to develop a new manner of swimming which was damaging to her spine. The marine hospital worked with scientists to develop a prosthetic tale to aid Winter in swimming."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The novel tells Winter’s story through the eyes of a fictional 11-year-old boy Sawyer and his friend Hazel. It introduces a lot of ideas regarding animal rescue in a kid-friendly way, such as rehab and release, the finances behind animal rescue, and the various types of scientists involved in animal rescues. There is an additional human element to the story that is a great conversation starter. Winter’s story develops alongside that of Sawyer’s cousin, Kyle, who lost a leg in Afghanistan and is also coming to terms with his prosthetic leg."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter loves this novel. She wants to see the movie on our next movie night. She can’t wait to visit Winter at the Clearwater Marine Hospital the next time we are in Florida."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I highly recommend this book for the future marine biologist in your life. Amazon (",
      {
        "type": "link",
        "href": "http://amzn.to/2rRTd1p",
        "external": true,
        "children": [
          "affiliate link"
        ]
      },
      ") recommends this book for ages 7-10. That seems about right."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
