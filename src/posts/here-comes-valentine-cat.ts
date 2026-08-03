import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Here Comes Valentine Cat"
        ]
      },
      "is a grumpy cat book in the same vein as the ",
      {
        "type": "link",
        "href": "/reviews/bad-kitty/",
        "children": [
          "Bad Kitty series"
        ]
      },
      ", which is a series my six-year-old loves, though this book seems aimed at a bit younger demographic."
    ]
  },
  {
    "type": "image",
    "src": "/media/2016/01/9780525429159.jpg",
    "alt": "9780525429159",
    "width": 500,
    "height": 439
  },
  {
    "type": "paragraph",
    "children": [
      "Cat doesn’t like Valentine’s Day. Too mushy. Also, Cat doesn’t like the dog that lives on the other side of the fence. Dog is noisy and reckless and tosses things into the yard, like balls and bones and dog treats. Cat decides that for Valentine’s Day he will compose an angry letter to Dog. Just as Cat is about to toss the letter across the fence, Dog sends a Valentine to Cat that melts his grumpy little heart."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book was provided as a review copy by the publisher."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-5."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
