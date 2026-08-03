import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/03/kidssola-rlo.jpg",
    "alt": "The Kids’ Solar Energy Book",
    "href": "/media/2011/03/kidssola-rlo.jpg",
    "width": 205,
    "height": 144,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Frequent Vegbooks readers may have picked up on my scorn of some ",
      {
        "type": "link",
        "href": "/reviews/onion-juice-poop-and-other-surprising-sources-of-alternative-energy/",
        "children": [
          "alternative energy nonfiction"
        ]
      },
      " that clearly omits any mention of solar energy. The cosmos aligned and sent me a copy of ",
      {
        "type": "link",
        "href": "http://www.imaginebks.com/children/kids_solar.html",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "The Kids’ Solar Energy Book"
            ]
          }
        ]
      },
      ", which is a humorous means of investigating active systems, passive solar, and the conversion of sunlight into electricity through a classroom setting. The information presented within is very much a la Charlie Brown, whereby we can’t see the teacher, but we can hear her. Students are drawn in a 1970’s style (the book was originally published in 1982 and rereleased in 2009) and help to elaborate on their lessons and make many a joke."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Illustrator Malcom Wells does a fantastic job incorporating the laugh-out-loud absurd in his cartoons: cats, dinosaurs and giant ants sitting at desks, kids in random costume and engaging in off-topic behavior (knitting, brewing coffee, and doing hand stands). However, it takes nearly 90 pages to convey the basics of solar energy – a bit lengthy I think, especially when the pages are set up in the same manner and look virtually identical (the entire book is done in a green/white two-tone color scale). Overall, this text is an unusual take on solar energy, but one that kids will enjoy. It may just take a few sessions to get through."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9+."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
