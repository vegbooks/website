import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/04/9780822561927.jpg",
    "alt": "Guess What Is Growing Inside This Egg",
    "href": "/media/2011/04/9780822561927.jpg",
    "width": 200,
    "height": 250,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Mia Posada hatches a great children’s book that appeals to children’s curiosity and fascination with the natural world. She uses a couple rhyming sentences to hint at a mysterious animal in an egg before adding the refrain, “Can you guess what is growing inside this egg?” The watercolor and cut paper collages (somewhat reminiscent of Steve Jenkins nature collage illustrations) also visually hint at the answer. After turning the page, the answer is given in color font right next to an image of the hatchling and a paragraph on the opposing page offers more detail about the baby and parents. A couple pages at the end of the book present a size comparison of the eggs mentioned in the book as well as illustrations of cross sections of a duck egg at four different periods of embryo development."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter enjoyed the guessing game as much as the attractive illustrations. I especially liked the section at the back- inside the duck egg- which labels the barely recognizable head and body at 4 days compared to its development at the 10th, 14th, and 26th days. It reminds me of developing human baby images and shows the egg less as an object. We found this book at an especially appropriate time with the focus on eggs for Easter, my daughter’s current interest in eggs, and a couple online discussions about chicken eggs. We’ll be heading out soon to hunt down some variation of ",
      {
        "type": "link",
        "href": "http://www0.epinions.com/review/Hatch_N_Grow_Dinosaur_Egg_epi/content_420911812228",
        "external": true,
        "children": [
          "Grow a Dinosaur Egg"
        ]
      },
      " (a popular activity at our house)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8 ."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
