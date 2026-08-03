import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/12/tofu.jpg",
    "alt": "Tofu and T. rex",
    "href": "/media/2010/12/tofu.jpg",
    "width": 210,
    "height": 315,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "After a botched attempt at activism involving her Texas school’s mascot (“a poor, ancient, drugged up steer” named Angus),the eighth-grade protagonist in ",
      {
        "type": "link",
        "href": "http://www.gregleitichsmith.com/mt/books/archives/2006/08/tofu_and_trex.html",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Tofu and T. rex"
            ]
          }
        ]
      },
      ", Frederika Murchison-Kowalski, is sent to live with her grandfather and dinosaur-obsessed cousin in Chicago. Freddie is a recent convert to veganism – formerly octo-lavo, she notes – and part of the tension in this novel arises because her grandfather, while far more accepting of her lifestyle than other grandfathers might be, runs a popular butcher shop and deli and requires his grandchildren to help out. The author maintains this tension in an interesting and thoughtful way, especially around the family’s participation in the annual Wurstfest. An additional plot line revolves around Freddie’s attempt to help her cousin gain admission to the exclusive private school that she attends– full of bright, quirky kids like Freddie."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Freddie is portrayed as a very intelligent person who is comfortable asking hard questions, as well as being an activist, leader, vegan and student. She is also the kind of kid who finds herself in many different scrapes, though she has her heart in the right place as she navigates the worlds of school, family, relationships and activism. While her veganism is a prominent part of the novel, this book does a nice job of making her situations seem humorous without completely lampooning her choices. And though there is a lot of humor in this book, it also addresses some of the very real issues that need to be worked out as people grow. Overall, I felt like this book was a sympathetic portrayal of a young vegan."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Tofu and T. rex"
        ]
      },
      " is a nice find for older elementary or middle-schoolers, and those interested in checking out a discussion guide to the book can find one ",
      {
        "type": "link",
        "href": "http://wildgeeseguides.blogspot.com/2010/01/tofu-and-t-rex.html",
        "external": true,
        "children": [
          "here"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
