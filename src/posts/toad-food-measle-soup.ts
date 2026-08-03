import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/toad-food.jpg",
    "alt": "Toad Food & Measle Soup",
    "href": "/media/2011/07/toad-food.jpg",
    "width": 210,
    "height": 322,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Kiddo and I love the humorous title of this chapter book by Christine McDonnell, and we now often refer to tofu (one of our favorite foods) as “toad food.” Vegetarian kids will get a kick out of how Leo Nolan, an omnivore whose mom goes through a short-lived vegetarian phase, misunderstands the names of foods that are familiar to us. (“Feel awful” is how he first hears ",
      {
        "type": "link",
        "href": "http://www.saveur.com/article/Recipes/Falafel-with-Tahini",
        "children": [
          "falafel"
        ]
      },
      ".)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Leo thinks he’s fortunate that his family abandons vegetarianism after a few meals — even though his sister and mother seem to enjoy some of the foods — but veggie kids are unlikely to agree. After all, vegetarians know how delicious and satisfying a plant-based lifestyle can be! Unfortunately for Leo, his family never endeavors to understand the effects of their dietary choices or how vegetarianism addresses some of the significant animal welfare, environmental, and health effects of the standard American diet. Through this lens, McDonnell sets up the ultimate joke of the first chapter: Leo’s discovery of his mother eating a cheeseburger at a fast food restaurant, after leaving him a vegetable stirfy for dinner."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The remaining four chapters each have humorous parts, but on the whole, leave the reader dissatisfied. Families concerned with animal welfare will pay particular attention to Leo’s efforts to acquire pets, which involve buying and returning chameleon (whose care and biology he clearly misunderstands), purchasing a guinea pig from a pet store, caring for a lost dog, and soliciting a promise from his parents that he can adopt a dog from a shelter. In addition to the pet store theme, some other problematic aspects of this book include its assignment of gender roles and its cultural references, both of which seem out-of-date."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This hardcover edition of this book, illustrated by Diane de Groat, is out of print, but a softcover edition, illustrated by G. Brian Karas, is widely available."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 7-10."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
