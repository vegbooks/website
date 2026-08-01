import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2957",
  "slug": "the-snails-spell",
  "url": "/reviews/the-snails-spell/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/08/28/the-snails-spell/",
  "title": "The Snail’s Spell",
  "publishedAt": "2010-08-28",
  "publishedLabel": "August 28th, 2010",
  "excerpt": "Many of us are inspired to become vegetarians after they learn about the widespread animal exploitation that supports the Standard American Diet. We can only hope that the next generation sees animals differently…",
  "image": {
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "The Snail’s Spell",
    "width": 210,
    "height": 140
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
      "name": "Books that Teach Empathy",
      "slug": "books-that-teach-empathy",
      "url": "/topics/books-that-teach-empathy/"
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
      "name": "Garden",
      "slug": "garden",
      "url": "/topics/garden/"
    },
    {
      "name": "Joanne Ryder",
      "slug": "joanne-ryder",
      "url": "/topics/joanne-ryder/"
    },
    {
      "name": "Lynne Cherry",
      "slug": "lynne-cherry",
      "url": "/topics/lynne-cherry/"
    },
    {
      "name": "Natural History",
      "slug": "natural-history",
      "url": "/topics/natural-history/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Snails",
      "slug": "snails",
      "url": "/topics/snails/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
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
    "description": "Many of us are inspired to become vegetarians after they learn about the widespread animal exploitation that supports the Standard American Diet. We can only hope that the next generation sees animals differently…",
    "image": "https://vegbooks.org/media/2010/06/boy-book-pic-from-istock1.jpg"
  },
  "previous": {
    "title": "Animalia",
    "url": "/reviews/animalia/"
  },
  "next": {
    "title": "What’s in My Garden?",
    "url": "/reviews/garden/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/boy-book-pic-from-istock1.jpg"}><img src={"/media/2010/06/boy-book-pic-from-istock1.jpg"} alt={"The Snail’s Spell"} width={210} height={140} /></a>
      </figure>
      <p>{"Many of us are inspired to become vegetarians after they learn about the widespread animal exploitation that supports the "}<a href={"http://www.ecosalon.com/the-standard-american-diet-in-pictures-and-numbers/"} target="_blank" rel="noopener noreferrer">{"Standard American Diet"}</a>{". We can only hope that the next generation sees animals differently than ours does — not as "}<a href={"http://www.farmsanctuary.org/issues/factoryfarming/"} target="_blank" rel="noopener noreferrer">{"commodities to be manipulated to maximize yield"}</a>{", but as individuals who deserve our respect."}</p>
      <p>{"Joanne Ryder and Lynne Cherry’s storybook "}<em><a href={"http://www.goodreads.com/book/show/1042558.The_Snail_s_Spell"} target="_blank" rel="noopener noreferrer">{"The Snail’s Spell"}</a></em>{" can help us instill those values in the children in our lives. By inviting the reader to become a snail — one of the smallest and most reviled animals in our culture — the story inspires empathy for other beings, and may even spark an interest in the natural histories of the animals around us."}</p>
      <p>{"Using sparse language and simple drawings, this book is an ideal pick for a teacher or family member who would like to introduce these concepts to the children they care for without explicitly mentioning the V-word."}</p>
      <p>{"Ages 3-7."}</p>
    </div>
  );
}
