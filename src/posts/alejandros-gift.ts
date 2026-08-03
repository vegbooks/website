import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/09/0811813428.jpg",
    "alt": "Alejandro’s Gift",
    "href": "/media/2010/09/0811813428.jpg",
    "width": 180,
    "height": 180,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Giving is an art form, and it takes elderly Alejandro a few tries before he offers just the right thing – in the right way – to those who share in this desert homestead. With a sole burro for companionship, Alejandro enjoys tending to his garden which brings curious and thirsty critters (squirrel, jackrabbit, and roadrunner) to his yard. Deducing that water is what drives the wildlife to his plot, Alejandro creates a watering hole specifically for them and the larger creatures like javelinas and coyotes. But not every gift, including Alejandro’s, is delivered in a way the locals can appreciate."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Due to the proximity of Alejandro’s house and a nearby road, the watering hole becomes a flop. Graciously, Alejandro constructs a new drinking spot that’s off the beaten path and not visible to onlookers, including its engineer. Knowing that the animals are benefiting from this gift, even if he can’t view it himself, brings Alejandro a simple, but great joy."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A down-to-earth, straightforward tale of life in the desert and the beauty found in acts of kindness, ",
      {
        "type": "emphasis",
        "children": [
          "Alejandro’s Gift"
        ]
      },
      " is a gem. Click here for a ",
      {
        "type": "link",
        "href": "http://www.youtube.com/watch?v=sglzergGLiE&playnext=1&list=PL92D781E5FD1FF24D",
        "external": true,
        "children": [
          "Reading Rainbow"
        ]
      },
      " episode on desert life, featuring a retelling of the book and the realistic artwork of ",
      {
        "type": "link",
        "href": "http://www.sylvia-long.com/",
        "external": true,
        "children": [
          "Sylvia Long"
        ]
      },
      "."
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
