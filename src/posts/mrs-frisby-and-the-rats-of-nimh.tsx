import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10725",
  "slug": "mrs-frisby-and-the-rats-of-nimh",
  "url": "/reviews/mrs-frisby-and-the-rats-of-nimh/",
  "legacyUrl": "https://vegbooks.org/index.php/2019/01/10/mrs-frisby-and-the-rats-of-nimh/",
  "title": "Mrs. Frisby and the Rats of NIMH",
  "publishedAt": "2019-01-10",
  "publishedLabel": "January 10th, 2019",
  "excerpt": "My 9-year old daughter and I really enjoyed reading Mrs. Frisby and the Rats of NIMH together. I had seen the movie The Secret of NIMH as a kid, but it has been a long time. This book, a Newbery Award winner, is…",
  "image": {
    "src": "/media/2019/01/mrs-frisby-and-the-rats-of-nimh.jpg",
    "alt": "Mrs. Frisby and the Rats of NIMH",
    "width": 258,
    "height": 397
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
      "name": "animal testing",
      "slug": "animal-testing",
      "url": "/topics/animal-testing/"
    },
    {
      "name": "children's books",
      "slug": "childrens-books",
      "url": "/topics/childrens-books/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Mrs. Frisby and the Rats of NIMH",
      "slug": "mrs-frisby-and-the-rats-of-nimh",
      "url": "/topics/mrs-frisby-and-the-rats-of-nimh/"
    },
    {
      "name": "Robert C. O'Brien",
      "slug": "robert-c-obrien",
      "url": "/topics/robert-c-obrien/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Kali",
    "slug": "jennifer-kali",
    "url": "/contributors/jennifer-kali/",
    "aliases": [
      "Jennifer Kali",
      "JENNIFER KALI"
    ]
  },
  "seo": {
    "description": "My 9-year old daughter and I really enjoyed reading Mrs. Frisby and the Rats of NIMH together. I had seen the movie The Secret of NIMH as a kid, but it has been a long time. This book, a Newbery Award winner, is…",
    "image": "https://vegbooks.org/media/2019/01/mrs-frisby-and-the-rats-of-nimh.jpg"
  },
  "previous": {
    "title": "Stef Soto, Taco Queen",
    "url": "/reviews/stef-soto-taco-queen/"
  },
  "next": {
    "title": "Goodnight, Seahorse",
    "url": "/reviews/goodnight-seahorse/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <img src={"/media/2019/01/mrs-frisby-and-the-rats-of-nimh.jpg"} alt={"Mrs. Frisby and the Rats of NIMH"} width={258} height={397} />
      </figure>
      <p>{"My 9-year old daughter and I really enjoyed reading "}<em>{"Mrs. Frisby and the Rats of NIMH"}</em>{" together. I had seen the movie "}<a href={"/reviews/the-secret-of-nimh/"} target="_blank" rel="noopener noreferrer">{"The Secret of NIMH"}</a>{" as a kid, but it has been a long time. This book, a Newbery Award winner, is amazing. Now to (re)watch the movie! ("}<strong>{"editor’s note: We’ve reviewed that too! "}<a href={"/reviews/the-secret-of-nimh/"} target="_blank" rel="noopener noreferrer">{"Click here"}</a>{"."}</strong>{")"}</p>
      <p>{"After her husband dies, Mrs. Frisby, a mouse, meets the rat colony that lives on the same farm as she does, and she learns that her husband and the rats were once part of an government study (sponsored by the National Institute of Mental Health). The study was to change the genetic make up of mice and rats in an effort to teach them to read and live longer, and it was very successful. The rats tell Mrs. Frisby that they were captured while living on the streets, then trapped in cages and experimented on for years. They also share how they finally escaped after years of planning. The rats were trapped in tiny cages, given shots to enhance their abilities, and separated from all other rats. There is more to the novel, including the threat of losing her home and the NIMH scientists’ return, but the story of the rats is probably a full third of the book, and it’s definitely the most compelling."}</p>
      <p>{"The novel was written in 1971, so gender representation is stuck in the past. Mrs. Frisby, the main character, is a very brave and well developed character, but we never even learn her first name, although at one point she is referred to as Mrs. Jonathan Frisby. Additionally the rat colony, which started with only 20 rats, has grown to more than 150. Presumably there are some female rats, or the colony wouldn’t be growing. You wouldn’t know it from the story though; the named rats are all male. While this gender-biased story telling may be expected from a book from this time, it did dampen my enjoyment of an otherwise fantastic book."}</p>
      <p>{"Amazon recommends this book for ages 8-12, and that sounds about right to me."}</p>
    </div>
  );
}
