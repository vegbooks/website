import type { PostMetadata } from '../content/types';

export const article = {
  "id": "458",
  "slug": "the-yellow-leaf",
  "url": "/reviews/the-yellow-leaf/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/12/15/the-yellow-leaf/",
  "title": "The Little Yellow Leaf",
  "publishedAt": "2009-12-15",
  "publishedLabel": "December 15th, 2009",
  "excerpt": "I want to wallpaper my apartment with the illustrations from Carin Berger’s The Little Yellow Leaf! OK, maybe I’ll just frame a few images. All joking aside, this is one of the most beautiful children’s books I’ve…",
  "image": {
    "src": "/media/2009/12/little-yellow-leaf-hc-c1.jpg",
    "alt": "The Little Yellow Leaf",
    "width": 180,
    "height": 286
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
      "name": "Carin Berger",
      "slug": "carin-berger",
      "url": "/topics/carin-berger/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Nature Books",
      "slug": "nature-books",
      "url": "/topics/nature-books/"
    },
    {
      "name": "New York Times Best Illustrated Children's Books of 2008",
      "slug": "new-york-times-best-illustrated-childrens-books-of-2008",
      "url": "/topics/new-york-times-best-illustrated-childrens-books-of-2008/"
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
    "description": "I want to wallpaper my apartment with the illustrations from Carin Berger’s The Little Yellow Leaf! OK, maybe I’ll just frame a few images. All joking aside, this is one of the most beautiful children’s books I’ve…",
    "image": "https://vegbooks.org/media/2009/12/little-yellow-leaf-hc-c1.jpg"
  },
  "previous": {
    "title": "All About Garbage and Recycling (2008)",
    "url": "/reviews/all-about-garbage-and-recycling/"
  },
  "next": {
    "title": "The Lion and the Mouse",
    "url": "/reviews/the-lion-the-mouse/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2009/12/little-yellow-leaf-hc-c1.jpg"}><img src={"/media/2009/12/little-yellow-leaf-hc-c1.jpg"} alt={"The Little Yellow Leaf"} width={180} height={286} /></a>
      </figure>
      <p>{"I want to wallpaper my apartment with the illustrations from "}<a href={"http://carinberger.blogspot.com/"} target="_blank" rel="noopener noreferrer">{"Carin Berger’s"}</a>{" "}<em><a href={"http://www.carinberger.com/carin%20berger%201-36.html"} target="_blank" rel="noopener noreferrer">{"The Little Yellow Leaf"}</a></em>{"! OK, maybe I’ll just frame a few images."}</p>
      <p>{"All joking aside, this is one of the most beautiful children’s books I’ve ever seen. From the sparse, poetic text to the "}<a href={"http://www.thechildrensbookreview.com/weblog/2008/09/fall-books.html"} target="_blank" rel="noopener noreferrer">{"elegant illustrations"}</a>{", this is a book adults and kids alike will want to read over and over."}</p>
      <p>{"Plus, "}<a href={"http://www.goodreads.com/book/show/3367827.The_Little_Yellow_Leaf"} target="_blank" rel="noopener noreferrer">{"this book"}</a>{" is a good find for vegetarian and vegan kids, because it celebrates nature, the changing of the seasons, and living fearlessly. The little yellow leaf is scared to fall off the tree, even after he thinks all of the other leaves have fallen — but when he discovers a friend, they leap into the wind together and dance into the distance."}</p>
      <p>{"So what are you doing still reading this review? By all means, run out to your library for this book, then snuggle up with your little one for a good winter’s read."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
