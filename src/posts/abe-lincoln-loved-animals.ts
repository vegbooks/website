import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/03/9780807501238.jpg",
    "alt": "Abe Lincoln Loved Animals",
    "href": "/media/2011/03/9780807501238.jpg",
    "width": 210,
    "height": 164,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Down the historical rabbit hole, it can be hard to determine whether or not there is truth to an anecdote, especially when it pertains to the legendary American icon and President Abraham Lincoln. Within the animal rights community, he’s famously associated with saying: “I am in favor of animal rights as well as human rights. That is the way of a whole human being.” But through research we’ve found no credible validation for this salient statement, other than through a frail third party source."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "When I saw ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.albertwhitman.com/content.cfm/bookdetails/Abe-Lincoln-Loved-Animals",
            "external": true,
            "children": [
              "Abe Lincoln Loved Animals"
            ]
          }
        ]
      },
      ", I was dubious of the accuracy, but Ellen Jackson has done a remarkable job pinning down authoritative and credible stories and sources for this work. Her references are explained and provided at the end. Lincoln rescued fledglings, advocated for ants’ right to live, welcomed many a dog, cat, rabbit, and goat into the White House family, regretted killing a turkey (vowing never to hunt large game again), and initiated the ",
      {
        "type": "link",
        "href": "/reviews/thanksgiving-in-the-white-house/",
        "children": [
          "presidential turkey pardoning"
        ]
      },
      " ritual. For his era, Lincoln was a pioneer for animal welfare and activists are glad to have him in our ranks."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "However, Abe did live in a time when horses were a means of transportation. His sons used the goats for at least one White House prank, and his father is seen carrying a dead rabbit for supper – all of which are depicted in the book. Jackson does not try to hide these facts, but remarks upon their widespread practice and necessity in Lincoln’s day. Overall, I find this text invaluable for a number of reasons: 1) kids will appreciate a different, humanizing side of Lincoln than what may be taught in school, 2) the text provides a great starting point for discussing the progress of animal welfare, and 3) its historical content (civil war, presidential pardon) and accompanying illustrations are unique and interesting. Teachers can find related lesson plans, articles and other items of interest ",
      {
        "type": "link",
        "href": "http://www.abrahamlincolnsclassroom.org/Library/newsletter.asp?ID=126&CRLI=174",
        "external": true,
        "children": [
          "through the Lincoln Institute"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 7-9."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
