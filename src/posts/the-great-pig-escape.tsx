import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1529",
  "slug": "the-great-pig-escape",
  "url": "/reviews/the-great-pig-escape/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/04/08/the-great-pig-escape/",
  "title": "The Great Pig Escape",
  "publishedAt": "2010-04-08",
  "publishedLabel": "April 8th, 2010",
  "excerpt": "The last laugh is on the farmers in The Great Pig Escape by Eileen Christelow. Bert and Ethel decide to try their hand at pig farming. When it’s time to take the pigs to auction, the pigs concoct an escape plan that…",
  "image": {
    "src": "/media/2010/04/0395797241-lres1.jpg",
    "alt": "The Great Pig Escape",
    "width": 210,
    "height": 200
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
      "name": "Animal Escape",
      "slug": "animal-escape",
      "url": "/topics/animal-escape/"
    },
    {
      "name": "Animal Liberation",
      "slug": "animal-liberation",
      "url": "/topics/animal-liberation/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eileen Christelow",
      "slug": "eileen-christelow",
      "url": "/topics/eileen-christelow/"
    },
    {
      "name": "Farmed Animals",
      "slug": "farmed-animals",
      "url": "/topics/farmed-animals/"
    },
    {
      "name": "Marsha Rakestraw",
      "slug": "marsha-rakestraw",
      "url": "/topics/marsha-rakestraw/"
    },
    {
      "name": "Pigs",
      "slug": "pigs",
      "url": "/topics/pigs/"
    },
    {
      "name": "Read Aloud",
      "slug": "read-aloud",
      "url": "/topics/read-aloud/"
    }
  ],
  "reviewer": {
    "name": "Marsha Rakestraw",
    "slug": "marsha-rakestraw",
    "url": "/contributors/marsha-rakestraw/",
    "aliases": [
      "MARSHA RAKESTRAW"
    ]
  },
  "seo": {
    "description": "The last laugh is on the farmers in The Great Pig Escape by Eileen Christelow. Bert and Ethel decide to try their hand at pig farming. When it’s time to take the pigs to auction, the pigs concoct an escape plan that…",
    "image": "https://vegbooks.org/media/2010/04/0395797241-lres1.jpg"
  },
  "previous": {
    "title": "Some Dog!",
    "url": "/reviews/some-dog/"
  },
  "next": {
    "title": "The Carrot Seed",
    "url": "/reviews/the-carrot-seed/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/04/0395797241-lres1.jpg"}><img src={"/media/2010/04/0395797241-lres1.jpg"} alt={"The Great Pig Escape"} width={210} height={200} /></a>
      </figure>
      <p>{"The last laugh is on the farmers in "}<em>{"The Great Pig Escape"}</em>{" by "}<a href={"http://www.christelow.com/"} target="_blank" rel="noopener noreferrer">{"Eileen Christelow"}</a>{". Bert and Ethel decide to try their hand at pig farming. When it’s time to take the pigs to auction, the pigs concoct an escape plan that includes pilfering clothes, impersonating townspeople and boarding a bus to Florida. Bert and Ethel search all over town for the pigs but don’t discover what happened to them until months later when, having returned to vegetable farming, they receive a box from Florida with the missing clothes and a postcard that merely says “Oink!”"}</p>
      <p>{"The illustrations really capture the humor and hijinks of the story, enhancing it with nice wit and detail. Children will root for the clever pigs and laugh at the clueless farmers and townsfolk. This is a lighthearted animal liberation story, with the pigs in charge of their own rescue. Great for reading aloud."}</p>
      <p>{"Ages 5-8."}</p>
    </div>
  );
}
