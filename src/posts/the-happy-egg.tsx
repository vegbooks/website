import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4643",
  "slug": "the-happy-egg",
  "url": "/reviews/the-happy-egg/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/04/06/the-happy-egg/",
  "title": "The Happy Egg",
  "publishedAt": "2011-04-06",
  "publishedLabel": "April 6th, 2011",
  "excerpt": "Ruth Krauss and Crockett Johnson, the team behind The Carrot Seed, created this lovely little book, which captures the life of an egg in simple terms for young listeners and beginning readers. While the use of the…",
  "image": {
    "src": "/media/2011/04/the-happy-egg.jpg",
    "alt": "The Happy Egg",
    "width": 210,
    "height": 277
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
      "name": "Animal Families",
      "slug": "animal-families",
      "url": "/topics/animal-families/"
    },
    {
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Birds",
      "slug": "birds",
      "url": "/topics/birds/"
    },
    {
      "name": "Crockett Johnson",
      "slug": "crockett-johnson",
      "url": "/topics/crockett-johnson/"
    },
    {
      "name": "Easter",
      "slug": "easter",
      "url": "/topics/easter/"
    },
    {
      "name": "Eggs",
      "slug": "eggs",
      "url": "/topics/eggs/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Parents",
      "slug": "parents",
      "url": "/topics/parents/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Ruth Krauss",
      "slug": "ruth-krauss",
      "url": "/topics/ruth-krauss/"
    },
    {
      "name": "Spring",
      "slug": "spring",
      "url": "/topics/spring/"
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
    "description": "Ruth Krauss and Crockett Johnson, the team behind The Carrot Seed, created this lovely little book, which captures the life of an egg in simple terms for young listeners and beginning readers. While the use of the…",
    "image": "https://vegbooks.org/media/2011/04/the-happy-egg.jpg"
  },
  "previous": {
    "title": "The Birchbark Brigade",
    "url": "/reviews/the-birchbark-brigade/"
  },
  "next": {
    "title": "No Place for a Pig",
    "url": "/reviews/no-place-for-a-pig/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/04/the-happy-egg.jpg"}><img src={"/media/2011/04/the-happy-egg.jpg"} alt={"The Happy Egg"} width={210} height={277} /></a>
      </figure>
      <p>{"Ruth Krauss and Crockett Johnson, the team behind "}<em><a href={"/reviews/the-carrot-seed/"}>{"The Carrot Seed"}</a></em>{", created this lovely little book, which captures the life of an egg in simple terms for young listeners and beginning readers."}</p>
      <p>{"While the use of the pronoun “it” may cause some people to cringe, vegans will appreciate that this book celebrates the egg as a newly born but not yet hatched bird. And everyone will appreciate the parental care depicted: the egg is sat on and sat on and sat on."}</p>
      <p>{"Although the story uses a few big words, the repetition and use of phonetic words (such as “sat”) make this a good choice for beginning readers."}</p>
      <p>{"Ages o to 5."}</p>
    </div>
  );
}
