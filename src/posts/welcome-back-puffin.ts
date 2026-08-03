import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2009/11/rd-welcomepuffin1.jpg",
    "alt": "Welcome Back, Puffin!",
    "href": "/media/2009/11/rd-welcomepuffin1.jpg",
    "width": 189,
    "height": 284,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.jacketflap.com/persondetail.asp?person=35908",
        "external": true,
        "children": [
          "Dawn Bentley"
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "http://www.jacketflap.com/persondetail.asp?person=15926",
        "external": true,
        "children": [
          "Beth Stover"
        ]
      },
      " have collaborated on four wildlife books in the Soundprints Read-and-Discover “Hoppers” series for kids preschool to first grade: ",
      {
        "type": "emphasis",
        "children": [
          "Welcome Back, Puffin!"
        ]
      },
      ", ",
      {
        "type": "emphasis",
        "children": [
          "Wake Up, Black Bear!"
        ]
      },
      ", ",
      {
        "type": "emphasis",
        "children": [
          "Busy Little Beaver"
        ]
      },
      ", and ",
      {
        "type": "emphasis",
        "children": [
          "The Prickly Porcupine"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The series features natural history information about each species, told as a story and accompanied by life-like illustrations. In ",
      {
        "type": "link",
        "href": "http://www.audubon.org/bird/puffin/OnlineStore/BooksPosters.html",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Welcome Back, Puffin!"
            ]
          }
        ]
      },
      ", for example, Puffin flies to an island to have a baby, returning to a burrow she’s used before. The book describes how Baby Puffin transforms from an egg to a colorless bird to an adult and what he and his mother must do at each stage to ensure their survival."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I like that these books acknowledge the animals’ identities — including their sex and their family bonds. (No animal is an “it.”) Vegetarian parents should be aware that the books on puffins and bears might raise questions about why some animals eat other animals, and why we don’t."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
