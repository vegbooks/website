import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/dancingdeer.jpg",
    "alt": "The Dancing Deer and the Foolish Hunter",
    "href": "/media/2010/06/dancingdeer.jpg",
    "width": 198,
    "height": 240,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Based on the truisms that all life is interconnected and that we cannot artificially replicate nature, ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.elisakleven.com/books.html",
            "external": true,
            "children": [
              "The Dancing Deer and the Foolish Hunter"
            ]
          }
        ]
      },
      " follows a hunter who discovers a deer dancing joyfully in the forest and kidnaps her to sell to the circus. When the deer refuses to dance without the singing birds, the hunter captures and cages two songbirds (after first trying to cajole the deer to dance to the squawking radio). When the birds can’t sing without the whistling of the trees, the hunter uproots some, and so on. At each obstacle, the hunter unsuccessfully tries to simulate the natural world (a glass of water with salt for the sea, frozen fish sticks for live fish, etc.), before snatching something else from its home. Eventually, the deer convinces the hunter to return all the plants, animals and elements that he abducted back to the land and sea with the promise that she’ll teach him to dance."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While the “web of life” message is a tad heavy, and the circus premise seems a bit contrived, the whimsical collage illustrations, the lively language choices, and the worthy message make for an engaging story that offers numerous opportunities for discussion (the interconnectedness of life, the exploitation of animals, the “replacement” of nature, peaceful versus more violent pastimes, etc.). Veg parents should note that the hunter wears a coonskin cap and carries a rifle."
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
