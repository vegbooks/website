import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/08/9781419701511.jpg",
    "alt": "Hippopposites",
    "href": "/media/2012/08/9781419701511.jpg",
    "width": 210,
    "height": 231,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Hippopposites"
        ]
      },
      " is a visually appealing board book which presents opposites in a non-traditional way. Every page and its match on the following page features an abstract image of a hippo that’s morphed into different sizes, shapes, textures, and other slightly advanced design concepts. For example, some of the opposites included in the book are light/heavy, full/empty, thin/thick, positive/negative and front/side. From an animal welfare perspective, of course my favorite opposite is the comparison between the free hippo and the caged hippo, which is illustrated very simply, yet effectively through the use of a black barred cage."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book can be enjoyed by kids of all ages; infants will be drawn to the bold colors and contours, toddlers will be introduced to the basic concept of opposites through the interesting designs, and older kids will grasp the meaning of more advanced opposites. It’s a nice visual for atypical opposites presented in a design-style approach. ",
      {
        "type": "link",
        "href": "http://www.wired.com/geekdad/2012/05/hippopposites/",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Hippopposites"
            ]
          }
        ]
      },
      " is a concept book worth sharing with kids at home, or in a classroom or art room."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 1- 7. ",
      {
        "type": "emphasis",
        "children": [
          "A review copy was received from the ",
          {
            "type": "link",
            "href": "http://www.abramsbooks.com/",
            "external": true,
            "children": [
              "publisher"
            ]
          },
          "."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
