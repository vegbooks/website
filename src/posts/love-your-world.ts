import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Love Your World: How to Take Care of the Plants, the Animals, and the Planet",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "For the growing preschooler and early elementary student is ",
      {
        "type": "link",
        "href": "http://www.dorlingkindersley-uk.co.uk/nf/Book/BookDisplay/0,,9781405339070,00.html",
        "external": true,
        "children": [
          "this introductory look"
        ]
      },
      " at adopting green habits and keeping green promises. A perfect mix of multicultural kids, colorful photographs, and enchanting cartoons lures young readers into the myriad of ways to help the world, including buying secondhand, turning off the lights, gardening, and make arts and crafts from recycled materials, among the more standard eco- actions."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A “promise” checklist at the end of the book tracks a child’s green progress. Flip the page and you’ll find a Super Green Star Award to certify that your child has accomplished a handful of eco-friendly behaviors. All in all, a vibrant publication that any youngster will enjoy perusing and applying to daily life."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
