import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      {
        "type": "strong",
        "children": [
          "Note: To honor ",
          {
            "type": "link",
            "href": "http://blogactionday.change.org/",
            "external": true,
            "children": [
              "Blog Action Day 2010: Water"
            ]
          },
          ", Vegbooks is reviewing a book on water conservation and related issues. The scarcity of clean water has particularly harsh consequences for children — some estimates suggest that ",
          {
            "type": "link",
            "href": "http://www.savethechildren.net/alliance/media/newsdesk/2010-03-19.html",
            "external": true,
            "children": [
              "four thousand children die every day"
            ]
          },
          " due to a lack of clean water or adequate sanitation."
        ]
      }
    ]
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=1602796599",
    "alt": "Keeping Water Clean",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1602796599?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=1602796599",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Keeping Water Clean"
            ]
          }
        ]
      },
      " is clever combination of travel journal, adventure series and science. The book starts off challenging readers with a multi-pronged mission which boils down to: learn about the Earth’s water supplies and the challenges facing them. After the mission, general facts about the planet’s water resources are presented under the heading “What You Know” and then, to help readers accomplish their mission, the author takes us on a trip around the world."
    ]
  },
  {
    "type": "image",
    "src": "/media/2010/10/9781602796591.jpg",
    "alt": "",
    "href": "/media/2010/10/9781602796591.jpg",
    "width": 210,
    "height": 272,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "strong",
        "children": [
          "Each subsequent chapter is categorized by a specific geographical location and highlights a particular concern about water in that area of the world. Some examples of places that readers of this book visit include Spain, to learn about desalination, Malawi, to find out about living with a shortage of clean, drinkable water, Wyoming, to discuss cattle ranching’s relationship to water usage and irrigation (the information in this chapter may be of special interest to activist veg families– i.e. it takes 12,009 gallons of water to produce one pound of beef), and Iowa, to learn about how agricultural pesticide use impacts the water supply."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Facts related to the issues are discussed in each segment and some solutions are presented (for example, “How You Can Reduce Pollution” under the Acid Rain in New York chapter contains suggestions like asking your parents to walk or ride bikes to travel, and encouraging them to purchase a fuel efficient vehicle). The end of the book has a few additional missions, which on one hand seem to be fairly limited (use a rain barrel and conserve your water usage) but would have a tremendous impact if implemented by the majority of global citizens."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Though this book is packed with facts and information, it is laid out in an easy-to-understand, straightforward manner. However, the answers to even one of the highlighted challenges are not straightforward at all. While the information in ",
      {
        "type": "emphasis",
        "children": [
          "Keeping Water Clean"
        ]
      },
      " provides a start for acquiring base knowledge, the book sometimes shies away from directly pointing out how these incredibly pressing problems should be getting more attention in both the global geopolitical arena and our society’s collective consciousness."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I recommend this book for children ages 5 and up who are ready to explore some of the more challenging aspects of environmentalism and learn more about what they can do to help preserve our most important natural resource. This is a great book to read in conjunction with ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/heroes-of-the-environment/",
            "children": [
              "Heroes of the Environment"
            ]
          },
          "."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
