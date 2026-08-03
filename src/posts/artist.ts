import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/artist-to-artist1.jpg",
    "alt": "Artist to Artist",
    "href": "/media/2010/06/artist-to-artist1.jpg",
    "width": 212,
    "height": 257,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Artist to Artist"
        ]
      },
      " is an amazing collection of 23 successful children’s book illustrators/authors giving encouragement and advice to children. Authors like Eric Carle, Tomi dePaola, Leo Lionni, Maurice Sendak, and Chris Van Allsburg share words of wisdom in a letter format. Also included are photos of the professional artists as children and an artistic self-portrait as well as a fold-out page containing multiple colorful examples of each artist’s work. A wonderfully intimate method of teaching children about art, artists, authors, book illustration, and the variety in creative processes. The fold-out pages make it more interactive for the child and the portraits help them identify each artist/author."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Although my three year old is a bit young for this book, she enjoyed folding out the pages and looking at the colorful illustrations. This is one I would love to have in my own personal library as a wonderful reference. I am anxious to see if this becomes a series since there are so many wonderful picture book artists out there. The proceeds of the book go to the ",
      {
        "type": "link",
        "href": "http://www.eric-carle.com/museum.html",
        "external": true,
        "children": [
          "Eric Carle Museum of Picture Book Art"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages elementary-adult."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
