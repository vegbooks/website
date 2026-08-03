import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/10/turkand-runt-cover.jpg",
    "alt": "Turk and Runt",
    "href": "/media/2011/10/turkand-runt-cover.jpg",
    "width": 210,
    "height": 266,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Wishbone Farm is a popular place come fall. Pumpkins abound in October. Apples are ripe for the picking. And in November, the public is on the hunt for the perfect turkey. But it seems that only Runt, the smallest turkey of his four-member family understands what that means. His brother Turk, agile and athletic, is highly sought after. Ballet instructor Madame Waddelle remarks, “Look at zee size of zose drumsticks…Zat is a beautiful bird!” His mother beams and father puffs with pride, acting on the assumption that Turk is being recruited for his graceful twirls and somersaults. Smart, reality-checked Runt knows better. He throws himself on the barnyard floor, flaps, flops, hisses, sputters, and runs Ms. Waddelle (who now thinks that the birds are crazed) off the premise. Several other humorous anecdotes that scare off would be turkey buyers are scattered throughout the text and reinforce the idea that turkeys do not want to be dinner."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Spared this Thanksgiving, Runt warns, “Come December, folks begin planning their holiday dinners.” He has a Grade A plan in store, however, and this time his family not only listens, but are in on the arrangement. Think snowmen disguises. Overall, this is a cute, funny, pro-veggie holiday tale."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Find story-inspired activities and one veggie recipe on author Lisa Wheeler’s ",
      {
        "type": "link",
        "href": "http://www.lisawheelerbooks.com/LW/activities_files/TurkAndRunt.pdf",
        "external": true,
        "children": [
          "website"
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
