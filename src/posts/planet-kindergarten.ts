import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2015/01/planet-kindergarten-fc-lo-res.jpg",
    "alt": "Planet Kindergarten_FC_LoRes",
    "width": 210,
    "height": 204,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I put ",
      {
        "type": "emphasis",
        "children": [
          "Planet Kindergarten"
        ]
      },
      " on our library reservation list as soon as I knew it had been released because we love Sue Ganz-Schmitt’s book, ",
      {
        "type": "emphasis",
        "children": [
          "The Princess and the Peanut: A Royally Allergic Fairytale"
        ]
      },
      " (",
      {
        "type": "link",
        "href": "http://www.sunbutter.com/blog/telling-kids-about-food-allergies-crack-open-a-great-kid%E2%80%99s-book/",
        "external": true,
        "children": [
          "I reviewed it here"
        ]
      },
      "). ",
      {
        "type": "emphasis",
        "children": [
          "Planet Kindergarten"
        ]
      },
      " did not disappoint. My daughter is 6 and my son is 4 – both understood and loved the parallels between a boy going to his first day of kindergarten and taking a trip into outer space."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kids will also love the bright illustrations – Shane Prigmore has contribution credits that include “",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/The_Iron_Giant",
        "external": true,
        "children": [
          "The Iron Giant"
        ]
      },
      "” and there’s a retro vibe to the design for this book that I really enjoyed. I also found myself chuckling at the clever turns of phrase:"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "I try to get used to the new atmosphere, but it’s not like home. For one thing, gravity works differently here. We have to try hard to stay in our seats. And our hands go up a lot."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The only mention of food is at lunch, where our protagonist finds he likes “space food” (the drawings are of an apple, grapes, green gel, and fries). I realize we’re well into the school year already but it would be a great gift for a child entering school next year or one that is starting at a new school in a later grade. Looking at school as an adventure is what I hope my kids will do, even though it can seem a little alien at times. Highly recommended for ages 3 and up."
    ]
  },
  {
    "type": "image",
    "src": "/media/2015/01/nasa.jpg",
    "alt": "NASA",
    "width": 436,
    "height": 212,
    "align": "center"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Also, check out ",
          {
            "type": "link",
            "href": "http://www.chroniclebooks.com/titles/planet-kindergarten.html",
            "external": true,
            "children": [
              "the official publisher page"
            ]
          },
          " for downloads you can print out like a “space food” wrap for a snack bar or “rocket fuel” for a juice box. My favorite is the card that reads “Message from Home Base” so families can continue the space journey theme into their little one’s first days at school. You can also preview some of the book’s interior."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
