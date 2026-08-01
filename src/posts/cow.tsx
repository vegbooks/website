import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2693",
  "slug": "cow",
  "url": "/reviews/cow/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/28/cow/",
  "title": "Cow",
  "publishedAt": "2010-07-28",
  "publishedLabel": "July 28th, 2010",
  "excerpt": "The reality that most vegetarian parents face when it comes to the way cows are treated is that the vast majority of these animals don’t have it good, to put it mildly. Pumped full of growth hormone and antibiotics,…",
  "image": {
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Cow",
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
      "name": "Books to Avoid",
      "slug": "books-to-avoid",
      "url": "/topics/books-to-avoid/"
    },
    {
      "name": "Cows",
      "slug": "cows",
      "url": "/topics/cows/"
    },
    {
      "name": "Dairy",
      "slug": "dairy",
      "url": "/topics/dairy/"
    },
    {
      "name": "Dairy Industry",
      "slug": "dairy-industry",
      "url": "/topics/dairy-industry/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "factory farming",
      "slug": "factory-farming",
      "url": "/topics/factory-farming/"
    },
    {
      "name": "Farmed Animals",
      "slug": "farmed-animals",
      "url": "/topics/farmed-animals/"
    },
    {
      "name": "Farming",
      "slug": "farming",
      "url": "/topics/farming/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Malachy Doyle",
      "slug": "malachy-doyle",
      "url": "/topics/malachy-doyle/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "The reality that most vegetarian parents face when it comes to the way cows are treated is that the vast majority of these animals don’t have it good, to put it mildly. Pumped full of growth hormone and antibiotics,…",
    "image": "https://vegbooks.org/media/2010/06/girls-book-pic-from-istock.jpg"
  },
  "previous": {
    "title": "I Heard It from Alice Zucchini",
    "url": "/reviews/i-heard-it-from-alice-zucchini/"
  },
  "next": {
    "title": "Amy’s Light",
    "url": "/reviews/amys-light/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/girls-book-pic-from-istock.jpg"}><img src={"/media/2010/06/girls-book-pic-from-istock.jpg"} alt={"Cow"} width={210} height={139} /></a>
      </figure>
      <p>{"The reality that most vegetarian parents face when it comes to the way cows are treated is that the vast majority of these animals don’t have it good, to put it mildly. Pumped full of growth hormone and antibiotics, and then hooked up to mechanical milking machines, they live a "}<a href={"http://www.farmsanctuary.org/issues/factoryfarming/dairy/"} target="_blank" rel="noopener noreferrer">{"production-line life"}</a>{" that leaves a lot to be desired. But you wouldn’t learn that by reading "}<em>{"Cow"}</em>{" to your children."}</p>
      <p>{"This book focuses on dairy cows on a traditional dairy farm, the kind that no longer exists on a large scale today. The book starts out by asking the question, “What is it like to be a dairy cow?” The answers it provides to that question focus only on the fading image of a traditional farm, filled with loving providers and an idyllic setting."}</p>
      <p>{"From grazing the days away, to happy farmers who “gently” clean the udders before milking the cows, the entire book paints a picture that life as a dairy cow is serene and enjoyable. Unfortunately, parents who care about animal rights know this to not be true, and will likely want to steer their child clear of this misleading fairytale image."}</p>
      <p>{"Geared to ages 4-8, but not recommended."}</p>
    </div>
  );
}
