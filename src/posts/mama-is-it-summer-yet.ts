import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/05/mama-is-it-summer.jpg",
    "alt": "Mama, Is It Summer Yet?",
    "href": "/media/2010/05/mama-is-it-summer.jpg",
    "width": 245,
    "height": 235,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I cringe to find out how Jennifer Gannett, avowed ",
      {
        "type": "link",
        "href": "http://www.nikkimcclure.com/",
        "external": true,
        "children": [
          "Nikki McClure"
        ]
      },
      " fan and avid ",
      {
        "type": "link",
        "href": "/contributors/",
        "children": [
          "contributor to Vegbooks"
        ]
      },
      ", will respond when she finds out I snatched up Ms. McClure’s charming new book for myself to review on the site. But I felt we owed it to you, our readers, to provide another perspective. We’ve all read Jennifer gush about ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/all-in-a-day/",
            "children": [
              "All in a Day"
            ]
          }
        ]
      },
      " and ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/the-great-chicken-escape/",
            "children": [
              "The Great Chicken Escape"
            ]
          }
        ]
      },
      ". It’s time for another view."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Sorry to say, I can’t deliver. When my husband casually asked me about this title, he had to interrupt me five minutes later to ask me to stop raving about it. So I handed him a copy, and now he’s got the bug too."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While it’s true that what initially drew me to this book was the exquisite artwork and attention to detail — things important in any children’s book — I do think this is a particularly good title for vegetarian and vegan kids. While there’s no mention of dietary issues (as Ms. McClure puts it, “There are no eggs, just berries this time”), the mother and child’s connection to the natural world is a tribute to environmentalism and natural living. It has been fun to notice the details as the seasons progress in the book from winter to summer, and then to go outside and see many of the same signs here in Washington, DC."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
