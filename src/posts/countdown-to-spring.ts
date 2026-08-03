import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/03/978-0-375-81364-1.jpg",
    "alt": "Countdown to Spring!",
    "href": "/media/2010/03/978-0-375-81364-1.jpg",
    "width": 181,
    "height": 150,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This counting book opens with the pronouncement that it is spring and immediately queries whether the children have remembered their animal friends. I found that one question very powerful- how have we remembered our animal friends in not just periods of celebration but the quotidian rhythms of our lives? The book’s simple, uncluttered illustrations highlight the simplicity of its kind message. They depict humble creatures engaged in ordinary activities. At the end, there is a surprise– an Easter basket, bursting with fruits, veggies and flowers! Its filled with treats that the creatures will enjoy to help them celebrate the day and the season. It is definitely the kind of Easter basket that a veggie family would love to give or receive (though there is a wedge of cheese stuck in there, presumptively for the mouse)! The emphasis of this little book, aside from the counting, is on sharing the spirit of springtime with the creatures around us."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Though there are a couple of eggs and a wedge of cheese in endspapers’ illustrations, there are also pieces of flowers, berries, candy, leafy greens, carrots, apples, butterflies and wheat."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Suitable for 0-4 years."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
