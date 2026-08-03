import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2015/02/veggiein-underwear-cvr.jpg",
    "alt": "VeggieinUnderwear_CVR",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I love this book. It all starts with the title, I think. I love the whimsy and humor of picturing vegetables in underwear. This may be the case where you really can judge a book by its cover. If you’re not giggling when you read the title and see broccoli in red briefs, this probably isn’t the book for you. Everyone else, read on!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Using simple language and bright, eye-catching illustrations, this book’s got a straightforward theme:"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "I wear underwear.",
          {
            "type": "lineBreak"
          },
          " You wear underwear.",
          {
            "type": "lineBreak"
          },
          " We all wear underwear!"
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Don’t call them underwear? No worries, the book helpfully supplies a bunch of synonyms: Drawers! Undies! Briefs! Underpants! Each is shown on a vegetable of a different size and shape: pea, carrot, celery, corn."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "For a child transitioning from diapers to underwear, this book provides encouragement in a very upbeat, humorous, silly way. But kids who already have the potty mastered may also enjoy this book, as it highlights a bunch of awesome vegetables. In addition to the aforementioned classic veggies, this book also depicts onion, eggplant, radish, mushroom, squash, turnip, potato, and a variety of baby veggies."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My only hesitation in recommending this book is that it’s a classic picture book with paper pages, which may be too delicate for some early-adopters of undies."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-5."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "I received a copy of this book from ",
          {
            "type": "link",
            "href": "http://www.abramsbooks.com/appleseed.html",
            "external": true,
            "children": [
              "the publisher"
            ]
          },
          "."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
