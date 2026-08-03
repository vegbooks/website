import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/03/9781564026620.jpg",
    "alt": "I Love Animals",
    "href": "/media/2011/03/9781564026620.jpg",
    "width": 210,
    "height": 252,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "My toddler loves this book. Its simple repetitiveness keeps her interested to the end, when she often says, “Again.” It starts with the statement “I love animals,” and each page is an expression of love for a different farm animal. “I love the ducks waddling to the water. I love the donkeys braying hee-haw.” After each statement, my daughter looks at me earnestly and repeats the animal love. “Mommy, I love ducks.” It’s adorable. The book ends with “I love animals and I hope they love me,” and shows a little girl surrounded by all of the animals."
    ]
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=1564026620",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      "For vegetarian parents, what’s not to love? Typical farm animals are featured, but no mention is made of them being on a farm. The simple, earnest love for animals is the base reason many of us are vegetarians. ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1564026620?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=1564026620",
        "external": true,
        "children": [
          "This book"
        ]
      },
      " helps us share this love of animals with our youngsters."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages Baby-Toddler."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
