import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1677",
  "slug": "twelve-gifts-of-birth",
  "url": "/reviews/twelve-gifts-of-birth/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/05/18/twelve-gifts-of-birth/",
  "title": "The Twelve Gifts of Birth",
  "publishedAt": "2010-05-18",
  "publishedLabel": "May 18th, 2010",
  "excerpt": "It’s never too early to begin nurturing healthy, humane qualities in children, and The Twelve Gifts of Birth by Charlene Costanzo serves as an inspiring and magical touchstone toward character, confidence and…",
  "image": {
    "src": "/media/2010/12/toddler-girl-reading.jpg",
    "alt": "The Twelve Gifts of Birth",
    "width": 210,
    "height": 320
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
      "name": "Books that Teach Character",
      "slug": "books-that-teach-character",
      "url": "/topics/books-that-teach-character/"
    },
    {
      "name": "Charlene Costanzo",
      "slug": "charlene-costanzo",
      "url": "/topics/charlene-costanzo/"
    },
    {
      "name": "Compassion",
      "slug": "compassion",
      "url": "/topics/compassion/"
    },
    {
      "name": "Confidence",
      "slug": "confidence",
      "url": "/topics/confidence/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Marsha Rakestraw",
      "slug": "marsha-rakestraw",
      "url": "/topics/marsha-rakestraw/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Spiritual",
      "slug": "spiritual",
      "url": "/topics/spiritual/"
    }
  ],
  "reviewer": {
    "name": "Marsha Rakestraw",
    "slug": "marsha-rakestraw",
    "url": "/contributors/marsha-rakestraw/",
    "aliases": [
      "MARSHA RAKESTRAW"
    ]
  },
  "seo": {
    "description": "It’s never too early to begin nurturing healthy, humane qualities in children, and The Twelve Gifts of Birth by Charlene Costanzo serves as an inspiring and magical touchstone toward character, confidence and…",
    "image": "https://vegbooks.org/media/2010/12/toddler-girl-reading.jpg"
  },
  "previous": {
    "title": "The Cats of Roxville Station",
    "url": "/reviews/cats-roxville/"
  },
  "next": {
    "title": "Duck at the Door",
    "url": "/reviews/duck-at-the-door/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/12/toddler-girl-reading.jpg"}><img src={"/media/2010/12/toddler-girl-reading.jpg"} alt={"The Twelve Gifts of Birth"} width={210} height={320} /></a>
      </figure>
      <p>{"It’s never too early to begin nurturing healthy, humane qualities in children, and "}<em><a href={"http://www.twelvegifts.com/"} target="_blank" rel="noopener noreferrer">{"The Twelve Gifts of Birth"}</a></em>{" by Charlene Costanzo serves as an inspiring and magical touchstone toward character, confidence and self-respect. The story begins by revealing the “secret” that fairy godmothers, or “wisewomen,” bestow 12 gifts upon all children when they are born. The rest of the book reveals these simple gifts (strength, compassion, hope, wisdom, reverence, etc.), offering a blessing for each gift alongside colorized photos and simple colored pencil images."}</p>
      <p>{"While a few readers may be troubled by the spiritual overtone, most people will find a worthy, hopeful and inspiring message for their young children, their teens, and even for themselves."}</p>
      <p>{"Ages 3 and up."}</p>
    </div>
  );
}
