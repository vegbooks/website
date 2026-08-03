import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Cow",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "The reality that most vegetarian parents face when it comes to the way cows are treated is that the vast majority of these animals don’t have it good, to put it mildly. Pumped full of growth hormone and antibiotics, and then hooked up to mechanical milking machines, they live a ",
      {
        "type": "link",
        "href": "http://www.farmsanctuary.org/issues/factoryfarming/dairy/",
        "external": true,
        "children": [
          "production-line life"
        ]
      },
      " that leaves a lot to be desired. But you wouldn’t learn that by reading ",
      {
        "type": "emphasis",
        "children": [
          "Cow"
        ]
      },
      " to your children."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book focuses on dairy cows on a traditional dairy farm, the kind that no longer exists on a large scale today. The book starts out by asking the question, “What is it like to be a dairy cow?” The answers it provides to that question focus only on the fading image of a traditional farm, filled with loving providers and an idyllic setting."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "From grazing the days away, to happy farmers who “gently” clean the udders before milking the cows, the entire book paints a picture that life as a dairy cow is serene and enjoyable. Unfortunately, parents who care about animal rights know this to not be true, and will likely want to steer their child clear of this misleading fairytale image."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Geared to ages 4-8, but not recommended."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
