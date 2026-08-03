import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2014/07/girland-bicycle.jpg",
    "alt": "Cover image of Girl and Bicycle, depicting a girl looking into a shop window",
    "href": "/reviews/the-girl-and-the-bicycle/",
    "width": 210,
    "height": 163,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I love this book. We got it from the library and though it is wordless, it has a fantastic message and beautiful illustrations. I enjoyed Mark Pett’s last book, ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.goodreads.com/book/show/13260743-the-boy-and-the-airplane",
            "external": true,
            "children": [
              "The Boy and the Airplane"
            ]
          },
          ","
        ]
      },
      " but this book (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1442483199/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1442483199&linkCode=as2&tag=vegbooks-20&linkId=6BFL2UBIHLEKONFM",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ") prompted me to sit down and write a review for Vegbooks so I could share it with all of you."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A young girl and her brother (who is eating an ice cream cone) are walking on the street and she spies a beautiful green bicycle in a shop window. Rushing home, she scrapes together all the change she can (piggy bank, couch cushions, etc.), before moving on to opening a lemonade stand and selling old toys to raise money. She comes up with the idea to rake leaves and goes door to door asking neighbors if she can help with their yards. Finally, an older woman takes her up on the offer."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Seasons change and the girl continues to help in the yard and house of the older woman. She dusts, shovels snow, gardens, and tidies. At last, she has saved enough for the bicycle and rushes to the store to claim her hard earned prize. What happens next is touching. My almost 4-year-old and almost 6-year-old loved the book, as did I. Highly recommended."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
