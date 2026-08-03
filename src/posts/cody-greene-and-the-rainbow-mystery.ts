import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/07/front-codycover.jpg",
    "alt": "Cody Greene and the Rainbow Mystery",
    "href": "/media/2012/07/front-codycover.jpg",
    "width": 210,
    "height": 323,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Cody Greene and the Rainbow Mystery"
        ]
      },
      " is unique – but in a good way! Throughout this book, there is a solid vegan-friendly message. Readers will also find that the lifestyle that resonates throughout the story line fits well with many vegan families. There is talk of breastfeeding, ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Doula",
        "external": true,
        "children": [
          "doulas"
        ]
      },
      ", organic veggies, and even a vegan deli."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is a mystery, aimed at young chapter-book readers. The mystery involves a series of different-colored valuable paintings that are being stolen from a museum. Yet the thief leaves a basket of organic produce in each missing painting’s place. Cody Greene takes readers along on the trail to finding out who it is that has stolen the works of art and what they have done with them."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "With a surprising and pleasant ending to the mystery, this book is one that vegetarian and vegan parents will be pleased with. It’s a nice story that features a polite child and fruits and veggies. It will be no mystery as to why children and adults alike find this story entertaining and fun!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "A review copy was provided by ",
          {
            "type": "link",
            "href": "http://www.doliferightinc.com/our-books/",
            "external": true,
            "children": [
              "Do Life Right"
            ]
          },
          "."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
