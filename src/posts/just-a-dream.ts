import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/05/0395533082-lres-2.jpg",
    "alt": "Just a Dream",
    "href": "/media/2010/05/0395533082-lres-2.jpg",
    "width": 209,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Famous for timeless works such as ",
      {
        "type": "emphasis",
        "children": [
          "Jumanji"
        ]
      },
      ", ",
      {
        "type": "emphasis",
        "children": [
          "Zathura"
        ]
      },
      " and ",
      {
        "type": "emphasis",
        "children": [
          "The Polar Express"
        ]
      },
      ", Chris Van Allsburg brings his exquisite artwork and poignant words to the pages of ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.spaghettibookclub.org/title.php?grade=&title=Just%20A%20Dream",
            "external": true,
            "children": [
              "Just a Dream"
            ]
          }
        ]
      },
      ", an environmental tale cloaked in the guise of an “I could care less” youth. Young Walter is a typical urbanite, tossing recyclables into the trash, mocking his neighbor Nancy for receiving a tree for her birthday, and preferring to daydream about living a life much like that of his favorite TV show- with helper robots and a personal plane."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "He dreams that night about the future, but it’s certainly nothing like what he had in mind. Here’s where Mr. Van Allsburg’s talent shines. Artistically, he portrays each vivid scene from a unique perspective –from a mountaintop to the oceans’ lapping waves to a bird’s eye view. Walter’s bed takes him to harrowing landscapes: his childhood home devoured by a landfill, poisonous smokestacks that churn out medicine to combat “burning throats and itchy eyes,” fishermen who celebrate catching their second, tiny fish for the week. Come morning, Walter finds that owning a plane doesn’t seem important. In his pajamas, he bolts for the garbage to sort the recycling and for his birthday asks for a tree to plant next to Nancy’s."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The ending a mixed bag. For some, perhaps, the ideal future is a suburban setting where families do hang their laundry out to dry and use human-powered mowers for the lawn, as Mr. Van Allsburg depicts. How do your kids envision an ideal future for themselves, the animals and the earth?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "For interactive activities, wallpaper, bookmarks, etc, visit the official Chris Van Allsburg ",
      {
        "type": "link",
        "href": "http://www.chrisvanallsburg.com/home.html",
        "external": true,
        "children": [
          "web site"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4- 8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
