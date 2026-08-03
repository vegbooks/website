import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/01/hero-cat-cover1.jpg",
    "alt": "Hero Cat",
    "href": "/media/2010/01/hero-cat-cover1.jpg",
    "width": 207,
    "height": 206,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "After much searching in winter weather, a homeless cat finds an abandoned building to deliver her kittens. When she leaves her kittens to find some nourishment, she returns to find the building up in flames. As the firefighters work to put out the fire, the mother cat works to save her kittens, walking through the fire to find and carry them out one at a time. ",
      {
        "type": "emphasis",
        "children": [
          "Hero Cat"
        ]
      },
      " is a story about mother love as much as it is a cat story."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Spinelli describes a mother determined to do the best she can for her young and it is not so much that she’s a cat that makes the story amazing to me, but that she goes repeatedly into the burning building to save every single one of her babies. And then I read the final page and discover it’s based on a true story with a picture of the burnt cat and her kittens at a shelter. It brought me to tears seeing the photo and reading the biographical note. Stammen’s illustrations are appealing and my daughter fell in love with the cat and the book. So did I."
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
