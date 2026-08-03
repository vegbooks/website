import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Forever Young",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 210,
    "height": 140,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Music icon Bob Dylan penned the words for “Forever Young” back in 1973. In 2008, illustrator Paul Rogers, through his imagery, interpreted those lyrics into a sweet rendition for children…and of course Bob Dylan fans. While the book definitely reads like “words of wisdom” imparted to children by their (grand) parents, it shares an inspiring, ‘60’s look at the crossroads where youth, idealism, music, and friendship meet."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Within the storyline, a young boy is bestowed a guitar. He grows up alongside his good friend, both attending school, studying in the evenings, signature gathering under a banner that reads “Save the Planet,” and jamming out in city parks with their instruments. As they get older, the two head out on the road in an old Beetle and join the “Stop the War” march."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is not suitable for all kids, but would be a great resource for the history of American politics, music and cultural studies. For Dylan fans, you’ll enjoy trying to pinpoint all of Rogers’ references. (See if you can find Joan Baez, Thelonious Monk and Paul McCartney in the drawings!) There’s a helpful guide in the back of the book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9 – 99."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
