import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4087",
  "slug": "hello-baby-beluga",
  "url": "/reviews/hello-baby-beluga/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/01/29/hello-baby-beluga/",
  "title": "Hello, Baby Beluga",
  "publishedAt": "2011-01-29",
  "publishedLabel": "January 29th, 2011",
  "excerpt": "I didn’t give the new picture book from Darrin Lunde and Patricia J. Wynne Hello, Baby Beluga enough credit when I first picked it up. Scanning through it on my own, I got the impression that the way it presented…",
  "image": {
    "src": "/media/2011/01/hello-baby-beluga.jpg",
    "alt": "Hello, Baby Beluga",
    "width": 210,
    "height": 210
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
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Darrin Lunde",
      "slug": "darrin-lunde",
      "url": "/topics/darrin-lunde/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Marine Animals",
      "slug": "marine-animals",
      "url": "/topics/marine-animals/"
    },
    {
      "name": "Marine Mammals",
      "slug": "marine-mammals",
      "url": "/topics/marine-mammals/"
    },
    {
      "name": "Natural History",
      "slug": "natural-history",
      "url": "/topics/natural-history/"
    },
    {
      "name": "Patricia J. Wynne",
      "slug": "patricia-j-wynne",
      "url": "/topics/patricia-j-wynne/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Whales",
      "slug": "whales",
      "url": "/topics/whales/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
    },
    {
      "name": "Wildlife Books for Kids",
      "slug": "wildlife-books-for-kids",
      "url": "/topics/wildlife-books-for-kids/"
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
    "description": "I didn’t give the new picture book from Darrin Lunde and Patricia J. Wynne Hello, Baby Beluga enough credit when I first picked it up. Scanning through it on my own, I got the impression that the way it presented…",
    "image": "https://vegbooks.org/media/2011/01/hello-baby-beluga.jpg"
  },
  "previous": {
    "title": "The Cabbage Soup Solution",
    "url": "/reviews/the-cabbage-soup-solution/"
  },
  "next": {
    "title": "Mrs. Marlowe’s Mice",
    "url": "/reviews/mrs-marlowes-mice/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/01/hello-baby-beluga.jpg"}><img src={"/media/2011/01/hello-baby-beluga.jpg"} alt={"Hello, Baby Beluga"} width={210} height={210} /></a>
      </figure>
      <p>{"I didn’t give the new picture book from "}<a href={"http://www.goodreads.com/author/show/641069.Darrin_Lunde"} target="_blank" rel="noopener noreferrer">{"Darrin Lunde"}</a>{" and "}<a href={"http://web.me.com/patriciawynne/Patricia_J._Wynne/Home.html"} target="_blank" rel="noopener noreferrer">{"Patricia J. Wynne"}</a>{" "}<em>{"Hello, Baby Beluga"}</em>{" enough credit when I first picked it up. Scanning through it on my own, I got the impression that the way it presented facts, without any real storyline, was a little dry."}</p>
      <p>{"My 5-year-old daughter, however, was immediately drawn to the book. She leafed through it to look at Baby Beluga and her pod, and asked questions — such as, What does Baby Beluga eat? — that tracked the text almost perfectly. When we settled down to read it together, she was engaged by every page and she brought the book to bed with her that night."}</p>
      <p>{"As someone who has worked to protect wildlife for most of my adult life, I can forget how extraordinary and miraculous the diversity of life is. Looking at "}<em>{"Hello, Baby Beluga"}</em>{" through my daughter’s eyes, I was reminded at how awesome it is that belugas exist — especially given their size, their natural history, and just how “other” they can seem. And, once I gave it a chance, I was impressed by what a nice job the book does at teaching children what’s mind-blowing about belugas while also highlighting the ways in which they, like many other animals, are like us: they have families and they have emotions (fear)."}</p>
      <p>{"With so many kids books out there that are geared more to parents than kids, this engaging book is a nice change of pace. It is perfect for children ages 3-6."}</p>
    </div>
  );
}
