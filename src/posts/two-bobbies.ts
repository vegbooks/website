import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "alt": "Two Bobbies",
    "href": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "width": 210,
    "height": 297,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "It’s been five years since Hurricane Katrina first struck New Orleans. While much of the city seems to have recuperated, sections like the Lower Ninth Ward look more like untamed fields than once lively homesteads. And emotional stories like that of the ",
      {
        "type": "link",
        "href": "http://www.twobobbies.com/",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Two Bobbies"
            ]
          }
        ]
      },
      " still sit with us, reminding us of our fragility in the face of nature and the importance of keeping our family members, human and non-, safe and close at hand. (Speaking of which, do you have an ",
      {
        "type": "link",
        "href": "http://www.fema.gov/kids/pets.htm",
        "external": true,
        "children": [
          "emergency plan"
        ]
      },
      " in place for your animal family?)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Tailless, but certainly not friendless, blind Bob Cat and previously chained canine, Bobbi, were abandoned (the authors speculate) when Katrina hit. They fended for themselves for four months, enduring hunger, danger and other struggles we can only imagine. The solemn beauty of the book is that it shows the incredible strength of friendship in the midst of harrowing hardship. New Orleans resident and illustrator, ",
      {
        "type": "link",
        "href": "http://jean-cassels.com/",
        "external": true,
        "children": [
          "Jean Cassels"
        ]
      },
      ", does a superb job capturing the stark, post-disaster landscape and the bright future that awaits the unlikely pair of friends. Thanks to Best Friends Animal Society volunteers and a TV appearance on CNN (I <3 you, Anderson Cooper!), the dynamic duo eventually finds a suitable new home."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Two Bobbies can be used to discuss natural disasters and the need for preparation, volunteering/ animal rescue efforts, what it means to be a good guardian/suitable adopter, and ",
      {
        "type": "link",
        "href": "http://www.unchainyourdog.org/",
        "children": [
          "chained dog issues"
        ]
      },
      ". A percentage of the proceeds benefit Best Friends."
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
