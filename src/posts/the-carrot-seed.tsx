import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1516",
  "slug": "the-carrot-seed",
  "url": "/reviews/the-carrot-seed/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/04/10/the-carrot-seed/",
  "title": "The Carrot Seed",
  "publishedAt": "2010-04-10",
  "publishedLabel": "April 10th, 2010",
  "excerpt": "The Carrot Seed is a board book about a little boy who plants a seed and patiently awaits its sprout. While not pertaining to animals, the book illustrates the sense of awe for and love of the earth natural to…",
  "image": {
    "src": "/media/2010/04/carrot-seed-hc-c1.jpg",
    "alt": "The Carrot Seed",
    "width": 215,
    "height": 284
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
      "name": "1940s Childrens Literature",
      "slug": "1940s-childrens-literature",
      "url": "/topics/1940s-childrens-literature/"
    },
    {
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Board Book",
      "slug": "board-book",
      "url": "/topics/board-book/"
    },
    {
      "name": "Confidence",
      "slug": "confidence",
      "url": "/topics/confidence/"
    },
    {
      "name": "Crockett Johnson",
      "slug": "crockett-johnson",
      "url": "/topics/crockett-johnson/"
    },
    {
      "name": "Garden",
      "slug": "garden",
      "url": "/topics/garden/"
    },
    {
      "name": "Gardening",
      "slug": "gardening",
      "url": "/topics/gardening/"
    },
    {
      "name": "Maureen McDowell",
      "slug": "maureen-mcdowell",
      "url": "/topics/maureen-mcdowell/"
    },
    {
      "name": "Natural Living",
      "slug": "natural-living",
      "url": "/topics/natural-living/"
    },
    {
      "name": "Nature Books",
      "slug": "nature-books",
      "url": "/topics/nature-books/"
    },
    {
      "name": "Ruth Krauss",
      "slug": "ruth-krauss",
      "url": "/topics/ruth-krauss/"
    }
  ],
  "reviewer": {
    "name": "Maureen McDowell",
    "slug": "maureen-mcdowell",
    "url": "/contributors/maureen-mcdowell/",
    "aliases": [
      "MAUREEN MCDOWELL"
    ]
  },
  "seo": {
    "description": "The Carrot Seed is a board book about a little boy who plants a seed and patiently awaits its sprout. While not pertaining to animals, the book illustrates the sense of awe for and love of the earth natural to…",
    "image": "https://vegbooks.org/media/2010/04/carrot-seed-hc-c1.jpg"
  },
  "previous": {
    "title": "The Great Pig Escape",
    "url": "/reviews/the-great-pig-escape/"
  },
  "next": {
    "title": "Animal Watch",
    "url": "/reviews/animal-watch/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/04/carrot-seed-hc-c1.jpg"}><img src={"/media/2010/04/carrot-seed-hc-c1.jpg"} alt={"The Carrot Seed"} width={215} height={284} /></a>
      </figure>
      <p><em><a href={"http://en.wikipedia.org/wiki/The_Carrot_Seed"} target="_blank" rel="noopener noreferrer">{"The Carrot Seed"}</a></em>{" is a board book about a little boy who plants a seed and patiently awaits its sprout. While not pertaining to animals, the book illustrates the sense of awe for and love of the earth natural to children."}</p>
      <p>{"The little boy ignores his parents and older sibling when they explain that the seed will not sprout. Instead, he lovingly tends to the plot of earth where the seed lies each day despite there being no sign of growth. When a carrot finally comes up, the heretofore monochromatic and delightfully simple illustrations sprout with color. The carrot comes up “just as the little boy had known it would.” The confidence that the boy displays is an important reminder to children to trust themselves–and nature."}</p>
      <p>{"Ages baby to 3."}</p>
    </div>
  );
}
