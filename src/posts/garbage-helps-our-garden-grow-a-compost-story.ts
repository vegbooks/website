import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/9780761349112fc.jpg",
    "alt": "Garbage Helps Our Garden Grow: A Compost Story",
    "href": "/media/2011/07/9780761349112fc.jpg",
    "width": 210,
    "height": 176,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "If you are looking for a pleasing picture book about the ins and outs of ",
      {
        "type": "link",
        "href": "http://www.edf.org/article.cfm?ContentID=2028",
        "external": true,
        "children": [
          "composting"
        ]
      },
      ", ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0761349111/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399373&creativeASIN=0761349111",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Garbage Helps Our Garden Grow: A Compost Story"
            ]
          }
        ]
      },
      " is a great choice. This book is not long but it covers all of the basics of composting in an engaging way that makes the process seem very accessible and appealing to children."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The text is enhanced by bright photographs of scenes around compost bins and gardens as well as depictions of engrossed and happy children and adults working outdoors. The end of the book features some information for adults who may be interested in learning more about implementing a composting system themselves!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
