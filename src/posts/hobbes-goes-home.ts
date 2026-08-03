import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2014/08/book-cover.jpg",
    "alt": "Book Cover",
    "href": "/reviews/hobbes-goes-home/",
    "width": 210,
    "height": 171,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Last year, I had the distinct pleasure of meeting author Tami Crupi Zeman, wife of Vermont radio personality Bruce Zeman, Jr. at the National Animal Rights Conference in DC. The animal-welfare activist pair had written a book, ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.bruceandhobbes.com/",
            "external": true,
            "children": [
              "Hobbes Goes Home"
            ]
          }
        ]
      },
      ", about Mr. Zeman’s canine co-star and his path from a domestic violence-plagued residence to the shelter and then finally to a home any dog would envy: two loving human caretakers and a fellow doggy playmate."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While there are many shelter-related books in the kid lit world, what sets Hobbes apart is its anti-bullying and forgiveness messaging, coupled with more common themes of hope, compassion, adoption, and family. Artist ",
      {
        "type": "link",
        "href": "http://www.shaunnapeterson.com/",
        "external": true,
        "children": [
          "Shaunna Peterson’s"
        ]
      },
      " colorful and expressive illustrations engage and enable readers to empathize with Hobbes’ range of emotions – from despair and loneliness to curiosity to joy and excitement. Here’s one excerpt of when he first arrives at the shelter –"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "Hobbes was confused. His mommy put him in the car and brought him to a big brown building. They went inside and she handed him to a lady he had never seen before. What was mommy doing? Where were they? Dogs were barking, and there were cats too. Hobbes didn’t understand why his mommy brought him to this strange place."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Outside of the pages of their book, the Bruce and Hobbes team is the only human-canine radio duo in the U.S. and they’re aiming to read their book in every school in Vermont! And if that’s not enough of a perk to support this publication, $1.00 from the sale of each book will benefit the Homeward Bound Animal Welfare Center in Middlebury, Vermont."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 – 8"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
