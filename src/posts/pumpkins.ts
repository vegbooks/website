import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "When you think of pumpkins, you might not think of them as a way to stop ",
      {
        "type": "link",
        "href": "http://www.cwac.net/landuse/index.html",
        "external": true,
        "children": [
          "urban sprawl"
        ]
      },
      ". But in this story by Mary Lyn Ray, a man who is about to lose his beautiful mountainous view of nature, due to a “for sale” sign going up on the land across from his, uses pumpkins to create change."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Giving up his belongings to purchase pumpkin seeds, the man grows tons of pumpkins, sells them and then buys the land across from his, in order to keep it from being developed. This story is a good pick for kids because it demonstrates a love of nature, as well as the power one person can have in reaching goals and making things happen – or in this case, ",
      {
        "type": "emphasis",
        "children": [
          "not"
        ]
      },
      "happen."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While the story gets a little off-track when the man is sending the tons of pumpkins around the world in order to find buyers for them all, the message and outcome are solid. It also provides an interesting take on minimalist living, for the man was very selective in what he brought back into his home, and chose not to repeat the ",
      {
        "type": "link",
        "href": "http://www.pumpkingrowingtips.com/organic.htm",
        "external": true,
        "children": [
          "pumpkin-growing"
        ]
      },
      " process simply in order to become rich."
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
