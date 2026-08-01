import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10563",
  "slug": "dr-dolittle-1998-and-dr-dolittle-2-2001",
  "url": "/reviews/dr-dolittle-1998-and-dr-dolittle-2-2001/",
  "legacyUrl": "https://vegbooks.org/index.php/2018/04/16/dr-dolittle-1998-and-dr-dolittle-2-2001/",
  "title": "Dr. Dolittle (1998) and Dr. Dolittle 2 (2001)",
  "publishedAt": "2018-04-16",
  "publishedLabel": "April 16th, 2018",
  "excerpt": "One weekend, my family enjoyed a movie marathon of “Dr. Dolittle” and “Dr. Dolittle 2.” The first movie tells the story of a doctor (Eddie Murphy) who suddenly realizes he can talk to animals. He spends most of the…",
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
      "name": "1990s Movies",
      "slug": "1990s-movies",
      "url": "/topics/1990s-movies/"
    },
    {
      "name": "Eddie Murphy",
      "slug": "eddie-murphy",
      "url": "/topics/eddie-murphy/"
    },
    {
      "name": "Family Movies",
      "slug": "family-movies",
      "url": "/topics/family-movies/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
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
    "description": "One weekend, my family enjoyed a movie marathon of “Dr. Dolittle” and “Dr. Dolittle 2.” The first movie tells the story of a doctor (Eddie Murphy) who suddenly realizes he can talk to animals. He spends most of the…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Little Sid: The Tiny Prince Who Became Buddha",
    "url": "/reviews/little-sid-the-tiny-prince-who-became-buddha/"
  },
  "next": {
    "title": "Sharks: Nature’s Perfect Hunter",
    "url": "/reviews/sharks-natures-perfect-hunter/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Girl holding a movie camera - stock image to accompany movie review"} width={210} height={317} />
      </figure>
      <p>{"One weekend, my family enjoyed a movie marathon of “Dr. Dolittle” and “Dr. Dolittle 2.” The first movie tells the story of a doctor (Eddie Murphy) who suddenly realizes he can talk to animals. He spends most of the movie coming to terms with his new reality. in the second movie, Dr. Dolittle used his ability to talk to animals to save a park land which is home to a very rare bear."}</p>
      <p>{"My daughter, age 8, loved these movies. There are a lot of visual gags and jokes that she found hilarious. The second movie has a strong animal rights theme. There are a few crude jokes, sexual innuendo, and mild cursing that seemed out of place in this family movie, but it wasn’t overwhelming."}</p>
      <p>{"Common Sense Media recommends “"}<a href={"https://www.commonsensemedia.org/movie-reviews/dr-dolittle-1998"} target="_blank" rel="noopener noreferrer">{"Dr. Dolittle"}</a>{"” for ages 9+ and “"}<a href={"https://www.commonsensemedia.org/movie-reviews/dr-dolittle-2"} target="_blank" rel="noopener noreferrer">{"Dr. Dolittle 2"}</a>{"” for ages 8+."}</p>
      <p>{"This was a great selection for family movie night. Now we are off to see “Dr. Dolittle 3”!"}</p>
    </div>
  );
}
