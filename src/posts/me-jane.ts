import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/06/mejanecover.jpg",
    "alt": "Me … Jane",
    "href": "/media/2011/06/mejanecover.jpg",
    "width": 210,
    "height": 193,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Two powerhouses team up to bring young readers a sweet and inspiring autobiography of one girl who made her dream a reality. Vegbooks contributors ",
      {
        "type": "link",
        "href": "/reviews/hug-time/",
        "children": [
          "Jennifer"
        ]
      },
      " and Jessica (not ",
      {
        "type": "link",
        "href": "/reviews/wag/",
        "children": [
          "once"
        ]
      },
      ", but ",
      {
        "type": "link",
        "href": "/reviews/the-gift-of-nothing/",
        "children": [
          "twice"
        ]
      },
      "!) have fawned over Patrick McDonnell’s work, but now they and you too can appreciate his artistic style and prose in a different light. None of the mutts that made McDonnell famous can be found here, but several of the protagonist’s own drawings and puzzles make a debut."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.janegoodall.org/media/news/me%E2%80%A6jane-bookstores-near-you",
            "children": [
              "Me…Jane"
            ]
          }
        ]
      },
      ", McDonnell records the curious making of a young naturalist: bonding with a stuffed animal friend, watching birds make a nest and spiders spin a web, absorbing information about flora and fauna like a sponge, climbing trees, learning how eggs are made firsthand, and dreaming of a life helping animals in Africa."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The cartoon-illustrated and simply written text leads up to a fully colored photograph of famed primatologist, animal advocate and UN Messenger of Peace, Dr. Jane Goodall, reaching out her hand to meet that of a baby chimpanzee, a tell tale image that her dream came true. ",
      {
        "type": "emphasis",
        "children": [
          "Me…Jane"
        ]
      },
      " is an touching biography because every reader can identify with Jane’s nature explorations of her youth and come to believe that they too can realize their ambitions."
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
