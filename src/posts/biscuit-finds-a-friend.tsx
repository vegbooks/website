import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3375",
  "slug": "biscuit-finds-a-friend",
  "url": "/reviews/biscuit-finds-a-friend/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/10/26/biscuit-finds-a-friend/",
  "title": "Biscuit Finds a Friend",
  "publishedAt": "2010-10-26",
  "publishedLabel": "October 26th, 2010",
  "excerpt": "My daughter is just learning to read, and she gets easily discouraged when it takes too long to sound out words or figure out a sentence. Luckily, Alyssa Satin Capucilli’s Biscuit books are just about right. While…",
  "image": {
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Biscuit Finds a Friend",
    "width": 210,
    "height": 139
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
      "name": "Alyssa Satin Capucilli",
      "slug": "alyssa-satin-capucilli",
      "url": "/topics/alyssa-satin-capucilli/"
    },
    {
      "name": "Animal Rescue",
      "slug": "animal-rescue",
      "url": "/topics/animal-rescue/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Ducks",
      "slug": "ducks",
      "url": "/topics/ducks/"
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
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
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
    "description": "My daughter is just learning to read, and she gets easily discouraged when it takes too long to sound out words or figure out a sentence. Luckily, Alyssa Satin Capucilli’s Biscuit books are just about right. While…",
    "image": "https://vegbooks.org/media/2010/06/boy-book-pic-from-istock1.jpg"
  },
  "previous": {
    "title": "The Best Cat in the World",
    "url": "/reviews/the-best-cat-in-the-world/"
  },
  "next": {
    "title": "Rights for Animals?",
    "url": "/reviews/rights-for-animals/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/boy-book-pic-from-istock1.jpg"}><img src={"/media/2010/06/boy-book-pic-from-istock1.jpg"} alt={"Biscuit Finds a Friend"} width={210} height={139} /></a>
      </figure>
      <p>{"My daughter is just learning to read, and she gets easily discouraged when it takes too long to sound out words or figure out a sentence. Luckily, Alyssa Satin Capucilli’s "}<a href={"/reviews/biscuit/"}>{"Biscuit"}</a>{" books are just about right. While there are a lot of sight words (perhaps because they’re geared to “shared reading”), repetition and a short format make these little books appealing to my kiddo."}</p>
      <p><em>{"Biscuit Finds a Friend"}</em>{"is a particularly cute read. Of course, the plot is very simple: Biscuit finds a duckling who has wandered away from the pond, he and the little girl return the duckling to the duck family, and he plays with the duck until — whoops! — he falls into the pond."}</p>
      <p>{"Although the mechanics of animal rescue aren’t expounded in this short little book, the concept it introduces is good: To help wild animals, it’s important to return them to their habitat and their family. I particularly like that Biscuit and the girl focus on helping the duckling before they try to play."}</p>
      <p>{"This book is "}<a href={"http://www.goodreads.com/book/show/1807216.Biscuit_Finds_a_Friend"} target="_blank" rel="noopener noreferrer">{"perfect for emerging readers"}</a>{" — whether they’re 3 or 6."}</p>
    </div>
  );
}
