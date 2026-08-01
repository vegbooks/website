import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4524",
  "slug": "the-rabbit-problem",
  "url": "/reviews/the-rabbit-problem/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/04/11/the-rabbit-problem/",
  "title": "The Rabbit Problem",
  "publishedAt": "2011-04-11",
  "publishedLabel": "April 11th, 2011",
  "excerpt": "Illustrating Fibonacci’s famous Rabbit Problem, in which the mathematician explored the numerical ramifications of a hypothetical world in which a rabbit population increases exponentially, Emily Gravett’s delightful…",
  "image": {
    "src": "/media/2011/04/rabbit-problem-cover.jpg",
    "alt": "The Rabbit Problem",
    "width": 210,
    "height": 263
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
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Autumn",
      "slug": "autumn",
      "url": "/topics/autumn/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Easter",
      "slug": "easter",
      "url": "/topics/easter/"
    },
    {
      "name": "Emily Gravett",
      "slug": "emily-gravett",
      "url": "/topics/emily-gravett/"
    },
    {
      "name": "Fibonacci",
      "slug": "fibonacci",
      "url": "/topics/fibonacci/"
    },
    {
      "name": "Mathematics",
      "slug": "mathematics",
      "url": "/topics/mathematics/"
    },
    {
      "name": "Neuter",
      "slug": "neuter",
      "url": "/topics/neuter/"
    },
    {
      "name": "Pet Overpopulation",
      "slug": "pet-overpopulation",
      "url": "/topics/pet-overpopulation/"
    },
    {
      "name": "Rabbits",
      "slug": "rabbits",
      "url": "/topics/rabbits/"
    },
    {
      "name": "Reproduction",
      "slug": "reproduction",
      "url": "/topics/reproduction/"
    },
    {
      "name": "Seasons",
      "slug": "seasons",
      "url": "/topics/seasons/"
    },
    {
      "name": "Spay",
      "slug": "spay",
      "url": "/topics/spay/"
    },
    {
      "name": "Spring",
      "slug": "spring",
      "url": "/topics/spring/"
    },
    {
      "name": "Summer",
      "slug": "summer",
      "url": "/topics/summer/"
    },
    {
      "name": "Winter",
      "slug": "winter",
      "url": "/topics/winter/"
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
    "description": "Illustrating Fibonacci’s famous Rabbit Problem, in which the mathematician explored the numerical ramifications of a hypothetical world in which a rabbit population increases exponentially, Emily Gravett’s delightful…",
    "image": "https://vegbooks.org/media/2011/04/rabbit-problem-cover.jpg"
  },
  "previous": {
    "title": "What I Be",
    "url": "/reviews/what-i-be/"
  },
  "next": {
    "title": "Quiet Bunny’s Many Colors",
    "url": "/reviews/quiet-bunnys-many-colors/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/04/rabbit-problem-cover.jpg"}><img src={"/media/2011/04/rabbit-problem-cover.jpg"} alt={"The Rabbit Problem"} width={210} height={263} /></a>
      </figure>
      <p>{"Illustrating Fibonacci’s famous Rabbit Problem, in which the mathematician explored the numerical ramifications of a hypothetical world in which a rabbit population increases exponentially, Emily Gravett’s "}<a href={"http://www.guardian.co.uk/books/gallery/2011/feb/22/emily-gravett-in-pictures#/?picture=371574110&index=8"} target="_blank" rel="noopener noreferrer">{"delightful picture book"}</a>{" follows a rabbit family through a year. Set up like a calendar, the book serves two equally important purposes: 1) to interest kids in math, and 2) to demonstrate how a population can balloon out of control."}</p>
      <p>{"Families interested in animal welfare will appreciate that the book can serve as an entrée into discussing the "}<a href={"http://www.humanesociety.org/issues/pet_overpopulation/facts/why_spay_neuter.html"} target="_blank" rel="noopener noreferrer">{"importance of spaying and neutering"}</a>{" companion animals. Parents should be aware, however, that the book’s heavy focus on reproduction could lead to some loaded questions."}</p>
      <p>{"This humorous book is highly recommended for ages 6 to adult."}</p>
    </div>
  );
}
