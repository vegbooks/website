import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/01/978-0-375-93527-5.jpg",
    "alt": "Of Thee I Sing",
    "href": "/media/2011/01/978-0-375-93527-5.jpg",
    "width": 210,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Barack Obama’s inspiring children’s book ",
      {
        "type": "emphasis",
        "children": [
          "Of Thee I Sing"
        ]
      },
      " is part love song to his daughters and part ode to the heroes who made this country great."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Many of the historical figures featured in this book — such as Helen Keller and Jackie Robinson — are universally loved. Others may provoke discussion. Vegetarians of a pacifist inclination may, for example, want to discuss why George Washington is featured as a wartime general, rather than a statesman, and what roles Geronimo and Sitting Bull played in the wars of the 1800s. (They might also tell children that, while not mentioned in the text, ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Helen_Keller#Political_activities",
        "external": true,
        "children": [
          "Helen Keller was a pacifist"
        ]
      },
      ".)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Perhaps one of the most interesting questions raised by this book is, “Which heroes have been left out?” There is no mention of the pioneers of the environmental and animal protection movements, such as ",
      {
        "type": "link",
        "href": "http://www.rachelcarson.org/",
        "external": true,
        "children": [
          "Rachel Carson"
        ]
      },
      ", ",
      {
        "type": "link",
        "href": "http://www.americanheritage.com/articles/magazine/ah/1967/1/1967_1_28.shtml",
        "external": true,
        "children": [
          "Henry Bergh"
        ]
      },
      ", and ",
      {
        "type": "link",
        "href": "http://www.aldoleopold.org/AldoLeopold/leopold_bio.shtml",
        "external": true,
        "children": [
          "Aldo Leopold"
        ]
      },
      ". Children may also be sensitive to the fact that while the text is addressed to President Obama’s daughters, only five of the thirteen Americans are women."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "For fun, vegetarian kids may enjoy checking out ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Category:American_vegetarians",
        "external": true,
        "children": [
          "this Wikipedia entry about famous American vegetarians"
        ]
      },
      " after they’ve read the book. They’ll note at least one of the book’s figures on the list."
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
