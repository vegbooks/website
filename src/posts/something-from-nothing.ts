import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/03/something.jpg",
    "alt": "Something from Nothing",
    "href": "/media/2012/03/something.jpg",
    "width": 210,
    "height": 271,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/0590472801/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0590472801",
            "external": true,
            "children": [
              "Something from Nothing"
            ]
          }
        ]
      },
      ", written and illustrated by Phoebe Gilman, has been a long-time favorite of mine. My younger sister received this book as a gift when it first came out twenty years ago and my fond memories prompted me to check it out from the library to read to my children. Why review it for Vegbooks? I think that there is a message of reuse that will be appealing to earth-conscious families and there is a mouse family featured in the illustrations that gives the book a fun animal component. Also, as the story is adapted from a Jewish folktale, it is a great book choice for those interested in sharing Jewish culture with the children in their lives."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story begins with Joseph’s grandfather making him a “wonderful blanket” when he was a baby. We see the grandfather hand sewing a blue star speckled blanket while the scraps from his workbench have fallen through the floor’s cracks and into the home of two curious mice. As the book progresses and Joseph’s family grows, so too does the family of mice. The mice also use the scraps they find to decorate and furnish their modest home, making this book a fantastic one for re-reading just to look at all the details in the illustrations."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The wonderful blanket becomes tattered as Joseph grows, so with the refrain “Grandpa can fix it,” Joseph takes the blanket to his grandfather. Grandpa says that there is “just enough material here to make…” a wonderful jacket. Following this pattern the jacket later is made into a vest, a tie, a handkerchief, and a button. Joseph is devastated to lose the button and his mother tells him that you “can’t make something from nothing.” The book ends with Joseph taking a blank paper and pen at school as his material to write a “wonderful story.” He turns his sadness at losing the last part of his grandfather’s special gift and puts his memories on paper so that they are not really gone. A simple, yet powerful message. Highly recommended."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
