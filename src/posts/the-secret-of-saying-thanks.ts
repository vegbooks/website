import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/04/the-secret-of-saying-thanks.jpg",
    "alt": "The Secret of Saying Thanks",
    "href": "/media/2011/04/the-secret-of-saying-thanks.jpg",
    "width": 210,
    "height": 258,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "You won’t find flashy graphics, cartoon characters or even comedy in this work by award-winning children’s author ",
      {
        "type": "link",
        "href": "http://www.douglaswood.com/",
        "external": true,
        "children": [
          "Douglas Wood"
        ]
      },
      ". Instead, you’ll stumble upon a refuge of peaceful moments that only nature, animals and people can provide."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The “secret” hinted at in the book’s title is the simple observation, satisfaction or joy glimmered from a sunrise or in flowers that color your path and remind you how easy it is to smile. A girl and her golden retriever-looking companion encounter page after page of scenes (swinging underneath a starlit sky), emotions (grateful for a tree’s shade) and interactions (sharing dinner with loved ones) to be thankful for. As Wood summarizes,”We don’t give thanks because we’re happy. We are happy because we give thanks.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book and its soft, calming artwork do a beautiful job promoting those sentiments. It does make a brief mention of prayer, but that remains generic enough for any religious or spiritual practice, denominational or otherwise. Veg families will greatly appreciate the equality and respect shown to animals within the text."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 to 8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
