import type { PostMetadata } from '../content/types';

export const article = {
  "id": "312",
  "slug": "berenstains-a-book",
  "url": "/reviews/berenstains-a-book/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/11/26/berenstains-a-book/",
  "title": "Berenstains’ A Book",
  "publishedAt": "2009-11-26",
  "publishedLabel": "November 26th, 2009",
  "excerpt": "Stan and Jan Berenstain’s silly book introduces readers to words that begin with A by following a trail of ants “across an apple and an acorn, across an apricot, an ax, and an angleworm” … all the way to an anteater…",
  "image": {
    "src": "/media/2009/11/berenstains-a-book1.jpg",
    "alt": "Berenstains’ A Book",
    "width": 144,
    "height": 178
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
      "name": "Ants",
      "slug": "ants",
      "url": "/topics/ants/"
    },
    {
      "name": "Beginning Readers",
      "slug": "beginning-readers",
      "url": "/topics/beginning-readers/"
    },
    {
      "name": "Berenstain Bears",
      "slug": "berenstain-bears",
      "url": "/topics/berenstain-bears/"
    },
    {
      "name": "Best Books for Vegetarian Kids",
      "slug": "best-books-for-vegetarian-kids",
      "url": "/topics/best-books-for-vegetarian-kids/"
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
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "Stan and Jan Berenstain’s silly book introduces readers to words that begin with A by following a trail of ants “across an apple and an acorn, across an apricot, an ax, and an angleworm” … all the way to an anteater…",
    "image": "https://vegbooks.org/media/2009/11/berenstains-a-book1.jpg"
  },
  "previous": {
    "title": "Shark Tale (2004)",
    "url": "/reviews/shark-tale/"
  },
  "next": {
    "title": "Biscuit",
    "url": "/reviews/biscuit/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2009/11/berenstains-a-book1.jpg"}><img src={"/media/2009/11/berenstains-a-book1.jpg"} alt={"Berenstains’ A Book"} width={144} height={178} /></a>
      </figure>
      <p><a href={"http://www.berenstainbears.com/"}>{"Stan and Jan Berenstain’s"}</a>{" silly book introduces readers to words that begin with A by following a trail of ants “across an apple and an acorn, across an apricot, an ax, and an angleworm” … all the way to an anteater and an anthill. The anteater is busy tying on a napkin and preparing for a tasty treat, when CHOMP! — the ants take a bite on her tail, causing her to make a hasty retreat and leave their friends in peace."}</p>
      <p>{"Kids might need to be told that what appears to be physical violence — biting — only causes the anteater momentary discomfort because the ants are so small. But they will certainly understand that animals don’t want to be eaten."}</p>
      <p>{"Ages 4-7."}</p>
    </div>
  );
}
