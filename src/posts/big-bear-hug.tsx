import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1664",
  "slug": "big-bear-hug",
  "url": "/reviews/big-bear-hug/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/05/10/big-bear-hug/",
  "title": "Big Bear Hug",
  "publishedAt": "2010-05-10",
  "publishedLabel": "May 10th, 2010",
  "excerpt": "I wasn’t more than a few pages into Big Bear Hug by Nicholas Oldland before it became one of my new favorites. I rushed to share it with my husband, and we couldn’t stop laughing. I’ve since shared it with dozens of…",
  "image": {
    "src": "/media/2010/05/2092-cv-hr.jpg",
    "alt": "Big Bear Hug",
    "width": 209,
    "height": 210
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
      "name": "Bears",
      "slug": "bears",
      "url": "/topics/bears/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
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
      "name": "Marsha Rakestraw",
      "slug": "marsha-rakestraw",
      "url": "/topics/marsha-rakestraw/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Trees",
      "slug": "trees",
      "url": "/topics/trees/"
    }
  ],
  "reviewer": {
    "name": "Marsha Rakestraw",
    "slug": "marsha-rakestraw",
    "url": "/contributors/marsha-rakestraw/",
    "aliases": [
      "MARSHA RAKESTRAW"
    ]
  },
  "seo": {
    "description": "I wasn’t more than a few pages into Big Bear Hug by Nicholas Oldland before it became one of my new favorites. I rushed to share it with my husband, and we couldn’t stop laughing. I’ve since shared it with dozens of…",
    "image": "https://vegbooks.org/media/2010/05/2092-cv-hr.jpg"
  },
  "previous": {
    "title": "Duck on a Bike",
    "url": "/reviews/duck-on-a-bike/"
  },
  "next": {
    "title": "Here Comes the Garbage Barge",
    "url": "/reviews/here-comes-the-garbage-barge/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/05/2092-cv-hr.jpg"}><img src={"/media/2010/05/2092-cv-hr.jpg"} alt={"Big Bear Hug"} width={209} height={210} /></a>
      </figure>
      <p>{"I wasn’t more than a few pages into "}<em>{"Big Bear Hug"}</em>{" by "}<a href={"http://www.goodreads.com/author/show/2968685.Nicholas_Oldland"} target="_blank" rel="noopener noreferrer">{"Nicholas Oldland"}</a>{" before it became one of my new favorites. I rushed to share it with my husband, and we couldn’t stop laughing. I’ve since shared it with dozens of friends and colleagues. I simply adore this book!"}</p>
      <p>{"It begins with “a bear so filled with love and happiness” that he spends his time hugging living things of all shapes, sizes and qualities. He loves hugging trees the most. One day, while he’s trying to “hug a beaver and a tree at the same time,” he notices a man with an ax. When the bear discovers what the man plans to do to an especially large and lovely tree, the bear becomes quite angry, and must decide what action to take."}</p>
      <p>{"The straightforward text paired with the clever and playful (though simple) illustrations will leave you giggling (yes, giggling) and rushing to share it with children and adults both. It’s a sweet, light-hearted conservation story about the importance of character and the power of love…and hugs."}</p>
      <p>{"Ages 4-9."}</p>
    </div>
  );
}
