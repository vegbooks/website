import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9229",
  "slug": "love-is-the-color-of-a-rainbow",
  "url": "/reviews/love-is-the-color-of-a-rainbow/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/11/11/love-is-the-color-of-a-rainbow/",
  "title": "Love is the Color of a Rainbow",
  "publishedAt": "2013-11-11",
  "publishedLabel": "November 11th, 2013",
  "excerpt": "I really enjoyed Love is the Color of a Rainbow by Kathy Parra. It’s about love, peace, nature, and discovering the world through your senses. It shows us the meaning of color, and how it is connected to our…",
  "image": {
    "src": "/media/2013/11/rainbow-front-cover.jpg",
    "alt": "RAINBOW front cover",
    "width": 211,
    "height": 270
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
      "name": "Blindness",
      "slug": "blindness",
      "url": "/topics/blindness/"
    },
    {
      "name": "Candace Keach",
      "slug": "candace-keach",
      "url": "/topics/candace-keach/"
    },
    {
      "name": "Colors",
      "slug": "colors",
      "url": "/topics/colors/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Kathy Parra",
      "slug": "kathy-parra",
      "url": "/topics/kathy-parra/"
    },
    {
      "name": "Nature Books",
      "slug": "nature-books",
      "url": "/topics/nature-books/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Robyn Moore",
      "slug": "robyn-moore",
      "url": "/topics/robyn-moore/"
    },
    {
      "name": "Senses",
      "slug": "senses",
      "url": "/topics/senses/"
    }
  ],
  "reviewer": {
    "name": "Robyn Moore",
    "slug": "robyn-moore",
    "url": "/contributors/robyn-moore/",
    "aliases": [
      "ROBYN MOORE"
    ]
  },
  "seo": {
    "description": "I really enjoyed Love is the Color of a Rainbow by Kathy Parra. It’s about love, peace, nature, and discovering the world through your senses. It shows us the meaning of color, and how it is connected to our…",
    "image": "https://vegbooks.org/media/2013/11/rainbow-front-cover.jpg"
  },
  "previous": {
    "title": "Mama Doni’s Jewish Holiday Party (2013)",
    "url": "/reviews/mama-donis-jewish-holiday-party/"
  },
  "next": {
    "title": "Buffalo Bird Girl",
    "url": "/reviews/buffalo-bird-girl/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/11/rainbow-front-cover.jpg"}><img src={"/media/2013/11/rainbow-front-cover.jpg"} alt={"RAINBOW front cover"} width={211} height={270} /></a>
      </figure>
      <p>{"I really enjoyed "}<em>{"Love is the Color of a Rainbow"}</em>{" by "}<a href={"http://www.kathyparra.com/"}>{"Kathy Parra"}</a>{". It’s about love, peace, nature, and discovering the world through your senses. It shows us the meaning of color, and how it is connected to our feelings. It’s a very feel good, calming story."}</p>
      <p>{"Willow, who is a blind young girl, goes outside with her mama for a nature walk. Mama introduces Willow to all of the colors of a rainbow by using her senses. Despite being blind, Willow experiences the beauty in nature, and feels color strongly. For example, she feels the gentleness of the green leaves, the energy and life of a red tomato and the peacefulness of the blue sky. Together, all of the colors of the rainbow feel like love."}</p>
      <p>{"After reading this book, you are filled with a sense of peace. It’s beautifully written, and the illustrations are soft and simple. It’s one of those books that temporarily transports you to another world. In this case, it’s the natural world. It would be a great book to use to encourage children to think creatively about how they would describe the colors in nature, using their senses."}</p>
      <p>{"Ages 4-7."}</p>
      <p><em>{"The author provided an electronic galley of this book for review."}</em></p>
    </div>
  );
}
