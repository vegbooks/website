import type { PostMetadata } from '../content/types';

export const article = {
  "id": "11134",
  "slug": "what-if-you-could-sniff-like-a-shark",
  "url": "/reviews/what-if-you-could-sniff-like-a-shark/",
  "legacyUrl": "https://vegbooks.org/index.php/2021/08/09/what-if-you-could-sniff-like-a-shark/",
  "title": "What if You Could Sniff Like a Shark?",
  "publishedAt": "2021-08-09",
  "publishedLabel": "August 9th, 2021",
  "excerpt": "WHAT IF YOU COULD SNIFF LIKE A SHARK? is a fun and informative picture book is all about the amazing “superpowers” of various ocean animals. Author Sandra Markle has collected the wonderful abilities of sharks,…",
  "image": {
    "src": "/media/2021/08/what-if-you-could-sniff-like-a-shark-1.jpg",
    "alt": "What if You Could Sniff Like a Shark?",
    "width": 400,
    "height": 400
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
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Ocean Animals",
      "slug": "ocean-animals",
      "url": "/topics/ocean-animals/"
    },
    {
      "name": "Picture Book",
      "slug": "picture-book",
      "url": "/topics/picture-book/"
    },
    {
      "name": "What if You Could Sniff Like a Shark",
      "slug": "what-if-you-could-sniff-like-a-shark",
      "url": "/topics/what-if-you-could-sniff-like-a-shark/"
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
    "description": "WHAT IF YOU COULD SNIFF LIKE A SHARK? is a fun and informative picture book is all about the amazing “superpowers” of various ocean animals. Author Sandra Markle has collected the wonderful abilities of sharks,…",
    "image": "https://vegbooks.org/media/2021/08/what-if-you-could-sniff-like-a-shark-1.jpg"
  },
  "previous": {
    "title": "Banana Fox and the Secret Sour Society",
    "url": "/reviews/banana-fox-and-the-secret-sour-society/"
  },
  "next": {
    "title": "What’s in Your Pocket?",
    "url": "/reviews/whats-in-your-pocket/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--center">
        <img src={"/media/2021/08/what-if-you-could-sniff-like-a-shark-1.jpg"} alt={"What if You Could Sniff Like a Shark?"} width={400} height={400} />
      </figure>
      <p><a href={"https://www.indiebound.org/book/9781338356083"} target="_blank" rel="noopener noreferrer">{"WHAT IF YOU COULD SNIFF LIKE A SHARK?"}</a>{" is a fun and informative picture book is all about the amazing “superpowers” of various ocean animals. Author Sandra Markle has collected the wonderful abilities of sharks, jellyfish, the giant octopus, sea turtles, and more and paired them with fun ways kids could utilize them. The inventive and silly scenes are followed by interesting facts about each animal. The book provides fantastic opportunities for imaginative conversations and learning about the featured ocean animals."}</p>
      <p>{"Highlights in the book include learning about the giant Pacific octopus’ siphon as an escape mechanism, seeing the massive claws of a coconut crab up close, and checking out the firefly squid’s ability to create light. The photographs are paired with Howard McWilliams’ fanciful illustrations of kids enjoying the “superpowers” of each ocean creature. The colorful, larger-than-life images contrast with the detailed photographs and facts. Readers of all ages will certainly learn something and revel in the scenes throughout the book."}</p>
      <p>{"Highly recommended."}</p>
    </div>
  );
}
