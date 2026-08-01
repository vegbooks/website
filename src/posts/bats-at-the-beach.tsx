import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3034",
  "slug": "bats-at-the-beach",
  "url": "/reviews/bats-at-the-beach/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/09/10/bats-at-the-beach/",
  "title": "Bats at the Beach",
  "publishedAt": "2010-09-10",
  "publishedLabel": "September 10th, 2010",
  "excerpt": "Vacillating between anthropomorphism and a playful look at bats as bats, Bats at the Beach is a fun read for kids ages 4 to 8. Some of the images are designed to make kids squirm — marshmallows made of bugs, for…",
  "image": {
    "src": "/media/2010/09/061855744-x-lres.jpg",
    "alt": "Bats at the Beach",
    "width": 210,
    "height": 168
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
      "name": "Animal Emotion",
      "slug": "animal-emotion",
      "url": "/topics/animal-emotion/"
    },
    {
      "name": "Animal Families",
      "slug": "animal-families",
      "url": "/topics/animal-families/"
    },
    {
      "name": "Bats",
      "slug": "bats",
      "url": "/topics/bats/"
    },
    {
      "name": "Brian Lies",
      "slug": "brian-lies",
      "url": "/topics/brian-lies/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
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
    "description": "Vacillating between anthropomorphism and a playful look at bats as bats, Bats at the Beach is a fun read for kids ages 4 to 8. Some of the images are designed to make kids squirm — marshmallows made of bugs, for…",
    "image": "https://vegbooks.org/media/2010/09/061855744-x-lres.jpg"
  },
  "previous": {
    "title": "The Gas We Pass: The Story of Farts",
    "url": "/reviews/the-gas-we-pass-the-story-of-farts/"
  },
  "next": {
    "title": "McKenzie’s Frosty Surprise",
    "url": "/reviews/mckenzies-frosty-surprise/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/09/061855744-x-lres.jpg"}><img src={"/media/2010/09/061855744-x-lres.jpg"} alt={"Bats at the Beach"} width={210} height={168} /></a>
      </figure>
      <p>{"Vacillating between anthropomorphism and a playful look at bats as bats, "}<em>{"Bats at the Beach"}</em>{" is a fun read for kids ages 4 to 8. Some of the images are designed to make kids squirm — marshmallows made of bugs, for example — but all in all, most kids will enjoy the storyline of bats having a holiday by moonlight on the beach."}</p>
      <p>{"Given how reviled bats are in our culture, I think this book by "}<a href={"http://www.amazon.com/Brian-Lies/e/B001JSFENK/ref=ntt_athr_dp_pel_pop_1"} target="_blank" rel="noopener noreferrer">{"Brian Lies"}</a>{" does a nice job of portraying bats in a positive light. His bats express emotion, care for family members, and have fun, allowing kids an opportunity to relate."}</p>
      <p>{"For fans of the book, Mr. Lies has two more recent titles featuring bats — "}<em><a href={"http://notjustforkids.blogspot.com/2010/06/rave-review-bats-at-ballgame-by-brian.html"} target="_blank" rel="noopener noreferrer">{"Bats at the Ballgame"}</a></em>{" and "}<em><a href={"http://www.goodreads.com/book/show/3308834.Bats_at_the_Library"} target="_blank" rel="noopener noreferrer">{"Bats at the Library"}</a>{"."}</em></p>
    </div>
  );
}
