import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3653",
  "slug": "i-love-dogs",
  "url": "/reviews/i-love-dogs/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/12/01/i-love-dogs/",
  "title": "I Love Dogs",
  "publishedAt": "2010-12-01",
  "publishedLabel": "December 1st, 2010",
  "excerpt": "My goodness, I love dogs! So too does the adorable pajama-clad boy in Barney Saltzberg’s aptly titled picture book I Love Dogs. Depicting dogs of various colors, sizes, and temperaments, this simple book is a…",
  "image": {
    "src": "/media/2010/12/toddler-girl-reading.jpg",
    "alt": "I Love Dogs",
    "width": 210,
    "height": 315
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
      "name": "Barney Saltzberg",
      "slug": "barney-saltzberg",
      "url": "/topics/barney-saltzberg/"
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
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Toddlers",
      "slug": "toddlers",
      "url": "/topics/toddlers/"
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
    "description": "My goodness, I love dogs! So too does the adorable pajama-clad boy in Barney Saltzberg’s aptly titled picture book I Love Dogs. Depicting dogs of various colors, sizes, and temperaments, this simple book is a…",
    "image": "https://vegbooks.org/media/2010/12/toddler-girl-reading.jpg"
  },
  "previous": {
    "title": "Peter and the Pigeons",
    "url": "/reviews/peter-and-the-pigeons/"
  },
  "next": {
    "title": "Vunce Upon a Time",
    "url": "/reviews/vunce-upon-a-time/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/12/toddler-girl-reading.jpg"}><img src={"/media/2010/12/toddler-girl-reading.jpg"} alt={"I Love Dogs"} width={210} height={315} /></a>
      </figure>
      <p>{"My goodness, I love dogs! So too does the adorable pajama-clad boy in Barney Saltzberg’s aptly titled picture book "}<em>{"I Love Dogs"}</em>{"."}</p>
      <p>{"Depicting "}<a href={"http://www.petfinder.com/dog"} target="_blank" rel="noopener noreferrer">{"dogs of various colors, sizes, and temperaments"}</a>{", this simple book is a sure-fire hit for kids who have a special dog in their lives, as well as those who like to visit the dog park to watch other people’s dogs. While the author extols the virtues of dogs — they play, do tricks, and dig holes — he’s clear that he loves them for one reason. “It isn’t their noses, their tails, or their paws./ I love dogs just because.”"}</p>
      <p>{"Ages 2-5."}</p>
    </div>
  );
}
