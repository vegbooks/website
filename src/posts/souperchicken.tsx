import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1526",
  "slug": "souperchicken",
  "url": "/reviews/souperchicken/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/04/20/souperchicken/",
  "title": "Souperchicken",
  "publishedAt": "2010-04-20",
  "publishedLabel": "April 20th, 2010",
  "excerpt": "We know that reading is important, but in Souperchickenby Mary Jane and Herm Auch, Henrietta discovers just how life-saving reading can be. On the farm, Henrietta’s aunts wonder why Henrietta spends so much time…",
  "image": {
    "src": "/media/2010/04/9780823417049-1.jpg",
    "alt": "Souperchicken",
    "width": 208,
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
      "name": "Animal Escape",
      "slug": "animal-escape",
      "url": "/topics/animal-escape/"
    },
    {
      "name": "Animal Liberation",
      "slug": "animal-liberation",
      "url": "/topics/animal-liberation/"
    },
    {
      "name": "Best Books for Vegetarian Kids",
      "slug": "best-books-for-vegetarian-kids",
      "url": "/topics/best-books-for-vegetarian-kids/"
    },
    {
      "name": "Chickens",
      "slug": "chickens",
      "url": "/topics/chickens/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Herm Auch",
      "slug": "herm-auch",
      "url": "/topics/herm-auch/"
    },
    {
      "name": "Marsha Rakestraw",
      "slug": "marsha-rakestraw",
      "url": "/topics/marsha-rakestraw/"
    },
    {
      "name": "Mary Jane Auch",
      "slug": "mary-jane-auch",
      "url": "/topics/mary-jane-auch/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Vegetarian Kids Books",
      "slug": "vegetarian-kids-books",
      "url": "/topics/vegetarian-kids-books/"
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
    "description": "We know that reading is important, but in Souperchickenby Mary Jane and Herm Auch, Henrietta discovers just how life-saving reading can be. On the farm, Henrietta’s aunts wonder why Henrietta spends so much time…",
    "image": "https://vegbooks.org/media/2010/04/9780823417049-1.jpg"
  },
  "previous": {
    "title": "Good Dog",
    "url": "/reviews/good-dog/"
  },
  "next": {
    "title": "Biscuit’s Earth Day Celebration",
    "url": "/reviews/biscuits-earth-day-celebration/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/04/9780823417049-1.jpg"}><img src={"/media/2010/04/9780823417049-1.jpg"} alt={"Souperchicken"} width={208} height={270} /></a>
      </figure>
      <p>{"We know that reading is important, but in "}<em>{"Souperchicken"}</em>{"by "}<a href={"http://www.mjauch.com/"} target="_blank" rel="noopener noreferrer">{"Mary Jane and Herm Auch"}</a>{", Henrietta discovers just how life-saving reading can be. On the farm, Henrietta’s aunts wonder why Henrietta spends so much time reading and so little time laying eggs. When the farmer sends Henrietta’s aunts on “vacation,” she discovers that they’re actually on their way to the Souper Soup Company to become someone’s dinner. Henrietta uses her reading skills to track down her aunts and rescue them."}</p>
      <p>{"The hens realize a happy ending when they find a vegetarian farmer to live with and get jobs eating tasty insects from her organic garden. (The farmer drinks milk and eats eggs but notes that she doesn’t eat animals.)"}</p>
      <p>{"Readers will cheer Henrietta’s journey to save her aunts and applaud her rescue of pigs and cows she encounters on the way who are also bound for “vacation.” Tidbits like the “beheading” and “plucking” rooms at the soup factory introduce a bit of reality. Although the puns and wordplay will fly over the heads of younger children, older kids will get a cluck out of them. The quirky, brightly-colored illustrations add an additional layer of fun. An entertaining change from the typical stories featuring farmed animals."}</p>
      <p>{"Ages 5-9."}</p>
    </div>
  );
}
