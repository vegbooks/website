import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10219",
  "slug": "turkey-trouble",
  "url": "/reviews/turkey-trouble/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/11/23/turkey-trouble/",
  "title": "Turkey Trouble",
  "publishedAt": "2015-11-23",
  "publishedLabel": "November 23rd, 2015",
  "excerpt": "Another great find from the author of Turkey Claus. Turkey doesn’t want to be eaten for Thanksgiving and disguises himself as various other farm animals in an effort to hide from the farmer. It’s basically the same…",
  "image": {
    "src": "/media/2015/11/turkey-trouble.jpg",
    "alt": "turkey trouble",
    "width": 480,
    "height": 509
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
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Lee Harper",
      "slug": "lee-harper",
      "url": "/topics/lee-harper/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Thanksgiving",
      "slug": "thanksgiving",
      "url": "/topics/thanksgiving/"
    },
    {
      "name": "Thanksgiving Books for Vegetarian Kids",
      "slug": "thanksgiving-books-for-vegetarian-kids",
      "url": "/topics/thanksgiving-books-for-vegetarian-kids/"
    },
    {
      "name": "Wendi Silvano",
      "slug": "wendi-silvano",
      "url": "/topics/wendi-silvano/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Kali",
    "slug": "jennifer-kali",
    "url": "/contributors/jennifer-kali/",
    "aliases": [
      "Jennifer Kali",
      "JENNIFER KALI"
    ]
  },
  "seo": {
    "description": "Another great find from the author of Turkey Claus. Turkey doesn’t want to be eaten for Thanksgiving and disguises himself as various other farm animals in an effort to hide from the farmer. It’s basically the same…",
    "image": "https://vegbooks.org/media/2015/11/turkey-trouble.jpg"
  },
  "previous": {
    "title": "Not a Nugget",
    "url": "/reviews/not-a-nugget/"
  },
  "next": {
    "title": "101 Dalmatians (1996)",
    "url": "/reviews/101-dalmatians-1996/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"Another great find from the author of "}<a href={"/reviews/turkey-claus/"}><em>{"Turkey Claus"}</em></a>{". Turkey doesn’t want to be eaten for Thanksgiving and disguises himself as various other farm animals in an effort to hide from the farmer. It’s basically the same premise as "}<a href={"/reviews/run-turkey-run-2/"}><em>{"Run, Turkey, Run"}</em></a>{", but our library has room for two turkey-friendly Thanksgiving books."}</p>
      <figure class="content-image content-image--center">
        <img src={"/media/2015/11/turkey-trouble.jpg"} alt={"turkey trouble"} width={480} height={509} />
      </figure>
      <p>{"My two-year-old is loving this book. On every page he throws his hands up in the air and asks, “Where Turkey go?” and then points out Turkey’s latest disguise. The repetition is fun for a read aloud with young kids and the pictures are fun and engaging. I’m very happy to have added it to our library of Thanksgiving books this year."}</p>
      <p>{"Ages 2+."}</p>
    </div>
  );
}
