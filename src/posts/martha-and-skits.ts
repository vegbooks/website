import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/10/9780618609178-lres.jpg",
    "alt": "Martha and Skits",
    "href": "/media/2010/10/9780618609178-lres.jpg",
    "width": 213,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Readers of the ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/martha-speaks/",
            "children": [
              "Martha Speaks"
            ]
          }
        ]
      },
      " book series — or viewers of the PBS show — will enjoy reading that Martha has a new puppy in her life, Skits."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The lovable pup is nothing but energy, and he tests Martha’s patience when he spills her bowl of alphabet soup. She explains how the soup empowers her to speak and assures the pup that someday he will be old enough for his own bowl of alphabet soup. When that day arrives, however, Martha and her family are disappointed to discover that the alphabet soup has no effect on Skits — leading him to believe that Martha is special and he is not. Skits soon disappears."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Just as the disappearance of the younger dog in Mary Casanova and Ard Hoyt’s picture book ",
      {
        "type": "link",
        "href": "/reviews/some-dog/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Some Dog!"
            ]
          }
        ]
      },
      " gets the older (jealous) dog to appreciate him, so too does Martha come to realize what Skits means to her after he goes missing. The book ends happily, with the family reunited and a gentle reminder that everyone’s talents are unique, and all of us are important."
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
