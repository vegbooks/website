import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/08/are-you-eating-something-green-hi-res.jpg",
    "alt": "Are You Eating Something Green?",
    "href": "/media/2011/08/are-you-eating-something-green-hi-res.jpg",
    "width": 210,
    "height": 174,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Upon receiving a review copy of this collection of “36 color-and-learn placemats,” I immediately tore out one of the perforated pages and set it under my almost 3 year old daughter’s dinner plate. The sheet is about the size of a piece of regular paper so the plate covered most of the image but after dinner we examined the page together and discussed it. She took to the concept of talking about the colors of her food quickly and tried her hand at coloring the back of the placemat. I can see how getting children excited about the rainbow of colors on their plate is a good idea, we talk more about it since trying a few of these placemats."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It is a unique, veg friendly concept. Each of the pages in the book features a cute little apple-like character called “greenie” (from a companion board book called ",
      {
        "type": "emphasis",
        "children": [
          "Are You Eating Something Red?"
        ]
      },
      ") stating, for example, “I’m green, some apples are red, are you eating something red?” 12 sheets use green while there are 6 each of the other colors: red, orange, purple, and yellow. Fruits and veggies are both featured and on the back of each colored page is a line drawing of one fruit or veggie along with “greenie” for a child to color, Amazon.com has some good customer photos if you want to see the concept in action."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "We weren’t always eating the featured fruits or veggies but she didn’t seem to mind. The thick paper lasted one to two meals so I’d suggest coloring the back before using each sheet as a placemat so it isn’t warped by inevitable spills and dribbles. Overall, a fun idea though I’d suggest putting the sheets under a clear plastic placemat to be more “green” so that you aren’t just gradually throwing away the pages of the book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3 to 8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
