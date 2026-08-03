import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/12/toddler-baby-reading.jpg",
    "alt": "We Are Extremely Very Good Recyclers",
    "href": "/media/2010/12/toddler-baby-reading.jpg",
    "width": 210,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Charlie and Lola are siblings who have many adventures in a variety of storybooks and star in their own ",
      {
        "type": "link",
        "href": "http://disney.go.com/disneyjunior/charlie-and-lola",
        "external": true,
        "children": [
          "television program"
        ]
      },
      " (also available as popular DVDs). In the story ",
      {
        "type": "link",
        "href": "http://www.powells.com/biblio/1-9780803733350-4",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "We Are Extremely Very Good Recyclers"
            ]
          }
        ]
      },
      ", older brother Charlie helps Lola (and readers) learn about the many benefits of recycling. After learning some basic facts about the garbage/recycling relationship, Lola enters a contest to win a live tree. To win the tree, she must collect one hundred of each type of common recyclable, such as plastic containers, cans and paper products. Eagerly, Lola sets up a recycling cache at home and involves her schoolmates in helping her meet the goal (“I want to do recycling, pass it on…”). A chart of a tree with leaves that are added for each recyclable object collected helps Lola and her friends keep track of how close they are to their goal (the book includes a poster of the chart so that children can emulate Lola). The group falls short but at the last moment are propelled to victory by an acquaintance who has a very hard time throwing anything out."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is extremely very cute and has broad appeal. Author and illustrator Lauren Child (who penned ",
      {
        "type": "link",
        "href": "/reviews/that-pesky-rat/",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "That Pesky Rat"
            ]
          }
        ]
      },
      ") has a distinctive style that fuses bright and cheerful graphics with a simple but compelling storyline. Adults especially will appreciate Charlie’s patience with his sister as well as the use of his character to present essential facts about recycling. Lola’s trademark good intentions and enthusiasm dovetail really quite nicely with the book’s message of feeling activated when presented with information. Ideally, there are many children who are Charlie and Lola enthusiasts and will be inspired to learn more about helping our planet, but this is very nice book to have on one’s shelf even if unfamiliar with this pair of engaging siblings. My only small dissatisfaction is that I’d like to have seen the book with an expanded scope of environmental awareness."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A companion portion of the Charlie and Lola website can be found ",
      {
        "type": "link",
        "href": "http://www.charlieandlola.com/planet/index.html",
        "external": true,
        "children": [
          "here"
        ]
      },
      ", with games and more information."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
