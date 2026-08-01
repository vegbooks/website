import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5039",
  "slug": "tuesday",
  "url": "/reviews/tuesday/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/05/31/tuesday/",
  "title": "Tuesday",
  "publishedAt": "2011-05-31",
  "publishedLabel": "May 31st, 2011",
  "excerpt": "Kiddo and I were surprised that I hadn’t reviewed Tuesday for Vegbooks. We love this book, because as kiddo puts it, “It’s funny and strange.” With few words and very detailed illustrations, David Wiesner has crafted…",
  "image": {
    "src": "/media/2011/05/tuesday-hres.jpg",
    "alt": "Tuesday",
    "width": 210,
    "height": 180
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
      "name": "1990s Books",
      "slug": "1990s-books",
      "url": "/topics/1990s-books/"
    },
    {
      "name": "Caldecott Medal",
      "slug": "caldecott-medal",
      "url": "/topics/caldecott-medal/"
    },
    {
      "name": "David Weisner",
      "slug": "david-weisner",
      "url": "/topics/david-weisner/"
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
      "name": "Frogs",
      "slug": "frogs",
      "url": "/topics/frogs/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Mystery",
      "slug": "mystery",
      "url": "/topics/mystery/"
    },
    {
      "name": "Nearly Wordless Books",
      "slug": "nearly-wordless-books",
      "url": "/topics/nearly-wordless-books/"
    },
    {
      "name": "Pigs",
      "slug": "pigs",
      "url": "/topics/pigs/"
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
    "description": "Kiddo and I were surprised that I hadn’t reviewed Tuesday for Vegbooks. We love this book, because as kiddo puts it, “It’s funny and strange.” With few words and very detailed illustrations, David Wiesner has crafted…",
    "image": "https://vegbooks.org/media/2011/05/tuesday-hres.jpg"
  },
  "previous": {
    "title": "The Secret World of Whales",
    "url": "/reviews/the-secret-world-of-whales/"
  },
  "next": {
    "title": "Henrietta and the Golden Eggs",
    "url": "/reviews/henrietta-and-the-golden-eggs/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/05/tuesday-hres.jpg"}><img src={"/media/2011/05/tuesday-hres.jpg"} alt={"Tuesday"} width={210} height={180} /></a>
      </figure>
      <p>{"Kiddo and I were surprised that I hadn’t reviewed "}<em>{"Tuesday"}</em>{" for Vegbooks. We love this book, because as kiddo puts it, “It’s funny and strange.”"}</p>
      <p>{"With few words and very detailed illustrations, "}<a href={"http://blog.schoollibraryjournal.com/afuse8production/2010/09/29/review-of-the-day-art-max-by-david-wiesner/"} target="_blank" rel="noopener noreferrer">{"David Wiesner"}</a>{" has crafted "}<a href={"http://www.goodreads.com/book/show/97860.Tuesday"} target="_blank" rel="noopener noreferrer">{"a tale about flying frogs"}</a>{". Mysteriously, one Tuesday night, the frogs rise up on their lilypads and fly from the wetland into town. They sneak into a woman’s house where they’re mesmerized by the TV, they arouse the curiosity of a local dog who chases them until they chase her, and they give a man having a late-night snack a very good story to tell a news crew the next day."}</p>
      <p>{"Probably the most appealing part of this book is the very end, which takes place the following Tuesday, when the sky is filled with flying pigs. This book is sure to appeal to kids who love animals, and anyone who appreciates a well-told tale, particularly when it’s the illustrations that do the talking."}</p>
      <p>{"Ages 3-8."}</p>
    </div>
  );
}
