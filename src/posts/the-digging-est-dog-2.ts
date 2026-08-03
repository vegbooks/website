import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2009/11/978-0-394-80047-94.jpg",
    "alt": "The Digging-est Dog",
    "href": "/media/2009/11/978-0-394-80047-94.jpg",
    "width": 174,
    "height": 240,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Kiddo loves ",
      {
        "type": "emphasis",
        "children": [
          "The Digging-est Dog"
        ]
      },
      "by ",
      {
        "type": "link",
        "href": "http://www.librarything.com/author/perkinsal",
        "external": true,
        "children": [
          "Al Perkins"
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Eric_Gurney",
        "external": true,
        "children": [
          "Eric Gurney"
        ]
      },
      ", but I’m not so crazy about it."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Told from the dog’s point of view, the story has a somber but promising start: “I was the saddest dog you could ever see,/ Sad because no one wanted me./ The pet shop window was my jail./ The sign behind me said, ‘For Sale.'”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Unfortunately, the remainder of the story has myriad problems from an animal welfare perspective. First, the boy must purchase the dog’s freedom, essentially supporting ",
      {
        "type": "link",
        "href": "http://www.humanesociety.org/issues/puppy_mills/facts/pet_store_doublespeak.html",
        "external": true,
        "children": [
          "the industry that has neglected and abused him"
        ]
      },
      ". Second, the dog has to live outside in a doghouse instead of being welcomed into the family home. Plus, the book portrays the boy milking a cow — with",
      {
        "type": "link",
        "href": "http://www.chooseveg.com/dairy.asp",
        "external": true,
        "children": [
          "no mention of what has happened to her calf"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The worst part, however, occurs when the boy teaches the dog to dig and the dog happily digs, digs, digs all over town. In precisely this moment of bliss, the boy scolds the dog and threatens to send him back to the pet store. The frightened dog responds by (literally) digging himself into a huge hole."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Thank goodness this story has a happy ending, in which the boy and the neighborhood dogs rescue the dog in the hole. Still, I have to admit that every time kiddo pulls out this book, I cringe."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8. For other reviews, visit ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/book/show/1215867.The_Digging_Est_Dog",
        "external": true,
        "children": [
          "Goodreads"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
