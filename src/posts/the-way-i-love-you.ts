import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/05/the-way-i-love-you-cover.jpg",
    "alt": "The Way I Love You",
    "href": "/media/2011/05/the-way-i-love-you-cover.jpg",
    "width": 210,
    "height": 200,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Artist Ann James charmingly captures the sweet interactions between a pig-tailed toddler and her canine best friend in David Bedford’s ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/Way-I-Love-You/dp/0689876254",
            "children": [
              "The Way I Love You"
            ]
          }
        ]
      },
      ". The honesty of the young protagonist warms a reader’s heart as she declares her genuine affection for her friend in this flowing valentine:"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "“I love…the way you tell me things, the way you jump so high, the way you smile your smile. That’s the way I love you."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I love…the way you understand, the way you show me how, the way we are right now. That’s the way I love you.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "James depicts the closely-bonded duo through charcoal and pastel watercolors as they bask in the joys of everyday life: tea parties, sharing treats, coloring, reading, and playing games. This will resonate and reflect the experiences of many families who have a canine companion."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A great selection for young animal lovers and beginning readers."
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
