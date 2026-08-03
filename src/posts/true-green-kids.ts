import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "alt": "True Green Kids",
    "href": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "width": 210,
    "height": 315,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I’m truly impressed by the inspired actions and activities Kim McKay and Jenny Bonnin challenge youngsters to incorporate into their daily lives in ",
      {
        "type": "link",
        "href": "http://www.betruegreen.com/PageBlue.aspx?element=79&category=1",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "True Green Kids"
            ]
          }
        ]
      },
      ". Running the gamut from “in your room” to “on vacation,” this National Geographic publication motivates readers and their families to consider their green footprint in every aspect of their lives – all with the pizzazz of energetic script, lively photography and whimsical graphic design work."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While the basics such as paper recycling, gardening at home, and shorter showers are covered, dozens of other suggestions brim with ingenuity and initiative-taking encouragement. Within the pet section, kids are challenged to walk their dogs to not only keep them fit, but to pick up litter along route. ",
      {
        "type": "emphasis",
        "children": [
          "True Green Kids"
        ]
      },
      " further proposes that youngsters use alternatives to plastic baggies for their pooch’s poop, such as a worm compost system. Additionally, the book is very solid on water and energy conservation tactics as well as creative re-use and re-purpose ideas. And I love that the on-line references it provides are so varied, reflecting a number of different agencies and organizations."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a great reference guide to keep in the home and get kids revved up for environmental stewardship. With one exception, veg parents will have their values reinforced throughout the text as it does promote eating local, organic, produce-laden diets. The one exception is #77, “hold the tuna,” which goes on to say that “fish is an important part of a healthy diet…whether you go fishing or buy fish from a store, make sure you don’t eat species that are under threat.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
