import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/01/doesntmatter2.jpg",
    "alt": "The It-Doesn’t-Matter Suit",
    "href": "/media/2012/01/doesntmatter2.jpg",
    "width": 210,
    "height": 315,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "The other day, my 6-year-old was slumped over Sylvia Plath, moping. Before you assume she’s terribly precocious or that I’m semi-negligent in giving my child depressing books, however, let me direct you to a recent article on Brain Pickings about ",
      {
        "type": "link",
        "href": "http://www.brainpickings.org/index.php/2011/07/25/childrens-books-by-adult-authors-2/",
        "external": true,
        "children": [
          "obscure children’s books by famous “adult” lit authors"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It’s true, Sylvia Plath wrote a children’s book. (I could have sworn Plath’s book was on Brain Pickings’ list — it’s not. Apparently, the list just inspired me to dig deeper. Of course, none of this explains my kiddo’s moping either, but that’s neither here nor there, so back to the book.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Plath penned ",
      {
        "type": "emphasis",
        "children": [
          "The It-Doesn’t-Matter Suit"
        ]
      },
      ", a strange tale about a boy who lives in an alpine village and longs for a suit. One day, his family receives a package with the name of the addressee obscured, and so when they open it to discover that it contains … drumroll, please … a suit, the father and each of the boys tries it on, from largest to littlest. The suit is dismissed by one person after the other, each of whom worries about whether its color (mustard-yellow) and texture (woolly) are appropriate for the activity he enjoys most, from skiing and bicycling to hunting and fishing. Finally, our protagonist tries on the suit, and it’s perfect. He wears it around the village, and he is able to accomplish each of the activities that the previous wearers had in mind — plus, to his delight, all the dogs and cats follow him around."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "If your family is vegetarian or vegan for ethical reasons, I’m sure your ears already pricked up at the mention of hunting and fishing. The book does depict a gun, a boy hooking a fish, and a fox being led out of the forest with a leash (?!). Each family will have to decide whether the depiction of these activities, which ranges from matter-of-fact to bizarre, is appropriate for them."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This quirky book is geared to kids ages 5 to 8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
