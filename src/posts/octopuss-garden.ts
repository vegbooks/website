import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "My son, now 2.5, received this book version of Ringo Starr’s famous song for his first birthday and it has been his favorite book since. Many night this is the only book we ready before bed (again, and again…). Sometimes he likes me to sing it, and sometimes he wants it in spoken word. Sometimes he sings along."
    ]
  },
  {
    "type": "image",
    "src": "/media/2016/05/octopuss-garden.jpg",
    "alt": "Octopus's garden",
    "width": 1000,
    "height": 1169
  },
  {
    "type": "paragraph",
    "children": [
      "The book really is gorgeous and the lyrics make a fabulous children’s book. See the trailer for the book ",
      {
        "type": "link",
        "href": "https://youtu.be/s0suFdSHmxA",
        "external": true,
        "children": [
          "here"
        ]
      },
      ". The pictures have great detail that my son loves picking apart, noticing different things each time (“What’s that?”)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The entire story takes place as a boy imagines a more rich world for his pet goldfish. The first page of the book is simple and plain, with the boy staring into the goldfish’s boring bowl which quickly transforms into a beautiful lush sea. This could spark a great conversation about the lives of animals forced to live in tiny enclosures when they could be swimming in the sea. The differences between the imagined sea and the boring fishbowl are very obvious and would be great conversation starters."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It includes a CD with Ringo Starr singing which we have seldom used, mostly because we don’t have a CD player at home. But you could also easily play the song on your phone as you flip through the pages, though do this one time and it will be expected every time (I speak from experience). My son also loves watching the trailer which brings the book to life."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Highly recommended. Ages 1-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
