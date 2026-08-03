import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Vunce Upon a Time",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Ready for a quirky, silly, veggie read? Then dig your fangs, I mean teeth, into J.otto Seibold and Siobhan Vivian’s picture book ",
      {
        "type": "emphasis",
        "children": [
          "Vunce Upon a Time"
        ]
      },
      ", starring a gentle soul named Dagmar who just so happens to be ",
      {
        "type": "link",
        "href": "http://www.ecorazzi.com/2008/09/26/vegetarian-lifestyle-growing-popular-with-vampires/",
        "external": true,
        "children": [
          "a vegetarian and a vampire"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "When we borrowed this Halloween-themed book from the library, my daughter cracked up at the images of Dagmar eating carrots and tending his garden, but was quick to inform me that the book is not really about being a vegetarian — it’s about friendship. Fair enough, but the entire reason that Dagmar develops a friendship with a little girl is because a) he doesn’t hunt like other vampires, b) he grows vegetables more slowly than he eats them, and c) he supplements his diet with a secret candy stash that’s running low."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Veg parents might not appreciate Dagmar’s focus on junk food, and veg kids might be quick to point out that real gummy worms are made with gelatin (which is not ",
      {
        "type": "link",
        "href": "http://www.petakids.com/candy.asp",
        "external": true,
        "children": [
          "vegetarian"
        ]
      },
      "). Still, most vegetarians will enjoy this humorous book."
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
