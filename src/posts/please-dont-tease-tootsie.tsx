import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3543",
  "slug": "please-dont-tease-tootsie",
  "url": "/reviews/please-dont-tease-tootsie/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/11/17/please-dont-tease-tootsie/",
  "title": "Please Don’t Tease Tootsie",
  "publishedAt": "2010-11-17",
  "publishedLabel": "November 17th, 2010",
  "excerpt": "Illustrator Margaret Chamberlain’s first solo picture book introduces the youngest of children to the dos and don’ts of pet care. She gives general advice to her readers such as “Don’t madden Mutley,” while in the…",
  "image": {
    "src": "/media/2010/11/t-tease-tootsie.jpg",
    "alt": "Please Don’t Tease Tootsie",
    "width": 210,
    "height": 216
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
      "name": "Alliteration",
      "slug": "alliteration",
      "url": "/topics/alliteration/"
    },
    {
      "name": "Andrea Zollman",
      "slug": "andrea-zollman",
      "url": "/topics/andrea-zollman/"
    },
    {
      "name": "Cats",
      "slug": "cats",
      "url": "/topics/cats/"
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
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Margaret Chamberlain",
      "slug": "margaret-chamberlain",
      "url": "/topics/margaret-chamberlain/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Toddlers",
      "slug": "toddlers",
      "url": "/topics/toddlers/"
    }
  ],
  "reviewer": {
    "name": "Andrea Zollman",
    "slug": "andrea-zollman",
    "url": "/contributors/andrea-zollman/",
    "aliases": [
      "ANDREA ZOLLMAN"
    ]
  },
  "seo": {
    "description": "Illustrator Margaret Chamberlain’s first solo picture book introduces the youngest of children to the dos and don’ts of pet care. She gives general advice to her readers such as “Don’t madden Mutley,” while in the…",
    "image": "https://vegbooks.org/media/2010/11/t-tease-tootsie.jpg"
  },
  "previous": {
    "title": "Where Does the Garbage Go?",
    "url": "/reviews/where-does-the-garbage-go/"
  },
  "next": {
    "title": "Deformed Frogs",
    "url": "/reviews/deformed-frogs/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/11/t-tease-tootsie.jpg"}><img src={"/media/2010/11/t-tease-tootsie.jpg"} alt={"Please Don’t Tease Tootsie"} width={210} height={216} /></a>
      </figure>
      <p>{"Illustrator Margaret Chamberlain’s first solo picture book introduces the youngest of children to the dos and don’ts of pet care. She gives general advice to her readers such as “Don’t madden Mutley,” while in the picture a girl stands on a footstool and holds a cake out of poor Mutley’s reach."}</p>
      <p>{"Chamberlain uses alliteration, rhyme, and lively pictures to show children how to treat their beloved pets. A bit simplistic for older children, the colorful backgrounds, large text, and a humorous approach to the subject make this book an appealing choice to read, especially to a large group of younger children learning how to "}<a href={"http://www.humanesociety.org/parents_educators/"} target="_blank" rel="noopener noreferrer">{"treat animals with respect"}</a>{"."}</p>
      <p>{"Ages 3-5."}</p>
    </div>
  );
}
