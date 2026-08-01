import type { PostMetadata } from '../content/types';

export const article = {
  "id": "163",
  "slug": "the-magic-finger",
  "url": "/reviews/the-magic-finger/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/11/15/the-magic-finger/",
  "title": "The Magic Finger",
  "publishedAt": "2009-11-15",
  "publishedLabel": "November 15th, 2009",
  "excerpt": "Ever get so mad at someone that you see red? When that happens to the narrator of Roald Dahl and Quentin Blake’s book The Magic Finger, she points her magic finger and well … things happen. Veg kids will probably…",
  "image": {
    "src": "/media/2010/10/girl-reading.jpg",
    "alt": "girl reading book",
    "width": 210,
    "height": 280
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
      "name": "1960s Childrens Literature",
      "slug": "1960s-childrens-literature",
      "url": "/topics/1960s-childrens-literature/"
    },
    {
      "name": "Animal Families",
      "slug": "animal-families",
      "url": "/topics/animal-families/"
    },
    {
      "name": "animal rights",
      "slug": "animal-rights",
      "url": "/topics/animal-rights/"
    },
    {
      "name": "Anti-Hunting",
      "slug": "anti-hunting",
      "url": "/topics/anti-hunting/"
    },
    {
      "name": "Deer",
      "slug": "deer",
      "url": "/topics/deer/"
    },
    {
      "name": "Ducks",
      "slug": "ducks",
      "url": "/topics/ducks/"
    },
    {
      "name": "Hunting",
      "slug": "hunting",
      "url": "/topics/hunting/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Quentin Blake",
      "slug": "quentin-blake",
      "url": "/topics/quentin-blake/"
    },
    {
      "name": "Roald Dahl",
      "slug": "roald-dahl",
      "url": "/topics/roald-dahl/"
    },
    {
      "name": "vegan kids",
      "slug": "vegan-kids",
      "url": "/topics/vegan-kids/"
    },
    {
      "name": "vegetarian kids",
      "slug": "vegetarian-kids",
      "url": "/topics/vegetarian-kids/"
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
    "description": "Ever get so mad at someone that you see red? When that happens to the narrator of Roald Dahl and Quentin Blake’s book The Magic Finger, she points her magic finger and well … things happen. Veg kids will probably…",
    "image": "https://vegbooks.org/media/2010/10/girl-reading.jpg"
  },
  "previous": {
    "title": "All In A Day",
    "url": "/reviews/all-in-a-day/"
  },
  "next": {
    "title": "The Lady and the Spider",
    "url": "/reviews/the-lady-and-the-spider-guest-review-by-sharon-young/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/10/girl-reading.jpg"}><img src={"/media/2010/10/girl-reading.jpg"} alt={"girl reading book"} width={210} height={280} /></a>
      </figure>
      <p>{"Ever get so mad at someone that you see red? When that happens to the narrator of "}<a href={"http://www.roalddahl.com/"} target="_blank" rel="noopener noreferrer">{"Roald Dahl"}</a>{" and "}<a href={"http://www.quentinblake.com/"} target="_blank" rel="noopener noreferrer">{"Quentin Blake’s"}</a>{" book "}<em>{"The Magic Finger"}</em>{", she points her magic finger and well … things happen."}</p>
      <p>{"Veg kids will probably relate when the narrator gets angry at her friends and neighbors, the Greggs, for hunting deer and ducks, and they’ll be delighted to find out that the result of her finger-pointing is that the Greggs and the ducks change places for a night. When the ducks take up arms and confront the Greggs about the slaughter of their family, the lesson is brought home. The Greggs promise never to hunt again; instead, they destroy their guns and put flowers on the graves of the dead ducks."}</p>
      <p>{"Ages 8-12. For more reviews, visit "}<a href={"http://www.goodreads.com/book/show/6670.The_Magic_Finger"} target="_blank" rel="noopener noreferrer">{"Goodreads"}</a>{"."}</p>
    </div>
  );
}
