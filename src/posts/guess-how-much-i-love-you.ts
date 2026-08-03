import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2009/11/guess-how-much-i-love-you21.jpg",
    "alt": "Guess How Much I Love You",
    "width": 242,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This is a sweet board book that’s funny and touching – and only peripherally about animals. But what it does say is good: ",
      {
        "type": "link",
        "href": "http://www.livesofanimals.org/category/family-bonds",
        "external": true,
        "children": [
          "animals love their families"
        ]
      },
      " just as people do."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Big Nutbrown Hare and Little Nutbrown Hare, the two characters in Sam McBratney and Anita Jeram’s book, sleep in a grass nest on the ground and hop like rabbits, but they also stand up and talk like humans. And what they talk about as Little Nutbrown Hare gets ready for bed, is how much they love each other."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book’s sing-song repetition makes it ideal for ages 0-4. For more reviews, click ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/book-reviews/Guess-Much-I-Love.html",
        "external": true,
        "children": [
          "here"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
