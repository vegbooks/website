import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Movie pic",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 321,
    "align": "right"
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "There once was a lady in waiting",
          {
            "type": "lineBreak"
          },
          " Let’s call her Jane.",
          {
            "type": "lineBreak"
          },
          " That girl wasn’t ordinary-",
          {
            "type": "lineBreak"
          },
          " No way for me a lady stuck in waiting",
          {
            "type": "lineBreak"
          },
          " I’d rather battle fire-breathing dragons",
          {
            "type": "lineBreak"
          },
          " I knew I could prove that a girl could be a Knight",
          {
            "type": "lineBreak"
          },
          " Though my friends all laughed at me",
          {
            "type": "lineBreak"
          },
          " but…",
          {
            "type": "lineBreak"
          },
          " I wouldn’t be discouraged and trained in secret",
          {
            "type": "lineBreak"
          },
          " Then a dragon pinched the Royal Prince",
          {
            "type": "lineBreak"
          },
          " and everyone was freaking",
          {
            "type": "lineBreak"
          },
          " So I went alone to the dragon’s home",
          {
            "type": "lineBreak"
          },
          " to slay the dragon",
          {
            "type": "lineBreak"
          },
          " Hey now, hey now now",
          {
            "type": "lineBreak"
          },
          " Jane and the Dragon are best friends now",
          {
            "type": "lineBreak"
          },
          " Dragon’s sweet, he let me save the young Prince",
          {
            "type": "lineBreak"
          },
          " Then the King made me a Knight apprentice",
          {
            "type": "lineBreak"
          },
          " Hey now hey now now…",
          {
            "type": "lineBreak"
          },
          " With Dragon’s help I’ll be a Knight someday"
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "These are the lyrics to the theme song for the TV series ",
      {
        "type": "link",
        "href": "http://www.qubo.com/shows/jane",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Jane and the Dragon"
            ]
          }
        ]
      },
      ". The show follows a girl in ninth-century England as she trains to become a knight, aided in her adventures by her best friend, a dragon. My four-year-old daughter loves this show, and I’ll have to admit that it’s growing on me. I avoided it at first because our family tries to avoid anything that even appears to be part of the princess complex. But the more I was exposed to this show, the more I grew to like it. It is an anti-princess show. The lead character Jane does not want to be a princess or a lady – she wants to be a knight. As a knight apprentice, Jane trains and performs various tasks and duties around the castle. Themes of integrity, loyalty, friendship ,and courage are woven through the stories. It’s a show I can get behind – a good show for boys and girls to enjoy and learn from."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In the show, Jane and the dragon are best friends and he aids her in many of her castle duties and knight training. The back story of how they became friends is not explored within the TV show. It was explained in the original ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Jane_and_the_Dragon",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Jane and the Dragon"
            ]
          }
        ]
      },
      " book by Martin Baynton which is now out-of-print. I would love to know more of the back-story, but even without it, there is a strong animal-friendly message to the show."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I highly recommend this TV show to preschool and early elementary children. The theme song alone provides both a feminist you-can-be-and-do-anything message and an animal-friendly message at the start of each show."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
