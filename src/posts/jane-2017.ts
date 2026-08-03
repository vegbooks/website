import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany movie review",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Jane Goodall made her name 50 years ago through painstakingly observing chimpanzees in Gombe, and has recently been traveling all over the world promoting responsible stewardship of the earth and all of its inhabitants. “JANE,” from director Brett Morgen, is a wonderful new documentary that tells the story of how a young, untrained animal lover became one of the world’s most powerful advocates for chimpanzees and baboons, and conservation. (The trailer is online ",
      {
        "type": "link",
        "href": "https://www.youtube.com/watch?v=FRlUJrEUn0Y",
        "children": [
          "here"
        ]
      },
      ".) It is a documentary well worth seeing for its story as well as its stunning imagery. Children sensitive to the range of nature’s realities and those under the age of eight may be upset by some scenes."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The footage used includes scenes from over 100 hours of newly rediscovered film from National Geographic photographer and filmmaker Hugo van Lawick, who became Jane Goodall’s husband after spending time in Gombe documenting her early work. It is intimate and beautiful, and it shows a casual, human, and even silly side to the work ",
      {
        "type": "link",
        "href": "http://www.janegoodall.org/",
        "external": true,
        "children": [
          "Jane Goodall"
        ]
      },
      " did with chimpanzees. Her patience and love for the chimpanzees she followed, her disillusionment and horror at discovering the warlike aspects of chimp culture, and her sorrow at losses in the chimpanzee community she loves mirror the personal joys, separations, and frustrations involving her family and life choices."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The voiceovers in the film are a combination of new interviews with the filmmaker and audio from Jane Goodall’s audiobooks. Edited together with the original footage, the film becomes a smooth story arc that lets viewers feel they’ve really gotten to know this iconic figure, even as they feel inspired by Goodall’s minor and monumental achievements. It is the new interview material, however, that brings us some particular humor and touching moments as Jane Goodall tweaks past researchers’ techniques and admits to emotional pain regarding her son and first marriage. It is also when we hear her turmoil and sorrow regarding a polio outbreak in the chimpanzee community and the deaths of two of her most closely followed chimps."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "All in all, “JANE” is a joy to watch for those who know her work, and it will also serve as a comprehensive introduction to her work for those who don’t yet know it well. The end of the film promotes Jane Goodall’s goal of encouraging and fostering the ",
      {
        "type": "link",
        "href": "http://rootsandshoots.org/",
        "external": true,
        "children": [
          "next generation"
        ]
      },
      " in showing compassion for all living things, cultures, and the environment. In a few scenes, sensitive children will be disturbed by animals attacking each other and in one particularly gory scene, eating each other. There is also a brief scene of chimpanzees mating. The language is gentle, save for one instance at the beginning where a colloquial term for excrement is used. Highly recommended for children ages 8 and up."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated PG."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
