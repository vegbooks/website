import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/12/978-0-394-80027-1.jpg",
    "alt": "Snow",
    "href": "/media/2011/12/978-0-394-80027-1.jpg",
    "width": 209,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This book by P.D. Eastman is part of the Dr. Seuss family. Similar in style to ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.goodreads.com/book/show/460548.Go_Dog_Go_",
            "external": true,
            "children": [
              "Go, Dog, Go"
            ]
          }
        ]
      },
      ", it’s an early reading book about two kids and their dog playing in the snow. They run, throw snow balls, build a snowman, ski, make an igloo."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It’s a simple book with simple pictures that are good for read-aloud and for learning to read. However, I can’t stand it. I am not a fan of P.D. Eastman, though I know his books are popular with the kids. We have this one and ",
      {
        "type": "emphasis",
        "children": [
          "Go, Dog, Go"
        ]
      },
      ", and I just don’t like to read them. My daughter enjoys them enough though they are definitely not amongst her favorite books, and certainly not as loved as the real Dr. Seuss books. I’ve always felt thatit’s a major stretch to include P.D. Eastman books in the Dr. Seuss family of books."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In one part of the book, the two children build an igloo and sit down for a picnic. It’s strange – it seems all they eat is meat. “Do you like to eat? Do you like meat? Come and eat our meat.” I get that it’s a nice rhyme with easy words, but each time I get to this part, I stumble because I’m not sure how to proceed."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter received this book at birth, and I’ve held onto it thinking that she might enjoy it when she is learning to read. However, I’ve decided that I don’t like the book enough make the meat reference acceptable. I’ll be donating this book to make room for my daughter’s Christmas presents."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Baby-Preschool."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
