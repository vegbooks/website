import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/9780823421534.jpg",
    "alt": "The Vegetables We Eat",
    "href": "/media/2010/06/9780823421534.jpg",
    "width": 212,
    "height": 215,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Why vegetables have a bad rap amongst the younger crowd, I haven’t the faintest idea. Even when the school cafeteria overcooked the broccoli, I enjoyed it. Maybe that’s because vegetables were a rarity in my Mexican childhood home."
    ]
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0823421538",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      "Now I’m in league with “the fresher, the better” school of thought and applaud books like Gail Gibbons’ ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/0823421538?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0823421538",
            "external": true,
            "children": [
              "The Vegetables We Eat"
            ]
          }
        ]
      },
      " for stimulating excitement for and wonder of plant-based edibles. Just as colorful as the veggies you’d find so nicely displayed at Whole Foods, this book breaks them down into their various sub-categories: growing season (annual/perennial) and edible part (leaf/bulb/flower bud/root/tuber/stem/fruit/seed). Ms. Gibbons even dedicates an entire page to the soybean and all its multiple uses! Towards the end, we find descriptions on different ways to garden – from container to monoculture, packaging options (frozen, canned, fresh), and venues for purchase (supermarkets, farmer’s markets). Fun miscellaneous facts can be found on the last page. Did you know that Benjamin Franklin introduced soybeans to the U.S. from France in the 1800’s?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Another good, wholesome book to encourage better eating habits…and who doesn’t need that these days?"
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
