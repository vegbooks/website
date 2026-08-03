import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2009/11/dog-heaven-sm11.jpg",
    "alt": "Dog Heaven - sm",
    "width": 162,
    "height": 242,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Cynthia Rylant’s work suggests that she knows what it’s like to ",
      {
        "type": "link",
        "href": "http://www.hsus.org/pets/pet_care/coping_with_the_death_of_your_pet/",
        "external": true,
        "children": [
          "grieve for an animal companion"
        ]
      },
      ". In this beautifully illustrated book, she envisions an afterlife for dogs, complete with angel children to play with, fluffy clouds to sleep on, and biscuits that God makes specially for them."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kiddo and I got this book from the library after our beloved cat, Midge, passed away. I found it to be comforting (though I did choke back tears), and it gave us a place to begin our discussion about ",
      {
        "type": "link",
        "href": "http://www.huffingtonpost.com/olivia-rosewood/once-upon-a-time-the-dead_b_344917.html",
        "external": true,
        "children": [
          "what happens when an animal dies"
        ]
      },
      ". I’ve since learned that Ms. Rylant also has written and illustrated a book entitled ",
      {
        "type": "emphasis",
        "children": [
          "Cat Heaven"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-7. For more reviews, visit ",
      {
        "type": "link",
        "href": "http://www.librarything.com/work/66691",
        "external": true,
        "children": [
          "Library Thing"
        ]
      },
      " or ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/book/show/89378.Dog_Heaven",
        "external": true,
        "children": [
          "Goodreads"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
