import type { PostMetadata } from '../content/types';

export const article = {
  "id": "544",
  "slug": "a-turkey-for-thanksgiving",
  "url": "/reviews/a-turkey-for-thanksgiving/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/02/19/a-turkey-for-thanksgiving/",
  "title": "A Turkey for Thanksgiving",
  "publishedAt": "2010-02-19",
  "publishedLabel": "February 19th, 2010",
  "excerpt": "Finding Thanksgiving-themed children’s books that are vegetarian-friendly can be a daunting task. Most are focused on dinner themes and images that most vegetarian parents would rather avoid, if at all possible. With…",
  "image": {
    "src": "/media/2010/02/0395742129-lres.jpg",
    "alt": "A Turkey for Thanksgiving",
    "width": 210,
    "height": 260
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
      "name": "Diane deGroat",
      "slug": "diane-degroat",
      "url": "/topics/diane-degroat/"
    },
    {
      "name": "Eve Bunting",
      "slug": "eve-bunting",
      "url": "/topics/eve-bunting/"
    },
    {
      "name": "Goats",
      "slug": "goats",
      "url": "/topics/goats/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Moose",
      "slug": "moose",
      "url": "/topics/moose/"
    },
    {
      "name": "Rabbits",
      "slug": "rabbits",
      "url": "/topics/rabbits/"
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
      "name": "Turkeys",
      "slug": "turkeys",
      "url": "/topics/turkeys/"
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
    "description": "Finding Thanksgiving-themed children’s books that are vegetarian-friendly can be a daunting task. Most are focused on dinner themes and images that most vegetarian parents would rather avoid, if at all possible. With…",
    "image": "https://vegbooks.org/media/2010/02/0395742129-lres.jpg"
  },
  "previous": {
    "title": "The Dumpster Diver",
    "url": "/reviews/dumpster/"
  },
  "next": {
    "title": "It’s Raining Cats and Cats",
    "url": "/reviews/cats/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/02/0395742129-lres.jpg"}><img src={"/media/2010/02/0395742129-lres.jpg"} alt={"A Turkey for Thanksgiving"} width={210} height={260} /></a>
      </figure>
      <p>{"Finding Thanksgiving-themed children’s books that are vegetarian-friendly can be a daunting task. Most are focused on dinner themes and images that most vegetarian parents would rather avoid, if at all possible. "}<em>{"With A Turkey For Thanksgiving"}</em>{" by Eve Bunting and Diane de Groat, the tables, so to speak, are turned."}</p>
      <p>{"This holiday book focuses on a group of animals, including a moose, rabbit, and goat, getting a turkey to the table – but as a guest, rather than as a food source. Readers go along on Mr. Moose’s journey to find a turkey to join in on the celebration. The seemingly vegan feast on the table is then enjoyed by a joyous and diverse community of animals."}</p>
      <p>{"The only downside to this book may be the moment when Mr. Moose is a bit harsh in putting his foot on the turkey’s head and then marching him, against his will, back to his home to partake in the feast."}</p>
      <p>{"Overall, this is a good book for those looking to send a more compassionate message about Thanksgiving and eating vegetarian food for the feast. This book demonstrates that a group of diverse individuals can gather and enjoy Thanksgiving, without killing a turkey."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
