import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "alt": "A Pinky Is a Baby Mouse",
    "href": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "width": 210,
    "height": 320,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Inspired by the fact that a baby spiny anteater is a puggle (!), ",
      {
        "type": "link",
        "href": "http://www.pammunozryan.com/pink.html",
        "external": true,
        "children": [
          "Pam Munoz Ryan"
        ]
      },
      "wrote ",
      {
        "type": "emphasis",
        "children": [
          "A Pinky Is a Baby Mouse"
        ]
      },
      "to introduce young children to animal families ranging from spiders to lions. Her delightful text is accompanied by very detailed and realistic illustrations by ",
      {
        "type": "link",
        "href": "http://www.dianedegroat.com/",
        "external": true,
        "children": [
          "Diane deGroat"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I had picked up a secondhand copy this book for kiddo because it’s featured on the ",
      {
        "type": "link",
        "href": "http://www.maineanimalcoalition.org/artman/publish/article_30.shtml",
        "external": true,
        "children": [
          "Maine Animal Coalition’s book list"
        ]
      },
      ". While there isn’t a strong animal protection message — in fact, one of the illustrations appears to depict a zoo — I think this book is a good addition to our shelves because it’s engaging and informative. This book invites us to engage with the natural world around us: a world teeming with fingerlings, polliwogs, spikes, and elvers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
