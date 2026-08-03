import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/11/t-tease-tootsie.jpg",
    "alt": "Please Don’t Tease Tootsie",
    "href": "/media/2010/11/t-tease-tootsie.jpg",
    "width": 210,
    "height": 216,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Illustrator Margaret Chamberlain’s first solo picture book introduces the youngest of children to the dos and don’ts of pet care. She gives general advice to her readers such as “Don’t madden Mutley,” while in the picture a girl stands on a footstool and holds a cake out of poor Mutley’s reach."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Chamberlain uses alliteration, rhyme, and lively pictures to show children how to treat their beloved pets. A bit simplistic for older children, the colorful backgrounds, large text, and a humorous approach to the subject make this book an appealing choice to read, especially to a large group of younger children learning how to ",
      {
        "type": "link",
        "href": "http://www.humanesociety.org/parents_educators/",
        "external": true,
        "children": [
          "treat animals with respect"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-5."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
