import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "This lovely book is more about empathy than religion. A boy awakens in the middle of the night to realize he forgot to say his prayers. He kneels and prays for people without homes, for an end to war, for the sick to be healed, and for the hungry to be fed. In turn, the book turns to people in each of those circumstances, showing that they all live under the same beautiful moon."
    ]
  },
  {
    "type": "image",
    "src": "/media/2015/02/9781419707926.jpg",
    "alt": "9781419707926",
    "width": 464,
    "height": 607,
    "align": "center"
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian and vegan families will find much to like in this simple, beautifully illustrated picture book. I found the boy’s prayers resonated deeply with me and made me ask myself whether I am doing enough in my life to bring peace and justice to the world. In this way, the boy’s prayers are my own."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book touches briefly on two animal themes. In one image, a couple is looking at bare cupboards,"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "longing to see them stocked",
          {
            "type": "lineBreak"
          },
          " with",
          {
            "type": "lineBreak"
          },
          " rice and beans,",
          {
            "type": "lineBreak"
          },
          " noodles and peas,",
          {
            "type": "lineBreak"
          },
          " chicken soup and cereal."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "And at the end, the boy prays for his loved ones, which include his grandmother, mother, father, sister, teacher, and “Mikey, his turtle.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book, received as a review copy from ",
      {
        "type": "link",
        "href": "http://www.abramsbooks.com/appleseed.html",
        "external": true,
        "children": [
          "the publisher"
        ]
      },
      ", is for children ages 3 to 7."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Tell us in the comments: what techniques do you use to cultivate empathy in the children in your life?"
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
