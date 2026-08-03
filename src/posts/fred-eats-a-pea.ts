import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/01/fred-by-paula-weiner-cover.jpg",
    "alt": "Fred Eats a Pea",
    "href": "/media/2012/01/fred-by-paula-weiner-cover.jpg",
    "width": 210,
    "height": 204,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.veganstore.com/product/book-fred-eats-a-pea/new-products",
        "external": true,
        "children": [
          "This book"
        ]
      },
      " tells the story of a real life dog named Fred who goes from a non-veg home to a vegan one when his caretaker, Gertie, becomes too ill to care for him."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A large portion of the story sets up how Fred prefers people food over dog food but does not like peas, even spitting out the pea from a chicken pot pie while an in-home nurse visits the elderly Gertie. With so much set up, I was surprised that the book quickly resolved when Fred one day decided he liked fresh peas from the garden. Though the book indicates that his sudden affection for peas relates both to his bravery and to his physical similarity to a cow, I didn’t really understand the impetus for the change, nor is it particularly helpful for families working through aversions to particular foods. Still, the resolution — “He ate the pea…and now Fred loves PEAS!” — may encourage some kids to try their peas."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The illustrations are a little stark but sweet and you can feel that this book was a labor of love. The book concludes with a photo of the real Fred and a loving note from the author in her mother’s memory. There is also a recipe for pasta with a peanut butter sauce and peas but it was not anything we could test due to food allergies."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Some vegans will smile at the description of the vegan family who takes care of Fred — “‘Vegan’ meant that they do not eat or use anything made from animals. They love animals so much that they regularly go to the country to visit cows, chickens, pigs, lambs, and other animals. There were six frogs, four cats, one dog and a girl named Lauren in the family, along with her parents of course.” Still, the unresolved questions raised by illness, an in-home nurse, and the disappearance of Gertie can be confusing and upsetting for children. The story would be more suited for a chapter book for older kids, so that the themes could be fleshed out for discussion. I know my daughter was most worried about where Gertie went and why Fred had to leave her. I do realize this is meant as a true to life tale, and thus creative storytelling can be slightly limited, but there are too many themes at play for it to be ready for the inquisitive picture book crowd."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
