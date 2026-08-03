import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "Another great find from the author of ",
      {
        "type": "link",
        "href": "/reviews/turkey-claus/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Turkey Claus"
            ]
          }
        ]
      },
      ". Turkey doesn’t want to be eaten for Thanksgiving and disguises himself as various other farm animals in an effort to hide from the farmer. It’s basically the same premise as ",
      {
        "type": "link",
        "href": "/reviews/run-turkey-run-2/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Run, Turkey, Run"
            ]
          }
        ]
      },
      ", but our library has room for two turkey-friendly Thanksgiving books."
    ]
  },
  {
    "type": "image",
    "src": "/media/2015/11/turkey-trouble.jpg",
    "alt": "turkey trouble",
    "width": 480,
    "height": 509,
    "align": "center"
  },
  {
    "type": "paragraph",
    "children": [
      "My two-year-old is loving this book. On every page he throws his hands up in the air and asks, “Where Turkey go?” and then points out Turkey’s latest disguise. The repetition is fun for a read aloud with young kids and the pictures are fun and engaging. I’m very happy to have added it to our library of Thanksgiving books this year."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2+."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
