import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2020/05/whats-the-matter-marlo.jpg",
    "alt": "What’s The Matter, Marlo?",
    "href": "/media/2020/05/whats-the-matter-marlo.jpg",
    "width": 240,
    "height": 300,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781250223234",
        "external": true,
        "children": [
          {
            "type": "strong",
            "children": [
              "WHAT’S THE MATTER, MARLO?"
            ]
          },
          " by Andrew Arnold"
        ]
      },
      " addresses how children can tackle difficult emotions and recognize the strength between friends. The narrator and her best friend Marlo do everything together, including their favorite game hide-and-seek. Marlo’s dog Hooper is often with them, wagging and chasing and fetching. When conflict occurs, their friendship is tested and eventually strengthened."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "One day, Coco (who is named in the book flap but not in the story) asks Marlo to play and is told to Go Away; Marlo looks angry. Instead, she tries to cheer him up with jokes about dogs. Marlo gets angrier and angrier, depicted with thick, black lines above his head. And finally he screams (AHHHHHHH!) and disappears into a page full of black, squiggly lines."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The beauty and reassurance in this children’s book comes from Coco’s resolve and perseverance in making sure she “finds” Marlo despite all the hardship and hurt feelings. In addition, it emphasizes the reality that when children (or all of us…) are having BIG feelings, sometimes they don’t look like what we expect. When Coco discovers the source of Marlo’s seeming anger, the death of his dog Hooper, she cries with him because “that’s what best friends do, too.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Families should know that the death of the dog is implied with an image of Hooper’s collar hanging on a branch by a plot of dirt. And the anger “squiggles” may be scary to younger, more sensitive children. Overall, however, this picture book will spur parents to have difficult and loving conversations about loss and grief and how to support a loved one working through it. Highly recommended."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
