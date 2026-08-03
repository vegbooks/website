import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/06/9780316129466.jpg",
    "alt": "Red Knit Cap Girl",
    "href": "/media/2012/06/9780316129466.jpg",
    "width": 210,
    "height": 212,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I knew I wanted to read ",
      {
        "type": "emphasis",
        "children": [
          "Red Knit Cap Girl"
        ]
      },
      " by Naoko Stoop book before I knew I would get to receive a review copy of it for Vegbooks. Amy Kraft of Media Macaroni caught my attention when she ",
      {
        "type": "link",
        "href": "http://mediamacaroni.com/celebrating-the-art-of-illustration-with-lb-kids/",
        "external": true,
        "children": [
          "mentioned"
        ]
      },
      " the story of Stoop’s discovery and her unique approach to collage paintings – she selects just the right cut of wood for her canvas so that the particular unique wood grain complements the finished illustration. The book flap shares that the author came up with the idea for the book during Earth Hour in New York City, “Turning off the lights allowed me to sit quietly and appreciate the beautiful natural world and sky around me, beyond the light and noise of the city.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "True to her inspiration, this gorgeous and charming book follows Red Knit Cap Girl and her forest friends as they try to get the Moon to come out for them. The tone of the book reminds me of another favorite in our house, ",
      {
        "type": "emphasis",
        "children": [
          "Happy Birthday, Moon"
        ]
      },
      ", as Red Knit Cap Girl and her friends blow out their paper lanterns so that “all the forest grows dark and quiet.” At last, the Moon emerges:"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "The Moon smiles and says,",
          {
            "type": "lineBreak"
          },
          " “You have made it dark enough to",
          {
            "type": "lineBreak"
          },
          " see me and quiet enough to hear me,",
          {
            "type": "lineBreak"
          },
          " Red Knit Cap Girl.”"
        ]
      },
      {
        "type": "paragraph",
        "children": [
          "Red Knit Cap Girl whispers to the Moon.",
          {
            "type": "lineBreak"
          },
          " The Moon smiles quietly.",
          {
            "type": "lineBreak"
          },
          " Together, they listen to the sounds of the forest."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter was entranced by the story when I read it aloud and told me the Moon was her favorite. This book would make a fantastic baby gift as it is something that could be displayed in a nursery or play room and later read and enjoyed at bedtime. It just feels quiet and beautiful."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
