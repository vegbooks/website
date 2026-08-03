import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/03/9780807565179.jpg",
    "alt": "Peter, the Knight with Asthma",
    "href": "/media/2011/03/9780807565179.jpg",
    "width": 210,
    "height": 165,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Peter is a boy with a wild imagination. He likes to pretend he is a knight protecting the castle from dragons. But poor Peter. Every time he is in the middle of a fight, about to take down the dragon, he starts to feel tightness in his chest. He can’t breathe. His mom comes in and rescues him with an inhaler. Three times in one week is too much for Peter and his mom, and all of the dragons keep getting away. After a thorough exam at the doctor, Peter is diagnosed with asthma. He is sent home with a nebulizer. The nebulizer treatment makes Peter strong and he is finally able to defend the fantasy castle. With all of the strength of his lungs, he is able to roar so loud that the dragon slinks away in fear. With treatment, he can do anything."
    ]
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=&l=as2&o=1&a=0807565172",
    "alt": "",
    "width": 1,
    "height": 1
  },
  {
    "type": "paragraph",
    "children": [
      "My toddler has been using a nebulizer since she was a baby. We got ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0807565172/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0807565172",
        "children": [
          "this book"
        ]
      },
      " from the library this weekend and she loves it. When Peter does his nebulizer treatment, she exclaims, “Same, same!” Seeing another take the same medicine is exciting for her. I’m happy to have a book that explains the way an asthma attack feels. I’d like my daughter to be able to tell me that her chest feels tight or that breathing is difficult. When Peter has these symptoms, he calls his mom for help, which is a good model for my toddler. The story is entertaining but conveys very useful information."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Parents concerned about animal welfare will be happy to see that the dragon is not slayed. Peter uses humane methods to defend the castle from the dragons."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8 (though my 2 year old enjoys it)."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
