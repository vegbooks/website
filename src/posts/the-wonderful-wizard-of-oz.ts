import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "My mom’s favorite movie is “The Wizard of Oz,” so I’ve seen it dozens of times, but I’ve never read the book. I was happy to come across a copy of it in the Little Free Library on my street. My seven-year-old daughter and I read ",
      {
        "type": "emphasis",
        "children": [
          "The Wonderful Wizard of"
        ]
      },
      " Oz with the plan of following it with a viewing her grandmother’s favorite movie."
    ]
  },
  {
    "type": "image",
    "src": "/media/2016/09/29116-2.jpg",
    "alt": "Oz",
    "width": 466,
    "height": 743
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The Wonderful Wizard of Oz"
        ]
      },
      " is an enjoyable read. It tells the fantastic tale in a straightforward and even-keeled tone that held my daughter’s interest throughout. She was never very frightened by the elements of the book that I remember frightening me while watching the movie as a young child, and I think that’s due to the tone. Instead of being frightened, she was highly curious as to how Dorothy and her friends would get out of the various situations they found themselves in."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Amazingly, even though the book is over 100 years old, it holds up quite well. Dorothy is a strong and brave girl and makes a wonderful heroine."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "One aspect of the story that surprised me, that I don’t recall from the movie, is the specifics of the tin woodman. He doesn’t have a heart, but is actually quite loving. One way his love manifests is a love of animals. He cries so much from stepping on a beetle that he rusts up and has to be oiled by Dorothy in order to move again. Another time, when Dorothy is hungry and in need of food, the lion offers to catch her a deer in the woods. The tin woodman begs Dorothy not to eat a deer because the mere thought it almost brings him to tears again. Dorothy instead picks some nuts from a tree for her meal."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This was a very lovely book that my daughter and I very much enjoyed. The animal loving spirit of the tin woodman was a surprise which would delight any vegetarian child."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
