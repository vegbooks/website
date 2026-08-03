import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/01/9781434218933.jpg",
    "alt": "Princess Candy: The Green Queen of Mean",
    "href": "/media/2011/01/9781434218933.jpg",
    "width": 210,
    "height": 313,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Average students are turned into superheroes (or villains) with a simple pop of candied goodness. Available in ¡Tierra!, ¡Fuego!, ¡Aire!, and ¡Agua! varieties, these morsels harness the power of the Spanish-worded element (earth, fire, air, and water) and are used to solve schoolyard brawls in the Goth town of Midnight."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While Halo Nightly normally steals the show in this young readers’ version of a graphic novel, it’s Flora Fawn in ",
      {
        "type": "link",
        "href": "http://www.capstonepub.com/product/9781434218933",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "The Green Queen of Mean"
            ]
          }
        ]
      },
      " who features prominently – and not always in the best light. Flora is a seemingly good-natured, well-intentioned environmentalist who dines organically (no sugar, no fat, no chemicals), but she gets a bit riled up when it comes to litterbugs…and it shows. Her temperament spirals out of control following a fiasco with arch nemesis Doozie Hiss and her sabotage of a group project focused on pollution. It’s a hard lesson to learn, but some methods are better than others when trying to spread the green word. As Halo observes, “Sometimes people need to ",
      {
        "type": "strong",
        "children": [
          "see"
        ]
      },
      "what’s good…instead of ",
      {
        "type": "strong",
        "children": [
          "hearing"
        ]
      },
      " what’s wrong.” Wise words for all of us activists to keep in mind, even the youngest ones. A healthy dose of both, I think, goes a long way."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "All in all, a good read, especially for those new to the graphic novel format. Some veg parents may not appreciate the “green” kid as being obnoxious, short-tempered or hippy-like. After all, we really don’t suffer or lack good eats on a plant-based diet and most of us are pretty genial (or so I’d like to think)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 8-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
