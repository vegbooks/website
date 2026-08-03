import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/10/apple-cvr.jpg",
    "alt": "Apple",
    "href": "/media/2012/10/apple-cvr.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "With simple pictures and a single word on each page, ",
      {
        "type": "emphasis",
        "children": [
          "Apple"
        ]
      },
      " by ",
      {
        "type": "link",
        "href": "http://www.nikkimcclure.com/",
        "external": true,
        "children": [
          "Nikki McClure"
        ]
      },
      " tells the story of the life cycle of an apple. The story begins with the apple falling from a tree. The readers follow the apple on its journey from the tree, to being found and taken and later forgotten, to being returned to the earth, and then, lastly, sprouting again in the springtime. The black and white pictures, with just a bit of red, are sweet, and they set a gentle backdrop for the story."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "At one point in the story, when the apple ends up in a kitchen, a child takes the apple (with the simple caption “Sneak”), hides the apple in a backpack (“Hide”), and with his mother unaware, takes the apple with him when he leaves the house (“Secret”). For our family, such an occurrence in a story leads to a discussion about the importance of being honest rather than sneaky with one another. This seems to be far removed from the author’s intention, but some families reading the book may find it important to address this."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian and vegan families wishing to instill in their children an appreciation for nature may appreciate that, after the story ends, the author includes information on composting, as well as information on the life of an apple tree. As I read the book to my 4-year-old audience (my daughter and her friend), I found that while the story itself seems appropriate for younger children (preschool age, perhaps), the manner of presentation of the composting information at the end may be better suited for a somewhat older readership."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Overall, the story is a simple celebration of nature. It is clearly intended to encourage children to have an appreciation for the earth, which is a worthy goal, indeed."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "A review copy was received from ",
          {
            "type": "link",
            "href": "http://www.abramsbooks.com/",
            "external": true,
            "children": [
              "Abrams Books"
            ]
          },
          "."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
