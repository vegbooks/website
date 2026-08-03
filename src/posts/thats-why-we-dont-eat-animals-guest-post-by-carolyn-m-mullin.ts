import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2009/12/cover.jpg",
    "alt": "That’s Why We Don’t Eat Animals",
    "href": "/media/2009/12/cover.jpg",
    "width": 227,
    "height": 155,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Newcomer to the publishing world, illustrator and now author Ruby Roth is making waves with ",
      {
        "type": "emphasis",
        "children": [
          "T"
        ]
      },
      {
        "type": "emphasis",
        "children": [
          "hat"
        ]
      },
      {
        "type": "emphasis",
        "children": [
          "’s W"
        ]
      },
      {
        "type": "emphasis",
        "children": [
          "hy We Don’t Eat Animals: A Book About Vegans, Vegetarians, and All Living Things"
        ]
      },
      ". Her stunning artwork mesmerizes readers with visits to the Amazon Rainforest and the marvels of the big blue ocean, all while portraying the sentient nature of animals, or “earthlings,” and how they suffer when deprived of the basics (family, friends and a sound living environment) or placed in factory farm settings."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Touching upon many important issues such as hunting, overfishing, global warming, food choices, and others, this book is sure to be a wonderful conversation starter between children and their adult counterparts for many story times to come."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "After reading the book, kids can visit the ",
      {
        "type": "link",
        "href": "http://www.farmsanctuarykidzclub.com/",
        "external": true,
        "children": [
          "Farm Sanctuary’s Kidz Club"
        ]
      },
      " for interactive activities, games, “how-to-help” ideas, and other resources pertinent to the factory farming issues learned about in the book. Teachers, parents and educators are also encouraged to ",
      {
        "type": "link",
        "href": "mailto:cmullin@farmsanctuary.org",
        "external": true,
        "children": [
          "contact Farm Sanctuary"
        ]
      },
      " for humane education materials or assistance, some of which is available for ",
      {
        "type": "link",
        "href": "http://www.farmsanctuary.org/education/pr_teach_guides.html",
        "external": true,
        "children": [
          "download"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Appropriate for ages 4-10."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
