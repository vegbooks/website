import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "The Polar Bears’ Home",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This little book by Lara Bergen and Vincent Nguyen introduces kids to the concept of ",
      {
        "type": "link",
        "href": "http://www.epa.gov/climatechange/kids/",
        "external": true,
        "children": [
          "climate change"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "When a little girl from the Arctic takes a canoe ride with her father, they spy two polar bear cubs alone on the ice. This provides an opportunity for the father to explain to his daughter how climate change is melting the sea ice. The two worry about the cubs until their mother comes to rescue them. Ms. Bergen explains that not all polar bears are so lucky, and the book ends with tips for ways that kids can help prevent climate change."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While there isn’t a whole lot of storyline here — most of the book is spent explaining climate change — readers will delight in Mr. Nguyen’s illustrations. Environmentally oriented parents will also appreciate the practical tips for eco-conscious living and the fact that the book is printed on recycled paper. Parents concerned with animal rights, however, should note that ",
      {
        "type": "link",
        "href": "http://www.peta.org/mc/factsheet_display.asp?ID=130",
        "external": true,
        "children": [
          "dog sledding"
        ]
      },
      " is portrayed in a positive light."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
