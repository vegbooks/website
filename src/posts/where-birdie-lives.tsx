import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10750",
  "slug": "where-birdie-lives",
  "url": "/reviews/where-birdie-lives/",
  "legacyUrl": "https://vegbooks.org/index.php/2019/02/10/where-birdie-lives/",
  "title": "Where Birdie Lives",
  "publishedAt": "2019-02-10",
  "publishedLabel": "February 10th, 2019",
  "excerpt": "The curiosity of preschoolers is tapped into throughout the very sweet oversized board book WHERE BIRDIE LIVESwritten and illustrated by Elena Tsvetaeva. It’s a sturdy lift-the-flap book that will have children…",
  "image": {
    "src": "/media/2019/02/where-birdie-lives.jpg",
    "alt": "Where Birdie Lives",
    "width": 300,
    "height": 300
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
      "name": "Clever Publishing",
      "slug": "clever-publishing",
      "url": "/topics/clever-publishing/"
    },
    {
      "name": "Elena Tsvetaeva",
      "slug": "elena-tsvetaeva",
      "url": "/topics/elena-tsvetaeva/"
    },
    {
      "name": "preschool book",
      "slug": "preschool-book",
      "url": "/topics/preschool-book/"
    },
    {
      "name": "read aloud book",
      "slug": "read-aloud-book",
      "url": "/topics/read-aloud-book/"
    },
    {
      "name": "Where Birdie Lives",
      "slug": "where-birdie-lives",
      "url": "/topics/where-birdie-lives/"
    }
  ],
  "reviewer": {
    "name": "Kristin Wald",
    "slug": "kristin-wald",
    "url": "/contributors/kristin-wald/",
    "aliases": [
      "KRISITN WALD",
      "Kristin Wald",
      "KRISTIN WALD"
    ]
  },
  "seo": {
    "description": "The curiosity of preschoolers is tapped into throughout the very sweet oversized board book WHERE BIRDIE LIVESwritten and illustrated by Elena Tsvetaeva. It’s a sturdy lift-the-flap book that will have children…",
    "image": "https://vegbooks.org/media/2019/02/where-birdie-lives.jpg"
  },
  "previous": {
    "title": "Books for Dog Lovers of All Ages",
    "url": "/reviews/books-for-dog-lovers-of-all-ages/"
  },
  "next": {
    "title": "The Plantiful Plate from the Yommme Kitchen",
    "url": "/reviews/the-plantiful-plate-from-the-yommme-kitchen/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <a href={"/reviews/where-birdie-lives/"}><img src={"/media/2019/02/where-birdie-lives.jpg"} alt={"Where Birdie Lives"} width={300} height={300} /></a>
      </figure>
      <p>{"The curiosity of preschoolers is tapped into throughout the very sweet oversized board book "}<strong><a href={"https://www.indiebound.org/book/9781948418003"} target="_blank" rel="noopener noreferrer">{"WHERE BIRDIE LIVES"}</a></strong>{"written and illustrated by Elena Tsvetaeva. It’s a sturdy lift-the-flap book that will have children following along as a friendly dog journeys to find out where a passing bird lives."}</p>
      <p>{"As the dog searches, she looks under leaves and in burrows and under lily pads, discovering new friends along the way. The bright but gentle colors change with each page, and the simple, wide-eyed illustrations are perfect for the birth through three-year old set."}</p>
      <p><em>{"Where Birdie Lives"}</em>{"is clearly meant as a read-aloud book, but after several reads, children may choose to look through the book on their own, naming animals and habitats as they go along. In addition, the illustrations lend themselves to creative use like counting the veins on a leaf or using a finger to trace the path of a mole family in its burrow."}</p>
      <p>{"This interactive board-book is recommended for ages 0-3."}</p>
    </div>
  );
}
