import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/03/9781585367849.jpg",
    "alt": "Finnegan and Fox: The Ten-Foot Cop",
    "href": "/media/2013/03/9781585367849.jpg",
    "width": 210,
    "height": 258,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Learn about the mounted police through the eyes of a horse by spending a day in New York City with a mounted police officer in ",
      {
        "type": "emphasis",
        "children": [
          "Finnegan and Fox: The Ten-Foot Cop"
        ]
      },
      ", written by ",
      {
        "type": "link",
        "href": "http://www.helenwilbur.com/",
        "external": true,
        "children": [
          "Helen L. Wibur"
        ]
      },
      " and illustrated by John Manders. Finnegan the horse narrates the story as he and his rider, Officer T.J. Fox, navigate the streets of New York and introduce readers to the locals. Readers meet Hasan, a fruit and vegetable vendor, who offers Finnegan a tempting red apple that he can’t eat while on duty. Then Fox enjoys his morning cup of coffee, served to him by another street vendor. Local children and tourists, too, stop to pat Finnegan as they pass him on the street. Officer Fox dismounts Finnegan to give a parked car a ticket. When a driver in a van asks for directions, Officer Fox suggests the best route for him to take."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story slows a bit as Finnegan and Fox make more rounds through the city, but only for a moment. Then Officer Fox hears on his radio that one of the children from the group of tourists they met earlier in the day is missing. He and Finnegan join the search to help find the child, and after the search Finnegan gets to eat a delicious red apple. A section in the back explains the history of the mounted police, and full color illustrations and easy to read text make this book a delightful story for animal lovers of any age."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Recommended for readers ages 6 – 9."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
