import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany movie review",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "One weekend, my family enjoyed a movie marathon of “Dr. Dolittle” and “Dr. Dolittle 2.” The first movie tells the story of a doctor (Eddie Murphy) who suddenly realizes he can talk to animals. He spends most of the movie coming to terms with his new reality. in the second movie, Dr. Dolittle used his ability to talk to animals to save a park land which is home to a very rare bear."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter, age 8, loved these movies. There are a lot of visual gags and jokes that she found hilarious. The second movie has a strong animal rights theme. There are a few crude jokes, sexual innuendo, and mild cursing that seemed out of place in this family movie, but it wasn’t overwhelming."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Common Sense Media recommends “",
      {
        "type": "link",
        "href": "https://www.commonsensemedia.org/movie-reviews/dr-dolittle-1998",
        "external": true,
        "children": [
          "Dr. Dolittle"
        ]
      },
      "” for ages 9+ and “",
      {
        "type": "link",
        "href": "https://www.commonsensemedia.org/movie-reviews/dr-dolittle-2",
        "external": true,
        "children": [
          "Dr. Dolittle 2"
        ]
      },
      "” for ages 8+."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This was a great selection for family movie night. Now we are off to see “Dr. Dolittle 3”!"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
