import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/cookies.jpg",
    "alt": "Cookies: Bite-Size Life Lessons",
    "href": "/media/2010/08/cookies.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I think I gained a pound or two just reading this delectable little morsel. Using oh-so-tempting cookies to teach children the significance of new vocabulary words, Amy Krouse Rosenthal’s text can be challenging depending on the age of the child (compassion, envy, open-minded). Other concepts are more commonplace: honest, polite, fair, patient. Accompanied by watercolor images you’d find on a Victorian era postcard, the book thoughtfully portrays scenes in which children can imagine themselves and helps them to identify and explain their feelings."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "What I like best about ",
      {
        "type": "emphasis",
        "children": [
          "Cookies"
        ]
      },
      " is that the paintings feature children and their animal friends, interacting and demonstrating the book’s life lessons. For example, when Trustworthy is defined as “",
      {
        "type": "emphasis",
        "children": [
          "If you ask me to hold your cookie until you come back, when you come back, I will still be holding your cookie,"
        ]
      },
      "”we see a horse leave his cookie in the care of a little girl as he puts on his overcoat and departs from the room. We later see him peeking through the doorway to check on the status of his cookie."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Sweetly told and depicted, ",
      {
        "type": "emphasis",
        "children": [
          "Cookies"
        ]
      },
      " is a yummy find, that’ll leave you wanting, well, cookies! Here are some of my favorite ",
      {
        "type": "link",
        "href": "http://www.theppk.com/vegan-cookies.html",
        "external": true,
        "children": [
          "vegan cookie recipes"
        ]
      },
      "."
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
