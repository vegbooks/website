import type { PostMetadata } from '../content/types';

export const article = {
  "id": "134",
  "slug": "moo-baa-la-la-la",
  "url": "/reviews/moo-baa-la-la-la/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/11/09/moo-baa-la-la-la/",
  "title": "Moo, Baa, La La La!",
  "publishedAt": "2009-11-09",
  "publishedLabel": "November 9th, 2009",
  "excerpt": "Little kids seem to love Sandra Boynton’s board books. Of all of that kiddo had, this is my favorite, in part because it teaches about the sounds animals make (albeit from a pretty anglo perspective) but also because…",
  "image": {
    "src": "/media/2011/07/toddler-baby-reading.jpg",
    "alt": "Moo, Baa, La La La!",
    "width": 210,
    "height": 300
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
      "name": "Cats",
      "slug": "cats",
      "url": "/topics/cats/"
    },
    {
      "name": "Cows",
      "slug": "cows",
      "url": "/topics/cows/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Farmed Animals",
      "slug": "farmed-animals",
      "url": "/topics/farmed-animals/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Pig",
      "slug": "pig",
      "url": "/topics/pig/"
    },
    {
      "name": "Sandra Boynton",
      "slug": "sandra-boynton",
      "url": "/topics/sandra-boynton/"
    },
    {
      "name": "Sheep",
      "slug": "sheep",
      "url": "/topics/sheep/"
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
    "description": "Little kids seem to love Sandra Boynton’s board books. Of all of that kiddo had, this is my favorite, in part because it teaches about the sounds animals make (albeit from a pretty anglo perspective) but also because…",
    "image": "https://vegbooks.org/media/2011/07/toddler-baby-reading.jpg"
  },
  "previous": {
    "title": "Dog Heaven",
    "url": "/reviews/dog-heaven/"
  },
  "next": {
    "title": "Alice in Paris (1966)",
    "url": "/reviews/alice-in-paris/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/07/toddler-baby-reading.jpg"}><img src={"/media/2011/07/toddler-baby-reading.jpg"} alt={"Moo, Baa, La La La!"} width={210} height={300} /></a>
      </figure>
      <p>{"Little kids seem to love "}<a href={"http://www.sandraboynton.com/sboynton/Introduction.html"} target="_blank" rel="noopener noreferrer">{"Sandra Boynton’s"}</a>{" board books. Of all of that kiddo had, this is my favorite, in part because it teaches about the sounds animals make (albeit from a pretty "}<a href={"http://www.eleceng.adelaide.edu.au/Personal/dabbott/animal.html"} target="_blank" rel="noopener noreferrer">{"anglo perspective"}</a>{") but also because it pokes fun at the anthropomorphism of so many little kids books."}</p>
      <p>{"The main joke in the book is highlighted in its title. “A cow says moo. A sheep says baa. Three singing pigs say la la la!” Of course, that isn’t right. Pigs don’t wear bow ties, hold canes, and sing on their hind feet, as Boynton graciously allows her reader to point out. And that’s precisely the fun of her book."}</p>
      <p>{"Full of cheerful illustrations and bright colors, "}<em>{"Moo, Baa, La La La"}</em>{" is perfect for little ones."}</p>
      <p>{"Ages 0-3. For another perspective, visit "}<a href={"http://www.commonsensemedia.org/book-reviews/Moo-Baa-La-La.html/details"} target="_blank" rel="noopener noreferrer">{"Common Sense Media"}</a>{"."}</p>
    </div>
  );
}
