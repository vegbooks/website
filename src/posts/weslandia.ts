import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/weslandia.jpg",
    "alt": "Weslandia",
    "href": "/media/2010/08/weslandia.jpg",
    "width": 210,
    "height": 180,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In the hum drum of suburbia, Wesley is an inharmonious presence, disliking pizza, soda and, goodness gracious, even professional football! Let’s root for the ambitious young underdog as he subtly sticks it to his more normal classmates in this tale about a special summertime project."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Utilizing knowledge he soaked up in school, Wesley decides to establish his own civilization, ",
      {
        "type": "emphasis",
        "children": [
          "Weslandia"
        ]
      },
      ". Harnessing the raw materials provided by an extraordinary crop, our hero breakfasts on the fruit, whole or juiced, boils, fries and roasts the tubers, weaves fibers from the woody bark to fashion a robe, and grinds the seeds to produce oil, which serves as a viable bug repellent. In more grandiose accomplishments, Wesley devises a new counting system, creates his own sporting event, engineers suitable housing, and even develops a native language. More importantly, through the rise of his culture, Wesley becomes a happier, morale-boosted youth and attracts friends on his own terms, in his own way."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A great book for any misfit, budding “founding father,” or back-to-nature enthusiast. ",
      {
        "type": "link",
        "href": "http://www.trumpetclub.com/primary/activities/weslandia.htm",
        "children": [
          "Look here"
        ]
      },
      " for related activities."
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
