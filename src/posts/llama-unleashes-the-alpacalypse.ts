import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2020/05/9781250222855.jpg",
    "alt": "Llama Unleashes the Alpacalypse",
    "href": "/media/2020/05/9781250222855.jpg",
    "width": 300,
    "height": 300,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "For a riotous romp through destruction and ambitious ideas gone wrong, Jonathan Stutzman’s ",
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781250222855",
        "external": true,
        "children": [
          "LLAMA UNLEASHES THE ALPACALYPSE"
        ]
      },
      ", the second installment in his ",
      {
        "type": "emphasis",
        "children": [
          "Llama Book series,"
        ]
      },
      " is just what kids and families will want. Full of fun messes and outrageous plans, Llama takes readers through his Big Idea to clone Alapaca, who loves to clean, never thinking that too much cleaning could create just as many problems as not enough cleaning."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Heather Fox’s adorable illustrations convey both the enthusiasm and chaos created by Alpaca and Llama without overwhelming the pages. Each page is colorful and silly, which matches the creative, rich vocabulary of the text. Children will have fun identifying all the different ways Alpaca “cleans up” around town, and adults will appreciate the frightening results of energetic completion of chores."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A delightful adventure that combines STEM and SILLY in perfect proportions."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
