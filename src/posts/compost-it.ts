import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/05/lalg-compost.jpg",
    "alt": "Compost It",
    "href": "/media/2012/05/lalg-compost.jpg",
    "width": 210,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Compost It"
        ]
      },
      " is part of ",
      {
        "type": "link",
        "href": "http://cherrylakepublishing.com/shop/show/10502",
        "external": true,
        "children": [
          "Cherry Lake Publishing’s"
        ]
      },
      " Save the Planet Series. This book walks kids through the steps of composting in a logical, straightforward manner. For kids who are unfamiliar with or rusty on the ",
      {
        "type": "link",
        "href": "http://www.treehugger.com/green-food/compost-how-to-make-it-bins-piles-and-more.html",
        "external": true,
        "children": [
          "basics of composting"
        ]
      },
      ", the linear order will be especially welcome when learning about the details of composting our food."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Utilizing a mission-based hook and interviews with various experts, this book educates children about the reasons for and methods of composting and provides a wealth of statistics and facts. From large scale composting to backyard and apartment composting (one bit featuring worms!), readers will come away knowledgable about the composting process. Note that this is a book (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1602796564/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=1602796564",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ") aimed at older kids, not wee garden lovers. We will definitely be checking out other titles in this series!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 6 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
