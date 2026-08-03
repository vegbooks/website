import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Hanukkah, Oh Hanukkah",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In ",
      {
        "type": "emphasis",
        "children": [
          "Hanukkah, Oh Hanukkah"
        ]
      },
      "(",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0142407011/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0142407011&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      "), Susan L. Roth’s collages depict a mouse family celebrating Hanukkah alongside the lyrics to a song about the holiday. The mice light a menorah, dance the hora, eat latkes (potato pancakes) together, and play with dreidels, all basked in the light of a menorah “to remind us of days long ago.” The book closes with sheet music for the song upon which the book is based."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "For those of us introducing our children to the holiday, the charming illustrations and message of togetherness shines through. Families with older children may want to supplement the book with a more detailed story of the background of Hanukkah but my three-year-old enjoyed this book."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
