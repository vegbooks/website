import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/06/where-to-sleep-board-cover.jpg",
    "alt": "Where_To_Sleep_BoardCover",
    "href": "/media/2013/06/where-to-sleep-board-cover.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I received a review copy of ",
      {
        "type": "emphasis",
        "children": [
          "Where to Sleep"
        ]
      },
      " by Kandy Radzinki (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1585365351/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1585365351&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ") in board book form (it is also available in hardcover) from Sleeping Bear Press along with a host of other books from the company for review. It tells the story of an orange tabby kitten wondering where the best place to sleep would be. The kitten ponders sleeping with a calf in the field, in a vegetable patch, with the chickens, on a porch swing, in a shoe, and on an armchair before settling at the feet of her human friend. I’m assuming that the kitten lives in and around a storybook-style farm since there is just one cow in the field of grass and there are even bunnies frolicking in the vegetable patch but I honestly don’t think this is problematic and any kitten would love to live in a place with so much to explore."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Another great bedtime choice, the book ends with a night scene. The illustrations are detailed, which I appreciated because children will love the lifelike style as they follow along with the kitten. Ages 0 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
