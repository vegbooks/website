import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/05/2092-cv-hr.jpg",
    "alt": "Big Bear Hug",
    "href": "/media/2010/05/2092-cv-hr.jpg",
    "width": 209,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I wasn’t more than a few pages into ",
      {
        "type": "emphasis",
        "children": [
          "Big Bear Hug"
        ]
      },
      " by ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/author/show/2968685.Nicholas_Oldland",
        "external": true,
        "children": [
          "Nicholas Oldland"
        ]
      },
      " before it became one of my new favorites. I rushed to share it with my husband, and we couldn’t stop laughing. I’ve since shared it with dozens of friends and colleagues. I simply adore this book!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It begins with “a bear so filled with love and happiness” that he spends his time hugging living things of all shapes, sizes and qualities. He loves hugging trees the most. One day, while he’s trying to “hug a beaver and a tree at the same time,” he notices a man with an ax. When the bear discovers what the man plans to do to an especially large and lovely tree, the bear becomes quite angry, and must decide what action to take."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The straightforward text paired with the clever and playful (though simple) illustrations will leave you giggling (yes, giggling) and rushing to share it with children and adults both. It’s a sweet, light-hearted conservation story about the importance of character and the power of love…and hugs."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-9."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
