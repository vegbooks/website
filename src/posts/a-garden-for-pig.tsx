import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3156",
  "slug": "a-garden-for-pig",
  "url": "/reviews/a-garden-for-pig/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/09/28/a-garden-for-pig/",
  "title": "A Garden for Pig",
  "publishedAt": "2010-09-28",
  "publishedLabel": "September 28th, 2010",
  "excerpt": "A Garden for Pigis a new title that encourages kids to grow and eat their veggies. Based on a true story, in which a pig breaks into a neighboring garden, eats some squash, and “delivers” the seeds to his own pen,…",
  "image": {
    "src": "/media/2010/09/garden-for-pig.jpg",
    "alt": "A Garden for Pig",
    "width": 210,
    "height": 298
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
      "name": "Composting",
      "slug": "composting",
      "url": "/topics/composting/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Fruit",
      "slug": "fruit",
      "url": "/topics/fruit/"
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
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Kathryn Thurman",
      "slug": "kathryn-thurman",
      "url": "/topics/kathryn-thurman/"
    },
    {
      "name": "Lindsay Ward",
      "slug": "lindsay-ward",
      "url": "/topics/lindsay-ward/"
    },
    {
      "name": "Organic",
      "slug": "organic",
      "url": "/topics/organic/"
    },
    {
      "name": "Pigs",
      "slug": "pigs",
      "url": "/topics/pigs/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Vegetables",
      "slug": "vegetables",
      "url": "/topics/vegetables/"
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
    "description": "A Garden for Pigis a new title that encourages kids to grow and eat their veggies. Based on a true story, in which a pig breaks into a neighboring garden, eats some squash, and “delivers” the seeds to his own pen,…",
    "image": "https://vegbooks.org/media/2010/09/garden-for-pig.jpg"
  },
  "previous": {
    "title": "Hurt Go Happy",
    "url": "/reviews/hurt-go-happy/"
  },
  "next": {
    "title": "I Spy a Lion: Animals in Art",
    "url": "/reviews/i-spy-a-lion-animals-in-art/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/09/garden-for-pig.jpg"}><img src={"/media/2010/09/garden-for-pig.jpg"} alt={"A Garden for Pig"} width={210} height={298} /></a>
      </figure>
      <p><em>{"A Garden for Pig"}</em>{"is a new title that encourages kids to grow and eat their veggies. Based on a true story, in which a pig breaks into a neighboring garden, eats some squash, and “delivers” the seeds to his own pen, Kathryn Thurman’s picture book is sure to get some laughs."}</p>
      <p>{"The mischievous character Pig lives on an apple orchard and longs for vegetables. He just can’t help himself from breaking into a neighbor’s vegetable garden and devouring all the beautiful things that are growing there. Vegetarian and vegan parents will enjoy pointing out many of the garden vegetables which are staples of a plant-based diet."}</p>
      <p>{"While Pig might be upset about the menu choices he’s offered day after day, I for one found the selections to be tantalizing. I would pretty much be happy eating homemade apple sauce every meal this time of year, so if Pig doesn’t want his "}<a href={"http://www.ifood.tv/recipe/spiced-apple-flambe"} target="_blank" rel="noopener noreferrer">{"apple flambe"}</a>{", he can send it to me! Your kids might even request "}<a href={"http://www.chooseveg.com/vegan-dessert-recipes.asp"} target="_blank" rel="noopener noreferrer">{"fruit-based desserts"}</a>{" when they finish this book."}</p>
      <p>{"Observant readers will delight in Lindsay Ward’s multimedia illustrations, which incorporate apple recipes, and those readers with a bit of land of their own will appreciate Thurman’s organic gardening tips at the back of the book. (The only mention of animal products occurs when Thurman says that along with many other items, eggs can be made into compost.)"}</p>
      <p>{"Ages 3-7."}</p>
    </div>
  );
}
