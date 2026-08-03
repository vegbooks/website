import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/03/165-x-sc-fcover-300dpi.jpg",
    "alt": "Shlemiel Crooks",
    "href": "/media/2011/03/165-x-sc-fcover-300dpi.jpg",
    "width": 210,
    "height": 265,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I’m probably not the best person to review this book, since I’m not Jewish and this book is about ",
      {
        "type": "link",
        "href": "http://shlemielcrooks.com/",
        "external": true,
        "children": [
          "the celebration of Passover in early 20th century St. Louis"
        ]
      },
      ". Still, ever since my daughter attended a Jewish preschool last year, I’ve been on the lookout for a vegan-friendly Passover book, and at last I’ve found one!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Incorporating a conversational tone and snippets of Yiddish, Anna Olswanger’s book recounts the true story of a failed robbery of Passover wine in 1919. Complete with an appearance by Pharaoh, a talking horse, and a nice helping of Exodus, this book has a lot of character and not a single mention of fish, meat, or eggs. It’s a great book for vegetarian and vegan kids!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5-9. For a guide to the book, visit ",
      {
        "type": "link",
        "href": "http://shlemielcrooks.com/guide.php",
        "external": true,
        "children": [
          "the Shlemiel Crooks website"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
