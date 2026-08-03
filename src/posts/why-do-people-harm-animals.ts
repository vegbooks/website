import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/10/9780739849620.jpg",
    "alt": "Why Do People Harm Animals?",
    "href": "/media/2010/10/9780739849620.jpg",
    "width": 200,
    "height": 256,
    "align": "right"
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0750237198",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      "Part of the “Exploring Tough Issues” series, ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0750237198?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0750237198",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Why Do People Harm Animals?"
            ]
          }
        ]
      },
      " is a great introductory look at animal rights issues, organizations striving to protect animals, and a few of the ",
      {
        "type": "link",
        "href": "http://www.humanesociety.org/issues/opposition/opposition.html",
        "external": true,
        "children": [
          "opposition’s"
        ]
      },
      " arguments. Topics include animals used as companions, on farms, in circuses and other forms of entertainment, vivisection, and for hunting and fishing purposes. A chapter is also dedicated to exploring how people are able to act cruelly – intentionally or otherwise."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Dotted throughout the text are quotes and real life case studies concerning human-animal interactions, like that of the 2000 South African oil spill or illegal trading of exotic pets. Any burgeoning animal advocate should be well-versed in the arguments of both sides of the AR coin, enabling them to answer difficult questions from their peers, and this book will certainly aid in that pursuit."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "FYI, my interest has been piqued (and yours may be too) by another title in the series: ",
      {
        "type": "link",
        "href": "http://www.amazon.com/Why-People-Vegetarian-Alison-Brownlie/dp/0750237139/ref=sr_1_1?ie=UTF8&s=books&qid=1286245455&sr=1-1",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Why are People Vegetarian?"
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
