import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/11/978-1-58246-316-2.jpg",
    "alt": "Compost Stew: An A to Z Recipe for the Earth",
    "href": "/media/2010/11/978-1-58246-316-2.jpg",
    "width": 210,
    "height": 204,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "While many of us know that composting is an environmentally friendly thing to do, most of us are yet to do it. Many more don’t even know what goes into composting. In ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.siddals.com/compost-stew.html",
            "external": true,
            "children": [
              "Compost Stew: An A to Z Recipe for the Earth"
            ]
          }
        ]
      },
      ", Mary McKenna Siddals gives the reader a crash course, ABC style in what goes into making compost."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "With great illustrations and easy-to-read pages, this book offers a good look at composting and is easy for children to understand. It is also a helpful tool for parents who may wonder what all goes into composting."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There are some interesting things that are added to compost that some people may not have thought about before, such as hair snippings and laundry lint."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There is one reference to adding in eggshells that vegetarian and vegan parents may want to know about. Also, it says to add an “insect or two” which left me wondering and hoping they weren’t promoting the killing of insects."
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
