import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/09/willems-ep-pigs-make-me-sneeze.jpg",
    "alt": "Pigs Make Me Sneeze",
    "href": "/media/2011/09/willems-ep-pigs-make-me-sneeze.jpg",
    "width": 210,
    "height": 290,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.pigeonpresents.com/books.aspx",
        "external": true,
        "children": [
          "Mo Willems"
        ]
      },
      " is a favorite children’s author in our house. We have most of the books in his “Elephant and Piggie” series, and they always make for a fun read. In ",
      {
        "type": "emphasis",
        "children": [
          "Pigs Make Me Sneeze"
        ]
      },
      ", when Gerald the elephant is approached by his best friend, Piggie, he finds that he cannot stop sneezing. He becomes worried that he may be allergic to pigs, and that he will not be able to be friends with Piggie anymore. He goes to see his doctor, Doctor Cat, who assures Gerald that he is not allergic to pigs at all. Doctor Cat diagnoses Gerald with a cold. Gerald returns to Piggie to tell ",
      {
        "type": "link",
        "href": "http://annieandaunt.blogspot.com/2011/05/piggie-is-girl.html",
        "external": true,
        "children": [
          "her"
        ]
      },
      " the good news, only to discover that he has passed his cold onto her."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Like all the “Elephant and Piggie” books, ",
      {
        "type": "emphasis",
        "children": [
          "Pigs Make Me Sneeze"
        ]
      },
      " is written with gentle charm, and the friendship between Gerald and Piggie is very sweet. The drawings and words are simple, yet they manage to convey a lot of emotion and humor. ",
      {
        "type": "emphasis",
        "children": [
          "Pigs Make Me Sneeze"
        ]
      },
      ", along with the other books in the series, are considered “early reader” books, and the repetition of the words somehow add to the charm of the story."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story illustrates the animals in a positive and charming way. There are not any direct pro-vegetarian messages in the book (or the series) but neither have we encountered any anti-vegetarian themes either. I highly recommend this book and others in the series for an enjoyable read for kids and parents alike."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
