import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/05/9780152018986-hres.jpg",
    "alt": "9780152018986_hres",
    "href": "/media/2013/05/9780152018986-hres.jpg",
    "width": 210,
    "height": 250,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This week as I walked past the shelves of books in the children’s library my eyes landed on one that was displayed on top of the shelf. The title, ",
      {
        "type": "emphasis",
        "children": [
          "Each Living Thing"
        ]
      },
      ", got me interested right away and I snagged it to put in my pile. As many of us know, titles can be deceiving, so I had no idea what the story would reveal. Upon getting it home to read with my children I was delighted at this little treasure that I had stumbled across."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "E",
      {
        "type": "emphasis",
        "children": [
          "ach Living Thing"
        ]
      },
      " is a wondering book that takes young readers on a journey through nature, asking them to do such things as to watch out for spiders, let the toads cross the road, and to watch out for every living thing. The book offers a wonderful message, saying to take care of them, and let them be – the very same message most vegetarian and vegan parents try to convey."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "With beautiful nature illustrations and a thought-provoking message, this is a book that every vegetarian and vegan family will want to share with their children. And if they have the opportunity, it’s a great one to get in the hands of those families that are not vegetarian or vegan, with hopes that the message helps to gently spread compassion to all those who read it (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0152018980/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0152018980&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affilate link"
        ]
      },
      ")."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 to 8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
