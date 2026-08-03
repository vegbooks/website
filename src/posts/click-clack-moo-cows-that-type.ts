import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/04/click-clack-moo-cover.jpg",
    "alt": "Click Clack Moo: Cows That Type",
    "href": "/media/2011/04/click-clack-moo-cover.jpg",
    "width": 211,
    "height": 279,
    "align": "right"
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=&l=as2&o=1&a=1442433701",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      "Introduce little ones to the ideas of worker’s rights, justice and compromise through the 32 funny and colorful pages of ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1442433701/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=1442433701",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Click, Clack, Moo"
            ]
          }
        ]
      },
      ". The cold farm cows are on strike until they receive electric blankets and they let Farmer Brown know through type-written memos. Brown is agitated by the typewriter-using, racket-making cows and is rather obstinate about meeting their demands. Once the chickens become involved in the protest and there are no eggs or milk to be had, Farmer Brown concedes on the blankets so long as the barn typewriter is forfeited. Let’s just say Duck, the neutral go-between for those on either side of the fence, has his own interests in mind and his antics make for a humorous ending."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In addition to the Vegbooks-friendly premise of the book, children will enjoy participating in the story’s telling by piping in with frequent “Click, Clack, Moos.” The watercolor illustrations by award-winning Betsy Lewin also make this an inviting text."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "To get the biggest bang from this book, implement PBS’ lesson plans for ",
      {
        "type": "link",
        "href": "http://pbskids.org/lions/cornerstones/pdf/clickguide.pdf",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Click, Clack, Moo"
            ]
          }
        ]
      },
      "which happen to be designed for students who are deaf and hard of hearing."
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
