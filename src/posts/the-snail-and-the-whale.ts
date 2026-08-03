import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/06/the-snail-and-the-whale.jpg",
    "alt": "The Snail and the Whale",
    "href": "/media/2011/06/the-snail-and-the-whale.jpg",
    "width": 210,
    "height": 191,
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
            "href": "http://annieandaunt.blogspot.com/2011/06/guest-blog-dynamite-duo.html",
            "external": true,
            "children": [
              "The Snail and the Whale"
            ]
          }
        ]
      },
      " was so entertaining that it helped my four-year-old and my friend’s active two-year-old stay seated and riveted during our lengthy lunch at a restaurant. Sure, I had to read between bites but the rhyming couplets were a succulent mouthful and the adorable illustrations were packed with delectable details that the kids just ate up."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A wander-lusting, spelling snail advertises for and boards the tail of a tour-guiding ",
      {
        "type": "link",
        "href": "http://animals.nationalgeographic.com/animals/mammals/humpback-whale/",
        "external": true,
        "children": [
          "humpback whale"
        ]
      },
      " for a cruise around the world. They see the magnificent sights of the sky, sea, and land until the whale is pushed off course by speedboats and gets beached. Although “the snail felt helpless and terribly small,” she charges to the rescue in an unconventional manner."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I love the emphasis on the beauty of the natural world, the tasteful pro-environment message, and especially the emphasis that small or large, we can make a huge difference together. I highly recommend this sweet and savory “save the whale” adventure tale that is appetizing to both genders and palatable for adults as well as children."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
