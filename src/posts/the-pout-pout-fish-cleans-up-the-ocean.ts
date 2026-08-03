import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2019/06/pout-pout-fish.jpg",
    "alt": "The Pout-Pout Fish Cleans Up the Ocean",
    "href": "/",
    "width": 300,
    "height": 300,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "There is a new Pout-Pout fish story out, and it’s timely and relevant, and we love it! ",
      {
        "type": "link",
        "href": "https://us.macmillan.com/books/9780374309343",
        "external": true,
        "children": [
          "THE POUT-POUT FISH CLEANS UP THE OCEAN"
        ]
      },
      " by Deborah Diesen and Dan Hanna brings back Mr. Fish and his friends who live happily in the beautiful ocean. Suddenly, Mr. Fish notices that there is “A big…BIG…MESS!” in the ocean, and he doesn’t know what it is. He swims around and shares his concerns with his friends, always asking if they’d like to join him to figure out what it is and to solve the problem. Together, the ocean creatures come to a disturbing root cause of the mess and decide to go about fixing the damage."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The text emphasizes persistence and teamwork in tackling the problem of plastic and garbage pollution in the ocean. And after observing and analyzing the mess, the characters conclude that the problem is themselves. More specifically the bad and careless habits they (and we!) have of a single-use and throwaway society. To emphasize the idealist ocean world of Mr. Fish, the creatures all take responsibility for their actions and work together to not just clean up the mess they had caused, but they also decide to develop new habits for travel, use of plastic, and putting trash where it belongs. The issue is a “big…BIG…MESS,” but the story makes sure to demonstrate that change can start with individuals working together."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Despite the enormity of the problems in the story, it never feels overwhelming or hopeless for readers. The colorful and playful illustrations allow for children of all ages to discover and enjoy the characters and surroundings. Older children and adults will appreciate the not-so-subtle commentary on the items that contribute to the mess in the ocean. A box with “plastic junk-oids” printed on its side and the irony of a balloon that reads “Happy Earth Day” will drive the point home. The book ends with a note from the creators of the series making suggestions for actions readers can take to join the Pout-Pout Fish in his quest to clean up the ocean."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Highly recommended."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
