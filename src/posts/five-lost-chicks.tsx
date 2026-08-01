import type { PostMetadata } from '../content/types';

export const article = {
  "id": "379",
  "slug": "five-lost-chicks",
  "url": "/reviews/five-lost-chicks/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/12/04/five-lost-chicks/",
  "title": "Five Lost Chicks",
  "publishedAt": "2009-12-04",
  "publishedLabel": "December 4th, 2009",
  "excerpt": "This cute little board book by Jane Brett and Kate Davies teaches little kids counting while demonstrating a mother hen’s love for her brood. The farm is idyllic — picture Farm Sanctuary or Poplar Spring — unlike…",
  "categories": [
    {
      "name": "Books",
      "slug": "books",
      "url": "/books/"
    }
  ],
  "tags": [
    {
      "name": "Animal Families",
      "slug": "animal-families",
      "url": "/topics/animal-families/"
    },
    {
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Chickens",
      "slug": "chickens",
      "url": "/topics/chickens/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Momma Animals",
      "slug": "momma-animals",
      "url": "/topics/momma-animals/"
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
    "description": "This cute little board book by Jane Brett and Kate Davies teaches little kids counting while demonstrating a mother hen’s love for her brood. The farm is idyllic — picture Farm Sanctuary or Poplar Spring — unlike…"
  },
  "previous": {
    "title": "That’s Why We Don’t Eat Animals",
    "url": "/reviews/thats-why-we-dont-eat-animals-guest-post-by-carolyn-m-mullin/"
  },
  "next": {
    "title": "Curious George",
    "url": "/reviews/curious-george/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"This cute little board book by Jane Brett and Kate Davies teaches little kids counting while demonstrating a mother hen’s love for her brood. The farm is idyllic — picture "}<a href={"http://farmsanctuary.org/farm/"} target="_blank" rel="noopener noreferrer">{"Farm Sanctuary"}</a>{" or "}<a href={"http://www.animalsanctuary.org/"} target="_blank" rel="noopener noreferrer">{"Poplar Spring"}</a>{" — unlike industrial factory farms. But given the target audience, I think it’s just right."}</p>
      <p>{"Ages 0-3."}</p>
    </div>
  );
}
