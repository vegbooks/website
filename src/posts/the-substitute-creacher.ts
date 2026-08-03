import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/08/9780316089159.jpg",
    "alt": "The Substitute Creacher",
    "href": "/media/2011/08/9780316089159.jpg",
    "width": 210,
    "height": 278,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In this picture book, ",
      {
        "type": "link",
        "href": "http://www.chrisgall.com/new_books.php",
        "external": true,
        "children": [
          "Chris Gall"
        ]
      },
      " employs a mixture of verse and prose to tell a cautionary tale of the consequences of pranks, misdeeds and carelessness. When a mysterious green, one-eyed character, “the Substitute Creacher,” visits a class of pranksters one day, he shares gruesome tales of woe, showing mug shots of various children and reciting what befell them."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "First he shares his mission with the class: “Attention all scamps, all rascals, and fools/ For forty-nine years I’ve visited schools/ I’ve collected some tales whose lessons are grave/ about boys and girls who didn’t behave.” With this, he casts a haunted aura into the room."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vivid, cartoon-like pictures accompany these tales. A girl, who would rather spend her time in class doodling than listening to her teacher, draws a flame-breathing dragon that comes to life. One boy, who is in a rush to eat his sandwich, doesn’t notice when the class’s pet hamster crawls into his lunch until he takes a bite. Another boy slips a guppy into the class’s aquarium and gets a shock when the guppy grows into a shark. These are just a few of the anecdotes the Creacher shares with the students."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The last anecdote the Creacher shares with the class is that of how he became the Creacher, following in the tradition of classic fairy tales about enchantments and spells. While at least one tale in the story is not veg friendly, specifically the one about a boy who ate a “hamster and cheese” sandwich, overall this book is appropriate as a not-too-scary Halloween tale and fun for kids in general."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 to 8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
