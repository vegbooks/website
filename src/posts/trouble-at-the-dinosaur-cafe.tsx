import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2016",
  "slug": "trouble-at-the-dinosaur-cafe",
  "url": "/reviews/trouble-at-the-dinosaur-cafe/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/07/trouble-at-the-dinosaur-cafe/",
  "title": "Trouble at the Dinosaur Cafe",
  "publishedAt": "2010-06-07",
  "publishedLabel": "June 7th, 2010",
  "excerpt": "One of the things that many children seem to go through while growing up is a phase of liking dinosaurs. In Trouble at the Dinosaur Caféby Brian Moses, a group of vegetarian dinosaurs are dining in a restaurant when…",
  "image": {
    "src": "/media/2010/06/boy-book-pic-from-istock.jpg",
    "alt": "Trouble at the Dinosaur Cafe",
    "width": 216,
    "height": 143
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
      "name": "Best Books for Vegetarian Kids",
      "slug": "best-books-for-vegetarian-kids",
      "url": "/topics/best-books-for-vegetarian-kids/"
    },
    {
      "name": "Brian Moses",
      "slug": "brian-moses",
      "url": "/topics/brian-moses/"
    },
    {
      "name": "Dinosaurs",
      "slug": "dinosaurs",
      "url": "/topics/dinosaurs/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Vegetarian Characters",
      "slug": "vegetarian-characters",
      "url": "/topics/vegetarian-characters/"
    },
    {
      "name": "Vegetarian Kids Books",
      "slug": "vegetarian-kids-books",
      "url": "/topics/vegetarian-kids-books/"
    }
  ],
  "reviewer": {
    "name": "Jacqueline Bodnar",
    "slug": "jacqueline-bodnar",
    "url": "/contributors/jacqueline-bodnar/",
    "aliases": [
      "JACQUELINE BODNAR"
    ]
  },
  "seo": {
    "description": "One of the things that many children seem to go through while growing up is a phase of liking dinosaurs. In Trouble at the Dinosaur Caféby Brian Moses, a group of vegetarian dinosaurs are dining in a restaurant when…",
    "image": "https://vegbooks.org/media/2010/06/boy-book-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Christian the Lion",
    "url": "/reviews/christian-the-lion/"
  },
  "next": {
    "title": "How Do Dinosaurs Love Their Cats?",
    "url": "/reviews/how-do-dinosaurs-love-their-cats/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/boy-book-pic-from-istock.jpg"}><img src={"/media/2010/06/boy-book-pic-from-istock.jpg"} alt={"Trouble at the Dinosaur Cafe"} width={216} height={143} /></a>
      </figure>
      <p>{"One of the things that many children seem to go through while growing up is a phase of liking dinosaurs. In "}<em>{"Trouble at the Dinosaur Café"}</em>{"by Brian Moses, a group of vegetarian dinosaurs are dining in a restaurant when in walks a meat-eating dinosaur."}</p>
      <p>{"The carnivorous dinosaur starts trouble in the diner when he realizes that they serve only plant-based foods. He turns on the other dinosaurs and threatens to eat them, because he wants meat so badly. In response, the other dinosaurs team up to tackle him to the ground and proceed to tickle his feet until he can no longer take it. This makes him give up and decide to leave in search of easier meat."}</p>
      <p><em><a href={"http://www.goodreads.com/book/show/2133870.Trouble_at_the_Dinosaur_Cafe"} target="_blank" rel="noopener noreferrer">{"Trouble at the Dinosaur Café"}</a></em>{" is a cute book, especially for vegetarian children who may be dinosaur fans. Through its action, they may learn about standing up for themselves and using creative ways to take on someone who challenges their way of life."}</p>
      <p>{"Vegetarian parents may want to know that the book includes some images of meat dishes, as the carnivorous dinosaur discusses what he is hungry for."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
