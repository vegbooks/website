import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3705",
  "slug": "hilda-hens-search",
  "url": "/reviews/hilda-hens-search/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/12/06/hilda-hens-search/",
  "title": "Hilda Hen’s Search",
  "publishedAt": "2010-12-06",
  "publishedLabel": "December 6th, 2010",
  "excerpt": "Accompanied by striking linocut illustrations, Hilda Hen’s Search is a cute story of a hen’s hunt for the perfect place to lay her eggs. After finding several appealing places that aren’t quite right — such as the…",
  "image": {
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Hilda Hen’s Search",
    "width": 210,
    "height": 139
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
      "name": "1990s Books",
      "slug": "1990s-books",
      "url": "/topics/1990s-books/"
    },
    {
      "name": "Animal Emotion",
      "slug": "animal-emotion",
      "url": "/topics/animal-emotion/"
    },
    {
      "name": "Animal Families",
      "slug": "animal-families",
      "url": "/topics/animal-families/"
    },
    {
      "name": "Chickens",
      "slug": "chickens",
      "url": "/topics/chickens/"
    },
    {
      "name": "Farmed Animals",
      "slug": "farmed-animals",
      "url": "/topics/farmed-animals/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Mary Wormell",
      "slug": "mary-wormell",
      "url": "/topics/mary-wormell/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "Accompanied by striking linocut illustrations, Hilda Hen’s Search is a cute story of a hen’s hunt for the perfect place to lay her eggs. After finding several appealing places that aren’t quite right — such as the…",
    "image": "https://vegbooks.org/media/2010/06/girls-book-pic-from-istock.jpg"
  },
  "previous": {
    "title": "The Snake Who Was Afraid of People",
    "url": "/reviews/the-snake-who-was-afraid-of-people/"
  },
  "next": {
    "title": "Wurst Case Scenario",
    "url": "/reviews/wurst-case-scenario/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/girls-book-pic-from-istock.jpg"}><img src={"/media/2010/06/girls-book-pic-from-istock.jpg"} alt={"Hilda Hen’s Search"} width={210} height={139} /></a>
      </figure>
      <p>{"Accompanied by striking linocut illustrations, "}<em>{"Hilda Hen’s Search"}</em>{" is a cute story of a hen’s hunt for the perfect place to lay her eggs. After finding several appealing places that aren’t quite right — such as the basket of a bicycle — Hilda finally finds a place to hatch her brood inside a dollhouse."}</p>
      <p><a href={"http://www.goodreads.com/author/show/445502.Mary_Wormell"} target="_blank" rel="noopener noreferrer">{"Mary Wormell’s sweet book"}</a>{" is based on a real-life hen named Hilda, and it’s an excellent introduction to chickens for young children, especially given its emphasis on Hilda as an individual and her love for her unhatched chicks."}</p>
      <p>{"Ages 3-6."}</p>
    </div>
  );
}
