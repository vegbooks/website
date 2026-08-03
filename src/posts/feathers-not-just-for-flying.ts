import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2014/04/feathers.jpg",
    "alt": "Feathers",
    "href": "/reviews/feathers-not-just-for-flying/",
    "width": 210,
    "height": 162,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Did you know that in addition to their use in flying and for body warmth, feathers can be used to make noise, dig, act as sunscreen, help a bird sink, swim or slide, even function as snowshoes or a scrub brush?!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kids can learn all there is to know about feathers in ",
      {
        "type": "emphasis",
        "children": [
          "Feathers: Not Just for Flying"
        ]
      },
      ", a gorgeous and informative book by author Melissa Stewart and illustrator Sarah S. Brannen."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book is laid out in a scrapbook style and highlights sixteen different bird types from around the world. The author explains different varieties of feathers and goes over their use. Brilliant watercolor illustrations feature true-to-life depictions of each bird, including close-ups of their feathers. Alongside there are pictures of everyday objects to help relate the unique feather capabilities to the job performed."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a nonfiction book, aimed at the early elementary age group. The text and photos are well researched, and the author has done a great job making it engaging as well as instructional."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In discussing the review copy with our child, we both deemed it enjoyable and worth having in our library, but one not likely to be re-read often."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The publisher sent this book for review."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
