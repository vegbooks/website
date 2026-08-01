import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2557",
  "slug": "happy-feet",
  "url": "/reviews/happy-feet/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/20/happy-feet/",
  "title": "Happy Feet (2007)",
  "publishedAt": "2010-07-20",
  "publishedLabel": "July 20th, 2010",
  "excerpt": "Vegetarians who forgo fish for environmental reasons will adore “Happy Feet.” Along with giving kids a glimpse into the natural history of penguins, this animated movie also deals with issues of overfishing,…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Happy Feet (2007)",
    "width": 210,
    "height": 317
  },
  "categories": [
    {
      "name": "Movies",
      "slug": "movies",
      "url": "/movies/"
    }
  ],
  "tags": [
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Environmental Kids Movies",
      "slug": "environmental-kids-movies",
      "url": "/topics/environmental-kids-movies/"
    },
    {
      "name": "Fishing",
      "slug": "fishing",
      "url": "/topics/fishing/"
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
      "name": "Penguins",
      "slug": "penguins",
      "url": "/topics/penguins/"
    },
    {
      "name": "Warner Bros.",
      "slug": "warner-bros",
      "url": "/topics/warner-bros/"
    },
    {
      "name": "Zoo",
      "slug": "zoo",
      "url": "/topics/zoo/"
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
    "description": "Vegetarians who forgo fish for environmental reasons will adore “Happy Feet.” Along with giving kids a glimpse into the natural history of penguins, this animated movie also deals with issues of overfishing,…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Animal Poems",
    "url": "/reviews/animal-poems/"
  },
  "next": {
    "title": "Munchie Madness",
    "url": "/reviews/munchie-madness/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Happy Feet (2007)"} width={210} height={317} /></a>
      </figure>
      <p>{"Vegetarians who forgo fish for environmental reasons will adore “"}<a href={"http://www.commonsensemedia.org/movie-reviews/happy-feet"} target="_blank" rel="noopener noreferrer">{"Happy Feet"}</a>{".” Along with giving kids a glimpse into the natural history of penguins, this animated movie also deals with issues of "}<a href={"http://overfishing.org/"} target="_blank" rel="noopener noreferrer">{"overfishing"}</a>{", environmental destruction, and animal suffering in zoos. Kids will learn that we need to leave the fish in the oceans for the penguins, and leave the penguins in the wild."}</p>
      <p>{"While the pop music and dancing isn’t for everyone, the animation is beautiful and "}<a href={"http://thislittlepiggyhadtofu.blogspot.com/2010/05/my-happy-daughter-and-her-happy-feet.html"} target="_blank" rel="noopener noreferrer">{"the dialogue is witty"}</a>{" — and there’s even a depiction how the legislative process can effect change. To view the trailer, visit "}<a href={"http://trailers.apple.com/trailers/wb/happyfeet/"} target="_blank" rel="noopener noreferrer">{"iTunes"}</a>{"."}</p>
      <p>{"Rated PG. Ages 5 and up."}</p>
    </div>
  );
}
