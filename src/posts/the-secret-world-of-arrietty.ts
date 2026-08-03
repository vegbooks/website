import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "The Secret World of Arrietty (2012)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 320,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "When you first hear that “",
      {
        "type": "link",
        "href": "http://www.imdb.com/title/tt1568921/",
        "external": true,
        "children": [
          "The Secret World of Arrietty"
        ]
      },
      ",” is a hand-drawn Japanese film based on an English novel (",
      {
        "type": "emphasis",
        "children": [
          "The Borrowers"
        ]
      },
      ") dubbed by American actors, you may wonder about its authenticity. Just go with it, I say, and see if you’re swept up in the universal appeal of its story. My family was."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "If you’re familiar with Mary Norton’s novel ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/The_Borrowers",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "The Borrowers"
            ]
          }
        ]
      },
      ", or any of its TV or film adaptations, you already know the premise: small people (measuring only a few inches) live beneath the floor boards of a house, borrowing what they need (and what won’t be missed) in order to survive. In this film, we’re introduced to the concept when Arrietty, the family’s daughter, goes on her first borrowing expedition with her father, making a perilous journey into the main rooms of the house to gather a sugar cube and a tissue."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There are two aspects of this particular film that appealed to me. First, I found the house and its inhabitants to have a charming mix of English and Japanese characteristics. The characters changed from shoes to slippers at the door, the closets slid open on tracks, and even the wildlife was Japanese (there’s a Japanese raccoon dog near the end). But still, the English vibe is also strong, particularly in Arrietty’s mother, who serves English-style tea in several scenes. I liked how these elements came together. In one scene, for example, the characters eat with both chopsticks and forks."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Second, I appreciated that the film was ultimately about the risk that humans posed to the borrowers, who were so much like them and yet so much smaller. Parallels to human treatment of nonhuman animals are obvious if you’re open to them. Even the cat learns to be kind to the borrowers by the end of the film!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian parents should be aware that meat-eating is depicted in one scene, and an unkind character responds to a crow stuck in a window screen by beating him (he flies away in the end)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated G. ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/movie-reviews/the-secret-world-of-arrietty",
        "external": true,
        "children": [
          "Commonsense Media"
        ]
      },
      " recommends this film for kids ages 7 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
