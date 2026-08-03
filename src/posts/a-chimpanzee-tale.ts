import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/07/chimpanzee-tale.jpg",
    "alt": "A Chimpanzee Tale",
    "href": "/media/2010/07/chimpanzee-tale.jpg",
    "width": 172,
    "height": 224,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In this book, ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.petacatalog.com/products/A_Chimpanzee_Tale-318-9.html",
            "external": true,
            "children": [
              "A Chimpanzee Tale"
            ]
          }
        ]
      },
      ", by Karen Young, Hoot, a chimpanzee, explains how happy chimpanzees live in the wild and why chimpanzees shouldn’t ever be in a city, zoo, movie, show, or circus. Hoot gives a lot of information about chimpanzees. Did you know that chimpanzees can’t swim? Or that they sleep in beds called “nests” that they make fresh each day? Also, did you know that they are our closest relatives? After you read ",
      {
        "type": "emphasis",
        "children": [
          "A Chimpanzee Tale"
        ]
      },
      ", you’ll know these very interesting facts and many more."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This story gives you a good feeling, that you can do your part to change the world for chimpanzees who are in captivity, and it also talks about the sanctuaries that help chimpanzees. The pictures help to illustrate the story and make it fun to read."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "A Chimpanzee Tale"
        ]
      },
      " is very different from other books. I love how the author, Karen Young, put important vocabulary words at the end of the book―that helped me understand the words much better. The afterword is also interesting because it seems as if the author is talking to the reader and explaining even more about chimpanzees."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Reading this story was exciting, and it made me want to ",
      {
        "type": "link",
        "href": "http://www.releasechimps.org/",
        "external": true,
        "children": [
          "start a revolution for chimpanzees"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5-10."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "* ",
      {
        "type": "strong",
        "children": [
          "Kaitlyn Aiyana Enstice is the daughter of Tim Enstice,"
        ]
      },
      {
        "type": "strong",
        "children": [
          "director of gift planning for"
        ]
      },
      {
        "type": "strong",
        "children": [
          {
            "type": "link",
            "href": "http://www.petafoundation.org/",
            "external": true,
            "children": [
              "PETA Foundation"
            ]
          },
          "."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
