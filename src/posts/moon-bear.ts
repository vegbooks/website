import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/07/9780805089776.jpg",
    "alt": "9780805089776",
    "href": "/media/2013/07/9780805089776.jpg",
    "width": 209,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://us.macmillan.com/moonbear/BrendaGuiberson",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Moon Bear"
            ]
          }
        ]
      },
      " is a great pick for three reasons. First, this picture book will grow with kids. The text is simple enough to engage young children, but the endnotes will interest older ones who are reading themselves. Second, Ed Young’s illustrations are certain to mesmerize adults and children alike. His use of collage provides depth, while the overall compositions are lyrical and stunningly simple."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It’s the third reason — the subject matter of the book — that will appeal to Vegbooks readers most. After you and your child have spent five minutes with this book, you’ll know all the basics about ",
      {
        "type": "link",
        "href": "https://en.wikipedia.org/wiki/Asian_black_bear",
        "external": true,
        "children": [
          "moon bears"
        ]
      },
      " in the wild: what they eat, where they sleep, and what they do. Spend five minutes more with the resources listed in the endnotes, and you’ll know all about their exploitation on ",
      {
        "type": "link",
        "href": "https://en.wikipedia.org/wiki/Bile_bear",
        "external": true,
        "children": [
          "bear bile farms"
        ]
      },
      " too."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Seven years into raising a vegan kid, I think the greatest challenge I’ve faced as a mom is ensuring that I’m honest with my daughter about animals without overwhelming her with the gruesome facts about how people exploit animals at every opportunity. Books like this one allow parents to make decisions about what their kids can handle. You’ll want to skip the endnotes with young children (although I recommend ",
      {
        "type": "emphasis",
        "children": [
          "you"
        ]
      },
      " read them!), and the smaller font and more advanced reading level will discourage precocious readers. But when your kiddo is ready, as mine is now, reading the endnotes together can provoke an interesting dialogue. There is so much to discuss — animals in captivity, animals in medicine, animals as healers — that I expect this text would also be useful in humane education."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I recommend this book for children ages 3 to 7."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Let’s continue the conversation in the comments! Please tell me about how you’ve introduced vegetarianism or veganism and related issues to your child, and how the dialogue has changed as your child has grown. Have any books been particularly helpful?"
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
