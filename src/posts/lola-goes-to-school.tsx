import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10863",
  "slug": "lola-goes-to-school",
  "url": "/reviews/lola-goes-to-school/",
  "legacyUrl": "https://vegbooks.org/index.php/2019/07/18/lola-goes-to-school/",
  "title": "Lola Goes to School",
  "publishedAt": "2019-07-18",
  "publishedLabel": "July 18th, 2019",
  "excerpt": "LOLA GOES TO SCHOOL by Anna McQuinn is a lovely and encouraging picture book for children starting Kindergarten or preschool. Fans of Lola’s previous adventures will recognize her love of reading and learning and…",
  "image": {
    "src": "/media/2019/07/lola-goes-to-school-cvr-hires.jpg",
    "alt": "Lola Goes to School",
    "width": 258,
    "height": 300
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
      "name": "Anna McQuinn",
      "slug": "anna-mcquinn",
      "url": "/topics/anna-mcquinn/"
    },
    {
      "name": "First Day of School",
      "slug": "first-day-of-school",
      "url": "/topics/first-day-of-school/"
    },
    {
      "name": "Kindergarten",
      "slug": "kindergarten",
      "url": "/topics/kindergarten/"
    },
    {
      "name": "Lola Goes to School",
      "slug": "lola-goes-to-school",
      "url": "/topics/lola-goes-to-school/"
    },
    {
      "name": "pre-K",
      "slug": "pre-k",
      "url": "/topics/pre-k/"
    },
    {
      "name": "Rosalind Beardshaw",
      "slug": "rosalind-beardshaw",
      "url": "/topics/rosalind-beardshaw/"
    }
  ],
  "reviewer": {
    "name": "Kristin Wald",
    "slug": "kristin-wald",
    "url": "/contributors/kristin-wald/",
    "aliases": [
      "KRISITN WALD",
      "Kristin Wald",
      "KRISTIN WALD"
    ]
  },
  "seo": {
    "description": "LOLA GOES TO SCHOOL by Anna McQuinn is a lovely and encouraging picture book for children starting Kindergarten or preschool. Fans of Lola’s previous adventures will recognize her love of reading and learning and…",
    "image": "https://vegbooks.org/media/2019/07/lola-goes-to-school-cvr-hires.jpg"
  },
  "previous": {
    "title": "Plant-Powered Protein Cookbook",
    "url": "/reviews/plant-powered-protein-cookbook/"
  },
  "next": {
    "title": "A Beautiful Day in the Neighborhood",
    "url": "/reviews/a-beautiful-day-in-the-neighborhood/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <a href={"/reviews/lola-goes-to-school/"}><img src={"/media/2019/07/lola-goes-to-school-cvr-hires.jpg"} alt={"Lola Goes to School"} width={258} height={300} /></a>
      </figure>
      <p><strong><a href={"https://www.indiebound.org/book/9781580899383"} target="_blank" rel="noopener noreferrer">{"LOLA GOES TO SCHOOL"}</a></strong>{" by Anna McQuinn is a lovely and encouraging picture book for children starting Kindergarten or preschool. Fans of Lola’s previous adventures will recognize her love of reading and learning and having new experiences. "}<em>{"Lola Goes to School"}</em>{"is perfect for children who are anxious about starting school as there is a matter-of-fact, reassuring tone, and the story presents no conflicts to overcome — other than school being “fun…but exhausting.”"}</p>
      <p>{"The first half of the picture book is all about preparing for the big day. Lola picks out her outfit and packs her bag, including a set of extra clothes “just in case.” The story then follows Lola as she starts her first day of school and navigates reading and snack time and blocks and singing. The array of color and variety of activities Lola takes part in are sure to include at least one or two tasks that any child beginning a new school year will recognize."}</p>
      <p>{"To further ease trepidations, every character is smiling throughout the book, and the text is simple description of actions with no dialogue. The bright colors and soft edges of the illustrations by Rosalind Beardshaw are consistently comforting and joyful. Lola Goes to School will make a wonderful addition to any picture book collection about starting new adventures and enjoying every moment."}</p>
    </div>
  );
}
