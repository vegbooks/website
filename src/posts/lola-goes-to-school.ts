import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2019/07/lola-goes-to-school-cvr-hires.jpg",
    "alt": "Lola Goes to School",
    "href": "/reviews/lola-goes-to-school/",
    "width": 258,
    "height": 300,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "strong",
        "children": [
          {
            "type": "link",
            "href": "https://www.indiebound.org/book/9781580899383",
            "external": true,
            "children": [
              "LOLA GOES TO SCHOOL"
            ]
          }
        ]
      },
      " by Anna McQuinn is a lovely and encouraging picture book for children starting Kindergarten or preschool. Fans of Lola’s previous adventures will recognize her love of reading and learning and having new experiences. ",
      {
        "type": "emphasis",
        "children": [
          "Lola Goes to School"
        ]
      },
      "is perfect for children who are anxious about starting school as there is a matter-of-fact, reassuring tone, and the story presents no conflicts to overcome — other than school being “fun…but exhausting.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The first half of the picture book is all about preparing for the big day. Lola picks out her outfit and packs her bag, including a set of extra clothes “just in case.” The story then follows Lola as she starts her first day of school and navigates reading and snack time and blocks and singing. The array of color and variety of activities Lola takes part in are sure to include at least one or two tasks that any child beginning a new school year will recognize."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "To further ease trepidations, every character is smiling throughout the book, and the text is simple description of actions with no dialogue. The bright colors and soft edges of the illustrations by Rosalind Beardshaw are consistently comforting and joyful. Lola Goes to School will make a wonderful addition to any picture book collection about starting new adventures and enjoying every moment."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
