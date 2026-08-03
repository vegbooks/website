import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2019/07/a-beautiful-day-in-the-neighborhood.jpeg",
    "alt": "A Beautiful Day in the Neighborhood",
    "href": "/",
    "width": 231,
    "height": 300,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "The new collection of the poetry of Mister Rogers is a true gift for the children of today and the adults who grew up with Mister Rogers throughout their childhoods. ",
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781683691136",
        "external": true,
        "children": [
          {
            "type": "strong",
            "children": [
              "A BEAUTIFUL DAY IN THE NEIGHBORHOOD"
            ]
          }
        ]
      },
      " includes 75 songs from both ",
      {
        "type": "emphasis",
        "children": [
          "Mister Rogers’ Neighborhood"
        ]
      },
      " and the earlier ",
      {
        "type": "emphasis",
        "children": [
          "The Children’s Corner,"
        ]
      },
      " and it’s sure to evoke memories for some and do the work of bolstering children’s self-image for a new generation with the sometimes goofy and sometimes painfully honest messages."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The collection is filled with familiar verses like “Won’t You Be My Neighbor?,” “It’s You I Like,” and “You Are Special,” to songs that address very specific childhood concerns like “When a Baby Comes,” “It Hurts To Be Lonely,” and the ever-comforting “You Can Never Go Down The Drain.” The lyrics are pro-child, pro-thoughtful responses, and they always encourage children to persevere even while they accept and even celebrate their vulnerabilities. With children’s shows that feel fast and slap-dash, this book reminds us that growing up can feel fast sometimes, and it’s up to grown-ups to help children learn to take a step back and enjoy the moment. Mindfulness is not a new idea!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The colorful and simple illustrations by Luke Flowers include a mix of characters from Mister Rogers’ Neighborhood and depictions of the themes in the song featured. While most of the people and animals shows are happy and smiling, some are nervous and shy (Hi, Daniel Tiger!) and other times children are shown as afraid, anxious, or embarrassed. The illustrations are a wonderful accompaniment to the text."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Highly recommended for every household."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
