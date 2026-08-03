import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/978-0-375-86118-5.jpg",
    "alt": "Morning of Compassionate Children’s Literature",
    "href": "/media/2010/06/978-0-375-86118-5.jpg",
    "width": 210,
    "height": 272,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "If you are in the NYC area this Sunday, October 17, don’t miss A Morning of Compassionate Children’s Literature with Farm Sanctuary, hosted by The Community Bookstore in Park Slope."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Maya Gottfried will read and sign her book, ",
      {
        "type": "emphasis",
        "children": [
          "Our Farm"
        ]
      },
      " (see our Vegbooks review of ",
      {
        "type": "emphasis",
        "children": [
          "Our Farm"
        ]
      },
      " ",
      {
        "type": "link",
        "href": "/reviews/our-farm/",
        "children": [
          "here"
        ]
      },
      "), and there will also be a reading of ",
      {
        "type": "emphasis",
        "children": [
          "Granny Gomez and Jigsaw"
        ]
      },
      " by Deborah Underwood (",
      {
        "type": "link",
        "href": "/reviews/granny-gomez-and-jigsaw/",
        "children": [
          "here"
        ]
      },
      " is our review of ",
      {
        "type": "emphasis",
        "children": [
          "Granny Gomez and Jigsaw"
        ]
      },
      ")."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Details:"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Sunday, October 17th, 11 AM"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A Morning of Compassionate Children’s Literature with Farm Sanctuary"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The Community Bookstore is at 143 7th Ave in Brooklyn. Click ",
      {
        "type": "link",
        "href": "http://communitybookstore.net/information/?page_id=36",
        "external": true,
        "children": [
          "here"
        ]
      },
      " for directions!"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
