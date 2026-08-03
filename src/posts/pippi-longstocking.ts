import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/01/pippi-longstocking.jpg",
    "alt": "Pippi Longstocking",
    "href": "/media/2011/01/pippi-longstocking.jpg",
    "width": 210,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Pippi Longstocking is an adventurous 9-year-old girl who lives in Sweden. Her mother passed away when she was a baby, and her father was blown overboard at sea (but Pippi feels that he’s still alive), so she lives on her own in Villa Villekula (her Victorian house) with Mr. Nilsson (a monkey) and Alfonzo (a horse). She supports herself with a big suitcase full of gold coins."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The irreverent Pippi—with her bright red braids and superhuman strength—is a force to be reckoned with. She has no formal education and no manners, yet she is wise beyond her years. Pippi befriends her neighbors, Tommy and Annika, who are in full awe of her, and together they embark on a series of wild adventures and funny encounters, although to Pippi, they’re just regular everyday activities. She is pure and unedited, and she naively breaks the rules in every social situation. That’s the lure of the book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "From an animal standpoint, there are a few minor issues with the book. Her animal companions, Mr. Nilsson and Alfonzo, were both bought rather than rescued, and in one chapter, Pippi attends a circus with a horse in it. However, there are so many redeeming qualities to Pippi herself that despite these not so animal-friendly bits, I would still highly recommend the book. The bits that aren’t “kosher” in terms of animal rights offer an opportunity for parents to discuss these issues with their children."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a great book for kids on many levels. The fact that Pippi is an outrageous free spirit with no rules makes for a fun, entertaining story that kids will love. Beyond that, we meet a female character who is courageous, opinionated, and compassionate. She has a strong sense of justice and always tries to do the right thing. Pippi is a great ",
      {
        "type": "link",
        "href": "http://www.sweden.se/pippi",
        "external": true,
        "children": [
          "role model"
        ]
      },
      ", especially for girls."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
