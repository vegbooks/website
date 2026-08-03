import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/04/gift-of-nothing.jpg",
    "alt": "The Gift of Nothing",
    "href": "/media/2010/04/gift-of-nothing.jpg",
    "width": 240,
    "height": 209,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Fans of Patrick McDonnell’s ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/wag/",
            "children": [
              "Wag!"
            ]
          }
        ]
      },
      "will love ",
      {
        "type": "emphasis",
        "children": [
          "The Gift of Nothing"
        ]
      },
      ". Featuring the adorable characters from his comic strip ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://muttscomics.com/",
            "external": true,
            "children": [
              "Mutts"
            ]
          }
        ]
      },
      ", the plot of this story can be summed up in a ten-word riddle. Q: What do you give a friend who has everything? A: Nothing."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Of course, like everything else Mr. McDonnell does, the magic is in the storytelling. Using heartfelt illustrations and simple text, his story book conveys what it’s like to be in a relationship where you are accepted not for what you give the other person, but simply for who you are. It’s the kind of love that parents and children will recognize in each other, and that’s intimately familiar to anyone who has ever loved a dog, cat, or horse."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Parents who are concerned about ",
      {
        "type": "link",
        "href": "http://www.thesolutionsjournal.com/node/571",
        "external": true,
        "children": [
          "the effect consumerism has on their children and the environment"
        ]
      },
      " will also appreciate the book’s anti-stuff slant."
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
