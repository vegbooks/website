import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "With the title of her book ",
      {
        "type": "emphasis",
        "children": [
          "Just Being Audrey,"
        ]
      },
      "Margaret Cardillo captures the down-to-earth character of the world renowned actress about which she writes. Perhaps this line captures the essence of Cardillo’s picture book biography: “Audrey’s life was not always a fairy tale, but she chose hope over sorrow.” As a child, Audrey was taller than the rest and her imagination was more vivid, yet her spirit endured. At the rise of World War II, she lived a life far less luxurious than her mother, a baroness, yet she did not give up hope. She had dreams, an intuitive sense of knowing her limitations and ability to change."
    ]
  },
  {
    "type": "image",
    "src": "/media/2014/10/audrey-hc-c.jpg",
    "alt": "Audrey HC c",
    "width": 480,
    "height": 697,
    "align": "center"
  },
  {
    "type": "paragraph",
    "children": [
      "In this current culture of bulling, ",
      {
        "type": "emphasis",
        "children": [
          "Just Being Audrey,"
        ]
      },
      "sends an important message to just be yourself. In this life, the ability to change is amazing. As the author so aptly phrases, “And the very things that made her appear awkward as a child? They were precisely the things that made her beautiful as an adult.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book teaches many lessons in one with a historical context. The illustrations by Julia Denos, add a charm to this book akin to Audrey herself. As a lover of Audrey, I am giving this book to my niece to her fourth birthday, so she can learn about not only an iconic actress but an altruistic soul."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The timeline and bibliography at the end of the book are an added bonus to this delightful tribute to Audrey’s life."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
