import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2009/11/allinaday11.jpg",
    "alt": "AllinaDay",
    "width": 174,
    "height": 170,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I have admired the beautiful work of artist ",
      {
        "type": "link",
        "href": "http://www.nikkimcclure.com/",
        "external": true,
        "children": [
          "Nikki McClure"
        ]
      },
      " for many years, so I was excited to get my hands on a book she had illustrated with her gorgeous, original style of paper cutting. When we got it, I found that not only were the illustrations delightful, but the content was welcome as well. In ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.powells.com/biblio/1-9780810983212-0",
            "external": true,
            "children": [
              "All In A Day"
            ]
          }
        ]
      },
      ", McClure has teamed up with the prolific, award-winning author ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Cynthia_Rylant",
        "external": true,
        "children": [
          "Cynthia Rylant"
        ]
      },
      ", the author of one of our family’s favorite series, ",
      {
        "type": "link",
        "href": "http://www.powells.com/s?header=Search+Form&kw=mr+putter+and+tabby",
        "external": true,
        "children": [
          "Mr. Putter and Tabby"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "All In A Day"
        ]
      },
      "‘s simple but lovely story traces the rhymths of an unrushed country day– celebration, surprise, chores, disappointment, delight, adventure and life with family and community."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "McClure’s illustrations convey the loving bond between a boy and a white chicken by showing them side by side — experiencing life and enjoying their time together. They are depicted in a garden, in a rainstorm, sharing grain and even lying on their backs with the papa, looking up at the sky. (I especially love this page because it seems to convey an acceptance of the chicken as a larger part of the family as well as an openness about the family’s adults.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Eggs are shown on many of the pages with the chicken, though there is never any intention around the egg. Even when one of egg cracks and the boy appears upset (disappointment and beginning anew!), my take from the context of the illustrations is that he is more upset for the chicken than for any other reason."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A hallmark of McClure’s style, there are marvelous botanical and domestic details sprinkled throughout the illustrations such as a curious squirrel, leaves, beautiful trees– she has a way with the birch tree– shovels, feathers, wild birds, hats and laundry accessories. This book was an especially serendipitous find for my son, who loves gardening, mushrooms and fluffy dandelions, which are subject matters rarely combined in one volume of children’s literature."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This sweet, peaceful story is a wonderful, gentle reminder to enjoy our days and all that they hold while (literally!) illustrating inherent respect for non-humans and appreciation for their companionship. I enthusiastically recommend this book as a bedtime read, but its lovely at any time for the preschool and kindergarten set. Older children and adults may be interested in having a look at unusual artistry of the papercut illustrations and ",
      {
        "type": "link",
        "href": "http://portland.readinglocal.com/2009/10/20/interview-childrens-authorillustrator-nikki-mcclure/",
        "external": true,
        "children": [
          "learning the story behind this art form and artist."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A little Googling has revealed the McClure has written and illustrated a book called ",
      {
        "type": "emphasis",
        "children": [
          "The Great Chicken Escape"
        ]
      },
      ". I look forward to reading it and reviewing it!"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
