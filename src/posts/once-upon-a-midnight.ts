import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/05/once-upon-a-midnight.jpg",
    "alt": "OnceUponAMidnight",
    "href": "/media/2013/05/once-upon-a-midnight.jpg",
    "width": 198,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This cute and humorous story of a pug coming to grips with the new baby in the house is told in rhyme to the cadence of ",
      {
        "type": "emphasis",
        "children": [
          "The Raven"
        ]
      },
      ". The illustrations are adorable as the frustrations of Andy the pug are very clearly shown on his wrinkled little face."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The pug has to adjust to not being the only baby any more, and also to all of the annoyances of having an infant in the house. Andy is frustrated by the all night crying and the constant attention the baby receives from his parents. But he is also intrigued by the baby’s bottles. What is in them that so captivates the baby? He has to get one! And that leads to the climax of the story. Poor Andy!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/061571126X/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=061571126X&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ") would be a great gift for a child expecting a new baby in the house. It helps to illustrate what new babies are like while at the same time telling a humorous and engaging story preschoolers will love. This book was provided to me as a gift from the author, a friend of mine and fellow pug lover."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3+."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
