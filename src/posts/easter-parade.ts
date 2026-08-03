import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/04/easter-parade-hc-c.jpg",
    "alt": "Easter Parade",
    "href": "/media/2011/04/easter-parade-hc-c.jpg",
    "width": 210,
    "height": 163,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "A lovely, vegan-friendly Easter book/song about an Easter bonnet and going through town for the Easter parade. I picked up this story serendipitously at the library and was hopeful that I had found a chicken-free, eggless story for Easter. I lucked out because not only is ",
      {
        "type": "emphasis",
        "children": [
          "Easter Parade"
        ]
      },
      " animal-friendly (well, there are some illustrations of eggs that decorate the bonnet but I suspect they are plastic since no child I know decorates her hat with real eggs then wears it about town), but it is also non-religious in it’s fun celebration of spring and fathers and daughters."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story narration itself is the ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Irving_Berlin",
        "external": true,
        "children": [
          "composer Irving Berlin"
        ]
      },
      "’s song lyrics but Lisa McCue takes the liberty of translating them through images of a father speaking/singing to his daughter (sorry, boys). Although Berlin’s lyrics may have pointed more towards a gentlemanly parade date between two people in a romantic relationship, McCue interprets the words in a more innocent and tender fashion as she depicts a father bunny proudly taking his young daughter through town to the parade. The cute, detailed pictures practically tell a whole new story from the lyrics as the daughter bunny receives additions to her hand-decorated hat from friendly townsanimals while she and her father walk cheerfully through town. I enjoyed the bits of humor (such as the renaming of famous New York City stores to the likes of Bird Orf Goodman and having to chase down the spectacular wind-blown bonnet) interspersed through the illustrations as well. Several pages at the end of the book contain Berlin’s words and music for those inclined to sing and play it. I enjoyed this upbeat, colorful tipping-the-hat to spring and warm relationships. (And bonus points to Berlin and McCue that I didn’t have to veganize it!)"
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
