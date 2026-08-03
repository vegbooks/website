import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Mrs. Marlowe’s Mice",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "If you’re the kind of person who likes animals attired in 1940s garb and dark story lines revolving around persecuted animals secreted away from Gestapo-like police cats, you’ll love ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://umanitoba.ca/outreach/cm/vol14/no4/mrsmarlowesmice.html",
            "external": true,
            "children": [
              "Mrs. Marlowe’s Mice"
            ]
          }
        ]
      },
      ". (For the record, kiddo and I both fall in this category.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Is Frank and Devin Asch’s smart picture book about WWII Germany? Contemporary America? Is it about cats and mice, or people and other people (or even people and other animals)?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I’m not sure."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "What I do know is that the main character, Mrs. Marlowe, is a young widow cat who hides mice in her apartment. The storyline revolves around her neighbor’s suspicions of her, and what happens when the police stop by her apartment to see if she is harboring mice. Whether Mrs. Marlowe is kind toward mice, or whether she’s really keeping them — as she tells the police — to fatten up for dinner, is ambiguous until the very end of the book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story is compelling, the illustrations are gorgeous, and there’s a moral to this story that’s so un-heavy-handed that it’s a little difficult to discern. In a nutshell, this is a fantastic book, one that is certain to appeal to adults and children alike."
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
