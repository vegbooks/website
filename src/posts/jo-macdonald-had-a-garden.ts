import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/02/jo-mac-donald-had-a-garden-cover.jpg",
    "alt": "Jo MacDonald Had a Garden",
    "href": "/media/2012/02/jo-mac-donald-had-a-garden-cover.jpg",
    "width": 210,
    "height": 172,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "If you’ve read Huyen’s glowing review of ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/jo-macdonald-saw-a-pond/",
            "children": [
              "Jo MacDonald Saw a Pond"
            ]
          },
          ","
        ]
      },
      "my take on a publisher’s review copy of the companion ",
      {
        "type": "emphasis",
        "children": [
          "Jo MacDonald Had a Garden"
        ]
      },
      " will come as no surprise. We really enjoyed this book! In fact, my three-year-old daughter was much more engaged in this than the previous book in the series."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Written by Mary Quattlebaum and illustrated with watercolors by Laura J. Bryant, the book follows the style of the children’s song “Old MacDonald Had a Farm” but tells the story of Jo MacDonald’s garden through the four seasons. The rhymes flow naturally and never feel forced as Jo gets her hands dirty preparing soil, planting seeds, caring for the garden, and enjoying the fruits (and vegetables) of her and her friend’s labor. Extra details include the birds and insects in the garden going through their own cycles – birds laying eggs, etc. My favorite thing about the illustrations is how Jo and the little boy that is working alongside her seem to be dancing along with the song, like wiggling with worms or flapping their arms as if they were birds."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There is an implication that this is happening on or near Old MacDonald’s farm, such as an illustration featuring a bearded gentleman in overalls walking with a horse in the background but otherwise the only animals featured are those inhabiting the garden. In the comments of my review of ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/all-kinds-of-kisses/",
            "children": [
              "All Kinds of Kisses"
            ]
          }
        ]
      },
      ", reader Sara MM mentioned that when she reads books with farm animals to her two year old daughter she explains “throughout the story how the animals live on a sanctuary and what that means (in easy to understand form of course),” which I thought was worth sharing."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The garden setting is a little more identifiable than the pond setting for my daughter as we live in the desert and have always had a garden for her to learn in. Speaking of learning in the garden, there are a few pages of information at the end of the book that make it a useful teaching tool. If you enjoyed ",
      {
        "type": "emphasis",
        "children": [
          "Jo MacDonald Saw a Pond,"
        ]
      },
      " you will love this book. If you are wondering whether you need two books following this theme I’ll say we enjoyed seeing what else Jo has been up to. A great reading selection to celebrate spring being just around the corner."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "What are you planting this year?"
        ]
      },
      "We had luck with carrots last year so those will certainly figure into our garden plans. There’s nothing like sharing a small, fresh carrot four ways as a family."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
