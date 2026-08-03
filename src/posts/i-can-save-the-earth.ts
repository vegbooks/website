import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/10/girl-reading.jpg",
    "alt": "I Can Save the Earth",
    "href": "/media/2010/10/girl-reading.jpg",
    "width": 210,
    "height": 280,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This is yet another great eco-friendly book by Alison Inches. The little monster in the book starts out not being environmentally friendly. He learns about all the ways that he is not making good choices and then on his journey learns that making eco-friendly choices is not only fun, but much better for the planet."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a fun book that will help children to identify some of the things they are doing that are harming the planet and what they can do to make ",
      {
        "type": "link",
        "href": "http://www.eduplace.com/kids/sla/4/earth_act.html",
        "external": true,
        "children": [
          "better choices"
        ]
      },
      ". Plus, like Inches’ other eco-friendly children’s books, they are printed on 100 percent postconsumer waste recycled paper and use 100 soy ink."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian and vegan parents will be find this book a great choice to add to their collection. The message is solid and the story is entertaining!"
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
