import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/04/a-long.jpg",
    "alt": "A Long Way Away: A Two-Way Story",
    "href": "/media/2013/04/a-long.jpg",
    "width": 210,
    "height": 168,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "A Long Way Away: A Two-Way Story"
        ]
      },
      " by Frank Viva is full of unusual illustrations that add a unique curiosity and distinctive style (reminiscent of Dr. Seuss) to this picture book, which I received as a review copy. The illustrations encourage young readers to explore the world from all different vantage points: up in the stars, under the sea, left side, right side, from dusk till dawn. Viva makes different parts of the stratosphere feel inviting. Some characters and objects are familiar like stars, planets, buildings, airplane, dogs and a shoe. While others allow the reader to use his imagination to define them. Is the main character an octopus, a light bulb, an amoeba or a squid?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Viva’s book is more than a two-way story. There are multiple stories within this story. I see this book as an invitation for young readers to use the illustrations to tell their own story. Who is the main character? Does he have a name? What part of the universe is he in? What does he like to do?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0316221961/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0316221961&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ") is a good way to engage children in discussion with their parents, teachers and peers. I see it not only as a fun creative activity but also as a wonderful educational tool."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ok, I have to ask, what is the significance of the shoes and boots that float through the stratosphere?"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
