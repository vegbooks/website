import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/ladybug-girl.jpg",
    "alt": "Ladybug Girl at the Beach",
    "href": "/media/2010/08/ladybug-girl.jpg",
    "width": 210,
    "height": 181,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Having loved the original ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/ladybug-girl/",
            "children": [
              "Ladybug Girl"
            ]
          },
          " as much as I did, I was a little reluctant to read"
        ]
      },
      "Jacky Davis and David Soman’s latest book in the growing series. After all, series books often have trouble rekindling the magic of the very first book. ",
      {
        "type": "emphasis",
        "children": [
          "Labybug Girl at the Beach"
        ]
      },
      ", however, captured everything I loved about the original book — the portrayal of an independent child, her devotion to her canine companion Bingo, and the fact that acts of compassion transform her into a superhero — and let me spend a little more time with the lovable heroine Lulu."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I brought this book to the beach on my family’s vacationette this summer, and I was also impressed by how seriously this book takes children’s fears, and how it can inspire them to overcome them. Just like Lulu, my kiddo was afraid of the loud, crashing waves at an ocean beach. But together we talked about how Ladybug Girl was inspired to plunge into the waves to “rescue” her bucket — and how brave that was — and kiddo eventually was able to overcome her own qualms."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This lovely book is a delightful read in the summer or anytime."
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
