import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/08/magic-trash-72.jpg",
    "alt": "Magic Trash",
    "href": "/media/2011/08/magic-trash-72.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Pairing rhythmic, sometimes-rhyming prose with expressive illustration, the forthcoming book ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.charlesbridge.com/productdetails.cfm?PC=5408",
            "external": true,
            "children": [
              "Magic Trash: A Story of Tyree Guyton and His Art"
            ]
          }
        ]
      },
      " tells the uplifting story of the Detroit native who saved his neighborhood by creating art out of trash. Beginning by recounting that Guyton made toys for himself and his siblings out of trash as a child, this ",
      {
        "type": "link",
        "href": "http://wakingbraincells.com/2011/08/23/review-magic-trash-by-jane-shapiro/",
        "children": [
          "biography"
        ]
      },
      " hits many of the milestones in his life, including the passing of his grandfather, who first put a paint brush in his hands and inspired him to become an artist, and his protracted battle with the city to preserve his art on Heidelberg Street, which culminated in a court ruling in his favor."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Parents should be aware that this book touches on important social issues, including poverty, drug-dealing, and the 1967 Detroit riot. Like Guyton himself, author J.H. Shapiro tends to focus on the positive, accentuating how Guyton and his neighbors reclaimed their neighborhood, evicting troublemakers by painting abandoned houses and posting a “magenta guard dog” on a porch."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The author’s note includes photos of Guyton and his neighborhood, as well as a link to the ",
      {
        "type": "link",
        "href": "http://www.heidelberg.org/",
        "external": true,
        "children": [
          "Heidelberg Project"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This inspiring book is a good choice for children ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
