import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/06/0152051074-lres.jpg",
    "alt": "Hands: Growing Up to Be an Artist",
    "href": "/media/2011/06/0152051074-lres.jpg",
    "width": 210,
    "height": 118,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Every artist parent should be familiar with Lois Ehlert (author of ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/0152325751/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0152325751",
            "external": true,
            "children": [
              "Growing Vegetable Soup"
            ]
          }
        ]
      },
      ", ",
      {
        "type": "link",
        "href": "http://www.ala.org/ala/mgrps/divs/alsc/awardsgrants/bookmedia/caldecottmedal/caldecotthonors/caldecottmedal.cfm",
        "external": true,
        "children": [
          "Caldecott Honor"
        ]
      },
      " book ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.harpercollins.com/books/Color-Zoo-Lois-Ehlert/?isbn=9780397322596",
            "external": true,
            "children": [
              "Color Zoo"
            ]
          }
        ]
      },
      ", and ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/0152063048/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0152063048",
            "external": true,
            "children": [
              "Planting a Rainbow"
            ]
          }
        ]
      },
      ", among others) and if not, ",
      {
        "type": "emphasis",
        "children": [
          "Hands"
        ]
      },
      " is the book to warm any creative parent’s heart."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Unlike Ehlert’s other colorful collage-illustrated, nature focused books, this one consists of close and colorful photo, flip, and cut out pages of a more personal nature. It’s narrated by a child who talks of her parents’ creativity and the tools they use to make things. The child is included in the creative processes and begins her own artist journey with scraps from her mom and dad’s projects. Dedicated to Ehlert’s parents, this is clearly a message of love and inspiration as well as an artistic autobiography suitable for young children."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8.",
      {
        "type": "strong",
        "children": [
          {
            "type": "lineBreak"
          }
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
