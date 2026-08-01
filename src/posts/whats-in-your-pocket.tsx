import type { PostMetadata } from '../content/types';

export const article = {
  "id": "11145",
  "slug": "whats-in-your-pocket",
  "url": "/reviews/whats-in-your-pocket/",
  "legacyUrl": "https://vegbooks.org/index.php/2021/09/24/whats-in-your-pocket/",
  "title": "What’s in Your Pocket?",
  "publishedAt": "2021-09-24",
  "publishedLabel": "September 24th, 2021",
  "excerpt": "WHAT’S IN YOUR POCKET? by Heather L. Montgomery is a nature-focused picture book that spotlights everyday childhood adventures as inspirations for famous scientists in various fields. George Washington Carver, Jane…",
  "image": {
    "src": "/media/2022/01/whats-in-your-pocket-cover-800x-1.jpg",
    "alt": "What’s in Your Pocket?",
    "width": 600,
    "height": 464
  },
  "categories": [
    {
      "name": "Books",
      "slug": "books",
      "url": "/books/"
    }
  ],
  "tags": [
    {
      "name": "Heather L. Montgomery",
      "slug": "heather-l-montgomery",
      "url": "/topics/heather-l-montgomery/"
    },
    {
      "name": "Maribel Lechuga",
      "slug": "maribel-lechuga",
      "url": "/topics/maribel-lechuga/"
    },
    {
      "name": "Nature Books",
      "slug": "nature-books",
      "url": "/topics/nature-books/"
    },
    {
      "name": "non-fiction",
      "slug": "non-fiction",
      "url": "/topics/non-fiction/"
    },
    {
      "name": "Science",
      "slug": "science",
      "url": "/topics/science/"
    },
    {
      "name": "young readers",
      "slug": "young-readers",
      "url": "/topics/young-readers/"
    }
  ],
  "reviewer": {
    "name": "Kristin Wald",
    "slug": "kristin-wald",
    "url": "/contributors/kristin-wald/",
    "aliases": [
      "KRISITN WALD",
      "Kristin Wald",
      "KRISTIN WALD"
    ]
  },
  "seo": {
    "description": "WHAT’S IN YOUR POCKET? by Heather L. Montgomery is a nature-focused picture book that spotlights everyday childhood adventures as inspirations for famous scientists in various fields. George Washington Carver, Jane…",
    "image": "https://vegbooks.org/media/2022/01/whats-in-your-pocket-cover-800x-1.jpg"
  },
  "previous": {
    "title": "What if You Could Sniff Like a Shark?",
    "url": "/reviews/what-if-you-could-sniff-like-a-shark/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--center">
        <img src={"/media/2022/01/whats-in-your-pocket-cover-800x-1.jpg"} alt={"What’s in Your Pocket?"} width={600} height={464} />
      </figure>
      <p><a href={"https://www.indiebound.org/book/9781623541224"} target="_blank" rel="noopener noreferrer">{"WHAT’S IN YOUR POCKET?"}</a>{" by Heather L. Montgomery is a nature-focused picture book that spotlights everyday childhood adventures as inspirations for famous scientists in various fields. George Washington Carver, Jane Goodall, Diego Cisneros-Heredia, and Mary Anning are just a few of the children who grow up to be important discoverers and scientists. The book is engaging and simple, and the connection between childhood curiosity and its joyful (and sometimes messy!) side effects will ring true for many readers. With the growing emphasis on outdoor education and connecting to nature, families and educators are sure to find this non-fiction book inspiring and entertaining."}</p>
      <p>{"Highlights include being kind to living beings (Darwin’s sister convinces him to stop collecting and killing beetles, Diego Cisneros-Heredia and his mother return a lizard to the wild) and the repeated incidents of children’s joy in the wonder and diversity in nature. The beautiful illustrations by Maribel Lechuga are perfectly matched to the childhood adventures and discoveries. With nature-based colors and expressive expressions, the focus on joyful curiosity is apparent. The drawings of butterflies, sea creatures, and even milkweed pods are realistic enough to spark interest in further research."}</p>
      <p>{"A caveat: readers should know that creatures like worms, slugs, butterflies, and sea creatures are all presented as “discoveries to collect.” This presents an important opportunity for families to discuss the ethics of treating living creatures with respect and how scientific discoveries may bump up against those ethics. Age appropriate emphasis is possible within the spectrum of vignettes depicted. For example, William Beebe’s childhood curiosity encourages him to take eggs from a bird’s nest; this example can give clear guidance to younger readers of what to observe and not collect. Older readers will be able to respond to the inserted questions throughout the book about the differences between collecting and removing from an ecosystem, observing, categorizing, or even killing. The author includes “My Rules for Collecting” at the end of the book that includes respect for nature, people she lives with, and herself. Included is a reminder the it is sometimes illegal to collect some items and to only collect plants and organisms that are not alive. She also mentions the alternatives of taking a photograph or drawing a picture instead of removing something from its environment. I would have liked to see more of these “rules for collecting” within the text of the book, but it’s a comprehensive list overall."}</p>
    </div>
  );
}
