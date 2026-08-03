import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/02/how-i-nicky-flynn.jpg",
    "alt": "How I, Nicky Flynn, Finally Get a Life (and a Dog)",
    "href": "/media/2010/02/how-i-nicky-flynn.jpg",
    "width": 231,
    "height": 342,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Slated for release in May, ",
      {
        "type": "link",
        "href": "http://artcorriveau.com/",
        "external": true,
        "children": [
          "Art Corriveau"
        ]
      },
      "‘s middle-grade novel ",
      {
        "type": "emphasis",
        "children": [
          "How I, Nicky Flynn, Finally Get a Life (and a Dog)"
        ]
      },
      " deals in equal measure with the pain of divorce and the trials of adopting a dog."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "When Nicky’s parents split up, he must move to a new town, start a new school, and help his mother cope with returning to the workforce. The last thing he wants is another change, so he’s dismayed when his mother brings a former guide dog named Reggie home from the local shelter. Soon, however, he recognizes that Reggie’s loyalty, bravery, and companionship are exactly what he needs in his life. What it takes the entire novel for Nicky to realize is what ",
      {
        "type": "emphasis",
        "children": [
          "Reggie"
        ]
      },
      "needs in his."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Read from a parent’s perspective, there are some troubling elements of the plot — Nicky runs away from home, breaks into an empty house, hitchhikes and nearly accepts a ride from a sketchy man, and puts his own interests before Reggie’s. Still, in the end Nicky is selfless, forgiving, and genuinely sorry for his actions. And while his mother initially battles depression and a drinking problem, she too turns over a healthy leaf, stepping up to her parental responsibilities and (you’ll be happy to hear) turning to exercise and healthy food rather than wine."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I should note that the main character, Nicky, is not a vegetarian. Although he often eats pb&j for lunch, he also enjoys pepperoni pizza and hot dogs. Still, I think this is a good read for vegetarian and vegan kids, if for no other reason than the fact that a dog — and a complex, interesting dog at that — is one of the main characters."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
