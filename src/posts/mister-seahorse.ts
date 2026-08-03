import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/10/mister-seahorse.jpg",
    "alt": "Mister Seahorse",
    "href": "/media/2011/10/mister-seahorse.jpg",
    "width": 210,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "We are big Eric Carle fans but it was not until recently that we got a copy of ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0399254900/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399373&creativeASIN=0399254900",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Mister Seahorse"
            ]
          }
        ]
      },
      " in board book form. It follows Mister Seahorse through the ocean as he cares for his and Mrs. Seahorse’s eggs. On his way he meets with other fathers caring for their young. Interspersed between each of the fellow fathers are clear plastic pages of scenery that highlight the protective coloration of various sea creatures he encounters as well. At the end of his journey, Mister Seahorse’s eggs hatch. When one baby seahorse tries to return to his father’s pouch, Mister Seahorse says that “I do love you, but now you are ready to be on your own.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I loved the science components of this book, it sparked some really good discussions about camouflage with my three year old and my one year old enjoyed the feel of the plastic pages. The note from the author explains that most fish families leave eggs on their own after laying them. “But there are exceptions such as the seahorse, stickleback, tilapia, Kurtus nurseryfish, pipefish, bullhead catfish, and some others.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The illustrations are engaging and I think books that share the beauty of the oceans and the wildlife contained therein are a great choice for veg families. Another great Eric Carle book!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
