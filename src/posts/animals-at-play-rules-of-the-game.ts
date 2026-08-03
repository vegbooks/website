import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/06/animals-play-comp.jpg",
    "alt": "Animals at Play: Rules of the Game",
    "href": "/media/2012/06/animals-play-comp.jpg",
    "width": 210,
    "height": 163,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Marc Bekoff is one of the world’s leading ethologists, a zoologist that studies animal behavior, and I’m lucky to consider him not only a mentor (he sits on the Advisory Council for the ",
      {
        "type": "link",
        "href": "http://www.museumofanimals.org/",
        "external": true,
        "children": [
          "National Museum of Animals & Society"
        ]
      },
      "), but a friend. He has an incredible ",
      {
        "type": "link",
        "href": "http://literati.net/Bekoff/",
        "external": true,
        "children": [
          "book publishing empire"
        ]
      },
      " covering animal emotions, behavior and welfare, and a few kid titles under his belt too. He is known for his work with the legendary Jane Goodall and her youth organization, Roots and Shoots. His latest children’s book is ",
      {
        "type": "emphasis",
        "children": [
          "Animals at Play: Rules of the Game"
        ]
      },
      ". It’s also the latest edition to the museum’s library and I just had to share it with Vegbooks readers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Animals at Play"
        ]
      },
      " is just that and so much more. While Bekoff shows young readers the ins and outs of how (bows, smells, vocalizations) and why (strength training, community building, and for fun) animals play, he’s also demonstrating that animals are very much like kids. No animal, human or non-, wants to play with a bully, liar or cheat. There really are rules to playing fair and those rules help keep us safe and happy. Bekoff even points out how animals apologize when playing may get too rough or out of hand."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "From dogs and coyotes to wallabies, elephants, and sea lions, Bekoff gives a nice overview of all types of play, but with the underlying message that it’s a fun, universal part of life for all mammals. He even spends a few pages discussing the motivations for adults or older siblings in playing with younger animals, which might involve role reversal (whereby an adult gives a child the chance to be more powerful) or self-handicapping (e.g., holding back from using full strength)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "With lovely illustrations by Michael J. DiMotta, this book makes for a wonderful introduction to the world of animal cognition, ethology, and the rules of playing fair. I can’t recommend it enough!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 8+"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
