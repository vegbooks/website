import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/11/320.jpg",
    "alt": "The Vegetarian Lion",
    "href": "/media/2011/11/320.jpg",
    "width": 210,
    "height": 213,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I had such high hopes for ",
      {
        "type": "link",
        "href": "http://studioartworks.com/",
        "external": true,
        "children": [
          "this book"
        ]
      },
      ". It’s the story of a lion that is a little different. He doesn’t like to eat meat and would rather eat vegetables instead. He is a loner amongst his lion friends, but that’s okay because he bides his time with other vegetarian animals like giraffes. That is, until one day when he meets another lion just like him. The lion and lioness fall in love, get married, and raise lion cubs together."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book description on ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1411664590/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399373&creativeASIN=1411664590",
        "external": true,
        "children": [
          "Amazon.com"
        ]
      },
      " describes the prose as whimsical and rhythmic, but I found this not to be the case. The rhymes are forced, and the flow is stunted, and the story line is hard to follow, which makes it difficult to read aloud. The artwork is nice, with bright, vivid, engaging pictures. But the story is severely lacking. I bought this as a gift for my daughter for Christmas but I will be returning it and giving her ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/the-great-pig-escape/",
            "children": [
              "The Great Pig Escape"
            ]
          }
        ]
      },
      " instead."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
