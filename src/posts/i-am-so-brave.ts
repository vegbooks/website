import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2014/07/9781419709371.jpg",
    "alt": "Image of the cover of I Am So Brave! featuring a little boy joyfully going down a slide",
    "href": "/reviews/i-am-so-brave/",
    "width": 210,
    "height": 269,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "The author-illustrator team that brought us the adorable board book ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/i-know-a-lot/",
            "children": [
              "I Know A Lot!"
            ]
          }
        ]
      },
      "is back at it with the new title ",
      {
        "type": "emphasis",
        "children": [
          "I Am So Brave!"
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Every time I look at this book (received as a review copy from ",
      {
        "type": "link",
        "href": "http://www.abramsbooks.com/appleseed.html",
        "external": true,
        "children": [
          "the publisher"
        ]
      },
      "), I find myself smiling. The bright colors, modern design, and adorable protagonist together create a book that feels both fresh and classic — and the little boy’s joy as he goes down the slide with his hands in the air is palpable!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book would have been a great tool when my daughter was in preschool and struggled with shyness. Using the first person, the narrative briefly introduces five common fears: fear of dogs, fear of swimming, fear of the dark, fear of loud noises, and fear of saying goodbye. One by one, each fear is replaced with the joy that being brave brings. Overcoming the fear of big dogs allows the narrator to make new friends. Getting used to the dark allows him to admire the stars. And so on."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Simple and empowering, this new board book is a delight. It would be a perfect gift for a second or third birthday!"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
