import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2019/10/future-engineer.jpeg",
    "alt": "Future Engineer",
    "href": "/",
    "width": 307,
    "height": 331,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "strong",
        "children": [
          {
            "type": "link",
            "href": "https://www.indiebound.org/book/9781338312232",
            "external": true,
            "children": [
              "FUTURE ENGINEER"
            ]
          }
        ]
      },
      "by Lori Alexander and illustrated by Allison Black is the second in the ",
      {
        "type": "emphasis",
        "children": [
          "Future Baby"
        ]
      },
      "Series. Like ",
      {
        "type": "link",
        "href": "/reviews/future-astronaut/",
        "external": true,
        "children": [
          "Future Astronaut"
        ]
      },
      ", the board book juxtaposes grown-up engineers with babies playing to compare their similar traits. “Engineers as questions” is met with an adorable image of a baby asking “Why? Why? Why?” And then, “Engineers draw their ideas on paper and computers” is depicted opposite “Baby draws on paper. And other places, too.” The baby, by the way, is scribbling on the wall with a very happy smile on their face."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Allison Black’s deceptively simple illustrations are expressive, engaging, and utterly adorable. The multi-ethnic characters are shown in full baby play mode, and even the shock of blocks falling is shown in bright colors and with surprise rather than sadness. In addition, the adult engineer, whose project has also fallen down, mirrors the baby’s expression wonderfully."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The last two pages of the book have facts about what different kinds of engineers do. The examples of what engineers make are familiar and relatable to a young child: rockets, televisions, toothpaste, and bridges. Overall, a colorful and fun introduction to engineering and how children really are future engineers."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
