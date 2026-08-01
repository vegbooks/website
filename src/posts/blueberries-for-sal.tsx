import type { PostMetadata } from '../content/types';

export const article = {
  "id": "232",
  "slug": "blueberries-for-sal",
  "url": "/reviews/blueberries-for-sal/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/11/24/blueberries-for-sal/",
  "title": "Blueberries for Sal",
  "publishedAt": "2009-11-24",
  "publishedLabel": "November 24th, 2009",
  "excerpt": "Robert McCloskey’s classic book describes a chance encounter between a child and her momma and a bear cub and his momma. When both families head to Blueberry Hill to stock up on fruit for the winter, the little ones…",
  "image": {
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Blueberries for Sal",
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
      "name": "1940s Childrens Literature",
      "slug": "1940s-childrens-literature",
      "url": "/topics/1940s-childrens-literature/"
    },
    {
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Bears",
      "slug": "bears",
      "url": "/topics/bears/"
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
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Living With Wildlife",
      "slug": "living-with-wildlife",
      "url": "/topics/living-with-wildlife/"
    },
    {
      "name": "Mothers",
      "slug": "mothers",
      "url": "/topics/mothers/"
    },
    {
      "name": "Picture Books",
      "slug": "picture-books",
      "url": "/topics/picture-books/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Respect for Nature",
      "slug": "respect-for-nature",
      "url": "/topics/respect-for-nature/"
    },
    {
      "name": "Robert McCloskey",
      "slug": "robert-mccloskey",
      "url": "/topics/robert-mccloskey/"
    },
    {
      "name": "Wildlife Books for Kids",
      "slug": "wildlife-books-for-kids",
      "url": "/topics/wildlife-books-for-kids/"
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
    "description": "Robert McCloskey’s classic book describes a chance encounter between a child and her momma and a bear cub and his momma. When both families head to Blueberry Hill to stock up on fruit for the winter, the little ones…",
    "image": "https://vegbooks.org/media/2010/06/girls-book-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Welcome Back, Puffin!",
    "url": "/reviews/welcome-back-puffin/"
  },
  "next": {
    "title": "Shark Tale (2004)",
    "url": "/reviews/shark-tale/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/girls-book-pic-from-istock.jpg"}><img src={"/media/2010/06/girls-book-pic-from-istock.jpg"} alt={"Blueberries for Sal"} width={210} height={139} /></a>
      </figure>
      <p>{"Robert McCloskey’s classic book describes a chance encounter between a child and her momma and a bear cub and his momma."}</p>
      <p>{"When both families head to Blueberry Hill to stock up on fruit for the winter, the little ones get separated from their mothers and begin to follow the wrong mothers instead. The lesson in the book is in how each mother reacts when she finds someone unexpected following her. She takes a good look and backs away, because — McCloskey tells us — “She was old enough to be shy of people/bears, even a very small [one].” The families are reunited and everyone makes it home OK."}</p>
      <p>{"This sweet book emphasizes our connection to nature and encourages respect for wild animals."}</p>
      <p>{"Ages 2 to 5. For more reviews, visit "}<a href={"http://www.commonsensemedia.org/book-reviews/Blueberries-for-Sal.html"} target="_blank" rel="noopener noreferrer">{"Common Sense Media"}</a>{" or "}<a href={"http://www.goodreads.com/book/show/133526.Blueberries_for_Sal"} target="_blank" rel="noopener noreferrer">{"Goodreads"}</a>{"."}</p>
    </div>
  );
}
