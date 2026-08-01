import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2166",
  "slug": "carrot-soup",
  "url": "/reviews/carrot-soup/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/16/carrot-soup/",
  "title": "Carrot Soup",
  "publishedAt": "2010-06-16",
  "publishedLabel": "June 16th, 2010",
  "excerpt": "Carrot Soup is a tasty little tale about a rabbit who grows an assortment of carrots for his favorite meal: carrot soup. Rabbit does all the familiar farm labor of hoeing, planting, watering, and waiting… and…",
  "image": {
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Carrot Soup",
    "width": 219,
    "height": 145
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
      "name": "Carrots",
      "slug": "carrots",
      "url": "/topics/carrots/"
    },
    {
      "name": "Cooking",
      "slug": "cooking",
      "url": "/topics/cooking/"
    },
    {
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "John Segal",
      "slug": "john-segal",
      "url": "/topics/john-segal/"
    },
    {
      "name": "Rabbits",
      "slug": "rabbits",
      "url": "/topics/rabbits/"
    },
    {
      "name": "Vegetables",
      "slug": "vegetables",
      "url": "/topics/vegetables/"
    }
  ],
  "reviewer": {
    "name": "Huyen MacMichael",
    "slug": "huyen-macmichael",
    "url": "/contributors/huyen-macmichael/",
    "aliases": [
      "HUYEN MACMICHAEL"
    ]
  },
  "seo": {
    "description": "Carrot Soup is a tasty little tale about a rabbit who grows an assortment of carrots for his favorite meal: carrot soup. Rabbit does all the familiar farm labor of hoeing, planting, watering, and waiting… and…",
    "image": "https://vegbooks.org/media/2010/06/girls-book-pic-from-istock.jpg"
  },
  "previous": {
    "title": "The Three Little Pigs: An Architectural Tale",
    "url": "/reviews/the-three-little-pigs-an-architectural-tale/"
  },
  "next": {
    "title": "Wright on Time, Books 1 & 2",
    "url": "/reviews/wright-on-time-books-1-2/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/girls-book-pic-from-istock.jpg"}><img src={"/media/2010/06/girls-book-pic-from-istock.jpg"} alt={"Carrot Soup"} width={219} height={145} /></a>
      </figure>
      <p><em><a href={"http://www.goodreads.com/book/show/1452004.Carrot_Soup"} target="_blank" rel="noopener noreferrer">{"Carrot Soup"}</a></em>{" is a tasty little tale about a rabbit who grows an assortment of carrots for his favorite meal: carrot soup. Rabbit does all the familiar farm labor of hoeing, planting, watering, and waiting… and waiting… and waiting… until it is finally harvest time. But when he goes to pull the carrots, he can’t find them anywhere! So he begins interrogating his friends one by one, who suggest a different friend to question. All of his friends deny or avoid answering his questions about his carrots, except for pig, who can’t be found anywhere. Finally, rabbit gives up and despondently returns home only to discover what really happened to all his carrots!"}</p>
      <p><a href={"http://www.johnsegaldesign.com/booksbyjohnsegal.html"} target="_blank" rel="noopener noreferrer">{"John Segal"}</a>{" creates a funny, yummy mystery full of visual clues for children. The animal characters are illustrated with funny and expressive faces in watercolor and ink. The background scenes as rabbit interrogates individuals depict other animals carting off barrels and wagons of carrots. The pictures hint at the answers to rabbit’s mystery, but he is quite oblivious to all except his immediate surroundings and current suspect."}</p>
      <p>{"Besides the clever visual humor, I especially enjoyed the page to identify a variety of different types of carrots as well as a carrot soup recipe in the back. Unfortunately the soup recipe calls for chicken broth and butter but those could "}<a href={"http://vegweb.com/index.php?board=447.0"} target="_blank" rel="noopener noreferrer">{"easily be substituted"}</a>{" by the reader. Besides the recipe,"}<em>{"Carrot Soup"}</em>{" is otherwise a veg-friendly book."}</p>
      <p>{"Ages 3-8."}</p>
    </div>
  );
}
