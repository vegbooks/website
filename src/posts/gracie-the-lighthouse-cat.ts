import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/08/9780761374541fc.jpg",
    "alt": "Gracie the Lighthouse Cat",
    "href": "/media/2011/08/9780761374541fc.jpg",
    "width": 210,
    "height": 245,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I’m naturally drawn to historical accounts involving animals, and ",
      {
        "type": "link",
        "href": "http://www.forewordreviews.com/reviews/gracie-the-lighthouse-cat/",
        "external": true,
        "children": [
          "the story of Gracie"
        ]
      },
      ", a lighthouse cat whose kitten becomes imperiled during a storm is a short, action-packed and dramatic one. Based on a true account on one of the Farne Islands of England in 1838, Gracie’s attempt to rescue her offspring is uniquely told at the forefront while in the background – depicted through painterly images – is the recovery of 9 shipwrecked humans."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Author Ruth Brown’s paintings capture the raw emotions and true-to-life facial expressions of the felines, making this a relatable tale to the cat companions young readers may live with at home. Reading animal faces is a vastly important skill to teach in terms of humane education; by knowing how an animal is feeling, kids can help better (instead of worsen) a given situation. If you pick up this book, a fun activity would be to challenge kids to guess how the cats are feeling or what they might be thinking throughout the story."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Equally important as the emotional recognition in cats is the story’s oral or visual interpretation that animal companions are just as concerned about the welfare of their family members as people. That is a lesson we can never emphasize enough."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
