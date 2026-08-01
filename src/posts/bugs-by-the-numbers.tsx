import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5689",
  "slug": "bugs-by-the-numbers",
  "url": "/reviews/bugs-by-the-numbers/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/08/12/bugs-by-the-numbers/",
  "title": "Bugs by the Numbers",
  "publishedAt": "2011-08-12",
  "publishedLabel": "August 12th, 2011",
  "excerpt": "In the world in which we live, bugs usually get a bad rap! People fear them, don’t understand them and, well, tend to run from them. But one read through a book like Bugs by the Numbers and people may start to turn a…",
  "image": {
    "src": "/media/2011/08/bugs-by-the-numbers-hi-res.jpg",
    "alt": "Bugs by the Numbers",
    "width": 210,
    "height": 267
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
      "name": "Cockroaches",
      "slug": "cockroaches",
      "url": "/topics/cockroaches/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Fleas",
      "slug": "fleas",
      "url": "/topics/fleas/"
    },
    {
      "name": "Insects",
      "slug": "insects",
      "url": "/topics/insects/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Mosquitoes",
      "slug": "mosquitoes",
      "url": "/topics/mosquitoes/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Sarah Forss",
      "slug": "sarah-forss",
      "url": "/topics/sarah-forss/"
    },
    {
      "name": "Sharon Werner",
      "slug": "sharon-werner",
      "url": "/topics/sharon-werner/"
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
    "description": "In the world in which we live, bugs usually get a bad rap! People fear them, don’t understand them and, well, tend to run from them. But one read through a book like Bugs by the Numbers and people may start to turn a…",
    "image": "https://vegbooks.org/media/2011/08/bugs-by-the-numbers-hi-res.jpg"
  },
  "previous": {
    "title": "Come and Eat!",
    "url": "/reviews/come-and-eat/"
  },
  "next": {
    "title": "Gracie the Lighthouse Cat",
    "url": "/reviews/gracie-the-lighthouse-cat/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/08/bugs-by-the-numbers-hi-res.jpg"}><img src={"/media/2011/08/bugs-by-the-numbers-hi-res.jpg"} alt={"Bugs by the Numbers"} width={210} height={267} /></a>
      </figure>
      <p>{"In the world in which we live, bugs usually get a bad rap! People fear them, don’t understand them and, well, tend to run from them. But one read through a book like "}<em><a href={"http://wherethebestbooksare.blogspot.com/2011/04/bugs-by-numbers.html"} target="_blank" rel="noopener noreferrer">{"Bugs by the Numbers"}</a></em>{" and people may start to turn a new leaf."}</p>
      <p>{"This book piqued my interest from the moment I picked it up. I love the creative ways that the bugs are presented throughout the book. They are gathered in the shapes of numbers, and the numbers all relate to a fact about that particular creature. There are interesting fold-out flaps, lots of facts, and a lot of great information."}</p>
      <p>{"This book is animal-friendly, people-friendly and downright interesting! Although it is geared toward children, I really enjoyed reading through it every bit as much as they did. Adding this book to your collection will help your child learn interesting facts about a variety of bugs, including everything from spiders to mosquitoes, and fleas to cockroaches, and it does so in a fun way. As a member of a vegetarian family, I didn’t see anything that would be objectionable. This is just the type of book most vegetarian families will want in their collection!"}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
