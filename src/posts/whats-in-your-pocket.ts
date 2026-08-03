import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2022/01/whats-in-your-pocket-cover-800x-1.jpg",
    "alt": "What’s in Your Pocket?",
    "width": 600,
    "height": 464
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781623541224",
        "external": true,
        "children": [
          "WHAT’S IN YOUR POCKET?"
        ]
      },
      " by Heather L. Montgomery is a nature-focused picture book that spotlights everyday childhood adventures as inspirations for famous scientists in various fields. George Washington Carver, Jane Goodall, Diego Cisneros-Heredia, and Mary Anning are just a few of the children who grow up to be important discoverers and scientists. The book is engaging and simple, and the connection between childhood curiosity and its joyful (and sometimes messy!) side effects will ring true for many readers. With the growing emphasis on outdoor education and connecting to nature, families and educators are sure to find this non-fiction book inspiring and entertaining."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Highlights include being kind to living beings (Darwin’s sister convinces him to stop collecting and killing beetles, Diego Cisneros-Heredia and his mother return a lizard to the wild) and the repeated incidents of children’s joy in the wonder and diversity in nature. The beautiful illustrations by Maribel Lechuga are perfectly matched to the childhood adventures and discoveries. With nature-based colors and expressive expressions, the focus on joyful curiosity is apparent. The drawings of butterflies, sea creatures, and even milkweed pods are realistic enough to spark interest in further research."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A caveat: readers should know that creatures like worms, slugs, butterflies, and sea creatures are all presented as “discoveries to collect.” This presents an important opportunity for families to discuss the ethics of treating living creatures with respect and how scientific discoveries may bump up against those ethics. Age appropriate emphasis is possible within the spectrum of vignettes depicted. For example, William Beebe’s childhood curiosity encourages him to take eggs from a bird’s nest; this example can give clear guidance to younger readers of what to observe and not collect. Older readers will be able to respond to the inserted questions throughout the book about the differences between collecting and removing from an ecosystem, observing, categorizing, or even killing. The author includes “My Rules for Collecting” at the end of the book that includes respect for nature, people she lives with, and herself. Included is a reminder the it is sometimes illegal to collect some items and to only collect plants and organisms that are not alive. She also mentions the alternatives of taking a photograph or drawing a picture instead of removing something from its environment. I would have liked to see more of these “rules for collecting” within the text of the book, but it’s a comprehensive list overall."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
