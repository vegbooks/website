import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany movie review",
    "href": "/reviews/the-little-mermaid/",
    "width": 210,
    "height": 321,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I loved “",
      {
        "type": "link",
        "href": "/reviews/cloudy-with-a-chance-of-meatballs/",
        "children": [
          "Cloudy with a Chance of Meatballs"
        ]
      },
      ",” so I was excited to check out the sequel (on DVD) with my family for movie night. Unfortunately, I think this series lost its groove after the initial hit."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "That’s not to say that this movie won’t give you plenty to talk about — on the contrary. Still, the plot is so zany and downright incoherent in parts that I just can’t recommend it."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Picking up where the first flick left off, Flint Lockwood’s food machine has just showered earth with living food, and it turns out that our heroes’ efforts to turn it off were not entirely successful. A big corporation headed by Flint’s childhood idol evacuates the island and recruits Flint as an inventor. After repeated efforts to clean up the island and turn off Flint’s machine fail, Flint is sent in alone with instructions to dismantle it. He ends up going in with a cadre of friends, only to discover that the childhood idol is a greedy megalomaniac and that the food animals are not the monsters they’ve been made out to be, but rather, well, animals with families and feelings."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I’ll be the first to admit that this is a clever plot twist, and one that will appeal to vegetarian and vegan families. Still, it’s so poorly done, and the message is so inconsistent — fishing is glamorized with no mention of the ",
      {
        "type": "emphasis",
        "children": [
          "real animals"
        ]
      },
      " who suffer — that I was left with a bad taste in my mouth. (Not to mention that there was waaaay too much poop humor throughout!) This movie had just so much potential from a vegan perspective that it’s disappointing it’s such a wreck."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Let’s hope “Cloudy with a Chance of Meatballs 3” isn’t in the works. I just don’t think I can stomach it."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Have you seen this movie? Tell me what you thought in the comments!"
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
