import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/11/9781452104935.jpg",
    "alt": "Kokeshi Kimonos Book",
    "href": "/media/2011/11/9781452104935.jpg",
    "width": 210,
    "height": 212,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter loves clothes, shoes, and accessories. She can’t understand why I don’t wear earrings, and often tells me that she can’t wait to grow up so that she can wear high heels. Not only does she love to play dress-up and make jewelry, but she also loves paper dolls and a puzzle that allows her to put together different ensembles."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "So imagine our delight when she received the",
      {
        "type": "emphasis",
        "children": [
          "Kokeshi Kimonos Book"
        ]
      },
      " as a gift. She loves the different kimonos and sashes in the book, and the cute little ",
      {
        "type": "emphasis",
        "children": [
          "kokeshi"
        ]
      },
      " (wooden dolls from Japan), and I’m content in knowing that the book provides a fun and interactive introduction to Japanese language and culture."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While there’s no plot, the ",
      {
        "type": "emphasis",
        "children": [
          "Kokeshi Kimonos Book"
        ]
      },
      "invites the reader to engage in several visual games — from finding the drawings that are different from each other, to imagining hairstyles inspired by a mouse, a mushroom, or socks. Add in loads of flaps and cutouts, and the book’s got huge visual appeal."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is a great find for ages 5 to 8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
