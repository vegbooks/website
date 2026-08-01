import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10098",
  "slug": "i-love-you-blankie",
  "url": "/reviews/i-love-you-blankie/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/03/26/i-love-you-blankie/",
  "title": "I Love You, Blankie",
  "publishedAt": "2015-03-26",
  "publishedLabel": "March 26th, 2015",
  "excerpt": "This cute board book uses sing-songy verse to tell a classic bedtime story. A toddler and his (her?) blanket go on an adventure along the water and up into the sky, only to settle into bed and fall peacefully asleep.…",
  "image": {
    "src": "/media/2015/03/i-love-you-blankie.jpg",
    "alt": "I-Love-You-Blankie",
    "width": 484,
    "height": 572
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
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Bedtime",
      "slug": "bedtime",
      "url": "/topics/bedtime/"
    },
    {
      "name": "Board Book",
      "slug": "board-book",
      "url": "/topics/board-book/"
    },
    {
      "name": "Jane Massey",
      "slug": "jane-massey",
      "url": "/topics/jane-massey/"
    },
    {
      "name": "Sheryl Haft",
      "slug": "sheryl-haft",
      "url": "/topics/sheryl-haft/"
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
    "description": "This cute board book uses sing-songy verse to tell a classic bedtime story. A toddler and his (her?) blanket go on an adventure along the water and up into the sky, only to settle into bed and fall peacefully asleep.…",
    "image": "https://vegbooks.org/media/2015/03/i-love-you-blankie.jpg"
  },
  "previous": {
    "title": "Lullaby & Kisses Sweet: Poems to Love with Your Baby",
    "url": "/reviews/lullaby-kisses-sweet-poems-to-love-with-your-baby/"
  },
  "next": {
    "title": "Rhymoceros",
    "url": "/reviews/rhymoceros/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"This cute board book uses sing-songy verse to tell a classic bedtime story. A toddler and his (her?) blanket go on an adventure along the water and up into the sky, only to settle into bed and fall peacefully asleep."}</p>
      <figure class="content-image content-image--center">
        <img src={"/media/2015/03/i-love-you-blankie.jpg"} alt={"I-Love-You-Blankie"} width={484} height={572} />
      </figure>
      <p>{"I like that this book’s dreamy quality captures the versatility that so many young children find in a beloved blanket. A blanket can be a cape, a sail, or a balloon. But at the end of the day, it’s also a source of comfort–to “snuggle,” and “hug and cuddle, too.”"}</p>
      <p>{"Babies and toddlers will like this book’s soft padded cover. I recommend this book for newborn through 18 months."}</p>
      <p><em>{"The "}<a href={"https://hachettebookgroup.com/kids/"} target="_blank" rel="noopener noreferrer">{"publisher"}</a>{" sent me a review copy of this book."}</em></p>
    </div>
  );
}
