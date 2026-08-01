import type { PostMetadata } from '../content/types';

export const article = {
  "id": "309",
  "slug": "shark-tale",
  "url": "/reviews/shark-tale/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/11/25/shark-tale/",
  "title": "Shark Tale (2004)",
  "publishedAt": "2009-11-25",
  "publishedLabel": "November 25th, 2009",
  "excerpt": "Last night, my husband and I enjoyed the zany antics and fun music of “Shark Tale” on DVD. Geared to older kids, the movie is still too mature for kiddo. Vegetarian kids will love that Lenny the Shark (Jack Black)…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Shark Tale (2004)",
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
      "name": "Animated Movies",
      "slug": "animated-movies",
      "url": "/topics/animated-movies/"
    },
    {
      "name": "Jack Black",
      "slug": "jack-black",
      "url": "/topics/jack-black/"
    },
    {
      "name": "Marine Animals",
      "slug": "marine-animals",
      "url": "/topics/marine-animals/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "PETA",
      "slug": "peta",
      "url": "/topics/peta/"
    },
    {
      "name": "Portrayal of Vegetarians in Film",
      "slug": "portrayal-of-vegetarians-in-film",
      "url": "/topics/portrayal-of-vegetarians-in-film/"
    },
    {
      "name": "Raising Vegan Kids",
      "slug": "raising-vegan-kids",
      "url": "/topics/raising-vegan-kids/"
    },
    {
      "name": "Sea Life",
      "slug": "sea-life",
      "url": "/topics/sea-life/"
    },
    {
      "name": "Sharks",
      "slug": "sharks",
      "url": "/topics/sharks/"
    },
    {
      "name": "Vegetarian Family",
      "slug": "vegetarian-family",
      "url": "/topics/vegetarian-family/"
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
    "description": "Last night, my husband and I enjoyed the zany antics and fun music of “Shark Tale” on DVD. Geared to older kids, the movie is still too mature for kiddo. Vegetarian kids will love that Lenny the Shark (Jack Black)…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Blueberries for Sal",
    "url": "/reviews/blueberries-for-sal/"
  },
  "next": {
    "title": "Berenstains’ A Book",
    "url": "/reviews/berenstains-a-book/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Shark Tale (2004)"} width={210} height={321} /></a>
      </figure>
      <p>{"Last night, my husband and I enjoyed the zany antics and fun music of “Shark Tale” on DVD. Geared to older kids, the movie is still too mature for kiddo."}</p>
      <p>{"Vegetarian kids will love that Lenny the Shark (Jack Black) shares their outlook on life, and all kids can benefit from this movie’s message about the importance of being true to yourself and accepting those you love."}</p>
      <p>{"You may want to talk to your kids about how this movie challenges stereotypes (with a vegetarian Great White shark) and how it perpetuates them ("}<a href={"http://en.wikipedia.org/wiki/Shark_Tale#Criticisms_and_analysis"} target="_blank" rel="noopener noreferrer">{"portraying “Italian-American” sharks as mobsters"}</a>{"). Also, consider visiting "}<a href={"http://www.fishinghurts.com/feat/sharktale/"} target="_blank" rel="noopener noreferrer">{"PETA’s FishingHurts.com"}</a>{" to get the inside scoop on what shark behavior featured in the film is cartoon fiction and what’s based on reality."}</p>
      <p>{"Rated PG. Appropriate for ages 8 to 12. For another perspective, visit "}<a href={"http://www.commonsensemedia.org/movie-reviews/shark-tale"} target="_blank" rel="noopener noreferrer">{"Common Sense Media"}</a>{"."}</p>
    </div>
  );
}
