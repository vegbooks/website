import type { PostMetadata } from '../content/types';

export const article = {
  "id": "608",
  "slug": "if-frogs-made-weather",
  "url": "/reviews/if-frogs-made-weather/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/01/22/if-frogs-made-weather/",
  "title": "If Frogs Made Weather",
  "publishedAt": "2010-01-22",
  "publishedLabel": "January 22nd, 2010",
  "excerpt": "This picture book by Marion Dane Bauer and Dorothy Donahue introduces kids to the ecological needs of animals through touching, even funny, poems — with gorgeous illustrations to boot. Each page could stand on its…",
  "image": {
    "src": "/media/2010/01/97808234162261.jpg",
    "alt": "If Frogs Made Weather",
    "width": 242,
    "height": 245
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
      "name": "Dorothy Donahue",
      "slug": "dorothy-donahue",
      "url": "/topics/dorothy-donahue/"
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
      "name": "Frogs",
      "slug": "frogs",
      "url": "/topics/frogs/"
    },
    {
      "name": "Marion Dane Bauer",
      "slug": "marion-dane-bauer",
      "url": "/topics/marion-dane-bauer/"
    },
    {
      "name": "Polar Bears",
      "slug": "polar-bears",
      "url": "/topics/polar-bears/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "This picture book by Marion Dane Bauer and Dorothy Donahue introduces kids to the ecological needs of animals through touching, even funny, poems — with gorgeous illustrations to boot. Each page could stand on its…",
    "image": "https://vegbooks.org/media/2010/01/97808234162261.jpg"
  },
  "previous": {
    "title": "Hero Cat",
    "url": "/reviews/hero-cat-guest-post-by-huyen-macmichael/"
  },
  "next": {
    "title": "Ratatouille (2007)",
    "url": "/reviews/ratatouille-guest-post-by-jennifer-gannett/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/01/97808234162261.jpg"}><img src={"/media/2010/01/97808234162261.jpg"} alt={"If Frogs Made Weather"} width={242} height={245} /></a>
      </figure>
      <p>{"This picture book by "}<a href={"http://www.mariondanebauer.com/bkpages/bk_weather.html"} target="_blank" rel="noopener noreferrer">{"Marion Dane Bauer"}</a>{" and Dorothy Donahue introduces kids to the ecological needs of animals through touching, even funny, poems — with gorgeous illustrations to boot. Each page could stand on its own, but together they’re downright magical."}</p>
      <p>{"One of the things I love about this book is, cover aside, the realism of the illustrations and the accuracy of the descriptions. If polar bears made weather, we’re told, the world would be a blustery, icy place. (Nice entree into a climate change discussion, if you’d like.)"}</p>
      <p>{"What a delight at the end then when all of the animals transform into stuffed toys, and the reader realizes that the little boy at the periphery of the story has envisioned each of his toys out in nature!"}</p>
      <p>{"Ages 3-7."}</p>
    </div>
  );
}
