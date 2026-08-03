import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/04/9780316077910.jpg",
    "alt": "Fred Stays With Me!",
    "href": "/media/2011/04/9780316077910.jpg",
    "width": 210,
    "height": 236,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Finding stability after a divorce, especially one involving shared custody, isn’t all that easy, but having a canine friend like Fred certainly helps. In ",
      {
        "type": "link",
        "href": "http://www.hachettebookgroup.com/books_9780316882699.htm",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Fred Stays with Me!"
            ]
          },
          ","
        ]
      },
      " a young girl tells of her two different homes and routines and the one constant in her life: Fred. “Fred is my friend. We walk together. We talk together. When I’m happy, Fred is, too. And when I’m sad, Fred is there.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "But Fred isn’t always an angel. Mom and dad don’t appreciate Fred’s barking and sock-munching and state he can no longer live with them. But friends stick up for one another, and our young narrator barks back “Excuse me…Fred doesn’t stay with either of you. Fred stays with ME!” Together, parents and daughter find solutions to Fred’s quirks and smooth out what can be a rough time for kids in a “broken” home."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "With accessible text and Tricia Tusa’s adorable illustrations, this book is a helpful crutch in addressing modern day family dynamics; a family that recognizes that companion animals are members of the clan too."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
