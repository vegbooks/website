import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2014/12/clearest-tc.jpg",
    "alt": "Turkey Claus",
    "width": 210,
    "height": 209,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter has always been devastated by the ending of ",
      {
        "type": "link",
        "href": "/reviews/run-turkey-run-2/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Run, Turkey, Run"
            ]
          }
        ]
      },
      ". So much so that she refuses to let us read it to her. Readers spend the entire book cheering for the turkey to get away from the farmer trying to kill it for Thanksgiving. The turkey finally succeeds, only to be found in time for Christmas dinner."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Though ",
      {
        "type": "emphasis",
        "children": [
          "Turkey Claus"
        ]
      },
      " (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0761462392/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0761462392&linkCode=as2&tag=vegbooks-20&linkId=4R4JZTCWFEZ5VXZC",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ") is written by a different author, it feels a lot like the much needed follow-up to ",
      {
        "type": "emphasis",
        "children": [
          "Run, Turkey, Run"
        ]
      },
      ". And this time there is a happy ending."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Turkey doesn’t want to be Christmas dinner. So he runs away to the North Pole on Christmas Eve to get Santa to grant his wish – to be allowed to live. What a wish! The elves won’t let anyone see Santa on Christmas Eve because he’s too busy preparing for his big night. Much of the story involves Turkey trying on silly costumes to try to sneak into Santa’s cottage until he’s finally successful. Santa helps Turkey come up with a plan to stay alive, which involves delivering pizza and cookies to the farmer to eat for Christmas dinner instead of Turkey. The end of the book shows Turkey enjoying Christmas dinner with the happy farmer and his family and other farm animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I found this book at the Scholastic Book Fair at my son’s school and was quite happy to be able to buy it. My five-year-old daughter enjoyed the happy ending. My one-year-old son enjoyed the bright and colorful pictures. It’s a nice companion to ",
      {
        "type": "emphasis",
        "children": [
          "Run, Turkey, Run"
        ]
      },
      ", and a nice addition to our holiday library."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
