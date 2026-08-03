import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/04/9780824966392.jpg",
    "alt": "What Is Easter?",
    "href": "/media/2011/04/9780824966392.jpg",
    "width": 210,
    "height": 179,
    "align": "right"
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=&l=as2&o=1&a=0824966910",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/0824966910/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0824966910",
            "external": true,
            "children": [
              "What Is Easter?"
            ]
          }
        ]
      },
      " describes traditional Easter celebrations as the narrator attempts to determine the true meaning of Easter. Is it the bunnies, the eggs, the candy, the baby chicks, the gifts, the fancy dress, the parade, the choir? No, of course not! Though these things are fun, Easter is about Jesus. After describing meaning of the holiday, the book ends with “It’s all about God’s son” with a image of a family praying in church."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Religious families will appreciate a book that plainly and simply describes the meaning of Easter in a fun manner. Jesus’ death and resurrection are described in a happy tone which makes the spirit of the holiday joyful, unlike some other Easter stories. Families may be concerned that death is mentioned, which may spark difficult conversations."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegan families will appreciate that the eggs mentioned are plastic eggs filled with candy (though ",
      {
        "type": "link",
        "href": "http://www.veganstore.com/product/655/vegan-marshmallows-and-other-sweets",
        "external": true,
        "children": [
          "jelly beans"
        ]
      },
      " are mentioned, which are likely not vegan). Families concerned about animal welfare will be concerned that buying chicks is described as part of the traditional Easter celebration."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-6."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
