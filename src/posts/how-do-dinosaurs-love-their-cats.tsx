import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1522",
  "slug": "how-do-dinosaurs-love-their-cats",
  "url": "/reviews/how-do-dinosaurs-love-their-cats/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/09/how-do-dinosaurs-love-their-cats/",
  "title": "How Do Dinosaurs Love Their Cats?",
  "publishedAt": "2010-06-09",
  "publishedLabel": "June 9th, 2010",
  "excerpt": "A wide range of dinosaurs — from Euoplocephalus to Parasaurolophus — model behavior, good and bad, toward their cats. Kids will learn to clean the litter box, pay attention to their feline friends, and be gentle. The…",
  "image": {
    "src": "/media/2010/05/how-do-dinosaurs-love-their-cats.jpg",
    "alt": "How Do Dinosaurs Love Their Cats?",
    "width": 256,
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
      "name": "Cats",
      "slug": "cats",
      "url": "/topics/cats/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Compassion. Kindness",
      "slug": "compassion-kindness",
      "url": "/topics/compassion-kindness/"
    },
    {
      "name": "Dinosaurs",
      "slug": "dinosaurs",
      "url": "/topics/dinosaurs/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Jane Yolen",
      "slug": "jane-yolen",
      "url": "/topics/jane-yolen/"
    },
    {
      "name": "Mark Teague",
      "slug": "mark-teague",
      "url": "/topics/mark-teague/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "A wide range of dinosaurs — from Euoplocephalus to Parasaurolophus — model behavior, good and bad, toward their cats. Kids will learn to clean the litter box, pay attention to their feline friends, and be gentle. The…",
    "image": "https://vegbooks.org/media/2010/05/how-do-dinosaurs-love-their-cats.jpg"
  },
  "previous": {
    "title": "Trouble at the Dinosaur Cafe",
    "url": "/reviews/trouble-at-the-dinosaur-cafe/"
  },
  "next": {
    "title": "Winston of Churchill",
    "url": "/reviews/winston-of-churchill/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/05/how-do-dinosaurs-love-their-cats.jpg"}><img src={"/media/2010/05/how-do-dinosaurs-love-their-cats.jpg"} alt={"How Do Dinosaurs Love Their Cats?"} width={256} height={300} /></a>
      </figure>
      <p>{"A wide range of dinosaurs — from "}<a href={"http://en.wikipedia.org/wiki/Euoplocephalus"} target="_blank" rel="noopener noreferrer">{"Euoplocephalus"}</a>{" to Parasaurolophus — model behavior, good and bad, toward their cats. Kids will learn to clean the litter box, pay attention to their feline friends, and be gentle. The cats pictured come in a wide range of colors and markings, so many kids will recognize their own cat in the illustrations."}</p>
      <p>{"The only downside to this animal-friendly read is that it repeatedly refers to cats as objects (as in “She gives "}<em>{"it"}</em>{" new toys that she makes by herself”)."}</p>
      <p>{"Ages 2-5."}</p>
    </div>
  );
}
