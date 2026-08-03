import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2016/01/boy-and-the-book-hires-2.jpg",
    "alt": "boy-and-the-book-hires 2",
    "width": 210,
    "height": 169,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I adored this book about a boy and an anthropomorphic book! It is a cute picture book introducing the topic of how to take care of books they love and a reminder to parents about helping their kids handle books with care as they start their journey towards reading."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Bob Kolar’s illustrations are bright, colorful, expressive, and carries the storyline across clearly. The boy-handled book has facial expressions that are so evocative, you can’t help but feel sad or sorry he was injured and scared. Preschool age kids can definitely recognize and empathize with some of the emotions illustrated. This “wordless story” does have a few words- but I think it is such a great lead in for those who are learning to read."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Current and future book lovers won’t be able to resist such a cute book about loving books!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-5"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "I received a free copy in exchange for an honest review."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
