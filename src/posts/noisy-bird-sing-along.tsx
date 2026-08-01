import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10265",
  "slug": "noisy-bird-sing-along",
  "url": "/reviews/noisy-bird-sing-along/",
  "legacyUrl": "https://vegbooks.org/index.php/2016/01/17/noisy-bird-sing-along/",
  "title": "Noisy Bird Sing-Along",
  "publishedAt": "2016-01-17",
  "publishedLabel": "January 17th, 2016",
  "excerpt": "Most children learn that birds TWEET and occasionally QUACK. But John Himmelman’s Noisy Bird Sing-Alongwill expand their bird vocabulary with its fully illustrated pages. This is a colorful, fun, active book for…",
  "image": {
    "src": "/media/2016/01/9781584695134.jpg",
    "alt": "9781584695134",
    "width": 480,
    "height": 480
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
      "name": "Birds",
      "slug": "birds",
      "url": "/topics/birds/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "John Himmelman",
      "slug": "john-himmelman",
      "url": "/topics/john-himmelman/"
    },
    {
      "name": "Kristin Wald",
      "slug": "kristin-wald",
      "url": "/topics/kristin-wald/"
    },
    {
      "name": "Nonfiction",
      "slug": "nonfiction",
      "url": "/topics/nonfiction/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "Most children learn that birds TWEET and occasionally QUACK. But John Himmelman’s Noisy Bird Sing-Alongwill expand their bird vocabulary with its fully illustrated pages. This is a colorful, fun, active book for…",
    "image": "https://vegbooks.org/media/2016/01/9781584695134.jpg"
  },
  "previous": {
    "title": "The Boy & the Book [a wordless story]",
    "url": "/reviews/the-boy-the-book-a-wordless-story/"
  },
  "next": {
    "title": "Chicken Run (2000)",
    "url": "/reviews/chicken-run-2000/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"Most children learn that birds TWEET and occasionally QUACK. But John Himmelman’s "}<em>{"Noisy Bird Sing-Along"}</em>{"will expand their bird vocabulary with its fully illustrated pages. This is a colorful, fun, active book for children to practice bird sounds and to learn about different types of feathered friends."}</p>
      <figure class="content-image content-image--center">
        <img src={"/media/2016/01/9781584695134.jpg"} alt={"9781584695134"} width={480} height={480} />
      </figure>
      <p>{"Every two-page section focuses on a different bird with facts and emphasized birdsong in exaggerated type. Beautifully images of each bird include visual reflection of the habitat or habits of each winged creature. Whether it’s a black-capped Chickadee, a tapping Woodpecker, or a nocturnal Owl, children will enjoy imitating the sounds and learning more about each bird."}</p>
      <p>{"The end of the book includes Fun Facts About the Birds and additional activities to continue learning. While this book is recommended for ages 4-9, I think ages 3-7 are more appropriate for the level of tone and facts."}</p>
      <p><em><a href={"http://www.dawnpub.com/"} target="_blank" rel="noopener noreferrer">{"The publisher"}</a>{" sent a copy of this book for review."}</em></p>
    </div>
  );
}
