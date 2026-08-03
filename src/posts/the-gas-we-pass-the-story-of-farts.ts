import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/09/the-gas-we-pass.jpg",
    "alt": "The Gas We Pass: The Story of Farts",
    "href": "/media/2010/09/the-gas-we-pass.jpg",
    "width": 210,
    "height": 239,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "If there is one thing that most kids find funny, it is farting! And this book helps not only to provide a few laughs about this normal bodily function, but also to provide interesting information. The book focuses on explaining what farting is, why we do it and even how much per day is normal."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Children love ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/The_Gas_We_Pass",
        "external": true,
        "children": [
          "this book"
        ]
      },
      " because it focuses on something that they find so funny. And, to be honest, adults find it pretty humorous, as well. It is refreshing to read a book about something so basic and normal in a way that teaches us something and makes light of it."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian parents will love the fact that the book points out that farts smell differently, based upon what people eat. The book says that eating things like meat, eggs and dairy will produce farts that stink more, while eating things like beans and sweet potatoes won’t. This is a cute book for any young child, and it could be a great conversation-starter with other parents."
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
