import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/02/978-1-883672-66-9.jpg",
    "alt": "Who’s in a Family?",
    "href": "/media/2012/02/978-1-883672-66-9.jpg",
    "width": 210,
    "height": 245,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "We’ve been reading ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/188367266X/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=188367266X",
        "external": true,
        "children": [
          "this book"
        ]
      },
      " a lot lately. We picked it up at a garage sale over the summer, but it wasn’t until recently that my 2.5 year old became interested in it. The book depicts many different types of families. Families shown in the book are mixed race, two mom, two dad, single moms and single dads, grandparents and children, divorced families, and families that don’t have any children at all. The book shows that a family can take many different forms and concludes that a family is made up of the people who love you the most."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is not as well done as one of our other family favorites, ",
      {
        "type": "emphasis",
        "children": [
          "The Family Book"
        ]
      },
      " by Todd Parr, but I give it credit for its age. It was written in the mid-nineties, so it was probably pretty amazing back then. The illustrations are fun and the families are depicted having fun – sledding, canoeing, doing puzzles and puppet shows. The tone and illustrations give the possibly preachy topic a bit of fun. My daughter loves to read it and point out people that she knows that have the families depicted – especially when it comes to pointing out our family, which is two moms, a child, and a dog."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "One aspect of the book that I particularly like is the inclusion of animal families. The book begins with the statement, “Families are made up of people, and animals have families too.” Then as various types of human families are described, corresponding animal families are described as well. For example, after depicting the single mom family, it is shown that chimpanzees are also raised by a single mom. While I think the animals are included in the book to show that different family structures are natural, this kind of inclusion also helps youngsters to realize that animal families make strong bonds just as human families do."
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
