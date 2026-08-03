import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/daynocrayons.jpg",
    "alt": "A Day with No Crayons",
    "href": "/media/2011/07/daynocrayons.jpg",
    "width": 210,
    "height": 177,
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
            "href": "http://www.elizabethrusch.com/MyBooks/AllBooks/ADayWithNoCrayons.aspx",
            "external": true,
            "children": [
              "A Day with No Crayons"
            ]
          }
        ]
      },
      " is likely to inspire you to view the world differently — and I love any book that can do that. This charming picture book by Elizabeth Rusch and ",
      {
        "type": "link",
        "href": "http://www.cameronstoryboards.com/about/",
        "external": true,
        "children": [
          "Chad Cameron"
        ]
      },
      " follows budding artist Liza through a day in which she loses access to crayons (for drawing on the wall, tsk tsk) and learns to see the makings of art all around her."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The transformation is fun to watch. When Liza loses her crayons, she asks, “A whole day with no crayons?” and is portrayed entirely in tones of gray. But soon she notices colors in her mood (midnight blue), a flower (cornflower blue), a dandelion (laser lemon) — and everywhere! (Perceptive readers will observe that her toothpaste in the sink resembles a Van Gogh painting, and her stomping along a basketball court is reminiscent of a Pollock.) By the end of the day, she says that she can go another day without crayons, and it’s obvious why — she’s created a stunning self-portrait out of objects found in her room, including her bed, teddy bear, and soccer ball."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Liza is accompanied throughout the story by a golden dog, and many of her artistic creations focus on nature. All the more reasons to love this book!"
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
