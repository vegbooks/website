import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/07/princess-smartypants.jpg",
    "alt": "Princess Smartypants",
    "href": "/media/2010/07/princess-smartypants.jpg",
    "width": 210,
    "height": 178,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "The love of all things princess has driven saner parents than me crazy, so when my daughter started talking about Belle, Cinderella, and the rest of the ",
      {
        "type": "link",
        "href": "http://thedisneyprincesses.yolasite.com/",
        "external": true,
        "children": [
          "Disney clan"
        ]
      },
      " (despite having never seen the movies), I knew I had to do something. Happily, I stumbled across ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.commonsensemedia.org/book-reviews/Princess-Smartypants.html",
            "external": true,
            "children": [
              "Princess Smartypants"
            ]
          }
        ]
      },
      " by ",
      {
        "type": "link",
        "href": "http://www.babette-cole.com/",
        "external": true,
        "children": [
          "Babette Cole"
        ]
      },
      ". I knew from the cover image that this would not be typical princess lit — but little did I know that one of the main charms of Princess Smartypants, in addition to her wild motorcycle riding, is her love of animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In a twist on the princess genre, Ms. Cole’s heroine seeks not to find the perfect prince, but rather to avoid marrying at all. When her mother the Queen insists that she should “stop messing about” with her animals and find herself a husband, she sends potential suitors on quests to do all the things that come naturally her to her — among the tasks is feeding her large toothy dragons."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I won’t give away the ending, except to say that parents sick of so-called ",
      {
        "type": "link",
        "href": "http://www.parentsconnect.com/connect/boards/hot_topics/discussion_debate/chat_it_up_thread.jhtml?tID=93648",
        "external": true,
        "children": [
          "princess syndrome"
        ]
      },
      ", especially feminists, will love it. Aunties and teachers who prefer being a “Ms.” to a “Mrs.” should definitely consider reading this book to the girls in their lives."
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
