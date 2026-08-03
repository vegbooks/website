import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "The Little Mermaid (1989)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 254,
    "height": 383,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "As a mom and a feminist, I’m not crazy that “The Little Mermaid” is premised on Ariel’s decision to leave her family and ",
      {
        "type": "emphasis",
        "children": [
          "literally"
        ]
      },
      " give up her voice for a man she’s only just met. I worry what this teaches our daughters about love."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "That said, I’m the first to admit that this movie does have some nuggets for vegetarian children. After a weak opening, there’s no shortage of ",
      {
        "type": "link",
        "href": "http://www.fishinghurts.com/",
        "children": [
          "criticism of fishing"
        ]
      },
      " and the consumption of sea animals. When King Triton reprimands Ariel for approaching the surface of the ocean, he expresses a fear that she will be “snared by some fish-eater’s hook.” In another scene, he refers to humans as “spineless, savage, harpooning fish-eaters, incapable of any feeling.” Not to mention that Sebastian the Crab nearly faints at the view of sea animals being cooked on the humans’ stove, cringes at the view of the chef preparing ",
      {
        "type": "emphasis",
        "children": [
          "les poissons"
        ]
      },
      " for dinner, and narrowly escapes being part of the entree himself!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Families concerned with animal rights should note that dolphins and fish pull carriages for King Triton and Sebastian the Crab, and that Ursula the Sea Witch captures and tortures souls (merfolk & others?) in her underwater dungeon."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated G. ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/movie-reviews/little-mermaid",
        "external": true,
        "children": [
          "Common Sense Media"
        ]
      },
      " says this is good for ages 5 and up. My 4-year-old was a little frightened during the scary parts."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
