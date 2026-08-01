import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4008",
  "slug": "where-the-wild-things-are",
  "url": "/reviews/where-the-wild-things-are/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/01/17/where-the-wild-things-are/",
  "title": "Where the Wild Things Are (2009)",
  "publishedAt": "2011-01-17",
  "publishedLabel": "January 17th, 2011",
  "excerpt": "The words that come to mind to describe “Where the Wild Things Are” are not ones I often use to describe things geared to kids. They’re words like melancholy, dark, and eerie. Reading Maurice Sendak’s book Where the…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Where the Wild Things Are (2009)",
    "width": 210,
    "height": 316
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
      "name": "Coming of Age",
      "slug": "coming-of-age",
      "url": "/topics/coming-of-age/"
    },
    {
      "name": "Dreamy",
      "slug": "dreamy",
      "url": "/topics/dreamy/"
    },
    {
      "name": "Family",
      "slug": "family",
      "url": "/topics/family/"
    },
    {
      "name": "Family Films",
      "slug": "family-films",
      "url": "/topics/family-films/"
    },
    {
      "name": "Friendship",
      "slug": "friendship",
      "url": "/topics/friendship/"
    },
    {
      "name": "Max Records",
      "slug": "max-records",
      "url": "/topics/max-records/"
    },
    {
      "name": "Monsters",
      "slug": "monsters",
      "url": "/topics/monsters/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Spike Jonze",
      "slug": "spike-jonze",
      "url": "/topics/spike-jonze/"
    },
    {
      "name": "Surreal",
      "slug": "surreal",
      "url": "/topics/surreal/"
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
    "description": "The words that come to mind to describe “Where the Wild Things Are” are not ones I often use to describe things geared to kids. They’re words like melancholy, dark, and eerie. Reading Maurice Sendak’s book Where the…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Princess Candy: The Green Queen of Mean",
    "url": "/reviews/princess-candy-the-green-queen-of-mean/"
  },
  "next": {
    "title": "I’ll Always Be Your Friend",
    "url": "/reviews/ill-always-be-your-friend/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Where the Wild Things Are (2009)"} width={210} height={316} /></a>
      </figure>
      <p>{"The words that come to mind to describe “Where the Wild Things Are” are not ones I often use to describe things geared to kids. They’re words like melancholy, dark, and eerie."}</p>
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0060254920"} alt={""} width={1} height={1} />
      </figure>
      <p>{"Reading Maurice Sendak’s book "}<a href={"http://www.amazon.com/gp/product/0060254920?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0060254920"} target="_blank" rel="noopener noreferrer"><em>{"Where the Wild Things Are"}</em></a>{" as an adult, the story enchants me as a vivid portrayal of a child’s imagination — but I remember reading the book as a child and finding its surrealism to be downright scary. "}<a href={"http://www.commonsensemedia.org/movie-reviews/where-wild-things-are"} target="_blank" rel="noopener noreferrer">{"Director Spike Jonze’s film"}</a>{" captures exactly the "}<em>{"feeling"}</em>{" I got from the book as a child, even though the fuller storyline he develops is nothing like I imagined. In the film, Max is older than in the book — perhaps 11 or 12, instead of 7 or 8 — and so “Where the Wild Things Are” is transformed into a kind of coming-of-age film."}</p>
      <p>{"There’s a dreaminess to this film that’s captivating, and "}<a href={"http://www.imdb.com/name/nm2504006/"} target="_blank" rel="noopener noreferrer">{"vegetarian actor Max Records"}</a>{" is in fact the perfect Max. I also love what this film does to blur species lines. Not only does Max become “king of the Wild Things,” but another character KW befriends two owls, much to the chagrin of her friend Carol who would prefer that she spend her time with the Wild Things instead. (I cringed a bit watching how she handled the owls, but she’s a monster, so I suppose it’s to be expected. Her affection for them did seem sincere.) I also came to a new appreciation of the word used to describe the monsters in both the book and the film: Things. If these are Things, I found myself thinking, then so am I."}</p>
      <p>{"This film is rated PG. Ages 9 to adult."}</p>
    </div>
  );
}
