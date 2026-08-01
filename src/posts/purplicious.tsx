import type { PostMetadata } from '../content/types';

export const article = {
  "id": "80",
  "slug": "purplicious",
  "url": "/reviews/purplicious/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/11/03/purplicious/",
  "title": "Purplicious",
  "publishedAt": "2009-11-03",
  "publishedLabel": "November 3rd, 2009",
  "excerpt": "Kids who have read Pinkaliciousby Victoria Kahn and Elizabeth Kahn know that Pinkalicious loves the color pink! In Purplicious, our bedazzled heroine must decide what to do when all the girls at school decide black…",
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
      "name": "Elizabeth Kahn",
      "slug": "elizabeth-kahn",
      "url": "/topics/elizabeth-kahn/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Pink",
      "slug": "pink",
      "url": "/topics/pink/"
    },
    {
      "name": "Victoria Kahn",
      "slug": "victoria-kahn",
      "url": "/topics/victoria-kahn/"
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
    "description": "Kids who have read Pinkaliciousby Victoria Kahn and Elizabeth Kahn know that Pinkalicious loves the color pink! In Purplicious, our bedazzled heroine must decide what to do when all the girls at school decide black…"
  },
  "previous": {
    "title": "Hubert the Pudge: A Vegetarian Tale",
    "url": "/reviews/hubert-the-pudge-a-vegetarian-tale/"
  },
  "next": {
    "title": "Horton Hears a Who!",
    "url": "/reviews/horton-hears-a-who-the-book/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"Kids who have read "}<em>{"Pinkalicious"}</em>{"by Victoria Kahn and "}<a href={"http://elizabethkann.com/?page_id=4"} target="_blank" rel="noopener noreferrer">{"Elizabeth Kahn"}</a>{" know that Pinkalicious loves the color pink! In "}<em>{"Purplicious"}</em>{", our bedazzled heroine must decide what to do when all the girls at school decide black is in."}</p>
      <p>{"At first, Pinkalicious stands up for her choice. “You don’t need to be a baby or a little girl to like the color pink. Pink is for everyone,” she exclaims when she’s being teased on the bus. “Even my brother likes pink.” Eventually, however, she gets the blues and writes in her diary, “Pink is a lonely color.”"}</p>
      <p>{"While Pinkalicious wavers at one point in the book, going so far as to order vanilla ice cream for fear someone might see her eating a pink confection, she never strays far from her conviction that pink is beautiful. And when she meets a kindred spirit in her art class, she discovers that pink is also powerful. (Pink can make blue into purple, hence the title of the book.)"}</p>
      <p>{"I’d recommend this story for "}<a href={"http://www.vegsource.com/parent/"} target="_blank" rel="noopener noreferrer">{"vegetarian or vegan kids"}</a>{", because it explores what it’s like to be different and it affirms the value of staying true to yourself, despite the obstacles."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
