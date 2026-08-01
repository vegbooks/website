import type { PostMetadata } from '../content/types';

export const article = {
  "id": "847",
  "slug": "duck-at-the-door",
  "url": "/reviews/duck-at-the-door/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/05/20/duck-at-the-door/",
  "title": "Duck at the Door",
  "publishedAt": "2010-05-20",
  "publishedLabel": "May 20th, 2010",
  "excerpt": "Jackie Urbanovic‘s lighthearted Duck at the Door is sure to tickle readers who love animals. When there’s a knock at the door late at night, all of the furry and feathered inhabitants of the house wake their person…",
  "image": {
    "src": "/media/2010/02/duck-at-the-door.jpg",
    "alt": "Duck at the Door",
    "width": 254,
    "height": 242
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
      "name": "Animal Rescue",
      "slug": "animal-rescue",
      "url": "/topics/animal-rescue/"
    },
    {
      "name": "Ducks",
      "slug": "ducks",
      "url": "/topics/ducks/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Humane",
      "slug": "humane",
      "url": "/topics/humane/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Migration",
      "slug": "migration",
      "url": "/topics/migration/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    },
    {
      "name": "Wildlife Rehabilitation",
      "slug": "wildlife-rehabilitation",
      "url": "/topics/wildlife-rehabilitation/"
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
    "description": "Jackie Urbanovic‘s lighthearted Duck at the Door is sure to tickle readers who love animals. When there’s a knock at the door late at night, all of the furry and feathered inhabitants of the house wake their person…",
    "image": "https://vegbooks.org/media/2010/02/duck-at-the-door.jpg"
  },
  "previous": {
    "title": "The Twelve Gifts of Birth",
    "url": "/reviews/twelve-gifts-of-birth/"
  },
  "next": {
    "title": "Pete and Pickles",
    "url": "/reviews/pete-and-pickles/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/02/duck-at-the-door.jpg"}><img src={"/media/2010/02/duck-at-the-door.jpg"} alt={"Duck at the Door"} width={254} height={242} /></a>
      </figure>
      <p><a href={"http://www.jackieurbanovic.com/"} target="_blank" rel="noopener noreferrer">{"Jackie Urbanovic"}</a>{"‘s lighthearted "}<em>{"Duck at the Door"}</em>{" is sure to tickle readers who love animals. When there’s a knock at the door late at night, all of the furry and feathered inhabitants of the house wake their person Irene to see what to do. She graciously takes in a duck who’s separated from his flock."}</p>
      <p>{"After a while, the duck’s odd habits begin to wear on the domesticated animals, but still they’re sad to see him leave when his flock returns from the south. Months later, however, there’s a knock on the door … and this time the entire flock has decided to spend the winter with Irene and her clan."}</p>
      <p>{"This book introduces readers to themes of domestication, wildlife rehabilitation, and migration. After you’ve read this book with your little one, learn about real-life rehab by visiting the "}<a href={"http://www.fundforanimals.org/cape/"} target="_blank" rel="noopener noreferrer">{"Fund for Animal’s website"}</a>{"."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
