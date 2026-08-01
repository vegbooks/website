import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2949",
  "slug": "animalia",
  "url": "/reviews/animalia/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/08/27/animalia/",
  "title": "Animalia",
  "publishedAt": "2010-08-27",
  "publishedLabel": "August 27th, 2010",
  "excerpt": "In Animalia, author and illustrator Graeme Base treats readers to a remarkably captivating alphabet book. Each letter is represented with an alliterative phrase about a featured animal. Upon closer inspection, it…",
  "image": {
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Animalia",
    "width": 210,
    "height": 140
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
      "name": "Alphabet",
      "slug": "alphabet",
      "url": "/topics/alphabet/"
    },
    {
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Armadillos",
      "slug": "armadillos",
      "url": "/topics/armadillos/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Graeme Base",
      "slug": "graeme-base",
      "url": "/topics/graeme-base/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Zebras",
      "slug": "zebras",
      "url": "/topics/zebras/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Gannett",
    "slug": "jennifer-gannett",
    "url": "/contributors/jennifer-gannett/",
    "aliases": [
      "JENNIFER G",
      "JENNIFER GANNETT"
    ]
  },
  "seo": {
    "description": "In Animalia, author and illustrator Graeme Base treats readers to a remarkably captivating alphabet book. Each letter is represented with an alliterative phrase about a featured animal. Upon closer inspection, it…",
    "image": "https://vegbooks.org/media/2010/06/girls-book-pic-from-istock.jpg"
  },
  "previous": {
    "title": "I’m Gonna Like Me",
    "url": "/reviews/im-gonna-like-me/"
  },
  "next": {
    "title": "The Snail’s Spell",
    "url": "/reviews/the-snails-spell/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/girls-book-pic-from-istock.jpg"}><img src={"/media/2010/06/girls-book-pic-from-istock.jpg"} alt={"Animalia"} width={210} height={140} /></a>
      </figure>
      <p>{"In "}<a href={"http://www.powells.com/biblio/0140559965"} target="_blank" rel="noopener noreferrer"><em>{"Animalia"}</em></a>{", author and illustrator "}<a href={"http://en.wikipedia.org/wiki/Graeme_Base"} target="_blank" rel="noopener noreferrer">{"Graeme Base"}</a>{" treats readers to a remarkably captivating alphabet book. Each letter is represented with an alliterative phrase about a featured animal. Upon closer inspection, it becomes clear that the detailed pictures contain not only illustrations related to the animals described but that there are also depictions of items and creatures that begin with the same letter. This incredible work took Mr. Base over three years to complete."}</p>
      <p>{"From the armoured armadillos to the zany zebras, this enchanting book is a delight. Poring over it with (or without!) a child while examining the many details incorporated into the pictures is a lovely way to spend time. The complexity of the illustrations makes this perfect for ages 4 and up."}</p>
    </div>
  );
}
