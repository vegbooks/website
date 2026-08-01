import type { PostMetadata } from '../content/types';

export const article = {
  "id": "288",
  "slug": "welcome-back-puffin",
  "url": "/reviews/welcome-back-puffin/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/11/23/welcome-back-puffin/",
  "title": "Welcome Back, Puffin!",
  "publishedAt": "2009-11-23",
  "publishedLabel": "November 23rd, 2009",
  "excerpt": "Dawn Bentley and Beth Stover have collaborated on four wildlife books in the Soundprints Read-and-Discover “Hoppers” series for kids preschool to first grade: Welcome Back, Puffin!, Wake Up, Black Bear!, Busy Little…",
  "image": {
    "src": "/media/2009/11/rd-welcomepuffin1.jpg",
    "alt": "Welcome Back, Puffin!",
    "width": 189,
    "height": 284
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
      "name": "Beth Stover",
      "slug": "beth-stover",
      "url": "/topics/beth-stover/"
    },
    {
      "name": "Dawn Bentley",
      "slug": "dawn-bentley",
      "url": "/topics/dawn-bentley/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Early Readers",
      "slug": "early-readers",
      "url": "/topics/early-readers/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "Dawn Bentley and Beth Stover have collaborated on four wildlife books in the Soundprints Read-and-Discover “Hoppers” series for kids preschool to first grade: Welcome Back, Puffin!, Wake Up, Black Bear!, Busy Little…",
    "image": "https://vegbooks.org/media/2009/11/rd-welcomepuffin1.jpg"
  },
  "previous": {
    "title": "The Lonely Scarecrow",
    "url": "/reviews/the-lonely-scarecrow/"
  },
  "next": {
    "title": "Blueberries for Sal",
    "url": "/reviews/blueberries-for-sal/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2009/11/rd-welcomepuffin1.jpg"}><img src={"/media/2009/11/rd-welcomepuffin1.jpg"} alt={"Welcome Back, Puffin!"} width={189} height={284} /></a>
      </figure>
      <p><a href={"http://www.jacketflap.com/persondetail.asp?person=35908"} target="_blank" rel="noopener noreferrer">{"Dawn Bentley"}</a>{" and "}<a href={"http://www.jacketflap.com/persondetail.asp?person=15926"} target="_blank" rel="noopener noreferrer">{"Beth Stover"}</a>{" have collaborated on four wildlife books in the Soundprints Read-and-Discover “Hoppers” series for kids preschool to first grade: "}<em>{"Welcome Back, Puffin!"}</em>{", "}<em>{"Wake Up, Black Bear!"}</em>{", "}<em>{"Busy Little Beaver"}</em>{", and "}<em>{"The Prickly Porcupine"}</em>{"."}</p>
      <p>{"The series features natural history information about each species, told as a story and accompanied by life-like illustrations. In "}<a href={"http://www.audubon.org/bird/puffin/OnlineStore/BooksPosters.html"} target="_blank" rel="noopener noreferrer"><em>{"Welcome Back, Puffin!"}</em></a>{", for example, Puffin flies to an island to have a baby, returning to a burrow she’s used before. The book describes how Baby Puffin transforms from an egg to a colorless bird to an adult and what he and his mother must do at each stage to ensure their survival."}</p>
      <p>{"I like that these books acknowledge the animals’ identities — including their sex and their family bonds. (No animal is an “it.”) Vegetarian parents should be aware that the books on puffins and bears might raise questions about why some animals eat other animals, and why we don’t."}</p>
      <p>{"Ages 3-7."}</p>
    </div>
  );
}
