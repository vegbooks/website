import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/09/0763624047.jpg",
    "alt": "Houndsley and Catina",
    "href": "/media/2011/09/0763624047.jpg",
    "width": 210,
    "height": 333,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "On vacation recently, I stopped into ",
      {
        "type": "link",
        "href": "http://www.yellowbookroad.com/",
        "external": true,
        "children": [
          "an independent bookshop that exclusively catered to children’s books"
        ]
      },
      " and let them know I was looking for charming chapter books. Moments later I had a number of books to choose from and was flipping through the first of four books in the Houndlsey and Catina series. What caught my eye was the mention that Catina (a cat) was vegetarian so her friend Houndsley (a dog) made a meal for her that included grains and tofu. A third guest at their dinner party, a bird named Burt, was surprised to learn that the “worms” he had been eating were really vegetarian. I just had to buy the book! Plus, I loved James Howe’s ",
      {
        "type": "emphasis",
        "children": [
          "Bunnicula"
        ]
      },
      " as a kid."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "After I read the book with my three-year-old, I returned the next day to get the rest of the series, the artwork is beautiful and the stories are truly charming. In this first book, Catina writes her memoirs because she wishes to be famous but she is not a very good writer. Houndsley is tactful and supportive. In the second chapter, Houndsley is encouraged by his friends to enter a cooking competition but he gets so nervous he even forgets the beans in his three bean (vegetarian) chili. In the third chapter, the friends resolve their experiences in the first two chapters and watch fireflies together. My mother in law said she wished Catina didn’t admit to disliking writing but I thought it was good that she could be honest with her friend."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The other books are equally fantastic. I think they are wonderful read-aloud books but would be a good for beginning readers as the print is large and the chapters are short. Veg families will really appreciate the themes of compassion and friendship."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
