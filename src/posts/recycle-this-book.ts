import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/04/978-0-375-89176-2.jpg",
    "alt": "Recycle This Book",
    "href": "/media/2011/04/978-0-375-89176-2.jpg",
    "width": 204,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.powells.com/biblio/9780385737210",
            "external": true,
            "children": [
              "Recycle This Book"
            ]
          }
        ]
      },
      ", one hundred children’s book authors offer their suggestions and personal stories on the subject of green living."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Each vignette or essay is short, merely a page and a half or two long. The effect is busy but not overwhelming. It is fun and inspiring to hear how others are incorporating green practices into their lives. The suggestions range from reducing or eliminating meat from one’s diet to tips on going green at school to reducing time in the shower and so on. While none of the tips struck me as new or unique, I did enjoy hearing about others’ incorporation of green ideas and the peek into authors’ lives. Kids may enjoy looking up favorite authors to read what they have to say."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is targeted toward older elementary school kids."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
