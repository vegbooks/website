import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1518",
  "slug": "an-adventure-with-billy-bunny",
  "url": "/reviews/an-adventure-with-billy-bunny/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/03/an-adventure-with-billy-bunny/",
  "title": "An Adventure with Billy Bunny",
  "publishedAt": "2010-06-03",
  "publishedLabel": "June 3rd, 2010",
  "excerpt": "Billy the baby bunny is on the hunt for a “magical flying creature” called a butterfly. Together with his friends — a nuthatch, field mouse, and a black-nosed mole — he looks in the daffodils and the sweetbriar bush,…",
  "categories": [
    {
      "name": "Books",
      "slug": "books",
      "url": "/books/"
    }
  ],
  "tags": [
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Grasshoppers",
      "slug": "grasshoppers",
      "url": "/topics/grasshoppers/"
    },
    {
      "name": "Ladybugs",
      "slug": "ladybugs",
      "url": "/topics/ladybugs/"
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
      "name": "Rabbits",
      "slug": "rabbits",
      "url": "/topics/rabbits/"
    },
    {
      "name": "Respect for Nature",
      "slug": "respect-for-nature",
      "url": "/topics/respect-for-nature/"
    }
  ],
  "reviewer": {
    "name": "Jessica Almy",
    "slug": "jessica-almy",
    "url": "/contributors/jessica-almy/",
    "aliases": [
      "Jessica",
      "JESSICA ALMY"
    ]
  },
  "seo": {
    "description": "Billy the baby bunny is on the hunt for a “magical flying creature” called a butterfly. Together with his friends — a nuthatch, field mouse, and a black-nosed mole — he looks in the daffodils and the sweetbriar bush,…"
  },
  "previous": {
    "title": "Too Many Pears",
    "url": "/reviews/too-many-pears/"
  },
  "next": {
    "title": "Christian the Lion",
    "url": "/reviews/christian-the-lion/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"Billy the baby bunny is on the hunt for a “magical flying creature” called a butterfly. Together with his friends — a nuthatch, field mouse, and a black-nosed mole — he looks in the daffodils and the sweetbriar bush, and under a water lily. Along the way, he discovers a bee, grasshoppers, and a number of birds before falling asleep. Happily, at the end of the book, he is awoken by a flock of butterflies."}</p>
      <p>{"Kids will enjoy lifting the flaps to see the wild animals, and parents will appreciate the life-like illustrations. "}<em><a href={"http://www.goodreads.com/book/show/5054983-an-adventure-with-billy-bunny"} target="_blank" rel="noopener noreferrer">{"An Adventure with Billy Bunny"}</a></em>{"is a nice book to instill reverence for nature."}</p>
      <p>{"Ages 3-6. This book is out-of-print but is available for used purchase."}</p>
    </div>
  );
}
