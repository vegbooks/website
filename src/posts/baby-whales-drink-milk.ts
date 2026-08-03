import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/07/baby-whales-drink-milk.jpg",
    "alt": "Baby Whales Drink Milk",
    "href": "/media/2010/07/baby-whales-drink-milk.jpg",
    "width": 220,
    "height": 179,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I wouldn’t normally review a series-based publication, like those of the “Let’s-Read-And-Find-Out Science” compilation (although many of their titles are quite interesting), but this particular one is dietary ammunition in a vegan parent’s bookshelf."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Drinking milk, particularly cows’ lacteal secretions, past infancy has become a given in human society. Looking at all other mammals, however, we see that it’s quite frankly rare to do so, moreover from another species. A mother’s milk is nutrient rich and designed to help babies grow big and strong…and quickly. To continue drinking milk through adulthood can pose ",
      {
        "type": "link",
        "href": "http://www.pcrm.org/health/veginfo/dairy.html",
        "external": true,
        "children": [
          "serious health risks"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This easy reader not only exposes young kids to the beautiful lives of whales (birth, migration, blow hole spouting) through scientific facts and gorgeous imagery, but it can be utilized to nurture better eating habits. When kids are faced with bovine milk-touting advertisements in school and classmates chug cartons of it day in and day out, vegan kids and parents alike need positive reinforcement. This book can do just that and incite a thoughtful “What is milk?”conversation. Now that there are yummy soy, almond, oat, hemp, and even coconut versions available on the market, it should prove to be an interesting dialogue!"
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
