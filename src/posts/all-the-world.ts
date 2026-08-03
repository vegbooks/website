import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/02/all-the-world.jpg",
    "alt": "All the World",
    "href": "/media/2011/02/all-the-world.jpg",
    "width": 210,
    "height": 209,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Liz Garton Scanlon and Marla Frazee teamed up to create ",
      {
        "type": "emphasis",
        "children": [
          "All the World"
        ]
      },
      ",a book so beautiful that it received the Caldecott Honor last year. (The Caldecott Medal went to ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/the-lion-the-mouse/",
            "children": [
              "The Lion and the Mouse"
            ]
          }
        ]
      },
      " by Jerry Pinkney.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Capturing the magic of everyday moments, this book boasts several scenes that vegetarian and vegan families will enjoy. Among my favorite are the depiction of play along the shore (“A moat to dig, a shell to keep/ All the world is wide and deep”) and a bustling farmer’s market (“Tomato blossom, fruit so red/ All the world’s a garden bed”). I also appreciate the diversity of families portrayed — or I should say ",
      {
        "type": "emphasis",
        "children": [
          "family"
        ]
      },
      ", as one of the delightful surprises is discovering that all of the characters are related (“Nanas, papas, cousins, kin/ Piano, harp and violin”)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There’s a serenity to both ",
      {
        "type": "link",
        "href": "http://www.pbs.org/parents/booklights/archives/2010/04/thursday-three-poem-picture-books.html",
        "external": true,
        "children": [
          "the words"
        ]
      },
      " and illustrations that is reassuring and makes this an ideal bedtime book. Vegan parents, however, should be aware that the book portrays both honey production for human consumption and the use of butter in cooking."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
