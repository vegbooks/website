import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10505",
  "slug": "dolphin-tale-2011",
  "url": "/reviews/dolphin-tale-2011/",
  "legacyUrl": "https://vegbooks.org/index.php/2017/09/04/dolphin-tale-2011/",
  "title": "Dolphin Tale (2011)",
  "publishedAt": "2017-09-04",
  "publishedLabel": "September 4th, 2017",
  "excerpt": "My kids, ages 3 and 8, are obsessed with “Dolphin Tale.” I reviewed the junior novel based on the screenplay recently, and the plot is exactly the same. But the movie, with real people (Ashley Judd, Harry Connick…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany movie review",
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
      "name": "Animal Rescue",
      "slug": "animal-rescue",
      "url": "/topics/animal-rescue/"
    },
    {
      "name": "Ashley Judd",
      "slug": "ashley-judd",
      "url": "/topics/ashley-judd/"
    },
    {
      "name": "Dolphins",
      "slug": "dolphins",
      "url": "/topics/dolphins/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Family Films",
      "slug": "family-films",
      "url": "/topics/family-films/"
    },
    {
      "name": "Family Movies",
      "slug": "family-movies",
      "url": "/topics/family-movies/"
    },
    {
      "name": "Harry Connick Jr",
      "slug": "harry-connick-jr",
      "url": "/topics/harry-connick-jr/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Marine Animals",
      "slug": "marine-animals",
      "url": "/topics/marine-animals/"
    },
    {
      "name": "Marine Mammals",
      "slug": "marine-mammals",
      "url": "/topics/marine-mammals/"
    },
    {
      "name": "Morgan Freeman",
      "slug": "morgan-freeman",
      "url": "/topics/morgan-freeman/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Kali",
    "slug": "jennifer-kali",
    "url": "/contributors/jennifer-kali/",
    "aliases": [
      "Jennifer Kali",
      "JENNIFER KALI"
    ]
  },
  "seo": {
    "description": "My kids, ages 3 and 8, are obsessed with “Dolphin Tale.” I reviewed the junior novel based on the screenplay recently, and the plot is exactly the same. But the movie, with real people (Ashley Judd, Harry Connick…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Mighty Jack and the Goblin King",
    "url": "/reviews/mighty-jack-and-the-goblin-king/"
  },
  "next": {
    "title": "Bee Movie (2007)",
    "url": "/reviews/bee-movie-2007/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Girl holding a movie camera - stock image to accompany movie review"} width={210} height={317} />
      </figure>
      <p>{"My kids, ages 3 and 8, are obsessed with “Dolphin Tale.” I reviewed the "}<a href={"/reviews/dolphin-tale-the-junior-tale/"}>{"junior novel"}</a>{" based on the screenplay recently, and the plot is exactly the same. But the movie, with real people (Ashley Judd, Harry Connick Jr., and Morgan Freeman) and actually featuring Winter the dolphin, has won the hearts of both of my kids who watch it once a week on Nerflix."}</p>
      <p>{"I highly recommend this movie. "}<a href={"https://www.commonsensemedia.org/movie-reviews/dolphin-tale"} target="_blank" rel="noopener noreferrer">{"Common Sense Media"}</a>{" recommends it for age 7+ but I think it’s fun for all ages, adults included."}</p>
      <p>{"Rated PG."}</p>
    </div>
  );
}
