import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "World Water Watch",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0688166970",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      "Lured by its cover featuring adorable marine life and its eco-conscious title, I eagerly flipped through the pages of ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0688166970?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0688166970",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "World Water Watch"
            ]
          }
        ]
      },
      ". What I found inside was a mixed bag. The book presents our gloomy environmental situation within the framework of several geographical locations, for example, we learn in the first section about otters in Alaska and the deleterious effects that oil spills have on them (death by drowning or suffocation)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The way the book juggles the text can be confusing. The severity of the green sea turtles’ plight in Mexico is another illustration, with the book noting that the creatures were nearly driven to extinction in the late 1980s. (As the book mentions, ",
      {
        "type": "link",
        "href": "http://www.npr.org/templates/story/story.php?storyId=113880660",
        "external": true,
        "children": [
          "Mexico declared a ban on slaughtering sea turtles in 1990"
        ]
      },
      ".) I found this book’s section discussing the Juan Fernandez fur seal (residents of offshore Chilean islands) to be particularly unsettling. The section notes that the seals were hunted for their fur to make coats, gloves and purses and that their meat was ground up for pet food. The sole warning in this section of the book is that other fur seals continue to be threatened seems a strange choice to include, and with no real value without any suggestions for action. ",
      {
        "type": "emphasis",
        "children": [
          "World Water Watch"
        ]
      },
      " also takes a stab at discussing ",
      {
        "type": "link",
        "href": "http://www.chem.unep.ch/pops/",
        "external": true,
        "children": [
          "POPs"
        ]
      },
      " using polar bears to illustrate the long term effects of chemical and pesticide use. The book’s illustrations are excellent but the text and story never properly gel."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Although I’m no stranger to reading books about the imperfect state of the Earth, the matter-of fact-tone regarding the ecological disasters portrayed did not sit well with me. My strong preference would have been to see positive actions highlighted. I believe that if we are going to read a child books with such heavy themes, we should also be presenting solutions and inspiration. While my child seemed to have no real issues with this book, it isn’t one that will see much rotation, despite my initial enthusiasm."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 6 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
