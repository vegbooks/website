import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/03/978-0-375-86618-0.jpg",
    "alt": "A Book of Sleep",
    "href": "/media/2011/03/978-0-375-86618-0.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "A delightful animal tale for bedtime or anytime. ",
      {
        "type": "link",
        "href": "http://www.ilsungna.com/home.htm",
        "external": true,
        "children": [
          "Il Sung Na"
        ]
      },
      " writes a simply sweet story of a night owl who witnesses a variety of sleeping creatures and their unique ways of snoozing. The playful, artistic illustrations made me smile and my daughter laugh. Phrases such as “some sleep with one eye open” encourage a child’s wonder and curiosity while the art titillates the imagination and tickles the funny bone. Easily manageable for a small child as a cozy board book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
