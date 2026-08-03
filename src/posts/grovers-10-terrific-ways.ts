import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/04/978-0-679-81384-2.jpg",
    "alt": "Grover’s 10 Terrific Ways to Help Our Wonderful World",
    "href": "/media/2011/04/978-0-679-81384-2.jpg",
    "width": 210,
    "height": 209,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I have no idea where we picked up this 1992 paperback, but my daughter and I love reading this story over and over."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "An enthusiastic Grover introduces and lists the simple things we can all do to save energy, conserve water, and clean up our environment and the lovable Muppet crew clearly demonstrates each in lively illustrations. Things like turning off the water while brushing your teeth, closing the refrigerator door so we don’t waste energy, and cleaning up our parks and gathering recyclables up are all things kids and adults can practice doing consistently. There are reminders about turning off lights, tvs, and using cold vs. hot water when possible to conserve energy."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "At the beginning, Grover explains in simple terms why we should care for the earth and at the end, Grover reviews the list of things all of us are capable of doing or doing better. Although I wish they also mentioned ",
      {
        "type": "link",
        "href": "http://www.alternet.org/environment/134650/the_startling_effects_of_going_vegetarian_for_just_one_day/",
        "external": true,
        "children": [
          "eating vegetarian"
        ]
      },
      " as an easy way to ",
      {
        "type": "link",
        "href": "http://www.earthsave.org/globalwarming.htm",
        "external": true,
        "children": [
          "help our world"
        ]
      },
      ", you can’t go wrong with compassionate Grover and the educational Sesame Street gang."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-5+."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
