import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/09/9780316084451.jpg",
    "alt": "The I’m Not Scared Book",
    "href": "/media/2011/09/9780316084451.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I received ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/031608445X/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=031608445X",
        "external": true,
        "children": [
          "this book"
        ]
      },
      " to review from the publisher. In general, our family is a fan of Todd Parr. ",
      {
        "type": "emphasis",
        "children": [
          "The Family Book"
        ]
      },
      " is on regular rotation in our home. With Todd Parr books, the message is always clear while the pictures add a bit of humor, and this book is no exception. My two year old loves the bright pictures and the simple text."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book sets up dual images on each facing page with the same pattern. “Sometimes I’m scared of dogs. I’m not scared when they give me kisses. Sometimes I’m scared of the dark. I’m not scared when I turn on a night light.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The message of this book seems to be that we are all scared sometimes, and there is usually there is a way to dissolve our fears. A pretty good message and maybe very useful if you have a frightful kid. Mine’s not, so the book kind of confuses her. She can’t figure out why someone would be afraid of dogs. At first I was afraid that I was introducing fears to her. But then she started to “read” it herself as she knows what each picture represents. She changes the text to a positive message. “I’m happy when dogs kiss me.” I think maybe as she gets older she may encounter new things to fear and this book will give her the framework of how to handle her fears, so it seems to be a good addition to our book library."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book has a slight Halloween theme, but it’s not very strong. It would likely be appropriate for year-round reading."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
