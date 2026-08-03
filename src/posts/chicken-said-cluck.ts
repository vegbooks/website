import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/chicken-says-cluck-hc-c.jpg",
    "alt": "Chicken Said Cluck",
    "href": "/media/2011/07/chicken-says-cluck-hc-c.jpg",
    "width": 210,
    "height": 313,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "A plucky little My First ",
      {
        "type": "link",
        "href": "http://www.icanread.com/",
        "external": true,
        "children": [
          "I Can Read!"
        ]
      },
      " book that helped ease my daughter into reading. The repetition, simple storyline, and large font all make it early reader-friendly."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Earl and Pearl are two kids who start growing their own pumpkins. Chicken wants to help but continually gets shooed out of the garden until one day Chicken shows her skill and helps the kids save the pumpkins."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Sue Truesdell’s illustrations combined with Judy Ackerman Grant’s characterization Chicken had us hooked. Although the children treated Chicken like a pest, they never penned her up and in the end they cheered her natural skills and gave her gifts. Most pleasing to me was finding out this mostly realistic story about a chicken had nothing to do with eggs or farmers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I picked up this story as we were beginning our summer garden but it would be season-appropriate for fall/ harvest/ Thanksgiving season."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
