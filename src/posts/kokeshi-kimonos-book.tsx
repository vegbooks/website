import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6350",
  "slug": "kokeshi-kimonos-book",
  "url": "/reviews/kokeshi-kimonos-book/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/11/25/kokeshi-kimonos-book/",
  "title": "Kokeshi Kimonos Book",
  "publishedAt": "2011-11-25",
  "publishedLabel": "November 25th, 2011",
  "excerpt": "My daughter loves clothes, shoes, and accessories. She can’t understand why I don’t wear earrings, and often tells me that she can’t wait to grow up so that she can wear high heels. Not only does she love to play…",
  "image": {
    "src": "/media/2011/11/9781452104935.jpg",
    "alt": "Kokeshi Kimonos Book",
    "width": 210,
    "height": 212
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
      "name": "Annelore Parot",
      "slug": "annelore-parot",
      "url": "/topics/annelore-parot/"
    },
    {
      "name": "Asia",
      "slug": "asia",
      "url": "/topics/asia/"
    },
    {
      "name": "Asian",
      "slug": "asian",
      "url": "/topics/asian/"
    },
    {
      "name": "Clothing",
      "slug": "clothing",
      "url": "/topics/clothing/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Hair",
      "slug": "hair",
      "url": "/topics/hair/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Japan",
      "slug": "japan",
      "url": "/topics/japan/"
    },
    {
      "name": "Kimono",
      "slug": "kimono",
      "url": "/topics/kimono/"
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
    "description": "My daughter loves clothes, shoes, and accessories. She can’t understand why I don’t wear earrings, and often tells me that she can’t wait to grow up so that she can wear high heels. Not only does she love to play…",
    "image": "https://vegbooks.org/media/2011/11/9781452104935.jpg"
  },
  "previous": {
    "title": "All About Turkeys",
    "url": "/reviews/all-about-turkeys/"
  },
  "next": {
    "title": "I Love NY Food",
    "url": "/reviews/i-love-ny-food/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/11/9781452104935.jpg"}><img src={"/media/2011/11/9781452104935.jpg"} alt={"Kokeshi Kimonos Book"} width={210} height={212} /></a>
      </figure>
      <p>{"My daughter loves clothes, shoes, and accessories. She can’t understand why I don’t wear earrings, and often tells me that she can’t wait to grow up so that she can wear high heels. Not only does she love to play dress-up and make jewelry, but she also loves paper dolls and a puzzle that allows her to put together different ensembles."}</p>
      <p>{"So imagine our delight when she received the"}<em>{"Kokeshi Kimonos Book"}</em>{" as a gift. She loves the different kimonos and sashes in the book, and the cute little "}<em>{"kokeshi"}</em>{" (wooden dolls from Japan), and I’m content in knowing that the book provides a fun and interactive introduction to Japanese language and culture."}</p>
      <p>{"While there’s no plot, the "}<em>{"Kokeshi Kimonos Book"}</em>{"invites the reader to engage in several visual games — from finding the drawings that are different from each other, to imagining hairstyles inspired by a mouse, a mushroom, or socks. Add in loads of flaps and cutouts, and the book’s got huge visual appeal."}</p>
      <p>{"This book is a great find for ages 5 to 8."}</p>
    </div>
  );
}
