import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/09/pigmares-300.jpg",
    "alt": "Pigmares: Porcine Poems of the Silver Screen",
    "href": "/media/2012/09/pigmares-300.jpg",
    "width": 210,
    "height": 308,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Pigmares: Porcine Poems of the Silver Screen"
        ]
      },
      ", written and illustrated by Doug Cushman, is the perfect blend of silly and classic horror. With characters like Pigzilla, Pig Kong, and even Dr. Hogwell and Mr. Pigg, kids get a first taste of old-time scary movies with the right dose of goofy adjustment to make it accessible without being too frightening. While it’s aimed at children ages 7 – 10, younger kids will appreciate the not-too-scary drawings and funny rhymes, especially if they are read in the appropriately campy voices. Children ages 7 and up will enjoy figuring out the rhymes and illustrations fit together."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This collection of pig horror poems (received as a review copy from ",
      {
        "type": "link",
        "href": "http://www.charlesbridge.com/",
        "external": true,
        "children": [
          "the publisher"
        ]
      },
      ") uses various forms of poetry and rhyme to tell the stories, and the pigs fit right in. My children found The Mummy Pig and The Phantom Hog of the Opera to be the funniest poems. The illustrations were perfectly cute and gross, and there are some clever jokes embedded for parents to enjoy. My favorite rhyme was Piglets of the Night, a story about vampire piglets who don’t want blood, but the speaker’s own meal."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Some of the rhymes deal with subject matter difficult for veggie parents. One rhyme, The Invisible Swine, mentions using chicken necks as part of a magical brew. Other topics, as you might expect, involve mentions of claws and violence. And another example includes a flying sausage-shaped spaceship that attacks the Eiffel Tower and other landmarks. Most of the stories, however, are just silly and clever. This is a unique and silly book for leading up to Hallowe’en."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
