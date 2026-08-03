import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/09/cover.jpg",
    "alt": "Kids & Animals",
    "href": "/media/2012/09/cover.jpg",
    "width": 221,
    "height": 152,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I’ve reviewed at least ",
      {
        "type": "link",
        "href": "/reviews/animals-at-play-rules-of-the-game/",
        "children": [
          "one other title"
        ]
      },
      " from my good friend Marc Bekoff, the internationally renowned animal ethologist. This one is just as tender and sweet. ",
      {
        "type": "emphasis",
        "children": [
          "Kids & Animals"
        ]
      },
      " (download a free version ",
      {
        "type": "link",
        "href": "http://www.projectcoyote.org/Kids_And_Animals_Jane_Goodall_and_Marc_Bekoff.pdf",
        "external": true,
        "children": [
          "here"
        ]
      },
      ") is an artistic showcase of what the youngsters involved in Jane Goodall’s ",
      {
        "type": "link",
        "href": "http://www.rootsandshoots.org/",
        "external": true,
        "children": [
          "Roots & Shoots"
        ]
      },
      " program have created in response to different prompts: “I have a dream that…” and “I am thankful for…” Readers will see that kids just like them share the same goals and dreams, as are outlined in the chapter titles of this short publication:"
    ]
  },
  {
    "type": "list",
    "items": [
      [
        "safety for animals"
      ],
      [
        "peace"
      ],
      [
        "loving, caring & families"
      ],
      [
        "homes & habitats"
      ],
      [
        "coexistence & cooperation"
      ],
      [
        "celebration"
      ]
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The artwork comes from youth around the globe and Marc does an incredible job of including examples of how these Roots & Shoots club members have put their dreams and thankfulness into action: clean-ups, fundraisers, volunteerism, and much more. A wonderful little gem of a book that shows how a piece of paper and some colored pencils can do wonders to encourage “a more peaceful and compassionate world for all.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 to 8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
