import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/toddler-baby-reading.jpg",
    "alt": "Moo, Baa, La La La!",
    "href": "/media/2011/07/toddler-baby-reading.jpg",
    "width": 210,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Little kids seem to love ",
      {
        "type": "link",
        "href": "http://www.sandraboynton.com/sboynton/Introduction.html",
        "external": true,
        "children": [
          "Sandra Boynton’s"
        ]
      },
      " board books. Of all of that kiddo had, this is my favorite, in part because it teaches about the sounds animals make (albeit from a pretty ",
      {
        "type": "link",
        "href": "http://www.eleceng.adelaide.edu.au/Personal/dabbott/animal.html",
        "external": true,
        "children": [
          "anglo perspective"
        ]
      },
      ") but also because it pokes fun at the anthropomorphism of so many little kids books."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The main joke in the book is highlighted in its title. “A cow says moo. A sheep says baa. Three singing pigs say la la la!” Of course, that isn’t right. Pigs don’t wear bow ties, hold canes, and sing on their hind feet, as Boynton graciously allows her reader to point out. And that’s precisely the fun of her book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Full of cheerful illustrations and bright colors, ",
      {
        "type": "emphasis",
        "children": [
          "Moo, Baa, La La La"
        ]
      },
      " is perfect for little ones."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 0-3. For another perspective, visit ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/book-reviews/Moo-Baa-La-La.html/details",
        "external": true,
        "children": [
          "Common Sense Media"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
