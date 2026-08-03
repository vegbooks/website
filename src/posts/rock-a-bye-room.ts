import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/11/9781419705373.jpg",
    "alt": "9781419705373",
    "href": "/media/2013/11/9781419705373.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "What a sweet bedtime book! With a nod to the lullaby “Rock-a-Bye Baby” and Margaret Wise Brown’s classic bedtime story ",
      {
        "type": "emphasis",
        "children": [
          "Good Night, Moon"
        ]
      },
      ", Susan Meyer’s gentle rhymes and Amy Bates’ darling illustrations are sure to soothe your kiddo before bed."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This safe, quiet, gentle book (which I received as a review copy from ",
      {
        "type": "link",
        "href": "http://www.abramsbooks.com/childrens.html",
        "external": true,
        "children": [
          "the publisher"
        ]
      },
      ") is perfect for unwinding. I love the illustrations in particular. The mother dances with her young daughter and feeds the rocking horse with treats she’s gathered in the folds of her skirt. Throughout, she nurtures her child’s imagination, taking the time to make sure all the toys are snug in their places before bed and saying goodnight to the pictures on the wall."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The final scene blends the real with the imaginary too, depicting the mother playing guitar to her daughter as she snuggles in a cradle hung from a tree. The moon and stars hang down on strings."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2 to 5."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
