import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/12/book-cover.jpg",
    "alt": "Call Me Madame President",
    "href": "/media/2011/12/book-cover.jpg",
    "width": 210,
    "height": 278,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I like the idea of ",
      {
        "type": "link",
        "href": "http://callmemadamepresident.com/",
        "external": true,
        "children": [
          "this book"
        ]
      },
      ". Eight-year-old Amanda uses her IMAGINATION to pretend that she is president. When she is president, she and her dog Coolidge will have the run of the White House, attending state dinners and meeting with the troops. She won’t have any problems with public speaking, because as her mom always says, Amanda loves to talk. Her parents will be so proud watching her on TV. She will spend her time talking about the issues that matter the most –kids, animals, seniors, the environment, and many others. Her pesky older brother will finally apologize for being mean and ask for a cabinet position but she’ll tell him that she has to think it over. And at the end of each day, she and her dog will sleep together in Abraham Lincoln’s bed."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I say that I like the idea of this book because it seems like a nice book. A young girl dreams of being president without any mention in the book that women have never done this before. The issues that she cares about are issues that are important to me, including animal rights. But the book doesn’t have flow. The rhymes are forced (e.g., sweeties rhymed with meetings). And I don’t care for the pictures. The illustration is just not my style, so I try not to look at the images as I read the book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "When all is said and done, we will keep this book because the pros outweigh the cons. Girls should dream of being president and they should consider the issues that are most important to them (like animal rights). But next time, let’s do a little better."
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
