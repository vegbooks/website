import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/10/girl-reading.jpg",
    "alt": "Chimpanzee Rescue",
    "href": "/media/2010/10/girl-reading.jpg",
    "width": 210,
    "height": 278,
    "align": "right"
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=1552979083",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      "I love children’s books that even I can learn from and ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/1552979083?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=1552979083",
            "external": true,
            "children": [
              "Chimpanzee Rescue"
            ]
          }
        ]
      },
      " by Patricia Bow delivers and then some. Who knew there were four subspecies of chimpanzees, based on their location in Africa (eastern, central, western, and Nigeria/Cameroon)? Or that they have a red-blue-green color vision? In addition to these informative facts, Ms. Bow also presents the bleak plight facing our next of kin."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As flesh in the bushmeat trade, slaves in circuses and entertainment, and subjects in biomedical research – among other fields and industries – it’s no wonder that there are less than 200,000 chimps now living in the wild. Habitat destruction plays a big role in their demise as well. Ms. Bow depicts real life, homegrown efforts from ",
      {
        "type": "link",
        "href": "http://www.chimpsanctuarynw.org/",
        "external": true,
        "children": [
          "sanctuaries"
        ]
      },
      " (this is one of my favorites), scientists and nonprofits seeking to right these wrongs. Realized actions include re-foresting corridors so that chimps can migrate from one parcel of land to another."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There’s a little slice of hope in this book, but more importantly it serves as an eye opener for kids new to these vastly important animal rights issues."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9 -12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
