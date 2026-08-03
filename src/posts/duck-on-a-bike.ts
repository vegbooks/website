import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/05/duck-on-a-bike-cover.jpg",
    "alt": "Duck on a Bike",
    "href": "/media/2010/05/duck-on-a-bike-cover.jpg",
    "width": 215,
    "height": 277,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "As Duck demonstrates his bicycle riding skills to each of the other animals, we hear their critical opinions of a duck riding a bike. Then an opportunity arises that gives all the other animals access to wheels as well and none can resist!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Just thinking of a duck (or any other animal) on a bike is funny and David Shannon adds hilarious illustrations that tell as much of the story as the words do. ",
      {
        "type": "link",
        "href": "http://www.spaghettibookclub.org/title.php?grade=&title=Duck%20on%20a%20Bike",
        "external": true,
        "children": [
          "This humorous tale"
        ]
      },
      " is entertaining but also keeps that sparkle alive that animals can do anything we can do (ever see ",
      {
        "type": "link",
        "href": "http://video.google.com/videoplay?docid=-3690837501045591479#",
        "external": true,
        "children": [
          "that video of the dog riding a bike"
        ]
      },
      " or ",
      {
        "type": "link",
        "href": "http://www.skateboardingbulldog.com/",
        "external": true,
        "children": [
          "Tyson, the skateboarding bulldog"
        ]
      },
      "?) and anything is possible. I also like the subtle message regarding negativity and how it may be rooted in envy or jealousy. Giving the other animals the same opportunity erases the negativity. Duck is a leader and a risk-taker and makes a funny but fine feathered hero."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter and I have read this one numerous times and it never gets old."
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
