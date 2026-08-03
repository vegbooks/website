import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "alt": "The Magic Squad and the Dog of Great Potential",
    "href": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "width": 210,
    "height": 315,
    "align": "right"
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0385322763",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0385322763?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0385322763",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "The Magic Squad and the Dog of Great Potential"
            ]
          }
        ]
      },
      " is a well-written, engaging story of a boy and a dog — both with great potential. The dog of great potential in this book is called Trane, who is a rescue being fostered by ten year old Calvin Hastings’s (the boy of great potential) short-term babysitter, a poet named Alfred Ludlott."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "One day, Calvin asks the poet’s neighbor, a vet, if he can accompany her to the Humane Shelter, where she is picking up her foster dog. Calvin has never been in a shelter and is full of questions for Dr. Jamar. While at the shelter, a large dog with a loud bark catches Calvin’s eye. Dr. Jamar explains to Calvin that the chances of this particular dog being re-homed are slim, and that he is a likely candidate for euthanasia because he is too big, too loud and untrained. Calvin, an animal lover, is very upset. He wracks his brain to figure out a way to help the dog. Since he lives in an apartment building which doesn’t allow animals, fostering or adopting the dog is out of the question. Calvin manages to convince Alfred Ludlott to foster the dog, however, Alfred Ludlott is clear: he will only foster the dog for a month. Calvin must manage to find an adoptive home for the dog or Alfred Ludlott will return the dog to the Humane Shelter."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story that unfolds is both humorous and poignant. The plot revolves around Calvin’s efforts to create a smooth road for Trane in his foster home and his quest to find the dog a permanent one, including training sessions and many moments of worry on Calvin’s part. Beyond the relationship between the boy and the dog, the book also fleshes out the other aspects of Calvin’s life, successfully incorporating his relationship with his family and friends in the plot, as well as the way various situations impact Calvin’s mindset."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The ending is a hopeful one for Trane and the rest of the characters. While I enjoyed this book overall and recommend it to animal lovers, there are some problematic aspects of which families will want to be aware. The story is a bit dated and there are multiple references to Calvin listening to his Walkman. Another more serious issue is that while being fostered at Alfred Ludlott’s, Trane is ",
      {
        "type": "link",
        "href": "http://www.humanesociety.org/issues/chaining_tethering/facts/chaining_tethering_facts.html",
        "external": true,
        "children": [
          "tethered outside"
        ]
      },
      "— a practice that is recognized as inhumane. Another concerning moment highlights how important it is to find a good fit in the adoption process, especially when children are involved."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I recommend this for older elementary kids who are ready to read a lighter-hearted take on some serious animal-related issues."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
