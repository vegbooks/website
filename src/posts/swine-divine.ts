import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "alt": "Swine Divine",
    "href": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "width": 210,
    "height": 315,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Animals are dressed up on a regular basis and made to appear as something they are not. It may be in a circus, a show or even a photo shoot, as in ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.plcmc.lib.nc.us/bookhive/books/details.asp?id=272",
            "external": true,
            "children": [
              "Swine Divine"
            ]
          }
        ]
      },
      ". In this book, Rosie is a pig who gets a bath and then is taken to a photographer to have some pictures taken."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The problem is, Rosie doesn’t like the way she is being dressed up and posed for those photos. She’s made to wear such things as a bonnet and a tutu, and is even put into a pot of fake flowers and made to balance on a ball. All the while, the photographer continues to snap shots of the pig."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rosie decides she has had enough and just wants to go back to being a pig in the mud. She breaks free from the photographer, running all the way home. In the end, she is back doing what she loves to do."
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
