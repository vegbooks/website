import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10261",
  "slug": "the-boy-the-book-a-wordless-story",
  "url": "/reviews/the-boy-the-book-a-wordless-story/",
  "legacyUrl": "https://vegbooks.org/index.php/2016/01/16/the-boy-the-book-a-wordless-story/",
  "title": "The Boy & the Book [a wordless story]",
  "publishedAt": "2016-01-16",
  "publishedLabel": "January 16th, 2016",
  "excerpt": "I adored this book about a boy and an anthropomorphic book! It is a cute picture book introducing the topic of how to take care of books they love and a reminder to parents about helping their kids handle books with…",
  "image": {
    "src": "/media/2016/01/boy-and-the-book-hires-2.jpg",
    "alt": "boy-and-the-book-hires 2",
    "width": 210,
    "height": 169
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
      "name": "Bob Kolar",
      "slug": "bob-kolar",
      "url": "/topics/bob-kolar/"
    },
    {
      "name": "David Michael Slater",
      "slug": "david-michael-slater",
      "url": "/topics/david-michael-slater/"
    },
    {
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Nearly Wordless Books",
      "slug": "nearly-wordless-books",
      "url": "/topics/nearly-wordless-books/"
    },
    {
      "name": "Picture Books",
      "slug": "picture-books",
      "url": "/topics/picture-books/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    }
  ],
  "reviewer": {
    "name": "Huyen MacMichael",
    "slug": "huyen-macmichael",
    "url": "/contributors/huyen-macmichael/",
    "aliases": [
      "HUYEN MACMICHAEL"
    ]
  },
  "seo": {
    "description": "I adored this book about a boy and an anthropomorphic book! It is a cute picture book introducing the topic of how to take care of books they love and a reminder to parents about helping their kids handle books with…",
    "image": "https://vegbooks.org/media/2016/01/boy-and-the-book-hires-2.jpg"
  },
  "previous": {
    "title": "High Tide for Horseshoe Crabs",
    "url": "/reviews/high-tide-for-horseshoe-crabs/"
  },
  "next": {
    "title": "Noisy Bird Sing-Along",
    "url": "/reviews/noisy-bird-sing-along/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2016/01/boy-and-the-book-hires-2.jpg"} alt={"boy-and-the-book-hires 2"} width={210} height={169} />
      </figure>
      <p>{"I adored this book about a boy and an anthropomorphic book! It is a cute picture book introducing the topic of how to take care of books they love and a reminder to parents about helping their kids handle books with care as they start their journey towards reading."}</p>
      <p>{"Bob Kolar’s illustrations are bright, colorful, expressive, and carries the storyline across clearly. The boy-handled book has facial expressions that are so evocative, you can’t help but feel sad or sorry he was injured and scared. Preschool age kids can definitely recognize and empathize with some of the emotions illustrated. This “wordless story” does have a few words- but I think it is such a great lead in for those who are learning to read."}</p>
      <p>{"Current and future book lovers won’t be able to resist such a cute book about loving books!"}</p>
      <p>{"Ages 2-5"}</p>
      <p><em>{"I received a free copy in exchange for an honest review."}</em></p>
    </div>
  );
}
