import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "The Fox and the Hound (1981)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "“",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/movie-reviews/fox-and-hound",
        "external": true,
        "children": [
          "The Fox and the Hound"
        ]
      },
      "” is classic Disney, in the best sense. In this 1980s animated film, the makers of “",
      {
        "type": "link",
        "href": "http://www.dailymail.co.uk/tvshowbiz/article-371387/Macca-Bambi-turned-vegetarian.html",
        "external": true,
        "children": [
          "Bambi"
        ]
      },
      "” are at it again, taking on hunting from the animals’ perspective."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While some scenes are a little scary — the hunting scenes frightened my kiddo, as did a scene with an angry bear — the storyline is solid, allowing the watcher to feel empathy for the animals involved in the hunting (hound dog Copper) and those who are hunted (rehabilitated fox Tod). What impressed my daughter most was the loyalty that Copper felt for his person. She was surprised a dog who had befriended a fox would participate in hunting at all."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated G. Ages 5-10."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
