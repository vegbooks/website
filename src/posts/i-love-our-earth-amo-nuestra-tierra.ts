import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/02/i-love-our-earth-bilingual.jpg",
    "alt": "I Love Our Earth // Amo Nuestra Tierra",
    "href": "/media/2013/02/i-love-our-earth-bilingual.jpg",
    "width": 210,
    "height": 146,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In the many years that I’ve been working with children and literacy programs, there never has seemed to be enough bilingual books on the shelves of the classrooms, libraries or museums, much less titles with an environmental lens. Most recognized for penning ",
      {
        "type": "emphasis",
        "children": [
          "Brown Bear, Brown Bear, What Do You See?"
        ]
      },
      ", the now late ",
      {
        "type": "link",
        "href": "http://billmartinjr.com/",
        "external": true,
        "children": [
          "Bill Martin Jr"
        ]
      },
      ". beautifully writes of landscapes, seasons and other simple natural beauties on earth in ",
      {
        "type": "emphasis",
        "children": [
          "I Love Our Earth"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Coupled with Bill’s words are feel-good photos of multi-ethnic and multicultural children and stunning nature photography. Unfortunately my only hesitation is on page one (way to set the tone!). Of all the ways children can humanely bond with animals, riding a water buffalo through a river with rope sewed through the cattle’s nostrils and used as a lead seems like a very poor choice. We can do better, photographer ",
      {
        "type": "link",
        "href": "http://www.danlipow.com/",
        "external": true,
        "children": [
          "Dan Lipow"
        ]
      },
      "!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Otherwise, this book is a great medium for teaching Spanish (or English!) and nurturing appreciation for nature."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 – 8."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The ",
          {
            "type": "link",
            "href": "http://www.charlesbridge.com/productdetails.cfm?PC=5736",
            "external": true,
            "children": [
              "publisher"
            ]
          },
          " provided a review copy of this book."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
