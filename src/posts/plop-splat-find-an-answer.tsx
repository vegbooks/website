import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9607",
  "slug": "plop-splat-find-an-answer",
  "url": "/reviews/plop-splat-find-an-answer/",
  "legacyUrl": "https://vegbooks.org/index.php/2014/03/28/plop-splat-find-an-answer/",
  "title": "Plop & Splat (Find an Answer)",
  "publishedAt": "2014-03-28",
  "publishedLabel": "March 28th, 2014",
  "excerpt": "A fellow Pollination Project awardee, David Walega, is a new acquaintance of mine who runs Art for Animals’ Sake, an organization which strives to inspire a message of compassion through teaching artistic skills as a…",
  "image": {
    "src": "/media/2014/03/cover-cropped.jpg",
    "alt": "Plop & Splat cover",
    "width": 210,
    "height": 196
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
      "name": "Art",
      "slug": "art",
      "url": "/topics/art/"
    },
    {
      "name": "Birds",
      "slug": "birds",
      "url": "/topics/birds/"
    },
    {
      "name": "David Walega",
      "slug": "david-walega",
      "url": "/topics/david-walega/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Krystal Kelley",
      "slug": "krystal-kelley",
      "url": "/topics/krystal-kelley/"
    },
    {
      "name": "Picture Book",
      "slug": "picture-book",
      "url": "/topics/picture-book/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    }
  ],
  "reviewer": {
    "name": "Carolyn M. Mullin",
    "slug": "carolyn-m-mullin",
    "url": "/contributors/carolyn-m-mullin/",
    "aliases": [
      "CAROLYN M. MULLIN"
    ]
  },
  "seo": {
    "description": "A fellow Pollination Project awardee, David Walega, is a new acquaintance of mine who runs Art for Animals’ Sake, an organization which strives to inspire a message of compassion through teaching artistic skills as a…",
    "image": "https://vegbooks.org/media/2014/03/cover-cropped.jpg"
  },
  "previous": {
    "title": "I Love You Just Enough",
    "url": "/reviews/i-love-you-just-enough/"
  },
  "next": {
    "title": "The Swamp Where Gator Hides",
    "url": "/reviews/the-swamp-where-gator-hides/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/reviews/plop-splat-find-an-answer/"}><img src={"/media/2014/03/cover-cropped.jpg"} alt={"Plop & Splat cover"} width={210} height={196} /></a>
      </figure>
      <p>{"A fellow "}<a href={"http://thepollinationproject.org/"} target="_blank" rel="noopener noreferrer">{"Pollination Project"}</a>{" awardee, David Walega, is a new acquaintance of mine who runs "}<a href={"http://artforanimalssake.com/"} target="_blank" rel="noopener noreferrer">{"Art for Animals’ Sake"}</a>{", an organization which strives to inspire a message of compassion through teaching artistic skills as a tool to empowerment and developing healthy social coping mechanisms. In other words, they’re an arts education nonprofit solely focused on animal issues and developing empathy. Pure awesome."}</p>
      <p>{"David collaborated on a children’s book, "}<a href={"http://plopandsplat.com/about.html"} target="_blank" rel="noopener noreferrer"><em>{"Plop & Splat"}</em></a>{", a story about a bird named Splat:"}</p>
      <blockquote>
        <p>{"splat had a small, simple brain. she wandered the skies searching for an unknown answer to an unknown question."}</p>
      </blockquote>
      <p>{"I do take issue with this “small, simple brain” piece. All the "}<a href={"http://www.birdminds.com/"} target="_blank" rel="noopener noreferrer">{"latest science"}</a>{" shows that birds are highly intelligent, even city birds such as crows. Maybe if the book goes to reprint they could address this."}</p>
      <figure class="content-image content-image--left">
        <a href={"/reviews/plop-splat-find-an-answer/"}><img src={"/media/2014/03/plopsplat-page-6.jpg"} alt={"Image from Plop & Splat"} width={273} height={222} /></a>
      </figure>
      <p>{"Splat eventually meets her soul mate, Plop, who turns out to be the answer to that unknown question. The answer, the author tells us, lies in each other’s hearts (awww). Together Plop & Splat collaborate to make ‘splat-art’ with their poop."}</p>
      <p>{"I love this book for one simple reason: it challenges kids to see art anywhere and interpret it. It also has a wonderful collage feel where the pages are filled with photographic backgrounds, crafty birds made with mixed media, typed writing on ripped up paper, and scrapbook-like images from Kelley’s splat-art archive."}</p>
      <p>{"Kelley and Walega are onto something with this splat-art, and I’m glad proceeds from the sales benefits Art for Animals’ Sake."}</p>
    </div>
  );
}
