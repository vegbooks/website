import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2851",
  "slug": "uncover-a-horse",
  "url": "/reviews/uncover-a-horse/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/08/11/uncover-a-horse/",
  "title": "Uncover a Horse",
  "publishedAt": "2010-08-11",
  "publishedLabel": "August 11th, 2010",
  "excerpt": "David George Gordon’s Uncover a Horse transported me back to the days of 4-H hippology competitions. This book is perfect for budding equine enthusiasts who want to know about horses’ anatomy or behavior. Page by…",
  "image": {
    "src": "/media/2010/08/9781592238866.jpg",
    "alt": "Uncover a Horse",
    "width": 210,
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
      "name": "Anatomy",
      "slug": "anatomy",
      "url": "/topics/anatomy/"
    },
    {
      "name": "Animal Behavior",
      "slug": "animal-behavior",
      "url": "/topics/animal-behavior/"
    },
    {
      "name": "David George Gordon",
      "slug": "david-george-gordon",
      "url": "/topics/david-george-gordon/"
    },
    {
      "name": "Horses",
      "slug": "horses",
      "url": "/topics/horses/"
    },
    {
      "name": "Natural History",
      "slug": "natural-history",
      "url": "/topics/natural-history/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
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
    "description": "David George Gordon’s Uncover a Horse transported me back to the days of 4-H hippology competitions. This book is perfect for budding equine enthusiasts who want to know about horses’ anatomy or behavior. Page by…",
    "image": "https://vegbooks.org/media/2010/08/9781592238866.jpg"
  },
  "previous": {
    "title": "The Fox and the Hound (1981)",
    "url": "/reviews/the-fox-and-the-hound/"
  },
  "next": {
    "title": "Gone Wild: An Endangered Animal Alphabet",
    "url": "/reviews/gone-wild-an-endangered-animal-alphabet/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/9781592238866.jpg"}><img src={"/media/2010/08/9781592238866.jpg"} alt={"Uncover a Horse"} width={210} height={242} /></a>
      </figure>
      <p>{"David George Gordon’s "}<em>{"Uncover a Horse"}</em>{" transported me back to the days of "}<a href={"http://nj4h.rutgers.edu/horses/hippology/"} target="_blank" rel="noopener noreferrer">{"4-H hippology competitions"}</a>{". This book is perfect for budding equine enthusiasts who want to know about horses’ anatomy or behavior. Page by page, readers physically deconstruct and reconstruct a horse."}</p>
      <p>{"While the book does not speak to animal welfare issues, it does explain what horses are all about and what they need, making it a good primer for kids lucky enough to have a real horse in their lives. Riding and driving horses are not the focus of the book, but they are dealt with in a straightforward manner."}</p>
      <p>{"As someone who had horses as childhood companions, "}<em>{"Uncover a Horse"}</em>{" reminds me how magical, and complex, these animals are. Kids intrigued by dolphins, sharks, or tarantulas will be delighted to learn that Mr. Gordon has penned similar "}<a href={"http://www.davidgeorgegordon.com/buy.html"} target="_blank" rel="noopener noreferrer">{"“Uncover” books about those species"}</a>{"."}</p>
      <p>{"Ages 8-12."}</p>
    </div>
  );
}
