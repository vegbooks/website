import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/11/no-plain-hair.jpg",
    "alt": "No Plain Hair!",
    "href": "/media/2011/11/no-plain-hair.jpg",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "The girl in this book has long curly red hair. Each day of the week she wears it differently – she’ll dress it up with barrettes, give it bangs like spaghetti, and adorn it with headbands, gold dust, and confetti. She hates to be restricted and loves to experiment. She matches her hair style to her mood each day."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I’m torn about this book. It isn’t really about anything. A girl’s hair? Seems too frivolous a message to teach my daughter – that a girl’s hair is so important, maybe the most important thing about her. But the girl is active, and each day her hair matches her exciting activities."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "One of the activities is something that really excites me – whale watching. She takes a boat out into the ocean (with a ponytail, of course) to see whales. So many children’s books feature going to the zoo. Children must think that’s where animals live. This book features going to see animals in the wild, and my favorite animal at that."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In the end, we got rid of the book as it was too frivolous. But I still think about the whale watching and wish that had been a part of a better story."
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
