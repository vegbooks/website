import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8266",
  "slug": "love-you-when",
  "url": "/reviews/love-you-when/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/10/08/love-you-when/",
  "title": "Love You When",
  "publishedAt": "2012-10-08",
  "publishedLabel": "October 8th, 2012",
  "excerpt": "Open your eyes; love is everywhere. Love You When by Linda Kranz is a sensory exploration of the concept of unconditional love. My favorite line is: I only have to look at you and by your expression I know what you…",
  "image": {
    "src": "/media/2012/10/love-you-when-cover.jpg",
    "alt": "Love You When",
    "width": 210,
    "height": 183
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
      "name": "Bedtime",
      "slug": "bedtime",
      "url": "/topics/bedtime/"
    },
    {
      "name": "Jane Cowles",
      "slug": "jane-cowles",
      "url": "/topics/jane-cowles/"
    },
    {
      "name": "Linda Kranz",
      "slug": "linda-kranz",
      "url": "/topics/linda-kranz/"
    },
    {
      "name": "Love",
      "slug": "love",
      "url": "/topics/love/"
    },
    {
      "name": "Nature",
      "slug": "nature",
      "url": "/topics/nature/"
    },
    {
      "name": "Nature Books",
      "slug": "nature-books",
      "url": "/topics/nature-books/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Unconditional Love",
      "slug": "unconditional-love",
      "url": "/topics/unconditional-love/"
    }
  ],
  "reviewer": {
    "name": "Jane Cowles",
    "slug": "jane-cowles",
    "url": "/contributors/jane-cowles/",
    "aliases": [
      "JANE COCO COWLES",
      "JANE COWLES"
    ]
  },
  "seo": {
    "description": "Open your eyes; love is everywhere. Love You When by Linda Kranz is a sensory exploration of the concept of unconditional love. My favorite line is: I only have to look at you and by your expression I know what you…",
    "image": "https://vegbooks.org/media/2012/10/love-you-when-cover.jpg"
  },
  "previous": {
    "title": "Rickie and Henri",
    "url": "/reviews/rickie-and-henri/"
  },
  "next": {
    "title": "The Thankful Book",
    "url": "/reviews/the-thankful-book/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/10/love-you-when-cover.jpg"}><img src={"/media/2012/10/love-you-when-cover.jpg"} alt={"Love You When"} width={210} height={183} /></a>
      </figure>
      <p>{"Open your eyes; love is everywhere. "}<em>{"Love You When"}</em>{" by Linda Kranz is a sensory exploration of the concept of unconditional love. My favorite line is: "}<em>{"I only have to look at you and by your expression I know what you are thinking."}</em>{"This line reminds me that is love an open and unconditional willingness to receive and accept. Kranz clearly describes love as a state of being; an awareness, not just a feeling. Love is within each and every one of us."}</p>
      <p>{"I love how Kranz reassures us with simple daily occurrences, to illustrate love. Fireflies, rainbows, butterflies, clouds, leaves and stars are there for all to see. We all have the power to imagine, create and be free. Love is that power. Kranz’s imagery and words are a reminder of the universal quality of love."}</p>
      <p>{"Her descriptive words are accentuated by rock collages in which she magically creates a moment in nature by blending together rocks of all colors shapes and sizes. I truly feel the wonder of nature and an element of surprise as I turn each page."}</p>
      <p>{"This book is a delight for children and lovers alike. It calms the mind and alleviates the anxiety we feel when separated from a loved one. For it is comforting to know that we can be reminded of love by looking at natural wonders. This is particularly comforting for young children as they fall asleep at night. For adults it is a reminder that curiousity, that desire to explore, keeps us vibrant."}</p>
      <p>{"Perhaps Kranz’s work falls near and dear to my heart because I feel such a deep connection to nature. Each time I see a rainbow, I think of my grandfather smiling. When I see a ladybug, I am always in awe of its deep red color and eager to count its spots. This curiousity makes me feel alive and vibrant each day."}</p>
      <p>{"The only thing that disappoints me about Kranz’s book is the title, "}<em>{"Love You When"}</em>{" for it suggests that love follows after a particular event. Love is omnipresent and ever present if you are willing to open your eyes. In my humble opinion, the title should be "}<em>{"Love You Everywhere."}</em></p>
      <p><em><a href={"https://rowman.com/"} target="_blank" rel="noopener noreferrer">{"Rowman & Littlefield"}</a>{" provided a review copy of this book."}</em></p>
    </div>
  );
}
