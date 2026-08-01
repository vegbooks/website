import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4446",
  "slug": "shlemiel-crooks",
  "url": "/reviews/shlemiel-crooks/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/03/27/shlemiel-crooks/",
  "title": "Shlemiel Crooks",
  "publishedAt": "2011-03-27",
  "publishedLabel": "March 27th, 2011",
  "excerpt": "I’m probably not the best person to review this book, since I’m not Jewish and this book is about the celebration of Passover in early 20th century St. Louis. Still, ever since my daughter attended a Jewish preschool…",
  "image": {
    "src": "/media/2011/03/165-x-sc-fcover-300dpi.jpg",
    "alt": "Shlemiel Crooks",
    "width": 210,
    "height": 265
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
      "name": "Anna Olswanger",
      "slug": "anna-olswanger",
      "url": "/topics/anna-olswanger/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Holiday Books",
      "slug": "holiday-books",
      "url": "/topics/holiday-books/"
    },
    {
      "name": "Holidays",
      "slug": "holidays",
      "url": "/topics/holidays/"
    },
    {
      "name": "Jewish Culture",
      "slug": "jewish-culture",
      "url": "/topics/jewish-culture/"
    },
    {
      "name": "Judaism",
      "slug": "judaism",
      "url": "/topics/judaism/"
    },
    {
      "name": "Passover",
      "slug": "passover",
      "url": "/topics/passover/"
    },
    {
      "name": "Paula Goodman Koz",
      "slug": "paula-goodman-koz",
      "url": "/topics/paula-goodman-koz/"
    },
    {
      "name": "vegan",
      "slug": "vegan",
      "url": "/topics/vegan/"
    },
    {
      "name": "Vegan Author",
      "slug": "vegan-author",
      "url": "/topics/vegan-author/"
    },
    {
      "name": "Vegetarian",
      "slug": "vegetarian",
      "url": "/topics/vegetarian/"
    },
    {
      "name": "Yiddish",
      "slug": "yiddish",
      "url": "/topics/yiddish/"
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
    "description": "I’m probably not the best person to review this book, since I’m not Jewish and this book is about the celebration of Passover in early 20th century St. Louis. Still, ever since my daughter attended a Jewish preschool…",
    "image": "https://vegbooks.org/media/2011/03/165-x-sc-fcover-300dpi.jpg"
  },
  "previous": {
    "title": "Ocean Babies",
    "url": "/reviews/ocean-babies/"
  },
  "next": {
    "title": "The Kids’ Solar Energy Book",
    "url": "/reviews/the-kids-solar-energy-book/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/03/165-x-sc-fcover-300dpi.jpg"}><img src={"/media/2011/03/165-x-sc-fcover-300dpi.jpg"} alt={"Shlemiel Crooks"} width={210} height={265} /></a>
      </figure>
      <p>{"I’m probably not the best person to review this book, since I’m not Jewish and this book is about "}<a href={"http://shlemielcrooks.com/"} target="_blank" rel="noopener noreferrer">{"the celebration of Passover in early 20th century St. Louis"}</a>{". Still, ever since my daughter attended a Jewish preschool last year, I’ve been on the lookout for a vegan-friendly Passover book, and at last I’ve found one!"}</p>
      <p>{"Incorporating a conversational tone and snippets of Yiddish, Anna Olswanger’s book recounts the true story of a failed robbery of Passover wine in 1919. Complete with an appearance by Pharaoh, a talking horse, and a nice helping of Exodus, this book has a lot of character and not a single mention of fish, meat, or eggs. It’s a great book for vegetarian and vegan kids!"}</p>
      <p>{"Ages 5-9. For a guide to the book, visit "}<a href={"http://shlemielcrooks.com/guide.php"} target="_blank" rel="noopener noreferrer">{"the Shlemiel Crooks website"}</a>{"."}</p>
    </div>
  );
}
