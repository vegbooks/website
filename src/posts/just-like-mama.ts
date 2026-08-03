import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/05/just-like-mama.jpg",
    "alt": "Just Like Mama",
    "href": "/media/2010/05/just-like-mama.jpg",
    "width": 240,
    "height": 240,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.lesleanewman.com/biography.htm",
        "external": true,
        "children": [
          "Lesléa Newman"
        ]
      },
      ", author of ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/hachiko-waits/",
            "children": [
              "Hachiko Waits"
            ]
          }
        ]
      },
      ", wrote a lovely book entitled ",
      {
        "type": "emphasis",
        "children": [
          "Just Like Mama"
        ]
      },
      "that hit bookstores last month. She collaborates with illustrator Julia Gorton on a tribute to motherhood, which is narrated by a little girl one summer day."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter, who is just beginning to read, loves the use of repetition in the book. I will read “Half a dozen dangling braids all hanging in a row,/ then each one tied up tightly with a brightly colored bow./ Nobody combs my hair …” and she will complete the line, “just like Mama.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian parents will appreciate that while food has a special place in this book, the meals are ones that might be served in your house: apple pancakes and cocoa for breakfast, peanut butter sandwiches with apples for lunch, and spaghetti for dinner. While there are depictions of whipped cream and milk, they could easily be ",
      {
        "type": "link",
        "href": "http://www.soyatoo.com/",
        "external": true,
        "children": [
          "soy"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I also like that the mother and daughter spend time together outdoors gardening and finding frogs. Some families concerned about animal rights, however, may not enjoy the part of the book where the pair plays dress-up and Mama pretends to be a “lion tamer” teaching her daughter to roar."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 to 7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
