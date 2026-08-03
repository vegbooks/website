import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Open Season",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "You gotta love that kids movies sometimes say what adult films never could. Continuing the tradition of “Bambi” and “",
      {
        "type": "link",
        "href": "/reviews/the-fox-and-the-hound/",
        "children": [
          "The Fox and the Hound"
        ]
      },
      ",” the 2006 release “",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/movie-reviews/Open-Season.html",
        "external": true,
        "children": [
          "Open Season"
        ]
      },
      "” depicts hunting from the animals’ perspective, and of course, it isn’t pretty."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The main character is a grizzly bear named Boog, who was rehabilitated by a kind-hearted educator named Beth but never released to the wild. He lives in the garage, sleeps on an oversized dog bed, and eats fish snacks, until one day, he gets into some trouble with a friend and Beth realizes that he belongs in the wild. The plot revolves around his attempts to navigate his way home from the wilderness (to Beth’s garage) in one piece during hunting season."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Families who care about animal rights will get a kick out of the fact that the villain in the story — an avid hunter named Shaw — begins imagining that the animals are plotting against the humans in order to upset the “natural order” of humans dominating everyone else. In one particularly funny scene, Shaw imagines that the animals treat us the way we often treat them. Of course, this reality never materializes — but the animals are able to drive the hunters out of the forest."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While there are some sexual references (!) and a lot of potty humor, the real downside to this film from a veg perspective is that there’s a running gag which involves throwing rabbits. (The rabbits appear to be unharmed.) On a positive note, Boog realizes that his true home is in the wild and Beth is able to let him go, as any wildlife rehabilitator should."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated PG, this film is appropriate for kids ages 6 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
