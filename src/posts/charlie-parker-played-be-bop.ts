import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/08/charlie-parker-be-bop.jpg",
    "alt": "Charlie Parker Played Be Bop",
    "href": "/media/2011/08/charlie-parker-be-bop.jpg",
    "width": 210,
    "height": 220,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "There are so many things I like about ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.goodreads.com/book/show/908724.Charlie_Parker_Played_Be_Bop",
            "external": true,
            "children": [
              "Charlie Parker Played Be Bop"
            ]
          }
        ]
      },
      ". My daughter received it for her second birthday and really enjoyed the text and the images. Its simple, rhyming text really held her attention."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It’s a book about jazz. It’s written text, but it sounds like jazz music. What an amazing feat to write text that sounds like jazz! “Charlie Parker played be bop. / Charlie Parker played saxophone. / The music sounded like be bop. / Never leave your cat alone.” The text and the rhythm capture the energy of jazz music. This book is a great introduction to a genre of music and a culture."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Because I like ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0531070956/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0531070956",
        "external": true,
        "children": [
          "this book"
        ]
      },
      " so much, I was really saddened when I realized we had to get rid of it. “Charlie Parker played be bop. / Charlie Parker played no trombone. / The music sounded like be bop. / Barbecue that last leg bone.” That last line about the leg bone is accompanied by an image of a leg of meat (possibly chicken or pig) on a barbecue grill. I might have put up with the words, but the image is just too much for me. Sadly, we’ll be getting rid of this one."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages Baby-Preschool."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
