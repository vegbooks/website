import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2019/01/not-a-purse.jpg",
    "alt": "Not a Purse",
    "width": 260,
    "height": 260,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "Stephanie Dreyer, the author of 2015’s ",
      {
        "type": "link",
        "href": "https://www.amazon.com/Not-Nugget-Stephanie-Dreyer/dp/0986106011/ref=as_li_ss_tl?ie=UTF8&qid=1494719613&sr=8-1&keywords=not+a+nugget&linkCode=sl1&tag=veeg07-20&linkId=233ec22694673989fe91c5f346ae8cc6",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Not A Nugget"
            ]
          }
        ]
      },
      ", has a worthy follow-up in ",
      {
        "type": "link",
        "href": "https://www.amazon.com/Not-Purse-Stephanie-Dreyer/dp/0986106038/ref=as_li_ss_tl?ie=UTF8&qid=1541962965&sr=8-1&keywords=not+a+purse&dpID=41X48r-lbQL&preST=_SX258_BO1,204,203,200_QL70_&dpSrc=srch&linkCode=sl1&tag=veeg07-20&linkId=fed4585e6dffa75cecaa456eacbd7b4c&language=en_US",
        "external": true,
        "children": [
          "Not A Purse."
        ]
      },
      " The book continues the same child-friendly and informative format along with adorable and empathetic illustrations from Jack Veda."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While ",
      {
        "type": "emphasis",
        "children": [
          "Not A Nugget"
        ]
      },
      " emphasizes that animals are our friends, not food, Not",
      {
        "type": "emphasis",
        "children": [
          "A Purse"
        ]
      },
      " focuses on the ways our society uses animals for beauty, fashion, and convenience items in the home. In each case, Dreyer provides a fun and relatable fact about the animal in question. For example, for the elephant, who looks worriedly at necklaces made with ivory from elephant tusks, readers are informed that elephants use their trunks, wrapped together, to greet each other and show affection, just like we do when we hug! And for the fox that is definitely not a hat, we learn that foxes love to play ball, and that they sometimes swipe golf balls to play with!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "At the end of the book, Dreyer provides additional fun facts and alternatives to purchasing items that use animal parts or harm animals in their production."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The examples are child-friendly, and leave caregivers with the option of expanding upon the the examples with details. The illustrations anthropomorphize the animals without completely making them silly and cartoonish."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.amazon.com/Not-Purse-Stephanie-Dreyer/dp/0986106038/ref=as_li_ss_tl?ie=UTF8&qid=1541962965&sr=8-1&keywords=not+a+purse&dpID=41X48r-lbQL&preST=_SX258_BO1,204,203,200_QL70_&dpSrc=srch&linkCode=sl1&tag=veeg07-20&linkId=fed4585e6dffa75cecaa456eacbd7b4c&language=en_US",
        "external": true,
        "children": [
          "Not A Purse"
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "https://www.amazon.com/Not-Nugget-Stephanie-Dreyer/dp/0986106011/ref=as_li_ss_tl?ie=UTF8&qid=1494719613&sr=8-1&keywords=not+a+nugget&linkCode=sl1&tag=veeg07-20&linkId=233ec22694673989fe91c5f346ae8cc6",
        "external": true,
        "children": [
          "Not A Nugget"
        ]
      },
      " are able to balance empathy with fun throughout. ",
      {
        "type": "link",
        "href": "https://stephaniedreyer.com/resources/",
        "external": true,
        "children": [
          "Stephanie Dreyer"
        ]
      },
      " and Jack Veda have created a wonderful genre! Highly recommended for ages 2+"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "/reviews/not-a-nugget/",
        "external": true,
        "children": [
          "Check out our earlier review of NOT A NUGGET here!"
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
