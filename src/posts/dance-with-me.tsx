import type { PostMetadata } from '../content/types';

export const article = {
  "id": "275",
  "slug": "dance-with-me",
  "url": "/reviews/dance-with-me/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/11/21/dance-with-me/",
  "title": "Dance With Me",
  "publishedAt": "2009-11-21",
  "publishedLabel": "November 21st, 2009",
  "excerpt": "Move over, Frank Sinatra and Vanessa Williams! This Dance With Me, written by Ron Hirschi and featuring beautiful photography by Thomas D. Mangelsen, is a celebration of the movement of wild animals. From prairie…",
  "categories": [
    {
      "name": "Books",
      "slug": "books",
      "url": "/books/"
    }
  ],
  "tags": [
    {
      "name": "Animal Courtship",
      "slug": "animal-courtship",
      "url": "/topics/animal-courtship/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Orcas",
      "slug": "orcas",
      "url": "/topics/orcas/"
    },
    {
      "name": "Photography",
      "slug": "photography",
      "url": "/topics/photography/"
    },
    {
      "name": "Prairie Chickens",
      "slug": "prairie-chickens",
      "url": "/topics/prairie-chickens/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Ron Hirschi",
      "slug": "ron-hirschi",
      "url": "/topics/ron-hirschi/"
    },
    {
      "name": "Thomas D. Mangelson",
      "slug": "thomas-d-mangelson",
      "url": "/topics/thomas-d-mangelson/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
    },
    {
      "name": "Wildlife Books for Kids",
      "slug": "wildlife-books-for-kids",
      "url": "/topics/wildlife-books-for-kids/"
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
    "description": "Move over, Frank Sinatra and Vanessa Williams! This Dance With Me, written by Ron Hirschi and featuring beautiful photography by Thomas D. Mangelsen, is a celebration of the movement of wild animals. From prairie…"
  },
  "previous": {
    "title": "Do Animals Have Feelings Too?",
    "url": "/reviews/do-animals-have-feelings-too-2/"
  },
  "next": {
    "title": "The Lonely Scarecrow",
    "url": "/reviews/the-lonely-scarecrow/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"Move over, Frank Sinatra and Vanessa Williams! This "}<em>{"Dance With Me"}</em>{", written by "}<a href={"http://www.ronhirschi.com/index.html"} target="_blank" rel="noopener noreferrer">{"Ron Hirschi"}</a>{" and featuring beautiful photography by Thomas D. Mangelsen, is a celebration of the movement of wild animals."}</p>
      <p>{"From prairie chickens to orcas, animals dance for a variety of reasons: for courtship, in search of food, or simply for the joy of moving through the air or sea. This book captures the beauty of animal movement in words and photography."}</p>
      <p>{"Ages 4-8. Best read with a CD queued up for a little human dancing after."}</p>
    </div>
  );
}
