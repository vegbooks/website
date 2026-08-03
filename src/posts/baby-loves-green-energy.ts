import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2018/12/baby-loves-green-energy.jpeg",
    "alt": "Baby Loves Green Energy!",
    "width": 300,
    "height": 300,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "We love the ",
      {
        "type": "link",
        "href": "https://www.charlesbridge.com/pages/ruth-spiro",
        "external": true,
        "children": [
          "“Baby Loves” series from Ruth Spiro"
        ]
      },
      ", illustrated by Irene Chan. It covers complicated scientific topics including thermodynamics (!) and structural engineering in simple yet accurate detail. The books are aimed at babies through three years, and the expressive illustrations and child-friendly language are perfect for children to admire on their own or read together with a caregiver. The newest book in the series, ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "https://www.charlesbridge.com/products/baby-loves-green-energy",
            "external": true,
            "children": [
              "Baby Loves Green Energy"
            ]
          }
        ]
      },
      ", is especially welcome because of its timely and relatable topic."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The board book opens with a recognizable scene: Baby and her blanket. It then transitions to discussing Earth’s blanket of air and how it heats up and gets too warm because of greenhouse gases. Using Hydroelectric, Wind, Solar, and Geothermal energy are all mentioned as a way people can help slow the rise of greenhouse gases. As with most good child-centric books, Baby is also given ways she can help."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "https://www.charlesbridge.com/products/baby-loves-green-energy",
            "external": true,
            "children": [
              "Baby Loves Green Energy"
            ]
          }
        ]
      },
      " has just enough information, accompanied by reassuring and colorful pictures, to encourage a child’s interest. Adults who think they know the processes involved in greenhouse gases may be reminded of a few things as well!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Recommended for ages infant – 3 years old."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
