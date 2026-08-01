import type { PostMetadata } from '../content/types';

export const article = {
  "id": "392",
  "slug": "the-giving-tree",
  "url": "/reviews/the-giving-tree/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/12/08/the-giving-tree/",
  "title": "The Giving Tree",
  "publishedAt": "2009-12-08",
  "publishedLabel": "December 8th, 2009",
  "excerpt": "I’ve heard people cite The Giving Tree by Shel Silverstein as an example of environmental children’s literature, but I’m not so sure. Of course, the boy’s connection with the tree, at least at the beginning of the…",
  "categories": [
    {
      "name": "Books",
      "slug": "books",
      "url": "/books/"
    }
  ],
  "tags": [
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Environmental Children's Literature",
      "slug": "environmental-childrens-literature",
      "url": "/topics/environmental-childrens-literature/"
    },
    {
      "name": "Nature Is Not Infinite",
      "slug": "nature-is-not-infinite",
      "url": "/topics/nature-is-not-infinite/"
    },
    {
      "name": "Shel Silverstein",
      "slug": "shel-silverstein",
      "url": "/topics/shel-silverstein/"
    },
    {
      "name": "Tree",
      "slug": "tree",
      "url": "/topics/tree/"
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
    "description": "I’ve heard people cite The Giving Tree by Shel Silverstein as an example of environmental children’s literature, but I’m not so sure. Of course, the boy’s connection with the tree, at least at the beginning of the…"
  },
  "previous": {
    "title": "Books I’m Dying to Read",
    "url": "/reviews/books-im-dying-to-read/"
  },
  "next": {
    "title": "My Mom Eats Tofu",
    "url": "/reviews/my-mom-eats-tofu-guest-post-by-carolyn-m-mullin/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"I’ve heard people cite "}<em>{"The Giving Tree"}</em>{" by "}<a href={"http://www.shelsilverstein.com/indexSite.html"} target="_blank" rel="noopener noreferrer">{"Shel Silverstein"}</a>{" as an example of "}<a href={"http://teachers.net/archive/envirobks.html"} target="_blank" rel="noopener noreferrer">{"environmental children’s literature"}</a>{", but I’m not so sure. Of course, the boy’s connection with the tree, at least at the beginning of the book, is beautiful — but why oh why does she keep taking him back, regardless of how he abuses her?? (I can’t help but think of the kicked dog who returns to her master with her tail wagging between her legs.)"}</p>
      <p>{"I’ll admit this book does have one good message: Nature is not infinite. Even so, that just doesn’t save this book in my eyes."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
