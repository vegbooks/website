import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2690",
  "slug": "one-smart-goose",
  "url": "/reviews/one-smart-goose/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/08/05/one-smart-goose/",
  "title": "One Smart Goose",
  "publishedAt": "2010-08-05",
  "publishedLabel": "August 5th, 2010",
  "excerpt": "Many people have the misconception that animals are not smart. Many of us realize this to be completely untrue, and books like One Smart Goose can help to further that understanding. This book demonstrates two main…",
  "image": {
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "One Smart Goose",
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
      "name": "animal intelligence",
      "slug": "animal-intelligence",
      "url": "/topics/animal-intelligence/"
    },
    {
      "name": "Caroline Joyne Church",
      "slug": "caroline-joyne-church",
      "url": "/topics/caroline-joyne-church/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
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
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
    },
    {
      "name": "Wildlife Books for Kids",
      "slug": "wildlife-books-for-kids",
      "url": "/topics/wildlife-books-for-kids/"
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
    "description": "Many people have the misconception that animals are not smart. Many of us realize this to be completely untrue, and books like One Smart Goose can help to further that understanding. This book demonstrates two main…",
    "image": "https://vegbooks.org/media/2010/06/boy-book-pic-from-istock1.jpg"
  },
  "previous": {
    "title": "The Blues Go Birding at Wild America’s Shores",
    "url": "/reviews/the-blues-go-birding-at-wild-americas-shores/"
  },
  "next": {
    "title": "Sounds of the Wild: Safari",
    "url": "/reviews/sounds-of-the-wild-safari/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/boy-book-pic-from-istock1.jpg"}><img src={"/media/2010/06/boy-book-pic-from-istock1.jpg"} alt={"One Smart Goose"} width={210} height={139} /></a>
      </figure>
      <p>{"Many people have the misconception that animals are not smart. Many of us realize this to be completely untrue, and books like "}<em><a href={"http://sjkessel.blogspot.com/2009/10/review-one-smart-goose.html"} target="_blank" rel="noopener noreferrer">{"One Smart Goose"}</a></em>{" can help to further that understanding. This book demonstrates two main points – that some animals are actually quite clever, and that being a leader may not always be the best route to take."}</p>
      <p>{"In this story, one goose is different from the others, but he uses those differences cleverly to help camouflage himself from predators. Once the other geese catch on, they follow suit, but they don’t go on to change their outer image quickly enough to keep from getting spotted."}</p>
      <p>{"Outwitting the predator time and again, the smart goose goes on to save the others who were making fun of him in the first place. This is a cute tale for animal-loving kids, as they learn that it’s okay to be different, and that you can eliminate those who tease you peacefully by making friends with them."}</p>
      <p>{"Ages 4-7."}</p>
    </div>
  );
}
