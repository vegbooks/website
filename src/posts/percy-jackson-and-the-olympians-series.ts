import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2019/03/78103d8429b1aa314646257abc4b7308.jpg",
    "alt": "Percy Jackson and the Olympians Series",
    "href": "/",
    "width": 405,
    "height": 437,
    "align": "center"
  },
  {
    "type": "paragraph",
    "children": [
      "My 9 year old daughter loves the book series ",
      {
        "type": "link",
        "href": "http://rickriordan.com/series/percy-jackson-and-the-olympians/",
        "external": true,
        "children": [
          "Percy Jackson and the Olympians"
        ]
      },
      ". We’ve been reading it aloud together, and on her own she’s working through the ",
      {
        "type": "emphasis",
        "children": [
          "Kane Chronicles"
        ]
      },
      " by the same author. Percy Jackson, a 6th grader in the first book, finds out that he is the son of Poseidon, the God of the Sea. Percy joins other half-bloods (half mortal/half god) on many quests throughout the 5-book series in an effort to save the world from demonic forces trying to destroy it."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter is a fantasy book lover and avid reader so this series is right up her ally. Reading these books has inspired an interest in Greek mythology and she has done quite a bit of independent research. She also will only read books with strong female characters, and this series comes through with Percy’s two best friends Annabeth, daughter of Athena, and Thalia, daughter of Zeus."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Percy’s other best friend Grover is a satyr. His body is half human on the top and half goat on the bottom. Grover has a connection with nature and is able to talk to animals. Grover is a vegetarian, which is mentioned quite often. He has a long monologue in the first book about how poorly humans have treated the earth. Through the series he is on a search for Pan, god of the Wild, who has gone into hiding because nearly all of the wild kingdoms on earth had been destroyed by mortals. Grover makes it his life mission to find Pan to help restore the earth."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I highly recommend this book series to middle grade fantasy book lovers. Recommended for ages 10-14, both younger and older readers will find something to enjoy in this series. My daughter is 9 and is loving it."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The books are also available as audiobooks. And sadly, the films are disappointing."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
