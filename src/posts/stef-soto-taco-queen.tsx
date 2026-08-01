import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10712",
  "slug": "stef-soto-taco-queen",
  "url": "/reviews/stef-soto-taco-queen/",
  "legacyUrl": "https://vegbooks.org/index.php/2019/01/05/stef-soto-taco-queen/",
  "title": "Stef Soto, Taco Queen",
  "publishedAt": "2019-01-05",
  "publishedLabel": "January 5th, 2019",
  "excerpt": "My 9-year old daughter and I really enjoyed reading the novel Stef Soto, Taco Queen by Jennifer Torres together. Stef is in middle school and is the child of immigrant parents. Throughout the book, she comes to terms…",
  "image": {
    "src": "/media/2019/01/stef-soto-taco-queen.jpg",
    "alt": "Stef Soto, Taco Queen",
    "width": 206,
    "height": 300
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
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "immigrant experience",
      "slug": "immigrant-experience",
      "url": "/topics/immigrant-experience/"
    },
    {
      "name": "Jennifer Torres",
      "slug": "jennifer-torres",
      "url": "/topics/jennifer-torres/"
    },
    {
      "name": "middle grade readers",
      "slug": "middle-grade-readers",
      "url": "/topics/middle-grade-readers/"
    },
    {
      "name": "middle school",
      "slug": "middle-school",
      "url": "/topics/middle-school/"
    },
    {
      "name": "Stef Soto Taco Queen",
      "slug": "stef-soto-taco-queen",
      "url": "/topics/stef-soto-taco-queen/"
    },
    {
      "name": "tacos",
      "slug": "tacos",
      "url": "/topics/tacos/"
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
    "description": "My 9-year old daughter and I really enjoyed reading the novel Stef Soto, Taco Queen by Jennifer Torres together. Stef is in middle school and is the child of immigrant parents. Throughout the book, she comes to terms…",
    "image": "https://vegbooks.org/media/2019/01/stef-soto-taco-queen.jpg"
  },
  "previous": {
    "title": "Not a Purse",
    "url": "/reviews/not-a-purse/"
  },
  "next": {
    "title": "Mrs. Frisby and the Rats of NIMH",
    "url": "/reviews/mrs-frisby-and-the-rats-of-nimh/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <img src={"/media/2019/01/stef-soto-taco-queen.jpg"} alt={"Stef Soto, Taco Queen"} width={206} height={300} />
      </figure>
      <p>{"My 9-year old daughter and I really enjoyed reading the novel "}<a href={"https://www.hachettebookgroup.com/titles/jennifer-torres/stef-soto-taco-queen/9780316306867/"} target="_blank" rel="noopener noreferrer">{"Stef Soto, Taco Queen"}</a>{" by Jennifer Torres together. Stef is in middle school and is the child of immigrant parents. Throughout the book, she comes to terms with her feelings about her family’s very visible business as owners of a run-down taco truck named Tía Perla. She deals with being teased for smelling like tacos while also being proud of her parents for carving out a moderately successful business for themselves in America."}</p>
      <p>{"Through Stef’s eyes, we experience a small part of what it’s like to be in an immigrant family. Stef’s family speaks Spanish at home, and sometimes she is asked to be a translator for her parents in important situations. Stef is very relatable, and much of the story’s conflict is typical of middle school. My daughter and I really enjoyed stepping in this immigrant family’s experience."}</p>
      <p>{"One of Stef’s best friends is a vegetarian “for the sake of the earth.” Stef’s dad delights in the challenge of making new dishes that he will enjoy. My daughter really enjoyed the addition of this character in the book."}</p>
      <p>{"I highly recommend this book to children in your life. All readers will enjoy Stef and her family and will learn a lot about the immigrant experience along the way. Vegetarian kids will appreciate seeing themselves represented in Stef’s best friend."}</p>
      <p>{"Recommended for ages 8-12."}</p>
    </div>
  );
}
