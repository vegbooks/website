import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/11/explorer2.jpg",
    "alt": "Explorer2",
    "href": "/media/2013/11/explorer2.jpg",
    "width": 210,
    "height": 335,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I would have reviewed this book sooner, except as soon as a review copy came from ",
      {
        "type": "link",
        "href": "http://www.abramsbooks.com/childrens.html",
        "external": true,
        "children": [
          "the publisher"
        ]
      },
      ", kiddo disappeared with it into her room. She’s never expressed much interest in graphic novels, so I let her take her time with it. In the end, she reported that she was enraptured by the stories at the beginning of the book but began to lose interest at the end."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is unlike any I’ve ever seen before. It resembles a graphic novel but is in fact a series of seven short stories, each told in graphic form. My favorite is the first story — “Rabbit Island” by Jake Parker — which depicts a hardworking rabbit society gone soft after a robot takes over the manual labor. The robot explodes and the rabbits rebuild the village themselves using parts of the robot on their homes and shops. Order is restored."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "What makes this collection so interesting is that all of the stories tie into the ocean somehow. The rabbits in “Rabbit Island” go to the beach when they’re not working, for example, and some of the stories have a much stronger connection, such as the final story, “The Fishermen” by Kazu Kibuishi (the editor of the collection), which is entirely set out at sea. Vegetarian and vegan parents should be aware that this final story is ambiguous about fishing: on one hand, the fish as big as islands rise up against the fishermen; on the other, the story seems to extol fishermen as having a humble calling, in contrast to the greed of explorers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Overall, I found this collection to be much darker than I expected, and I strongly disliked the second story, “The Mask Dance” by Chrystin Garland, which was scary without a very satisfying ending. That said, some of the artwork is stunning, and the slim hardback volume is quite alluring — you will want to read all the stories in one sitting. Whether this is a book that you and your kiddo will like is a matter of taste."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9 to 12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
