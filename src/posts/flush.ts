import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/07/978-0-375-84185-9.jpg",
    "alt": "Flush",
    "href": "/media/2010/07/978-0-375-84185-9.jpg",
    "width": 195,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Carl Hiaasen is probably best known for his beach-worthy page turners, which combine the environmental ethics of ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/The_Monkey_Wrench_Gang",
        "external": true,
        "children": [
          "Edward Abbey"
        ]
      },
      " with the fluff of a novel you might pick up in an airport bookstore. Happily for eco-minded kids, in recent years Mr. Hiaasen began writing ",
      {
        "type": "link",
        "href": "http://www.carlhiaasen.com/young.html",
        "external": true,
        "children": [
          "novels for the older elementary crowd"
        ]
      },
      ", including the controversial novel ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.commonsensemedia.org/book-reviews/hoot",
            "external": true,
            "children": [
              "Hoot"
            ]
          }
        ]
      },
      " that inspired the allegedly “eco-terrorist” movie of the same name."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "His most recent kids book, ",
      {
        "type": "emphasis",
        "children": [
          "Flush"
        ]
      },
      ", involves similar ",
      {
        "type": "link",
        "href": "http://www.greenisthenewred.com/blog/",
        "external": true,
        "children": [
          "acts of civil disobedience in defense of the environment"
        ]
      },
      ". When the Underwood family learns that a casino boat is literally flushing its holding tank into the waters of the Florida Keys, and that law enforcement is reluctant to do anything about it, they’re forced to take matters into their own hands. In the end, the family’s actions, together with the bad guys’ carelessness, combine to bring the pollution to an end."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian parents should be aware that while Mr. Hiaasen writes beautifully in support of the rights of nature and against animal abuse, fishing is portrayed in a positive light."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 8-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
