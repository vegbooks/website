import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/10/best-friends.jpg",
    "alt": "Best Friends: The True Story of Owen and Mzee",
    "href": "/media/2010/10/best-friends.jpg",
    "width": 210,
    "height": 315,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Best Friends: The True Story of Owen and Mzee"
        ]
      },
      " allows emerging readers to discover the touching real-life tale of an unlikely companionship. (You may have seen the duo on ",
      {
        "type": "link",
        "href": "http://www.owenandmzee.com/omweb/flash/mediacenter/mediacenter.html",
        "external": true,
        "children": [
          "CNN or NBC"
        ]
      },
      ".)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While there is a sad side to this story — the young hippo Owen befriends the tortoise Mzee after he is permanently separated from his mother — author Roberta Edwards handles it gently, assuring children that Owen’s mother loved him and that he was rescued by people who cared about him."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I like this book a lot, but many of the words seem too difficult for a “level one” early reader. We read it together in my home, with the hope that my daughter will begin to pick it up on her own when she learns the sight words."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Parents should also be aware that the story is set in a zoo, which raises important questions about why we keep wild animals in captivity. I found myself wondering if Owen could have been released to the wild, and whether multi-species enclosures like those depicted in the book are common in Africa. If you’re looking for a book to give as a gift, or if you avoid zoo books altogether in your home, a nice alternative to this book is ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/tarra-and-bella-the-elephant-and-dog-who-became-best-friends/",
            "children": [
              "Tarra and Bella: The Elephant and Dog Who Became Best Friends"
            ]
          }
        ]
      },
      ", which is set in a sanctuary."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 6-8. For activities to accompany the book, visit ",
      {
        "type": "link",
        "href": "http://www.owenandmzee.com/omweb/PDF/OMEducationalActivities.pdf",
        "external": true,
        "children": [
          "OwenandMzee.com"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
