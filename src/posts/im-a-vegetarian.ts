import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/04/i-am-a-vegetarian.jpg",
    "alt": "I’m a Vegetarian",
    "href": "/media/2010/04/i-am-a-vegetarian.jpg",
    "width": 210,
    "height": 272,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Not many books about vegetarianism are aimed specifically at the younger crowd. But ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.goodreads.com/book/show/711808.I_m_a_Vegetarian_Amazing_facts_and_ideas_for_healthy_vegetarians",
            "external": true,
            "children": [
              "I’m a Vegetarian: Amazing Facts and Ideas for Healthy Vegetarians"
            ]
          }
        ]
      },
      " by Ellen Schwartz does just that, being a book about vegetarianism specifically written for those ages 9-12."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "If you have a child in this age group, it may be a good idea to pick up a copy. Not only can it come in handy for your child, but it may be a good book to keep on the shelf for their inquisitive friends to borrow."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book explains the types of vegetarians, discusses why people choose vegetarianism, offers advice on how to deal with parents who oppose vegetarianism, and provides information on healthy vegetarian eating. These pre-teens will even learn about genetically modified foods, ocean farming, and the history of lentils and ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Quinoa",
        "external": true,
        "children": [
          "quinoa"
        ]
      },
      "!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Filled with information that supports their decision to be vegetarian, as well as tips on the ins and outs of vegetarian nutrition, this book is a helpful tool for those who are being raised vegetarian, who have chosen it for themselves, or who just want to learn more about vegetarianism."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book also includes some vegetarian recipes, with tips on how to veganize them."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9 to 12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
