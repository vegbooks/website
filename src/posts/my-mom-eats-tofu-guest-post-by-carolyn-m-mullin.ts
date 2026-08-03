import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2009/12/mmet-cvr21.jpg",
    "alt": "My Mom Eats Tofu",
    "href": "/media/2009/12/mmet-cvr21.jpg",
    "width": 210,
    "height": 260,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Summer is an easy-going and loving daughter, but she’s anxious about bringing a friend home to meet her mom and experience their alternative, green ways of living: eating vegan, composting, shopping at the farmer’s support, supporting the local co-op, among other health- and environmentally-conscious practices. Long story short, the friend has a wonderful time at Summer’s home and is eager to visit again."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The aspect I love most about this book written by Robyn Ringgold is the myriad of fun foods mentioned that expand upon its title, ",
      {
        "type": "link",
        "href": "http://www.solarpub.com/",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "My Mom Eats Tofu"
            ]
          }
        ]
      },
      ". From listing spices such as lemongrass and rosemary to diving into the sea to explore the world of underwater vegetables (think nori and kelp), the book serves as a vehicle to get kids excited about healthy fare. A more in-depth glossary is provided for adults who may also be new to these ingredients."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Appropriate for ages 5-10. Printed on recycled paper."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
