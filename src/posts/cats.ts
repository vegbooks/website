import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/02/s-raining-catscover.jpg",
    "alt": "It’s Raining Cats and Cats",
    "href": "/media/2010/02/s-raining-catscover.jpg",
    "width": 218,
    "height": 250,
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
            "href": "http://www.thegryphonpress.com/bk_raincat.html",
            "external": true,
            "children": [
              "It’s Raining Cats and Cats"
            ]
          }
        ]
      },
      " illustrates– literally– how many kitties an unspayed cat can be responsible for!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Jim and his mom bring their cat Molly home after she’s been spayed. Concerned when he notices her shaved belly, stitches and post-anesthesia wooziness, Jim questions his mother about why Molly had the operation. Jim’s mom invites him to imagine what might happen if Molly had kittens and her kittens had kittens…."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The author stops after a few generations but the marvelous illustrations more than make the point as Jim and Mom are quickly overrun with cats! Jim’s mom also uses the imaginary journey to help Jim realize why there aren’t enough homes for cats. There is much to like about this well-done book and it’s currently a favorite in our storytime rotation."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I recommend this fun, brightly illustrated story about a serious subject for ages 3 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
