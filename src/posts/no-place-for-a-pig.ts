import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/04/no-place-for-pig-0477.jpg",
    "alt": "No Place for a Pig",
    "href": "/media/2011/04/no-place-for-pig-0477.jpg",
    "width": 210,
    "height": 272,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This is the cutest story about a woman named Ms. Taffy who calls in to a radio station with the correct answer and wins the pig prize. She mistakenly thinks she won a pig trinket to fit on her shelf with the rest of her collection and is shocked when she goes to pick it up and finds she won a live piglet named Serena! Although a bit ignorant of pig nature (she makes comments like, “Oh my stars… I hope you’re not this hungry every day!”), she opens her tiny apartment home (that she shares with her cats) to the piglet and manages to keep her fed as she grows. And grows. And GROWS."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "What I love about this story is the way the community pulls together to find a way to keep a pig fed and housed while also beautifying the neighborhood with a community garden as Serena out-eats and outgrows the urban apartment. That and the easy acceptance that a pig is a part of the community. Left unsaid is that Ms. Taffy and her apartment neighbors unwittingly rescue this sizable swine from eventually becoming bacon."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Unfortunately, the author Suzanne Bloom never mentions another alternative for pigs like Serena (or any other farm animals) who wind up in a city: a ",
      {
        "type": "link",
        "href": "http://www.farmsanctuary.org/",
        "external": true,
        "children": [
          "farm sanctuary"
        ]
      },
      " where a pig can be a pig on a spacious farm without fear of being slaughtered or eaten. There is a rose-tinted quality about the story that excludes the normal city order of complaining neighbors, apartment rules restricting oversized pets, and poop disposal. I guess those things would detract quite a bit from the pleasantly warm, compassionate mood that flows through this tale."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Colorful, expressive illustrations accompany the light-hearted text and Bloom injects a bit of humor through cute images as well as words."
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
