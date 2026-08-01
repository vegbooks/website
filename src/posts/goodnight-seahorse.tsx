import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10732",
  "slug": "goodnight-seahorse",
  "url": "/reviews/goodnight-seahorse/",
  "legacyUrl": "https://vegbooks.org/index.php/2019/01/21/goodnight-seahorse/",
  "title": "Goodnight, Seahorse",
  "publishedAt": "2019-01-21",
  "publishedLabel": "January 21st, 2019",
  "excerpt": "GOODNIGHT, SEAHORSE by Carly Allen-Fletcher is a lovely bedtime book — or anytime book — for young children. The illustrations are vibrant and gorgeous, and the variety of sea creatures spans from the familiar to the…",
  "image": {
    "src": "/media/2019/01/goodnight-seahorse.jpg",
    "alt": "Goodnight, Seahorse",
    "width": 300,
    "height": 260
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
      "name": "baby books",
      "slug": "baby-books",
      "url": "/topics/baby-books/"
    },
    {
      "name": "Board Book",
      "slug": "board-book",
      "url": "/topics/board-book/"
    },
    {
      "name": "Carly Allen-Fletcher",
      "slug": "carly-allen-fletcher",
      "url": "/topics/carly-allen-fletcher/"
    },
    {
      "name": "Goodnight Seahorse",
      "slug": "goodnight-seahorse",
      "url": "/topics/goodnight-seahorse/"
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
    "description": "GOODNIGHT, SEAHORSE by Carly Allen-Fletcher is a lovely bedtime book — or anytime book — for young children. The illustrations are vibrant and gorgeous, and the variety of sea creatures spans from the familiar to the…",
    "image": "https://vegbooks.org/media/2019/01/goodnight-seahorse.jpg"
  },
  "previous": {
    "title": "Mrs. Frisby and the Rats of NIMH",
    "url": "/reviews/mrs-frisby-and-the-rats-of-nimh/"
  },
  "next": {
    "title": "Books for Dog Lovers of All Ages",
    "url": "/reviews/books-for-dog-lovers-of-all-ages/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <img src={"/media/2019/01/goodnight-seahorse.jpg"} alt={"Goodnight, Seahorse"} width={300} height={260} />
      </figure>
      <p><a href={"https://www.indiebound.org/search/book?keys=Goodnight%2C+Seahorse"} target="_blank" rel="noopener noreferrer">{"GOODNIGHT, SEAHORSE"}</a>{" by Carly Allen-Fletcher is a lovely bedtime book — or anytime book — for young children. The illustrations are vibrant and gorgeous, and the variety of sea creatures spans from the familiar to the unheard of."}</p>
      <p>{"In the style of "}<em>{"Goodnight Moon"}</em>{", a little seahorse says “goodnight” to various neighbors on its way to bed. Each one has its own way of getting comfortable, from sprawling to burrowing to snuggling. The layered, collage-like style of the illustration suits the underwater environments perfectly."}</p>
      <p>{"The end of "}<a href={"https://www.indiebound.org/search/book?keys=Goodnight%2C+Seahorse"} target="_blank" rel="noopener noreferrer"><em>{"Goodnight, Seahorse"}</em></a>{" has a collection of 20 sea creatures along with their names. Children who aren’t quite ready for sleep can check those out and go back to discover those mentioned in the story. Highly recommended for infant – two years old."}</p>
    </div>
  );
}
