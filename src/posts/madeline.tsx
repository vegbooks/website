import type { PostMetadata } from '../content/types';

export const article = {
  "id": "472",
  "slug": "madeline",
  "url": "/reviews/madeline/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/12/17/madeline/",
  "title": "Madeline",
  "publishedAt": "2009-12-17",
  "publishedLabel": "December 17th, 2009",
  "excerpt": "This 1939 classic features everyone’s favorite little red-headed fille, Madeline. We love this book! The French orphans care deeply for Madeline and are understandably distressed when she needs to have her appendix…",
  "categories": [
    {
      "name": "Books",
      "slug": "books",
      "url": "/books/"
    }
  ],
  "tags": [
    {
      "name": "1930s Childrens Literature",
      "slug": "1930s-childrens-literature",
      "url": "/topics/1930s-childrens-literature/"
    },
    {
      "name": "Classic Books",
      "slug": "classic-books",
      "url": "/topics/classic-books/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Ludwig Bemelmans",
      "slug": "ludwig-bemelmans",
      "url": "/topics/ludwig-bemelmans/"
    },
    {
      "name": "Madeline",
      "slug": "madeline",
      "url": "/topics/madeline/"
    },
    {
      "name": "Zoos",
      "slug": "zoos",
      "url": "/topics/zoos/"
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
    "description": "This 1939 classic features everyone’s favorite little red-headed fille, Madeline. We love this book! The French orphans care deeply for Madeline and are understandably distressed when she needs to have her appendix…"
  },
  "previous": {
    "title": "The Lion and the Mouse",
    "url": "/reviews/the-lion-the-mouse/"
  },
  "next": {
    "title": "How the Grinch Stole Christmas (1966)",
    "url": "/reviews/how-the-grinch-stole-christmas/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"This 1939 classic features everyone’s favorite little red-headed "}<em>{"fille"}</em>{", Madeline. We love this book! The French orphans care deeply for Madeline and are understandably distressed when she needs to have her appendix out. But when they visit her at the hospital and see her scar, they’re just like any other kids — they want their appendixes out too."}</p>
      <p>{"There’s not much to criticize in "}<a href={"http://www.madeline.com/author.htm"} target="_blank" rel="noopener noreferrer">{"Ludwig Bemelmans"}</a>{"‘s lovely little book, though I will say that his depiction of a zoo seems rather outdated. Regardless, I think that Madeline’s teacher and classmates’ sense of compassion toward her in her time of need still makes this a good book for vegetarian and vegan kids."}</p>
      <p>{"Ages 4-8. To read another perspective, visit "}<a href={"http://www.commonsensemedia.org/book-reviews/Madeline.html"} target="_blank" rel="noopener noreferrer">{"Common Sense Media"}</a>{"."}</p>
    </div>
  );
}
