import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/10/0618507647-lres.jpg",
    "alt": "I See a Kookaburra!",
    "href": "/media/2010/10/0618507647-lres.jpg",
    "width": 210,
    "height": 209,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Steve Jenkins and Robin Page create a clever and fun scavenger-hunt style book. Six different habitats of the world are illustrated in paper collage with parts of eight indigenous animals for each habitat peeking through foliage and rock. Following the pages of each habitat are pages where the hidden animals are revealed. The animals are in the exact same spot but all foliage and the surrounding environment are removed so the image of the animal stands on the white of the page. A descriptive sentence is included for each habitat and on the following page, each animal has a descriptive sentence. At the end of the book, five pages are devoted to additional zoological details about the animals as well as a map indicating the six areas where the habitats are located."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The paper collage illustrations are as detailed and beautiful as expected and the structure of the book is well thought out. The habitat pages begin in a sentence like, “In the desert I see…” and the revealed animal pages finish with “a sharp-eyed kit fox leaving its burrow” and “a javelina sniffing out tender roots” and the remaining descriptions of the eight animals. Children will enjoy the “I spy” style game of finding the hidden animals, while learning a variety of new faces and facts. Some of the lesser known creatures include a trapdoor spider, a peacock worm, a secretary bird, a ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Cassowary",
        "external": true,
        "children": [
          "cassowary"
        ]
      },
      ", and a northern pike."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 6-10."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
