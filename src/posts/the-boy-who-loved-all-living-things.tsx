import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8525",
  "slug": "the-boy-who-loved-all-living-things",
  "url": "/reviews/the-boy-who-loved-all-living-things/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/01/14/the-boy-who-loved-all-living-things/",
  "title": "The Boy Who Loved All Living Things",
  "publishedAt": "2013-01-14",
  "publishedLabel": "January 14th, 2013",
  "excerpt": "Today is Albert Schweitzer’s birthday. Those of us who work to instill in our children reverence for life are indebted to the Nobel Peace Prize winner for developing an ethical framework based on the basic principle…",
  "image": {
    "src": "/media/2013/01/cover.jpg",
    "alt": "The Boy Who Loved All Living Things",
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
      "name": "Albert Schweitzer",
      "slug": "albert-schweitzer",
      "url": "/topics/albert-schweitzer/"
    },
    {
      "name": "Biography",
      "slug": "biography",
      "url": "/topics/biography/"
    },
    {
      "name": "Compassion",
      "slug": "compassion",
      "url": "/topics/compassion/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "History",
      "slug": "history",
      "url": "/topics/history/"
    },
    {
      "name": "Reverence",
      "slug": "reverence",
      "url": "/topics/reverence/"
    },
    {
      "name": "Vegetarian Protagonist",
      "slug": "vegetarian-protagonist",
      "url": "/topics/vegetarian-protagonist/"
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
    "description": "Today is Albert Schweitzer’s birthday. Those of us who work to instill in our children reverence for life are indebted to the Nobel Peace Prize winner for developing an ethical framework based on the basic principle…",
    "image": "https://vegbooks.org/media/2013/01/cover.jpg"
  },
  "previous": {
    "title": "Martín de Porres: The Rose in the Desert",
    "url": "/reviews/martin-de-porres-the-rose-in-the-desert/"
  },
  "next": {
    "title": "Tina and the Penguin",
    "url": "/reviews/tina-and-the-penguin/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/01/cover.jpg"}><img src={"/media/2013/01/cover.jpg"} alt={"The Boy Who Loved All Living Things"} width={210} height={161} /></a>
      </figure>
      <p>{"Today is Albert Schweitzer’s birthday. Those of us who work to instill in our children "}<a href={"http://en.wikipedia.org/wiki/Reverence_for_Life"} target="_blank" rel="noopener noreferrer">{"reverence for life"}</a>{" are indebted to the Nobel Peace Prize winner for developing an ethical framework based on the basic principle that we and all living beings desire to go on living."}</p>
      <p><a href={"http://labanimals.awionline.org/Schweitzer_Book/"} target="_blank" rel="noopener noreferrer"><em>{"The Boy Who Loved All Living Things: The Imaginary Childhood Journal of Albert Schweitzer"}</em></a>{" by Sheila Hamanaka introduces kids to this hero by giving a glimpse of what his boyhood diary might have looked like. Albert is both blessed with many animal friends and troubled by the cruelty that imbues his daily life. He finds joy in the mice in the church where his father is a minister, but finds himself standing silent when two men beat a horse. Readers see how unkindness troubles Albert’s gentle heart, and watch as he evolves from victim and bystander to an animal advocate who writes:"}</p>
      <blockquote>
        <p>{"I do not care anymore what people think about me! I know deep inside who I am."}</p>
      </blockquote>
      <p>{"Both kiddo and I love this book. The unsteady script and scrapbook-style illustrations reminded me of my own childhood and moral development. I was not much older than Albert is in this book when I looked at the food on my plate and realized it came from animals no different from my family’s rescued companions. I thought, “Why save one and eat another?” Readers of this book will learn that Albert later became a vegetarian because he loved animals."}</p>
      <p>{"Albert Schweitzer’s compassion extended to all. While this book focuses on his love for animals, the end of the book also highlights his impressive humanitarian work helping African people who were dying because they were being treated like slaves."}</p>
      <p>{"Geared to children ages 5 to 8 and their parents and teachers, this book would make an ideal addition to any home or classroom library. And if Albert’s story inspires you, visit the "}<a href={"http://awionline.org/"} target="_blank" rel="noopener noreferrer">{"Animal Welfare Institute"}</a>{" (the nonprofit organization who published this book) to "}<a href={"http://awionline.org/action-ealerts"} target="_blank" rel="noopener noreferrer">{"take action"}</a>{" to help animals."}</p>
    </div>
  );
}
