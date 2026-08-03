import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/05/9781419701702-huff-puff-cv.jpg",
    "alt": "Huff & Puff",
    "href": "/media/2012/05/9781419701702-huff-puff-cv.jpg",
    "width": 210,
    "height": 212,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://kissthebook.blogspot.com/2012/03/huff-and-puff-by-claudia-rueda.html",
            "external": true,
            "children": [
              "Huff & Puff"
            ]
          }
        ]
      },
      " is a twist on a classic fairy tale. We all know the story about the three little pigs and the wolf who huffed and puffed. This story features the same cast of characters, but the main character, the wolf, is played by ",
      {
        "type": "emphasis",
        "children": [
          "the reader"
        ]
      },
      "(or the reader’s child",
      {
        "type": "emphasis",
        "children": [
          ")"
        ]
      },
      "! After introducing each pig, there is a page that says “Huff & Puff” with a circle cutout meant for the reader to blow in. The reader successfully blows down the first pig’s house and the second pig’s house. But when it comes to the third pig’s house, the reader huffs & puffs twice, and SURPRISE, instead of blowing down his house, he/she blows out the candles on a cake that the three little pigs made. It’s a great, happy ending."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The illustrations are in sketch form in a peachy-hue which gives the book a simple, uncluttered feel. This is a really ",
      {
        "type": "link",
        "href": "http://www.publishersweekly.com/978-1-4197-0170-2",
        "external": true,
        "children": [
          "cute, interactive story"
        ]
      },
      " that gets kids involved as a character in the story. While my 20-month-old enjoyed blowing through the holes, she was too young to really understand the story, so this would be best suited for slightly older toddlers and young elementary school kids."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2 to 6 years."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
