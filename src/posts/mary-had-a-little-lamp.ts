import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/mary-had-lamp-rgb.jpg",
    "alt": "Mary Had a Little Lamp",
    "href": "/media/2011/07/mary-had-lamp-rgb.jpg",
    "width": 210,
    "height": 261,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Cruising our local library shelves, my eyes lit upon this ingeniously light-hearted variation of the nursery rhyme ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Mary_Had_a_Little_Lamb",
        "external": true,
        "children": [
          "Mary had a Little Lamb"
        ]
      },
      ". Of course my daughter and I took a shine to author Jack Lechner’s descriptive rhymes right off the bat."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "“Mary had a little lamp-",
      {
        "type": "lineBreak"
      },
      " The bendy, gooseneck kind.",
      {
        "type": "lineBreak"
      },
      " And everywhere that Mary went",
      {
        "type": "lineBreak"
      },
      " She dragged the lamp behind.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "After describing the lamp, Lechner switches to Mary’s various daily activities with her lamp (including a trip to school, of course), and the off-the-wall compainionship that follows. I love how Mary remains steady in her attachment even though she has to put up with kids calling her crazy, her parents worrying, and seeing specialists about the lamp love. Mary’s obsession/love of her pet lamp does not waver til summer camp one year when she is ready to leave it behind. Lechner helps us laughingly address the strange and funny phases children can go through with their attachments and the subtle message for parents seems to be that kids will move on when they’re ready."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Illustrator Bob Staake spotlights the characters with bright colors and geometric shapes for eye-catching graphics."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I recommended anyone with a kid and a light source read this brilliant story with a shade of silliness."
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
