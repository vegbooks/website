import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3497",
  "slug": "the-adventures-of-an-aluminum-can-and-the-adventures-of-a-plastic-bottle",
  "url": "/reviews/the-adventures-of-an-aluminum-can-and-the-adventures-of-a-plastic-bottle/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/11/19/the-adventures-of-an-aluminum-can-and-the-adventures-of-a-plastic-bottle/",
  "title": "The Adventures of an Aluminum Can (and The Adventures of a Plastic Bottle)",
  "publishedAt": "2010-11-19",
  "publishedLabel": "November 19th, 2010",
  "excerpt": "Both of these books deal with subjects that everyone should care about. They are stories of recycling, one about the aluminum can and one about plastic bottles. Each take the reader on a journey to learn about the…",
  "image": {
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "The Adventures of an Aluminum Can (and The Adventures of a Plastic Bottle)",
    "width": 210,
    "height": 139
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
      "name": "Alison Inches",
      "slug": "alison-inches",
      "url": "/topics/alison-inches/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Recycled Paper Books",
      "slug": "recycled-paper-books",
      "url": "/topics/recycled-paper-books/"
    },
    {
      "name": "Recycling",
      "slug": "recycling",
      "url": "/topics/recycling/"
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
    "description": "Both of these books deal with subjects that everyone should care about. They are stories of recycling, one about the aluminum can and one about plastic bottles. Each take the reader on a journey to learn about the…",
    "image": "https://vegbooks.org/media/2010/06/girls-book-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Deformed Frogs",
    "url": "/reviews/deformed-frogs/"
  },
  "next": {
    "title": "Gracias, The Thanksgiving Turkey",
    "url": "/reviews/gracias-the-thanksgiving-turkey/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/girls-book-pic-from-istock.jpg"}><img src={"/media/2010/06/girls-book-pic-from-istock.jpg"} alt={"The Adventures of an Aluminum Can (and The Adventures of a Plastic Bottle)"} width={210} height={139} /></a>
      </figure>
      <p>{"Both of these books deal with subjects that everyone should care about. They are stories of recycling, one about the aluminum can and one about "}<a href={"http://everydaytrash.com/2009/11/10/green-books-campaign-the-adventures-of-a-plastic-bottle/"} target="_blank" rel="noopener noreferrer">{"plastic bottles"}</a>{". Each take the reader on a journey to learn about the recycling process of each."}</p>
      <p>{"With both books taking a diary entry approach, it keeps the reader interested. Plus, each are followed up with a list that defines all the new words kids will learn along the way. These are the type of books that are great for teaching children to be eco-friendly."}</p>
      <p>{"Another bonus with both of these books is that they are made from 100 percent postconsumer waste recycled paper. They also contain 100 percent vegetable based ink."}</p>
      <p>{"So while they have an eco-friendly message, they also stick to the mission during the printing process."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
