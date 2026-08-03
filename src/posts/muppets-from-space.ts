import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Muppets from Space (1999)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 226,
    "height": 341,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I grew up watching “The Muppet Show” weekly, so I rushed out to watch ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/movie-reviews/muppets-space",
        "external": true,
        "children": [
          "“Muppets from Space”"
        ]
      },
      " when it was released in 1999. (I think I saw it at the local drive-in.) This New Year’s Eve, we decided to have a family movie marathon but forgot to prepare for it. Rather than watch our old DVDs, we hooked a laptop to the TV and streamed this movie from one of the DVD-rental sites."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Set to funk music, this family flick follows Gonzo’s quest to figure out who he is and find his long-lost family — providing an opportunity for parents and veg kids to discuss what it’s like to be different. A few of the snappy one-liners will also spark discussion, if you catch them. Is it funny to call Miss Piggy “bacon,” you might ask. And what does Gonzo mean when he jokes about his species going extinct?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The movie contains a few references to/ depictions of meat. When the stove breaks, for example, the Muppets are served bologna for breakfast, a food that all but Rizzo (the rat) refuse. Still, there’s nothing in this movie that’s offensive enough for me to forgo the sheer fun of watching it."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated G. Ages 4-adult."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
