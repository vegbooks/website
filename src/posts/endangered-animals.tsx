import type { PostMetadata } from '../content/types';

export const article = {
  "id": "69",
  "slug": "endangered-animals",
  "url": "/reviews/endangered-animals/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/10/30/endangered-animals/",
  "title": "Endangered Animals",
  "publishedAt": "2009-10-30",
  "publishedLabel": "October 30th, 2009",
  "excerpt": "This hardcover book from Flowerpot Press talks about the natural history, conservation status, and threats to endangered animals all over the world. In addition to discussing environmental threats, such as toxic…",
  "categories": [
    {
      "name": "Books",
      "slug": "books",
      "url": "/books/"
    }
  ],
  "tags": [
    {
      "name": "Alligators",
      "slug": "alligators",
      "url": "/topics/alligators/"
    },
    {
      "name": "Climate Change",
      "slug": "climate-change",
      "url": "/topics/climate-change/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Endangered Species",
      "slug": "endangered-species",
      "url": "/topics/endangered-species/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Parrots",
      "slug": "parrots",
      "url": "/topics/parrots/"
    },
    {
      "name": "Pet Trade",
      "slug": "pet-trade",
      "url": "/topics/pet-trade/"
    },
    {
      "name": "Polar Bears",
      "slug": "polar-bears",
      "url": "/topics/polar-bears/"
    },
    {
      "name": "Raptors",
      "slug": "raptors",
      "url": "/topics/raptors/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
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
    "description": "This hardcover book from Flowerpot Press talks about the natural history, conservation status, and threats to endangered animals all over the world. In addition to discussing environmental threats, such as toxic…"
  },
  "previous": {
    "title": "Animal Babies on the Farm",
    "url": "/reviews/animal-babies-on-the-farm/"
  },
  "next": {
    "title": "Hubert the Pudge: A Vegetarian Tale",
    "url": "/reviews/hubert-the-pudge-a-vegetarian-tale/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"This hardcover book from "}<a href={"http://www.flowerpotpress.com/site/page.php?obj=books_children"} target="_blank" rel="noopener noreferrer">{"Flowerpot Press"}</a>{" talks about the natural history, conservation status, and threats to endangered animals all over the world. In addition to discussing environmental threats, such as toxic fertilizers that threaten endangered raptors and the effect of "}<a href={"http://www.biologicaldiversity.org/species/mammals/polar_bear/index.html"} target="_blank" rel="noopener noreferrer">{"climate change on polar bears"}</a>{", this book talks about ways that people harm animals, such as killing elephants for the ivory trade and taking parrots from the wild for the pet trade."}</p>
      <p>{"This book provides great factual information to kids about the threats animals face in the wild, but it never spells out the next logical step about what ordinary people can do to protect animals. This can be a good starting place for discussions with your child. Since "}<a href={"http://www.worldwildlife.org/what/globalmarkets/wildlifetrade/faqs-parrot.html"} target="_blank" rel="noopener noreferrer">{"the pet trade threatens parrots"}</a>{", you might ask, then is it OK to buy these animals in pet stores? Or, why would anyone want to kill alligators for their hides?"}</p>
      <p>{"Ages 8-12."}</p>
    </div>
  );
}
