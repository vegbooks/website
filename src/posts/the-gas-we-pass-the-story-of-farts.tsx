import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3051",
  "slug": "the-gas-we-pass-the-story-of-farts",
  "url": "/reviews/the-gas-we-pass-the-story-of-farts/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/09/09/the-gas-we-pass-the-story-of-farts/",
  "title": "The Gas We Pass: The Story of Farts",
  "publishedAt": "2010-09-09",
  "publishedLabel": "September 9th, 2010",
  "excerpt": "If there is one thing that most kids find funny, it is farting! And this book helps not only to provide a few laughs about this normal bodily function, but also to provide interesting information. The book focuses on…",
  "image": {
    "src": "/media/2010/09/the-gas-we-pass.jpg",
    "alt": "The Gas We Pass: The Story of Farts",
    "width": 210,
    "height": 239
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
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Human Body",
      "slug": "human-body",
      "url": "/topics/human-body/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Shinta Cho",
      "slug": "shinta-cho",
      "url": "/topics/shinta-cho/"
    },
    {
      "name": "Vegetarian",
      "slug": "vegetarian",
      "url": "/topics/vegetarian/"
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
    "description": "If there is one thing that most kids find funny, it is farting! And this book helps not only to provide a few laughs about this normal bodily function, but also to provide interesting information. The book focuses on…",
    "image": "https://vegbooks.org/media/2010/09/the-gas-we-pass.jpg"
  },
  "previous": {
    "title": "Hey, Little Ant",
    "url": "/reviews/hey-little-ant/"
  },
  "next": {
    "title": "Bats at the Beach",
    "url": "/reviews/bats-at-the-beach/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/09/the-gas-we-pass.jpg"}><img src={"/media/2010/09/the-gas-we-pass.jpg"} alt={"The Gas We Pass: The Story of Farts"} width={210} height={239} /></a>
      </figure>
      <p>{"If there is one thing that most kids find funny, it is farting! And this book helps not only to provide a few laughs about this normal bodily function, but also to provide interesting information. The book focuses on explaining what farting is, why we do it and even how much per day is normal."}</p>
      <p>{"Children love "}<a href={"http://en.wikipedia.org/wiki/The_Gas_We_Pass"} target="_blank" rel="noopener noreferrer">{"this book"}</a>{" because it focuses on something that they find so funny. And, to be honest, adults find it pretty humorous, as well. It is refreshing to read a book about something so basic and normal in a way that teaches us something and makes light of it."}</p>
      <p>{"Vegetarian parents will love the fact that the book points out that farts smell differently, based upon what people eat. The book says that eating things like meat, eggs and dairy will produce farts that stink more, while eating things like beans and sweet potatoes won’t. This is a cute book for any young child, and it could be a great conversation-starter with other parents."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
