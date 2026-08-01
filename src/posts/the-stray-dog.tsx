import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3403",
  "slug": "the-stray-dog",
  "url": "/reviews/the-stray-dog/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/10/30/the-stray-dog/",
  "title": "The Stray Dog",
  "publishedAt": "2010-10-30",
  "publishedLabel": "October 30th, 2010",
  "excerpt": "The Stray Dog recounts a true story of rescuing a homeless dog. With a stunning backdrop of Manhattan, the Brooklyn Bridge, and what I would venture to guess is Prospect Park, Marc Simont’s Caldecott Honor Book…",
  "image": {
    "src": "/media/2010/10/girl-reading.jpg",
    "alt": "The Stray Dog",
    "width": 210,
    "height": 280
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
      "name": "Activities",
      "slug": "activities",
      "url": "/topics/activities/"
    },
    {
      "name": "Adoption",
      "slug": "adoption",
      "url": "/topics/adoption/"
    },
    {
      "name": "Animal Rescue",
      "slug": "animal-rescue",
      "url": "/topics/animal-rescue/"
    },
    {
      "name": "Caldecott Honor",
      "slug": "caldecott-honor",
      "url": "/topics/caldecott-honor/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Marc Simont",
      "slug": "marc-simont",
      "url": "/topics/marc-simont/"
    },
    {
      "name": "New York City",
      "slug": "new-york-city",
      "url": "/topics/new-york-city/"
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
    "description": "The Stray Dog recounts a true story of rescuing a homeless dog. With a stunning backdrop of Manhattan, the Brooklyn Bridge, and what I would venture to guess is Prospect Park, Marc Simont’s Caldecott Honor Book…",
    "image": "https://vegbooks.org/media/2010/10/girl-reading.jpg"
  },
  "previous": {
    "title": "World Water Watch",
    "url": "/reviews/world-water-watch/"
  },
  "next": {
    "title": "The Perfect Pumpkin Pie",
    "url": "/reviews/the-perfect-pumpkin-pie/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/10/girl-reading.jpg"}><img src={"/media/2010/10/girl-reading.jpg"} alt={"The Stray Dog"} width={210} height={280} /></a>
      </figure>
      <p><em><a href={"http://www.goodreads.com/book/show/1507001.The_Stray_Dog"} target="_blank" rel="noopener noreferrer">{"The Stray Dog"}</a></em>{" recounts a true story of rescuing a homeless dog. With a stunning backdrop of Manhattan, the Brooklyn Bridge, and what I would venture to guess is Prospect Park, Marc Simont’s Caldecott Honor Book depicts a nameless family who encounter a dog while picnicking in the park. Assuming that the dog belongs to someone, they say goodbye at the end of the day and return to the city, only to find themselves preoccupied with the fate of the little dog they’ve named Willy. Upon returning to the park, they discover from an animal control officer that Willy is in fact homeless, and they immediately come to his aid."}</p>
      <p>{"This book has two particularly touching scenes: one in which the boy offers his belt as Willy’s collar and the girl offers her hair ribbon as his leash, and the second where Willy is curled up on a dog bed “where he belong[s].” This sweet book is a good pick for families concerned with animal welfare. It would be hard to justifying buying a dog from a pet shop, rather than "}<a href={"http://www.popcrunch.com/kellan-lutz-peta-ad-adopt-dont-buy/"} target="_blank" rel="noopener noreferrer">{"adopting"}</a>{", after reading this book. Vegetarian parents should note, however, that the family is depicted as eating burgers and hot dogs."}</p>
      <p>{"Ages 3-7. For activities based on the book, visit "}<a href={"http://www.liveoakmedia.com/client/guides/92107.pdf"} target="_blank" rel="noopener noreferrer">{"Live Oak Media"}</a>{" or "}<a href={"http://school.familyeducation.com/literature/childrens-book/34856.html"} target="_blank" rel="noopener noreferrer">{"Family Education"}</a>{"."}</p>
    </div>
  );
}
