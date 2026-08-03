import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Boy book pic",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This is the cutest little ",
      {
        "type": "link",
        "href": "http://www.herbivoreclothing.com/the-super-duper-dog-park-by-aron-nels-steinke/",
        "external": true,
        "children": [
          "cartoon art book"
        ]
      },
      " given to us by our ",
      {
        "type": "link",
        "href": "http://www.herbivoreclothing.com/",
        "external": true,
        "children": [
          "Herbivore"
        ]
      },
      " friends who know the author Aron Nels Steinke. It is perfect for the imaginative dog-loving, young reader with easy-to-read dialogue and fun, colorful, detailed illustrations. Some of the illustrations remind me of a ",
      {
        "type": "emphasis",
        "children": [
          "Where’s Waldo"
        ]
      },
      " book, with so much interesting activity. As with many comic books, I sometimes get lost and have to take a moment to figure out which order to read the dialogue bubbles so the young reader may also need a little guidance, especially if they have not read many comics."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegan families, note there is a page illustrating, “We can ride on horses wild and free!” It is lighthearted and exuberant, which will definitely appeal to dog-loving kids."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
