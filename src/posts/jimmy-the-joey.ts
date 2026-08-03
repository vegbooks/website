import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/06/jimmythejoey.jpg",
    "alt": "jimmythejoey",
    "href": "/media/2013/06/jimmythejoey.jpg",
    "width": 210,
    "height": 211,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "There are so many interesting kids books in the world that our contributors don’t often double up on a title — but in this case, two received review copies of"
        ]
      },
      " ",
      {
        "type": "link",
        "href": "http://deborahleerose.com/books/jimmy-the-joey/",
        "external": true,
        "children": [
          "Jimmy the Joey"
        ]
      },
      ".",
      {
        "type": "emphasis",
        "children": [
          "First, read Kristin’s review, which explains her kids’ reaction to the book"
        ]
      },
      {
        "type": "emphasis",
        "children": [
          ". Then keep on reading for a different take from Carolyn."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The National Geographic Kids book ",
      {
        "type": "emphasis",
        "children": [
          "Jimmy the Joey"
        ]
      },
      " has everything kids in the preschool to kindergarten ages want: cute animals, adventure, and a tale of real life heroism. This book is wonderful in that it deals with lots of information in plain language and by using a true story that keeps children engaged and interested. Jimmy is a baby koala who is separated from his mother, but soon found on the side of a road in Australia and brought to a Koala Hospital. The story follows his healing and growth while explaining what a baby koala needs to thrive."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Following Jimmy for over a year, the narrative photographs and matter-of-fact, sometimes funny, language give children a compassionate and hopeful story about injured animals animals returning to the wild. My children (ages 4 and 6) loved the many photos of Jimmy as he learned to climb and met other koalas. They were also happy to know that Jimmy went home to the forest in the end. We also enjoyed reading the koala facts at the end of the story, and the kids really loved visiting ",
      {
        "type": "link",
        "href": "http://www.koalahospital.org.au/",
        "external": true,
        "children": [
          "the website for the Koala Hospital"
        ]
      },
      " featured in the story."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I definitely recommend this book for ages 4-8. While it deals with the baby koala’s separation from his mother, and later, his separation from his caretaker, the book’s tone is comforting and factual. We’ve read it several times so far, and I’m sure we’ll return again!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "strong",
        "children": [
          "Review By ",
          {
            "type": "link",
            "href": "/contributors/#CMullin",
            "children": [
              "CAROLYN M. MULLIN"
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Putting aside the depressing nature of its beginning where baby koala, Jimmy, loses his mom to a run-in with a vehicle while crossing a busy Australian road, ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/book/show/17262609-jimmy-the-joey",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Jimmy the Joey"
            ]
          }
        ]
      },
      " was an overall tender tale of rescue, rehabilitation and release. Photographer Susan Kelly comments in the afterword that she could find very little information on koalas and was shocked to learn that most Australians had never seen a koala outside of the confines of a zoo (make that two of us!). She thus began a multi-year film project with National Geographic and this photo-journalism book for kids was a result of those efforts. The photos of Jimmy and his caretaker, Barb, at the Koala Hospital are certainly awe-inducing, and serve as a great story aid in communicating not only scientific information about this fascinating marsupial, but also a message of conservation and hope. For goodness sakes, in the world we live in, we all need a little hope – small and big kids alike."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
