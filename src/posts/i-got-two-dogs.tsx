import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2190",
  "slug": "i-got-two-dogs",
  "url": "/reviews/i-got-two-dogs/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/29/i-got-two-dogs/",
  "title": "I Got Two Dogs",
  "publishedAt": "2010-06-29",
  "publishedLabel": "June 29th, 2010",
  "excerpt": "If you are familiar with any of John Lithgow’s books, you may already know that they are usually a bit quirky. But that’s just what kids seem to love about them. He writes books that are fun and humorous, and that…",
  "image": {
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "I Got Two Dogs",
    "width": 216,
    "height": 143
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
      "name": "Animal Care",
      "slug": "animal-care",
      "url": "/topics/animal-care/"
    },
    {
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
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
    "description": "If you are familiar with any of John Lithgow’s books, you may already know that they are usually a bit quirky. But that’s just what kids seem to love about them. He writes books that are fun and humorous, and that…",
    "image": "https://vegbooks.org/media/2010/06/girls-book-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Sally’s Great Balloon Adventure",
    "url": "/reviews/sallys-great-balloon-adventure/"
  },
  "next": {
    "title": "Our Farm",
    "url": "/reviews/our-farm/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/girls-book-pic-from-istock.jpg"}><img src={"/media/2010/06/girls-book-pic-from-istock.jpg"} alt={"I Got Two Dogs"} width={216} height={143} /></a>
      </figure>
      <p>{"If you are familiar with any of "}<a href={"http://authors.simonandschuster.com/John-Lithgow/1664402"} target="_blank" rel="noopener noreferrer">{"John Lithgow"}</a>{"’s books, you may already know that they are usually a bit quirky. But that’s just what kids seem to love about them. He writes books that are fun and humorous, and that tell a cute story. With "}<em><a href={"http://poshpetlife.com/stuff/kids/i-got-two-dogs-by-john-lithgow/"} target="_blank" rel="noopener noreferrer">{"I Got Two Dogs"}</a></em>{", he manages to do this all over again, in a story about having two dogs."}</p>
      <p>{"This is a fun book to read and even more entertaining if you can get your hands on a copy with the CD. On it, Lithgow reads the book, adding his own charm to bring the characters to life. The story, about having two dogs and being loyal and devoted to them, is one that younger children will enjoy hearing and parents will enjoy reading."}</p>
      <p>{"Kids will especially like this book if they are dog lovers. Vegetarian parents will be happy that the book provides a solid message about being devoted to and loving the family’s pet dogs."}</p>
      <p>{"Ages 2-5."}</p>
    </div>
  );
}
