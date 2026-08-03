import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/toddler-baby-reading.jpg",
    "alt": "Vegetable Friends",
    "href": "/media/2011/07/toddler-baby-reading.jpg",
    "width": 210,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Vegetable Friends"
        ]
      },
      "by ",
      {
        "type": "link",
        "href": "http://www.thedripdrops.com/",
        "external": true,
        "children": [
          "Tony Lawlor"
        ]
      },
      " and Bruce Kociemba is an older book, but still widely available for used purchase. It is a great book for vegetarian kids since its focus is to introduce certain vegetables to young children."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The author takes a fun, rhyming approach to explaining how potatoes, corn, mushrooms, tomatoes, broccoli, and celery are all grown and their many varied uses. Kids love the way the story flows and the personality that each vegetable takes on. There is, however,one reference that vegetarian parents may not approve of, in which the author states that farm animals love corn."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "If you can get your hands on a used copy of this veggie–friendly book, you will not be disappointed. Chances are, you will enjoy reading the book every bit as much as the kids do!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-5.",
      {
        "type": "lineBreak"
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
