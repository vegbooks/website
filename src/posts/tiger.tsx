import type { PostMetadata } from '../content/types';

export const article = {
  "id": "511",
  "slug": "tiger",
  "url": "/reviews/tiger/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/12/27/tiger/",
  "title": "Tiger",
  "publishedAt": "2009-12-27",
  "publishedLabel": "December 27th, 2009",
  "excerpt": "Sherry Been and Cathy Morrison’s book gives kids a taste of natural history by telling them about a tiger’s life in the second person. “If you were a tiger,” the book reads, “we would call you Great Swimmer. You have…",
  "image": {
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=097686553X",
    "alt": "Tiger",
    "width": 1,
    "height": 1
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
      "name": "Cathy Morrison",
      "slug": "cathy-morrison",
      "url": "/topics/cathy-morrison/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Natural History",
      "slug": "natural-history",
      "url": "/topics/natural-history/"
    },
    {
      "name": "Nature Books",
      "slug": "nature-books",
      "url": "/topics/nature-books/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Sherry Been",
      "slug": "sherry-been",
      "url": "/topics/sherry-been/"
    },
    {
      "name": "Tiger",
      "slug": "tiger",
      "url": "/topics/tiger/"
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
    "description": "Sherry Been and Cathy Morrison’s book gives kids a taste of natural history by telling them about a tiger’s life in the second person. “If you were a tiger,” the book reads, “we would call you Great Swimmer. You have…",
    "image": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=097686553X"
  },
  "previous": {
    "title": "Best Books of the Decade?",
    "url": "/reviews/best-books-of-the-decade/"
  },
  "next": {
    "title": "Tarra and Bella: The Elephant and Dog Who Became Best Friends",
    "url": "/reviews/tarra-and-bella-the-elephant-and-dog-who-became-best-friends/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=097686553X"} alt={"Tiger"} width={1} height={1} />
      </figure>
      <p><a href={"http://www.amazon.com/gp/product/097686553X?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=097686553X"} target="_blank" rel="noopener noreferrer">{"Sherry Been and Cathy Morrison’s book"}</a>{" gives kids a taste of natural history by telling them about a tiger’s life in the second person. “If you were a tiger,” the book reads, “we would call you Great Swimmer. You have strong muscles and you love the water….”"}</p>
      <p>{"I think this approach is an effective way to get kids to consider what animals think, feel, and experience without resorting to anthropomorphism. Still, I wish the author used the second person consistently throughout the book; occasionally she resorts to explaining "}<em>{"about"}</em>{" tigers without addressing the reader as a tiger. Likewise, some illustrations are beautiful and polished, while others look like preliminary sketches."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
