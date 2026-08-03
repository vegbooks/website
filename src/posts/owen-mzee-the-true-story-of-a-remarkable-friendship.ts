import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "Fans of ",
      {
        "type": "link",
        "href": "/reviews/tarra-and-bella-the-elephant-and-dog-who-became-best-friends/",
        "children": [
          "Tarra and Bella"
        ]
      },
      " will love this book. My six-year-old daughter and I loved reading it together. It tells the true story of an unlikely friendship between a baby hippo named Owen and a 130 year old giant tortoise named Mzee at an animal sanctuary in Kenya, illustrated by incredible photographs of the two together."
    ]
  },
  {
    "type": "image",
    "src": "/media/2016/04/owenandmzee.jpg",
    "alt": "0-439-82973-9",
    "width": 1357,
    "height": 1200
  },
  {
    "type": "paragraph",
    "children": [
      "Owen was stranded after a storm and separated from his mother. My daughter and I loved reading about how an entire town bands together to rescue him and bring him to a nearby sanctuary as he is too young to survive in the wild alone. Owen is placed in Mzee’s habitat and immediately takes a liking to Mzee. Mzee takes a while to warm up to Owen, but within a few days the two are inseparable."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A friendship between a mammal and a reptile is very rare, but these two have quite the bond. The book posits a few reasons for their friendship, such as Owen needing someone to replace his missing mother. But in the end says that it doesn’t really matter if science can explain why these two are friends because the fact is that they are friends. The heart wants what it wants, and Owen’s heart wants Mzee and Mzee’s heart wants Owen."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 to 10."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
