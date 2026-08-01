import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1745",
  "slug": "the-wonders-inside-bugs-and-spiders",
  "url": "/reviews/the-wonders-inside-bugs-and-spiders/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/25/the-wonders-inside-bugs-and-spiders/",
  "title": "The Wonders Inside: Bugs and Spiders",
  "publishedAt": "2010-06-25",
  "publishedLabel": "June 25th, 2010",
  "excerpt": "Silver Dolphin Books has published the equivalent of a coffee table book for the elementary crowd. The Wonders Inside: Bugs and Spiders is gigantic, glossy, and gorgeous. Featuring see-through plastic overlays and…",
  "image": {
    "src": "/media/2010/06/wonders-bugs-spiders-723.jpg",
    "alt": "The Wonders Inside: Bugs and Spiders",
    "width": 265,
    "height": 311
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
      "name": "Anatomy",
      "slug": "anatomy",
      "url": "/topics/anatomy/"
    },
    {
      "name": "Butterflies",
      "slug": "butterflies",
      "url": "/topics/butterflies/"
    },
    {
      "name": "Insects",
      "slug": "insects",
      "url": "/topics/insects/"
    },
    {
      "name": "Metamorphosis",
      "slug": "metamorphosis",
      "url": "/topics/metamorphosis/"
    },
    {
      "name": "Natural History",
      "slug": "natural-history",
      "url": "/topics/natural-history/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Predators",
      "slug": "predators",
      "url": "/topics/predators/"
    },
    {
      "name": "Science Books",
      "slug": "science-books",
      "url": "/topics/science-books/"
    },
    {
      "name": "Spider",
      "slug": "spider",
      "url": "/topics/spider/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
    },
    {
      "name": "Wildlife Books for Kids",
      "slug": "wildlife-books-for-kids",
      "url": "/topics/wildlife-books-for-kids/"
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
    "description": "Silver Dolphin Books has published the equivalent of a coffee table book for the elementary crowd. The Wonders Inside: Bugs and Spiders is gigantic, glossy, and gorgeous. Featuring see-through plastic overlays and…",
    "image": "https://vegbooks.org/media/2010/06/wonders-bugs-spiders-723.jpg"
  },
  "previous": {
    "title": "Animals in the House",
    "url": "/reviews/animals-in-the-house/"
  },
  "next": {
    "title": "Heroes of the Environment",
    "url": "/reviews/heroes-of-the-environment/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/wonders-bugs-spiders-723.jpg"}><img src={"/media/2010/06/wonders-bugs-spiders-723.jpg"} alt={"The Wonders Inside: Bugs and Spiders"} width={265} height={311} /></a>
      </figure>
      <p><a href={"http://www.silverdolphinbooks.com/"} target="_blank" rel="noopener noreferrer">{"Silver Dolphin Books"}</a>{" has published the equivalent of a coffee table book for the elementary crowd. "}<em><a href={"http://apatchworkofbooks.blogspot.com/2010/01/non-fiction-monday-wonders-inside-bugs.html"} target="_blank" rel="noopener noreferrer">{"The Wonders Inside: Bugs and Spiders"}</a></em>{" is gigantic, glossy, and gorgeous. Featuring see-through plastic overlays and realistic illustrations, the book teaches kids about metamorphosis, predator-prey relationships, and the anatomical structure of some of the most common kinds of insects and spiders."}</p>
      <p>{"Given how bugs are reviled in our culture, it’s nice to see a book that discusses their natural histories without playing up the “yuck” factor. My only criticism of this book, from a vegan perspective, is that its focus on who eats whom seems a little much at times. I’d be interested to learn more about cooperative relationships among bugs and spiders — whether within a hive, or via cross-species "}<a href={"http://en.wikipedia.org/wiki/Symbiosis"}>{"symbiosis"}</a>{"."}</p>
      <p>{"Ages 8-12."}</p>
    </div>
  );
}
