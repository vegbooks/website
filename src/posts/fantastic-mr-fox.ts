import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/07/fantastic-mr-fox.jpg",
    "alt": "Fantastic Mr. Fox",
    "href": "/media/2010/07/fantastic-mr-fox.jpg",
    "width": 204,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "When mean, crusty farmers become fed up with Mr. Fox’s pilfering of their poultry, they decide to eradicate Mr. Fox and his family. They declare a full-on war against Mr. Fox and declare their intentions to stop at nothing to achieve their goal of annihilating the Fox family. This includes stakeouts with guns and vivid depictions of construction machinery ruthlessly gorging the ground in an attempt to rout out the foxes."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It is soon apparent that the farmers’ wrath doesn’t only impact the foxes– other woodland creatures are caught in the fray. With the titular character described as fantastic, you know that a resolution will manifest, and charismatic Mr. Fox does not disappoint. He creates a carnivorous feast for the hungry and upset animals caught in the fallout, with some carrots for the rabbits thrown in as well. The question of why rabbits are dining with so many hungry carnivores remains a fairly open one."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Mr. Fox is affable, and many non-veg children and families have no hesitation aligning themselves with this witty father. He does, however, steal and eat an awful lot of birds for his family, making the story line a much tougher sell for veg families. The life of the farmed birds is, as in our current cultural structure, not given much weight."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Parents will also want to note that ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/book-reviews/Fantastic-Mr-Fox.html",
        "external": true,
        "children": [
          "there is a lot of violence"
        ]
      },
      ", extreme disrespect for other living beings and the earth, discussion of drinking and starvation, and some less than ideal role modeling. To my way of thinking, if this book is being read by a young veg family member, it is worth the time for an adult to go over some of the themes and discuss the young readers’ reactions with them."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is for older kids, ages 8 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
