import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2934",
  "slug": "garden",
  "url": "/reviews/garden/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/08/29/garden/",
  "title": "What’s in My Garden?",
  "publishedAt": "2010-08-29",
  "publishedLabel": "August 29th, 2010",
  "excerpt": "What better way for baby to learn the colors of the rainbow than from the garden? What’s in My Garden?, a board book by Cheryl Christian, will entice babies with the illustrated, cut-out veggies that slide up from…",
  "image": {
    "src": "/media/2010/08/whats-in-garden-eng.jpg",
    "alt": "What’s in My Garden?",
    "width": 210,
    "height": 244
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
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Board Book",
      "slug": "board-book",
      "url": "/topics/board-book/"
    },
    {
      "name": "Cheryl Christian",
      "slug": "cheryl-christian",
      "url": "/topics/cheryl-christian/"
    },
    {
      "name": "Colors",
      "slug": "colors",
      "url": "/topics/colors/"
    },
    {
      "name": "Garden",
      "slug": "garden",
      "url": "/topics/garden/"
    },
    {
      "name": "Gardening",
      "slug": "gardening",
      "url": "/topics/gardening/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Maureen McDowell",
      "slug": "maureen-mcdowell",
      "url": "/topics/maureen-mcdowell/"
    },
    {
      "name": "Vegetables",
      "slug": "vegetables",
      "url": "/topics/vegetables/"
    }
  ],
  "reviewer": {
    "name": "Maureen McDowell",
    "slug": "maureen-mcdowell",
    "url": "/contributors/maureen-mcdowell/",
    "aliases": [
      "MAUREEN MCDOWELL"
    ]
  },
  "seo": {
    "description": "What better way for baby to learn the colors of the rainbow than from the garden? What’s in My Garden?, a board book by Cheryl Christian, will entice babies with the illustrated, cut-out veggies that slide up from…",
    "image": "https://vegbooks.org/media/2010/08/whats-in-garden-eng.jpg"
  },
  "previous": {
    "title": "The Snail’s Spell",
    "url": "/reviews/the-snails-spell/"
  },
  "next": {
    "title": "Two Bobbies",
    "url": "/reviews/two-bobbies/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/whats-in-garden-eng.jpg"}><img src={"/media/2010/08/whats-in-garden-eng.jpg"} alt={"What’s in My Garden?"} width={210} height={244} /></a>
      </figure>
      <p>{"What better way for baby to learn the colors of the rainbow than from the garden? "}<em><a href={"http://www.starbrightbooks.org/details.php?id=283"} target="_blank" rel="noopener noreferrer">{"What’s in My Garden?"}</a></em>{", a board book by Cheryl Christian, will entice babies with the illustrated, cut-out veggies that slide up from behind a garden scene."}</p>
      <p>{"This simple book lacks a story, and instead invites interaction, a boon to fostering communication in tiny ones. Every other page presents a vegetable with, for example, “I see tomatoes” and then asks the same question, “What color are they?” Older babies who recognize the vegetables from supper can participate in answering the question, and all can help slide the veggie up that awaits discovery on the opposing page and learn the color."}</p>
      <p>{"Ages 0-3."}</p>
    </div>
  );
}
