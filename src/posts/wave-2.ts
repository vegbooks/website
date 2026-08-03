import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/09/9780811859240.jpg",
    "alt": "Wave",
    "href": "/media/2010/09/9780811859240.jpg",
    "width": 210,
    "height": 123,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "A little girl’s visit to the beach is masterfully told without a word (aside from the title). Using only charcoal lines and blue, white, and grey paint, Suzy Lee creates an expressive dialogue between the girl and the ocean. Conspiring shorebirds humorously echo the girl’s actions and add interest and playfulness to the wordless dialogue. The birds and girl are drawn in a minimalistic but deliberate black line and shading to convey dynamic expression and movement. In contrast, the ocean waves, in a cerulean blue (the only color in the book), appear carelessly painted and capture the wildness of nature. The elongated horizontal shape of the book cleverly allows for the panoramic view of the ocean and highlights the beach landscape. One can almost hear and smell the ocean in this book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Although my just-learning-to-read daughter appeared slightly baffled at a book without words, she soon caught the drift and enjoyed reading the pictures. I loved the Zen simplicity of this picture book which truly speaks a thousand words without a single letter."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Age 3+."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "strong",
        "children": [
          "Note: We don’t usually double up on reviews, but we thought you’d appreciate hearing an artist’s take on ",
          {
            "type": "emphasis",
            "children": [
              "Wave."
            ]
          },
          " To read Jessica’s review of the book from last year, click ",
          {
            "type": "link",
            "href": "/reviews/wave/",
            "children": [
              "here"
            ]
          },
          "."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
