import type { PostMetadata } from '../content/types';

export const article = {
  "id": "484",
  "slug": "how-the-grinch-stole-christmas",
  "url": "/reviews/how-the-grinch-stole-christmas/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/12/19/how-the-grinch-stole-christmas/",
  "title": "How the Grinch Stole Christmas (1966)",
  "publishedAt": "2009-12-19",
  "publishedLabel": "December 19th, 2009",
  "excerpt": "The 1966 Dr. Seuss classic “How the Grinch Stole Christmas” is a holiday tradition for my family. Kiddo, being 4, didn’t remember the movie from last year, so it was fun to watch her experience it as if for the first…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany movie review",
    "width": 210,
    "height": 321
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
      "name": "1960s Movies",
      "slug": "1960s-movies",
      "url": "/topics/1960s-movies/"
    },
    {
      "name": "Christmas Movies",
      "slug": "christmas-movies",
      "url": "/topics/christmas-movies/"
    },
    {
      "name": "Dr. Seuss",
      "slug": "dr-seuss",
      "url": "/topics/dr-seuss/"
    },
    {
      "name": "Holiday Movies",
      "slug": "holiday-movies",
      "url": "/topics/holiday-movies/"
    },
    {
      "name": "Meat-eating",
      "slug": "meat-eating",
      "url": "/topics/meat-eating/"
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
    "description": "The 1966 Dr. Seuss classic “How the Grinch Stole Christmas” is a holiday tradition for my family. Kiddo, being 4, didn’t remember the movie from last year, so it was fun to watch her experience it as if for the first…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Madeline",
    "url": "/reviews/madeline/"
  },
  "next": {
    "title": "Bolt (2008)",
    "url": "/reviews/bolt/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Girl holding a movie camera - stock image to accompany movie review"} width={210} height={321} /></a>
      </figure>
      <p>{"The 1966 Dr. Seuss classic "}<a href={"http://www.commonsensemedia.org/movie-reviews/dr-seuss-how-grinch-stole-christmas"} target="_blank" rel="noopener noreferrer">{"“How the Grinch Stole Christmas”"}</a>{" is a holiday tradition for my family. Kiddo, being 4, didn’t remember the movie from last year, so it was fun to watch her experience it as if for the first time this morning as snow fell outside."}</p>
      <p>{"What piqued my interest this time around was the Grinch’s relationship with his dog Max. Dr. Seuss tells us that the Grinch’s heart was probably two sizes too small, but you can tell he’s a meany before he ever steals the Whos’ Christmas presents just by watching "}<a href={"http://www.americanhumane.org/about-us/newsroom/fact-sheets/understanding-the-link.html"} target="_blank" rel="noopener noreferrer">{"how he treats Max"}</a>{". He bullies him, pulls him by the tail, works him to exhaustion, and whips him — horrible stuff! Happily, we see that the Grinch’s change of heart transforms his relationship with Max too. At the end of the short film, Max is eating Christmas dinner with the family."}</p>
      <p>{"This movie does portray meat consumption — the Whos eat “roast beast” — but kiddo thought it was “maybe a loaf of bread.”"}</p>
      <p>{"Ages 4-adult."}</p>
    </div>
  );
}
