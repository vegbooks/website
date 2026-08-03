import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/11/9780811877817.jpg",
    "alt": "Tua and the Elephant",
    "href": "/media/2012/11/9780811877817.jpg",
    "width": 210,
    "height": 280,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Kiddo and I thoroughly enjoyed this adventure story about a young girl named Tua (meaning “peanut”) and her friend Pohn-Pohn, the elephant."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Set in Thailand, the chapter book opens with their meeting — where Tua observes Pohn-Pohn being mistreated by her mahouts — and proceeds to a happy ending at an elephant sanctuary, where Pohn-Pohn is free to be an elephant and Tua has made new friends. Along the way are colorful characters ranging from Tua’s movie star auntie to the cartoonish mahouts who will stop at nothing to recover the valuable elephant."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Implicit in the entire narrative is that animals are not property to own and treat as we wish. Rather, they are sentient beings capable of suffering, feeling joy, and making decisions about the course of their lives. I loved the story behind the story too. It turns out author R.P. Harris had a transformative experience at a real-life sanctuary and started writing the book from his hotel room hours later."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Many traditional Thai foods are depicted in the book, with a heavy (but not exclusive) emphasis on plant-based foods."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "With short but plentiful chapters, with many Thai expressions sprinkled throughout, this book is perfect to be read aloud to 6- and 7-year-olds, and would likely be enjoyed by older kids on their own."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "For another perspective, check out ",
      {
        "type": "emphasis",
        "children": [
          "Water for Elephants"
        ]
      },
      " author ",
      {
        "type": "link",
        "href": "http://www.nytimes.com/2012/05/13/books/review/tua-and-the-elephant-by-r-p-harris.html",
        "children": [
          "Sara Gruen’s review"
        ]
      },
      " for the New York Times."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
