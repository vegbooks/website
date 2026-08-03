import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/01/0618737499-lres.jpg",
    "alt": "Henry Hikes to Fitchburg",
    "href": "/media/2011/01/0618737499-lres.jpg",
    "width": 210,
    "height": 181,
    "align": "right"
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0618737499",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/0618737499?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0618737499",
            "external": true,
            "children": [
              "Henry Hikes to Fitchburg"
            ]
          }
        ]
      },
      " is a children’s book inspired by a passage from Henry David Thoreau’s ",
      {
        "type": "emphasis",
        "children": [
          "Walden"
        ]
      },
      ". It juxtaposes two different approaches to experiencing life: focusing on the journey vs. the destination."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In the book, two bears decide to meet up in Fitchburg to see the country. Henry, aptly named after Henry David Thoreau, chooses to hike the 30 miles to Fitchburg, while his friend chooses to take a train—but he must work first so that he can make enough money to buy a ticket. Because they each choose different paths to Fitchburg, they have very different experiences."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Henry carves a walking stick and sets off on a leisurely (this is no ",
      {
        "type": "emphasis",
        "children": [
          "Amazing Race"
        ]
      },
      "!) journey through the woods. He savors nature—he picks flowers, climbs a tree, and discovers a bird’s nest. On the other end of the spectrum, his friend is busy doing all sorts of odd jobs to make money, including weeding, painting fences, and moving bookcases in Mr. Emerson’s (yes, Ralph Waldo Emerson) study. After making enough money for a train ticket, his friend races to the crowded station, boards a train, and arrives in Fitchburg before Henry—but that’s only because Henry stopped to eat blackberries."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I love this book! It’s a great book to read with your kids because there is a lot to discuss. It has a simple but important message: to slow down and enjoy life, particularly the natural wonders in it. This book reminds us—for the sake of our children—to appreciate the journey. As Thoreau’s friend Ralph Waldo Emerson said, “Life is a journey, not a destination.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-10."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
