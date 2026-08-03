import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/12/9780807511572.jpg",
    "alt": "Christmas Kitten, Home at Last",
    "href": "/media/2011/12/9780807511572.jpg",
    "width": 210,
    "height": 159,
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
            "href": "http://www.amazon.com/gp/product/0807511579/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0807511579",
            "external": true,
            "children": [
              "Christmas Kitten"
            ]
          }
        ]
      },
      " is a sweet book for kids to enjoy during the holidays. It has the typical Christmas cast of characters including Santa Claus, Mrs. Claus, elves, and reindeer, but it also has a kitten, which adds to the cute factor."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While making deliveries Santa Claus finds a homeless kitten. He wants to keep her, but to his dismay Mrs. Claus points out that he is allergic to cats. So Mrs. Claus goes through some of the old letters from kids to see if she can find a little boy or girl who might have asked for a kitten, but Santa Claus reminds her that they must have the parent’s permission. Caring for and loving a pet is a big responsibility, so it was nice to see that addressed. After some mischief, the kitten leads the Clauses to the study where she is pawing at an envelope underneath the dresser. Inside they discover an unopened letter from parents who are requesting a kitten for their little girl, Angela. Perfect! So Mr. and Mrs. Claus deliver the kitten to Angela, and she wakes up in the morning with a kitten nestled in her bed."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Overall, I liked this book. The story was sweet and the pictures felt warm, cozy and festive. It featured a homeless kitten who was rescued, which is always a good topic for a book! It opens the door to a discussion about the animal overpopulation issue. Even young kids can understand the importance of always adopting animals rather than buying animals from pet stores or breeders—it’s a simple concept."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
