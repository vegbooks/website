import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Wolf Christmas",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Daniel Pinkwater’s ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/0761450300/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0761450300",
            "external": true,
            "children": [
              "Wolf Christmas"
            ]
          }
        ]
      },
      " is the tale of a small wolf pack on Christmas Eve. Told from the perspective of one of the pack’s young wolves, ",
      {
        "type": "link",
        "href": "http://www.pinkwater.com/",
        "external": true,
        "children": [
          "Pinkwater"
        ]
      },
      " and his illustrator wife Jill Pinkwater depict life in the pack. On this particular night, the young wolves are playful in the moonlight, but the pack’s adults cannot be coaxed into joining their fun. The dynamic shifts when Uncle Louis, a more lighthearted “funny wolf” arrives, inviting the pack to go on a run through the woods to an overlook. Though the other adults are hesitant, mindful of the dangers that the nearby humans present, Uncle Louis reminds them that the humans will be peaceful tonight, for this is a special night to them. All of the wolves make the trip, and are rewarded with the complex smells of humans, the twinkling lights of their Christmastime celebrations….and song. The wolf pack joins in with their own singing."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a special story which not only illustrates some typical wolf behavior but also introduces the concept of human-wolf conflict in a gentle way. Discuss this with your children, or just enjoy the rare moment when all animals are experiencing a collective peace."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The author, a contributor to NPR, can be heard reading this story on Weekend Edition ",
      {
        "type": "link",
        "href": "http://www.npr.org/2010/12/25/132324290/Daniel-Pinkwater-Reads-Wolf-Christmas",
        "external": true,
        "children": [
          "here"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Readers with sensitive kids will want to note that there is a mention of the wolves’ meal, venison."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
