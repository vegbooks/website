import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/01/eco-women.jpg",
    "alt": "Eco-Women",
    "href": "/media/2010/01/eco-women.jpg",
    "width": 221,
    "height": 280,
    "align": "right"
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=1555912524",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      "Think of ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/1555912524?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=1555912524",
            "external": true,
            "children": [
              "Eco-Women: Protectors of the Earth"
            ]
          }
        ]
      },
      " by Willow Ann Sirch as an ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Ecofeminism",
        "external": true,
        "children": [
          "Ecofeminism"
        ]
      },
      " 101 course book meets short biographical compilation for pre-teens. Profiling eight highly influential female movers and shakers (Gertrude Blom, Rachel Carson, Marjory Stoneman Douglas, Jane Goodall, Barbara Kerr, Wangari Maathai, Margaret Murie, and Katherine Payne) in the environmental protection arena, the text is very reader-friendly, which is a good thing because biographies are not my genre. Sirch has broken each biography into three major segments: a rich, romantic introduction of each woman’s childhood; an informative, yet engaging silhouette on personal and “professional” growth (many advocacy efforts were homegrown and not necessarily considered ‘professional’ by today’s or yesteryear’s standards); and a brief list of “What You Can Do” actions to help with each woman’s passionate work."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "What I have found most interesting about the stories told is how they fit into their historical contexts. Several of the featured maidens were born just after the turn of the century and had to make their way in a society that didn’t recognize women’s right to vote or allow women to have careers in male-dominated fields. No doubt this book will make for wonderful discussions in the classroom and at home that will not only reflect upon the historical legacies these leading ladies have left us, but how far we’ve come in a century’s time, at least in some ways. We all know there’s so much more to do."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "With no mention of meat or dairy, but a whole lot of love for the earth and animals, this is another golden goody for the bookshelf."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
