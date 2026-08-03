import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "Move over, Frank Sinatra and Vanessa Williams! This ",
      {
        "type": "emphasis",
        "children": [
          "Dance With Me"
        ]
      },
      ", written by ",
      {
        "type": "link",
        "href": "http://www.ronhirschi.com/index.html",
        "external": true,
        "children": [
          "Ron Hirschi"
        ]
      },
      " and featuring beautiful photography by Thomas D. Mangelsen, is a celebration of the movement of wild animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "From prairie chickens to orcas, animals dance for a variety of reasons: for courtship, in search of food, or simply for the joy of moving through the air or sea. This book captures the beauty of animal movement in words and photography."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8. Best read with a CD queued up for a little human dancing after."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
