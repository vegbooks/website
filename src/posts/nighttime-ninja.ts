import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/03/ninja.jpg",
    "alt": "Nighttime Ninja",
    "href": "/media/2013/03/ninja.jpg",
    "width": 210,
    "height": 264,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Kids love the feeling of adventure and secrecy, and yet they also crave coziness and safety. ",
      {
        "type": "emphasis",
        "children": [
          "Nighttime Ninja"
        ]
      },
      " satisfies all these childlike yearnings and lends itself beautifully as a bedtime story. It opens with a shadowy ninja on some undisclosed mission. Dressed all in black, he climbs ropes, leaps rocks, and ultimately stalks through darkened hallways until he arrives at his destination where “he took out his tools and went to work.” When the lights suddenly come on, we finally see the ninja clearly — it’s a small boy, spoon in hand and toy sword slung over his shoulder, devouring his favorite pint of a frozen dessert in the kitchen."
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "“What are you doing?” thundered his mother.",
          {
            "type": "lineBreak"
          },
          " “Nothing.”",
          {
            "type": "lineBreak"
          },
          " “Hand it over, mister.”",
          {
            "type": "lineBreak"
          },
          " “But I’m not done with my mission yet.”",
          {
            "type": "lineBreak"
          },
          " “Well, how about a getting-back-into-bed mission?”"
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "On the last page, we only see the boy’s ninja drawings and pretend sword hanging near his bed and the words, “Sweet dreams, Nighttime Ninja,” under a rising moon."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The illustrations are a hodgepodge of cut paper, cloth, string, and colored pencil. If you are familiar with the prolific illustrations of ",
      {
        "type": "link",
        "href": "http://edyoungart.com/about.html",
        "external": true,
        "children": [
          "Ed Young"
        ]
      },
      ", you know you are in for a treat. Being an adult though, I wondered if the collage would appeal to its intended young audience. Curious, I lent it to my friend, who read it to his two young daughters. Both girls were completely taken with the pictures and the overall story in general. They continually asked him to reread it and they had prolonged discussions over the very stark and simple text. Interestingly, they kept asking what the dessert was. Was it ice cream? Frozen yogurt? This might prove to be a jumping off point for a conversation with the child in your life as well, particularly if he or she is vegan. Coconut-based ice cream, anyone?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book will appeal to a wide range of children. Don’t be surprised if this becomes a treasured favorite."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "1-6 years."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.hachettebookgroup.com/titles/barbara-dacosta/nighttime-ninja/9780316203845/",
            "external": true,
            "children": [
              "LB Kids"
            ]
          },
          " provided a review copy."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
