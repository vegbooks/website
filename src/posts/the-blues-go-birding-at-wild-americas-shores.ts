import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/blues2-cmyk-2in.jpg",
    "alt": "The Blues Go Birding at Wild America’s Shores",
    "href": "/media/2010/08/blues2-cmyk-2in.jpg",
    "width": 210,
    "height": 190,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The Blues Go Birding"
        ]
      },
      " is a nice introduction to ornithology as well as a jaunt through geography for children and adults. This deceivingly slim paperback is packed with fun and educational information about birds along America’s shoreline and various regions, refuges, and parks that are bird-friendly. The book contains a storyline narrated by five bird characters who are introduced on the title page, large and colorful illustrations of each of the 13 birds in their environment, a little “bird note” trivia box, a geographical note of where the bird can be found, and field guide info like wingspan and food for each bird. It was a little overwhelming when I first cracked the book open but readers can select which sections to focus on, instead of trying to read all the parts at once."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Although geared towards an older crowd than my preschooler, it still held her interest and she enjoyed the cartoonish bluebird characters who fly through the pages to describe various birds. The inane bluebird comments in the comic speech bubbles will capture children’s interest since it did my daughter’s."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Veg parents should note there are a couple bird illustrations with fish in their mouths and noted food sources for all the birds include fish, insects, amphibians, etc. (The great blue heron can also eat small mammals!)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Perfect for the road-tripping ",
      {
        "type": "link",
        "href": "http://www.vegsource.com/homeschool/",
        "external": true,
        "children": [
          "homeschool"
        ]
      },
      " parents, teachers focusing on a bird/geography unit, or just for bird lovers and watchers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5-9."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
