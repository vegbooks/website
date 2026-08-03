import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2021/03/we-laugh-alike-juntos-not-reimos.jpg",
    "alt": "We Laugh Alike, Juntos Nos Reímos",
    "href": "/media/2021/03/we-laugh-alike-juntos-not-reimos.jpg",
    "width": 300,
    "height": 300,
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
            "href": "https://www.indiebound.org/book/9781623540968",
            "external": true,
            "children": [
              "WE LAUGH ALIKE JUNTOS NOS REÍMOS"
            ]
          }
        ]
      },
      " by Carmen T. Bernier-Grand is a joyful, bilingual romp in a playground with two trios of kids who speak different languages: English and Spanish. The cheerful picture book reminds us that children (and their caregivers!) are more similar to their peers than not. A good lesson for us all."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Playground activities like jumping rope and playing on a merry-go-round help bring the two groups together to play and learn each others’ languages. The pages are set-up to be read as responses and reflections in English and Spanish. In most cases, the lines are repeated in translation so families and classes can learn some new words, as the children in the story do. Once the playtime ice has broken, the language barrier dissolves as well."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Every color possible seems to be used within the pages of this book. The vibrant illustrations by Alyssa Bermudez depict a range of character backgrounds and personalities, and the faces of the children portray clear and varied emotions throughout. Curiosity and wonder, playfulness, and an openness to differences are conveyed in the bright, expectant characters."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781623540968",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "We Laugh Alike Juntos Nos Reímos"
            ]
          }
        ]
      },
      " will both entertain, inspire, and instruct its early elementary readers."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
