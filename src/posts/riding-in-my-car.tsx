import type { PostMetadata } from '../content/types';

export const article = {
  "id": "7097",
  "slug": "riding-in-my-car",
  "url": "/reviews/riding-in-my-car/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/03/10/riding-in-my-car/",
  "title": "Riding in My Car",
  "publishedAt": "2012-03-10",
  "publishedLabel": "March 10th, 2012",
  "excerpt": "I received this book as a review copy. It is a picture book based on the Woody Guthrie song. The book takes the reader on a road trip through the United States, with images from New York City to Washington, D.C., to…",
  "image": {
    "src": "/media/2012/03/9780316052160.jpg",
    "alt": "Riding in My Car",
    "width": 210,
    "height": 161
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
      "name": "Car Trips",
      "slug": "car-trips",
      "url": "/topics/car-trips/"
    },
    {
      "name": "Cars",
      "slug": "cars",
      "url": "/topics/cars/"
    },
    {
      "name": "Fishing",
      "slug": "fishing",
      "url": "/topics/fishing/"
    },
    {
      "name": "Golden Gate Bridge",
      "slug": "golden-gate-bridge",
      "url": "/topics/golden-gate-bridge/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Lift-a-Flap",
      "slug": "lift-a-flap",
      "url": "/topics/lift-a-flap/"
    },
    {
      "name": "Mount Rushmore",
      "slug": "mount-rushmore",
      "url": "/topics/mount-rushmore/"
    },
    {
      "name": "New York City",
      "slug": "new-york-city",
      "url": "/topics/new-york-city/"
    },
    {
      "name": "Scott Menchin",
      "slug": "scott-menchin",
      "url": "/topics/scott-menchin/"
    },
    {
      "name": "Washington D.C.",
      "slug": "washington-d-c",
      "url": "/topics/washington-d-c/"
    },
    {
      "name": "Woody Guthrie",
      "slug": "woody-guthrie",
      "url": "/topics/woody-guthrie/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Kali",
    "slug": "jennifer-kali",
    "url": "/contributors/jennifer-kali/",
    "aliases": [
      "Jennifer Kali",
      "JENNIFER KALI"
    ]
  },
  "seo": {
    "description": "I received this book as a review copy. It is a picture book based on the Woody Guthrie song. The book takes the reader on a road trip through the United States, with images from New York City to Washington, D.C., to…",
    "image": "https://vegbooks.org/media/2012/03/9780316052160.jpg"
  },
  "previous": {
    "title": "The Vegan Family Cookbook",
    "url": "/reviews/vegan-family-cookbook/"
  },
  "next": {
    "title": "Old MacDonald Has No Farm … ee-i-anymore",
    "url": "/reviews/old-macdonald/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/03/9780316052160.jpg"}><img src={"/media/2012/03/9780316052160.jpg"} alt={"Riding in My Car"} width={210} height={161} /></a>
      </figure>
      <p>{"I received "}<a href={"http://www.hachettebookgroup.com/kids_books_9780316052160.htm"} target="_blank" rel="noopener noreferrer">{"this book"}</a>{" as a review copy. It is a picture book based on the Woody Guthrie song. The book takes the reader on a road trip through the United States, with images from New York City to Washington, D.C., to Mount Rushmore to the Golden Gate Bridge."}</p>
      <p>{"This book is more than a picture book. It’s one of the most involved lift-a-flap books I’ve seen. Every page has multiple moving parts which include car doors that open, horses that jump, cars that drive along a road, and people that dance. There are also flaps that lift to reveal facts about the United States, such as “Route 66 is a famous road that goes from Chicago to Los Angeles.”"}</p>
      <p>{"While I enjoy the interactive nature of this book, I don’t think I’m the target audience because I don’t know the "}<a href={"http://en.wikipedia.org/wiki/Woody_Guthrie"} target="_blank" rel="noopener noreferrer">{"Woody Guthrie"}</a>{" song. Maybe someone that knows "}<a href={"http://www.folkways.si.edu/explore_folkways/riding-in-my-car.aspx"} target="_blank" rel="noopener noreferrer">{"the song"}</a>{" would enjoy it more than me."}</p>
      <p>{"From an animal rights perspective, I don’t appreciate the fishing scene. The family is depicted happily fishing from their car on a mountain lake coupled with the fact, “The largest freshwater fish ever caught in the United States was a 468-pound white sturgeon.” Unfortunately, I do not recommend this book for families that care about animal welfare."}</p>
      <p>{"Ages 5+."}</p>
    </div>
  );
}
