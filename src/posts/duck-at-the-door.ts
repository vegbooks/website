import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/02/duck-at-the-door.jpg",
    "alt": "Duck at the Door",
    "href": "/media/2010/02/duck-at-the-door.jpg",
    "width": 254,
    "height": 242,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.jackieurbanovic.com/",
        "external": true,
        "children": [
          "Jackie Urbanovic"
        ]
      },
      "‘s lighthearted ",
      {
        "type": "emphasis",
        "children": [
          "Duck at the Door"
        ]
      },
      " is sure to tickle readers who love animals. When there’s a knock at the door late at night, all of the furry and feathered inhabitants of the house wake their person Irene to see what to do. She graciously takes in a duck who’s separated from his flock."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "After a while, the duck’s odd habits begin to wear on the domesticated animals, but still they’re sad to see him leave when his flock returns from the south. Months later, however, there’s a knock on the door … and this time the entire flock has decided to spend the winter with Irene and her clan."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book introduces readers to themes of domestication, wildlife rehabilitation, and migration. After you’ve read this book with your little one, learn about real-life rehab by visiting the ",
      {
        "type": "link",
        "href": "http://www.fundforanimals.org/cape/",
        "external": true,
        "children": [
          "Fund for Animal’s website"
        ]
      },
      "."
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
