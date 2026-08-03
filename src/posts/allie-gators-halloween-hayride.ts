import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/10/9780762426584.jpg",
    "alt": "Allie Gator’s Halloween Hayride",
    "href": "/media/2011/10/9780762426584.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Allie Gator (a John Deere tractor) is excited to be pulling her first hayride. She will take the children through the cornmaze to the pumpkin patch. Just as she is about to begin, a black cat crosses her path, and her friends Corey Combine and Johnny Tractor (J.T.) warn that black cats are bad luck. Oh no… Allie gets a little lost in the maze and wishes for some help. She starts to call for her friends Corey and J.T. but they can’t hear her. She sees the black cat watching her and seeming to want her to follow down trail. Scared of the black cat, she goes the other way. Then Allie comes across – wait, is that a g-g-ghost? She sees the black cat and thinks that it must be a ghost because black cats and ghosts are both scary. But then Allie realizes that the ghost is really just a scarecrow. She starts to think – maybe the black cat isn’t really scary either, maybe the cat is trying to show her the way. So she follows the cat through the maze to the pumpkin patch. Corey and J.T. are there and she tells them that the black cat isn’t scary at all."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter received ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0762426586/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0762426586",
        "external": true,
        "children": [
          "this book"
        ]
      },
      " as a gift for last Halloween when she was 18 months, but it wasn’t until this Halloween that she really started to enjoy it. It’s a pretty cute little story. There are some scary elements, particularly with the ghost. But it’s not too scary and very appropriate for her age. The whole John Deere line of books are essentially advertising for the John Deere brand, but since we don’t live in tractor country, that kind of advertising doesn’t mean much to us. To my daughter, John Deere tractors are just as real and the engines of Sodor (Thomas and Friends)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I like the book for dispelling the myth about black cats. This black cat is just a normal cat and not bad luck at all. We’ve all learned that black cats are bad luck, and black cats are one of the scary symbols Halloween. The anti-black bias also extends to dogs as black dogs are the hardest to adopt. It’s nice to read a book that says that black cats are just fine."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-6."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
