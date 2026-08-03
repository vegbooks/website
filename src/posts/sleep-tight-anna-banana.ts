import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2014/03/anna.jpg",
    "alt": "Anna",
    "href": "/reviews/sleep-tight-anna-banana/",
    "width": 210,
    "height": 156,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Written in the present tense with a graphic novel style, ",
      {
        "type": "emphasis",
        "children": [
          "Sleep Tight, Anna Banana"
        ]
      },
      " by Dominique Roques and illustrated by Alexis Dormal is the first picture book from publisher First Second Books and the first of a planned series of books featuring Anna Banana."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Anna is a little girl that wants to stay up reading late and night even though her stuffed animals want to go to sleep. She won’t even let them scoot away to get some rest, preferring them next to her while she leaves the lights on to read. But when Anna wants to go to sleep the animals figure turnabout is fair play. An apology from Anna is all it takes to get everyone on the same sleep schedule."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is very straightforward and sweet. I love the idea of a little one staying up late to read instead of fighting bedtime for some other reason. I know I used to pretend to go to bed only to try to finish books by flashlight under the covers as a kid. Granted, my parents enforced a 7:30 pm bedtime for us even up to high school so my rule breaking was to be expected, but I digress. There should be no issues in this book for veg families as the animals are plush ones given life by Anna’s imagination. This appealed more to my three-and-a-half-year-old son than my five-and-a-half-year-old daughter but both had fun with the lively illustrations and playful story."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "All ages."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Advance reader edition provided by the publisher, First Second Books. Detailed images can be found ",
          {
            "type": "link",
            "href": "http://www.firstsecondbooks.com/books/new-book-sleep-tight-anna-banana/",
            "external": true,
            "children": [
              "here"
            ]
          },
          "."
        ]
      },
      {
        "type": "emphasis",
        "children": [
          "Interior images ",
          {
            "type": "link",
            "href": "http://us.macmillan.com/sleeptightannabanana/AlexisDormal",
            "external": true,
            "children": [
              "here"
            ]
          },
          "."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
