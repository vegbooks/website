import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6683",
  "slug": "tyrannosaurus-drip",
  "url": "/reviews/tyrannosaurus-drip/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/12/29/tyrannosaurus-drip/",
  "title": "Tyrannosaurus Drip",
  "publishedAt": "2011-12-29",
  "publishedLabel": "December 29th, 2011",
  "excerpt": "Tyrannosaurus Drip is a lovely rhyming story with great illustrations for young children. It’s all about a vegetarian duckbill dinosaur called Drip who ends up being raised by a T Rex family, after his egg lands in…",
  "image": {
    "src": "/media/2011/12/9780312377472.jpg",
    "alt": "Tyrannosaurus Drip",
    "width": 210,
    "height": 270
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
      "name": "David Roberts",
      "slug": "david-roberts",
      "url": "/topics/david-roberts/"
    },
    {
      "name": "Dinosaurs",
      "slug": "dinosaurs",
      "url": "/topics/dinosaurs/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Julia Donaldson",
      "slug": "julia-donaldson",
      "url": "/topics/julia-donaldson/"
    },
    {
      "name": "Lisa Onykahonie",
      "slug": "lisa-onykahonie",
      "url": "/topics/lisa-onykahonie/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "T Rex",
      "slug": "t-rex",
      "url": "/topics/t-rex/"
    },
    {
      "name": "Vegetarian Characters",
      "slug": "vegetarian-characters",
      "url": "/topics/vegetarian-characters/"
    },
    {
      "name": "Vegetarian Protagonist",
      "slug": "vegetarian-protagonist",
      "url": "/topics/vegetarian-protagonist/"
    }
  ],
  "reviewer": {
    "name": "Lisa Onykahonie",
    "slug": "lisa-onykahonie",
    "url": "/contributors/lisa-onykahonie/",
    "aliases": [
      "LISA ONYKAHONIE"
    ]
  },
  "seo": {
    "description": "Tyrannosaurus Drip is a lovely rhyming story with great illustrations for young children. It’s all about a vegetarian duckbill dinosaur called Drip who ends up being raised by a T Rex family, after his egg lands in…",
    "image": "https://vegbooks.org/media/2011/12/9780312377472.jpg"
  },
  "previous": {
    "title": "Teeny Tiny Ernest",
    "url": "/reviews/teeny-tiny-ernest/"
  },
  "next": {
    "title": "Just a Second",
    "url": "/reviews/just-a-second/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/12/9780312377472.jpg"}><img src={"/media/2011/12/9780312377472.jpg"} alt={"Tyrannosaurus Drip"} width={210} height={270} /></a>
      </figure>
      <p><em>{"Tyrannosaurus Drip"}</em>{" is a lovely rhyming story with great illustrations for young children. It’s all about a vegetarian duckbill dinosaur called Drip who ends up being raised by a T Rex family, after his egg lands in their nest."}</p>
      <p><a href={"http://www.amazon.com/gp/product/0312377479/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0312377479"} target="_blank" rel="noopener noreferrer">{"The story"}</a>{" is similar in many ways to the Ugly Duckling. Poor little Drip doesn’t fit in with his meat-loving family. Eventually he runs away and shows that he can outsmart the fierce, but rather stupid T Rexs."}</p>
      <p>{"Ages 3-6."}</p>
    </div>
  );
}
