import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/01/1769-cv-hr.jpg",
    "alt": "Mixed Beasts",
    "href": "/media/2011/01/1769-cv-hr.jpg",
    "width": 210,
    "height": 280,
    "align": "right"
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=1553377966",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      "Inside ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/1553377966?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=1553377966",
            "external": true,
            "children": [
              "Mixed Beasts"
            ]
          }
        ]
      },
      ", you’ll find a collection of fictional beasts discovered by Zoologist and Professor Julius Duckworth O’Hare Esq. Each odd beast is a combination of two animals or two “things.” For example, there is a rhinocerostrich, a kangarooster, and a flamingocart."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book is set up as a field guide (a fancy one at that!)—each page features a new beast, with a short poem describing the beast and a beautiful illustration of him in his natural habitat. If you look closely, you’ll discover more mixed beasts on each page who are all named in the appendix. Some of these beasts are also a play on words using the real name of an animal, such as the bullfrog—a frog with bull features—and the armyant, an ant dressed as a soldier. Kids will have fun finding them on each page and naming them. A couple of neat ones that I discovered were the manateapot (a manatee shaped as a teapot) and fowlball (a fowl with a baseball for a body)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is perfect for encouraging kids to think creatively and outside the box. It’s engaging and unique. It would be especially great for teachers of all kinds—elementary, art, library, English, etc. They can can create lessons around the book encouraging kids to come up with their own mixed beasts. The ideas are endless!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-10."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
