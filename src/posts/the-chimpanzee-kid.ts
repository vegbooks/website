import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/10/girl-reading.jpg",
    "alt": "The Chimpanzee Kid",
    "href": "/media/2010/10/girl-reading.jpg",
    "width": 210,
    "height": 278,
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
            "href": "http://www.powells.com/biblio/63-9780899193649-1",
            "external": true,
            "children": [
              "The Chimpanzee Kid"
            ]
          }
        ]
      },
      " is the story of seventh grader Harold Pinto. Harold is a sensitive kid with a history of taking up causes that other kids in his school are uninterested in hearing about, and consequently is somewhat of a lonely young guy. His parents have divorced not long ago and his dog has recently died; both events leave him feeling raw and ungrounded."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "When he learns about a local chimpanzee facility from a New York Times article, Harold does some sleuthing (or trespassing, depending on one’s point of view) at the facility. Sneaking into one of the buildings, he befriends one of the chimpanzees, Benny, who has been isolated from the others. Harold decides to try to free Benny, enlisting a new school friend to help with the process. What ensues is unexpected and an excellent story. Ron Roy manages to craft a realistic and interesting portrayal of Harold’s botched attempt at securing release for Benny– with a surprising twist."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story is nicely paced and well written. However, it is important to note that it is over twenty years old and very dated in parts. For example, Harold spends quite a lot of time listening to his Walkman (his crooner of choice is Willie Nelson). Since it is not a recent publication, it may be a difficult book to find. If your young adult reader is alright reading through some of the outdated cultural references, this is a worthwhile book with a very animal-rights friendly storyline."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Recommended for ages 9 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
