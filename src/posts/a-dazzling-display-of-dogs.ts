import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/05/978-1-58246-343-8.jpg",
    "alt": "A Dazzling Display of Dogs",
    "href": "/media/2011/05/978-1-58246-343-8.jpg",
    "width": 210,
    "height": 266,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.powells.com/biblio/9781582463872?&PID=32442",
            "external": true,
            "children": [
              "A Dazzling Display of Dogs"
            ]
          }
        ]
      },
      " is dazzling indeed! The book is comprised of non-linear poems that are set within bright illustrations. ",
      {
        "type": "link",
        "href": "http://www.wertzateria.com/index.html",
        "external": true,
        "children": [
          "Michael Wertz’s"
        ]
      },
      " graphic illustrations makes each poem sparkle and dance. Author ",
      {
        "type": "link",
        "href": "http://www.betsyfranco.com/",
        "external": true,
        "children": [
          "Betsy Franco"
        ]
      },
      "keeps her poems short but each captures the essence of the doggie moment. My favorite is “Found at the Pound,” which describes a family’s visit to the shelter, although who can resist “Emmett’s Ode to His Tennis Ball” or “Old Lottie on a Walk”?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is another great book of dog-related poetry that kids ages 4 and up will enjoy reading and looking at.",
      {
        "type": "strong",
        "children": [
          {
            "type": "lineBreak"
          }
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
