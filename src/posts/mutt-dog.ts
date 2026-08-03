import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/07/mutt.jpg",
    "alt": "Mutt Dog!",
    "href": "/media/2010/07/mutt.jpg",
    "width": 210,
    "height": 244,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Kiddo has a couple books that will ",
      {
        "type": "link",
        "href": "/reviews/dog-heaven/",
        "children": [
          "bring me to tears"
        ]
      },
      ", and ",
      {
        "type": "emphasis",
        "children": [
          "Mutt Dog!"
        ]
      },
      "by ",
      {
        "type": "link",
        "href": "http://www.stephenmichaelking.com/",
        "external": true,
        "children": [
          "Stephen Michael King"
        ]
      },
      " is one of them. The book’s sensitive approach to homelessness, human and canine, and its happy ending get me every time."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Mutt Dog!"
        ]
      },
      " will help kids understand why it’s important to ",
      {
        "type": "link",
        "href": "http://www.adoptdontbuy.org/",
        "external": true,
        "children": [
          "adopt, not buy"
        ]
      },
      ", companion animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Parents should also be prepared for questions about why some people and animals have homes while others do not. Talking through these issues can be difficult, especially with young children, but ",
      {
        "type": "link",
        "href": "http://www.whatkidscando.org/featurestories/2010/02_beta_club2/index.html",
        "external": true,
        "children": [
          "putting a face on homelessness"
        ]
      },
      " is probably the first step in working to eliminate it altogether."
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
