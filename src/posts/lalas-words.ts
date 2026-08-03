import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2021/05/lalas-words.jpg",
    "alt": "Lala’s Words",
    "width": 309,
    "height": 400
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781338648232",
        "external": true,
        "children": [
          "LALA’S WORDS by Gracey Zhang"
        ]
      },
      " is a really beautiful story about loving things for what they are, weeds and all. The power for positive attention and words, unconditional affection, and persistence are all included within the text and illustrations. Lala is an active child who loves to jump and get dirty and take care of a patch of green weeds growing up from the concrete. As summer’s heat keeps most people indoors and sluggish, Lala’s energy refuses to be contained and eventually refreshes everyone around her."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Lala’s mother is a busy, exasperated mom whose dismay at Lala’s constant state of dirt and movement seems to be her main source of frustration. Lala shrugs off her mother’s pleas to “Be still” and “Stop playing with weeds” in the dirt. She calls Lala’s visits to the weeds growing from the concrete “jibber-jabber” and doesn’t understand that Lala considers the plants her beloved friends. While relatable, some children and caregivers may see Lala’s mother’s words as too harsh for the behavior they address. However, the contrast between Lala’s loving words to her plant friends and her mother’s scolding is effective. This is especially true when Lala’s mother realizes how special Lala’s relationship with her plants truly is."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The illustrations in ",
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781338648232",
        "external": true,
        "children": [
          "LALA’S WORDS"
        ]
      },
      " are simple and lovely. The only splashes of color are the yellow of Lala’s dress and the green of the plants. Both colors grow as Lala’s care for her friends continues. It will be fun for children to point out how Lala’s yellow spreads to others as the book goes on. This simple picture book makes a heartfelt and encouraging picture book focused on how kind and encouraging words and actions heal and grow beyond expectations."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
