import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/11/9781429627962.jpg",
    "alt": "Animal Rights: How You Can Make a Difference",
    "href": "/media/2010/11/9781429627962.jpg",
    "width": 210,
    "height": 263,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Rhonda Lucas Donald’s book ",
      {
        "type": "link",
        "href": "http://www.powells.com/biblio/71-9781429627962-0",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Animal Rights: How You Can Make a Difference"
            ]
          }
        ]
      },
      " is an excellent guide for helping kids harness their desire to create positive change for animals. The book intersperses real-life examples of young folks who have been making a difference for animals with suggestions for brainstorming to come up with and research issues as well as thoughts on about mapping out and actualizing an action plan."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I love this book’s examples of youth in action. The kids profiled in this book have helped pass animal-friendly legislation, ended school hatching experiments, created a website about the Canadian seal hunt, gotten vegetarian options implemented in their schools and actively participated in efforts securing petition signatures for a ballot initiative. These kids are incredibly connected and inspirational and will help other children see what a myriad of opportunities exist in the animal welfare arena."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book’s consultant Adam Fletcher is the founder of the ",
      {
        "type": "link",
        "href": "http://freechild.org/",
        "external": true,
        "children": [
          "Freechild Project"
        ]
      },
      ", an organization about which some parents might be interested in learning. This book also has a short but excellent resource section as well as a ",
      {
        "type": "link",
        "href": "http://facthound.com/",
        "external": true,
        "children": [
          "Facthound"
        ]
      },
      " number."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I recommend this book for ages 8 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
