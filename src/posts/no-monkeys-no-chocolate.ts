import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/09/no-monkeys-no-chocolate-300.jpg",
    "alt": "NoMonkeysNoChocolate_300",
    "href": "/media/2013/09/no-monkeys-no-chocolate-300.jpg",
    "width": 210,
    "height": 164,
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
            "href": "http://www.charlesbridge.com/productdetails.cfm?PC=5769",
            "external": true,
            "children": [
              "No Monkeys, No Chocolate"
            ]
          }
        ]
      },
      " is a children’s book about the web of life repackaged for a new generation. Who wouldn’t want to read about some adorable monkeys and chocolate? Who knew there was even a connection?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Authors ",
      {
        "type": "link",
        "href": "http://www.melissa-stewart.com/",
        "external": true,
        "children": [
          "Melissa Stewart"
        ]
      },
      " and Allen Young team up to deliver a multi-level story about how we wouldn’t have chocolate if it weren’t for the all the different parts of a plant (cocoa pods, flowers, leaves, stems, roots, and beans) and their use by different animals for food (midges, leaf-cutter ants, coffin flies, aphids, anoles, and, yes, monkeys) who then help to pollinate, distribute seeds, control pests, and other important acts needed to continue the cycle of life and production of cocoa beans!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In essence, there are two stories being told: a simpler sequence of text for younger audiences and a second more in depth narrative with much more emphasis on plant science and biology. My favorite part has to be a mini sidebar conversation that takes place on every page with two quite humorous bookworms –"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "Bookworm 1: “That’s what happens inside a flower? Plants are amazing!”",
          {
            "type": "lineBreak"
          },
          " Bookworm 2: “You can say that again!”",
          {
            "type": "lineBreak"
          },
          " Bookworm 1: “Plants are amazing!”"
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kids have to hold out until the very last page to find out the monkey’s part in all of this, but they’ll enjoy the journey there. Nicole Wong’s illustrations are colorful, beautiful, and honest. The authors end with a note on current cocoa bean farming which actually produces less crop than in rainforest cocoa groves and also provide a list of what kids can do to help save rainforests. Surprisingly there’s no mention of ",
      {
        "type": "link",
        "href": "http://www.foodispower.org/chocolate-list/",
        "external": true,
        "children": [
          "fair-trade chocolate"
        ]
      },
      ", a big concern for any ethical consumer."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5 to 8."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Charlesbridge provided a review copy."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
