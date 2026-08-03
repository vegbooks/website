import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2014/03/of-course-they-do.jpg",
    "alt": "OfCourseTheyDo",
    "href": "/reviews/of-course-they-do-boys-and-girls-can-do-anything/",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I love this book! It’s actually quite simple, which works well to illustrate its point. It’s a fairly short book that presents stereotypical pictures on one page and then counters them on the next page. For example, it will show a picture of a boy playing with cars and say, “Girls don’t like cars.” On the next page is a picture of Danica Patrick in her race car and it says, “Wait a minute… Are you sure?”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The use of real pictures of real famous people helps to inform the reader that these are not hypotheticals. It’s not theoretical that girls can like cars. Danica Patrick loves cars and she’s a real person. The text is simple and playful, and the pictures do most of the talking. Since most of the pictures feature real people, as kids grow older you can discuss the person in the picture – what they do and why they are famous. And as kids get even older you can discuss discrimination that someone like Danica Patrick might face in her job. My only complaint about this book is that the names of the people in the pictures are not included so if you don’t recognize them, you won’t be able to find out more about them."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I have a four-year-old daughter and we are constantly having the conversation about boys versus girls. Some actual statements from my four-year-old – boys don’t do ballet, all boys like basketball. And it started young – probably as early as two years old. We talk about gender stereotypes constantly in our house and yet she goes to school and learns gender rules from her school friends. It’s nice to have a book to challenge these assumptions. My daughter seems to really enjoy this book. She thinks the playful wording is really funny and keeps bringing it up. She’ll say, “Boys don’t cook… Wait a minute, are you sure?”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I definitely recommend this book for parents of boys and girls. Amazon (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1580896693/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1580896693&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "affiliate link"
        ]
      },
      ") recommends this book for ages 2-5, and I think that is right. Start the message at home as soon as the message starts at school."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The publisher sent a copy of this book for review."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
