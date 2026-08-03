import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "City Dog, Country Frog",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In ",
      {
        "type": "link",
        "href": "http://www.powells.com/biblio/1-9781423103004-0",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "City Dog, Country Frog"
            ]
          }
        ]
      },
      ", Caldecott Honoree ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Mo_Willems",
        "external": true,
        "children": [
          "Mo Willems"
        ]
      },
      " has penned a tale about friendship and change. When City Dog arrives in the country for a springtime visit, he runs as fast and as far as he can (without a leash!). He meets Country Frog sitting on a rock, waiting for a friend. As it turns out, City Dog ends up being that friend, and as the seasons change, so do the nature of their games. When winter arrives, Country Frog is gone."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Much of the beauty of this book lies in its evocative illustrations by ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Jon_J_Muth",
        "external": true,
        "children": [
          "Jon J. Muth"
        ]
      },
      ", himself a Caldecott Honoree. The sense of joy and contentment felt by the dog and frog during their time together in spring, summer and fall are captured perfectly in Muth’s watercolor illustrations. The most compelling illustrations are those capturing the poignancy of City Dog’s sadness in winter, as he sits alone in the snow at the friends’ meeting place."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "When spring comes around again, a surprise is in store for City Dog. A new friend enters his world, reminding us all of the cycles that spin around relationships and the rhythms of nature."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Because it so vividly illustrates the theme of loss, this story may be a bit intense for very young or very sensitive children. I recommend this book for ages 5 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
