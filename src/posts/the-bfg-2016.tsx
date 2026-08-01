import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10394",
  "slug": "the-bfg-2016",
  "url": "/reviews/the-bfg-2016/",
  "legacyUrl": "https://vegbooks.org/index.php/2016/08/26/the-bfg-2016/",
  "title": "The BFG (2016)",
  "publishedAt": "2016-08-26",
  "publishedLabel": "August 26th, 2016",
  "excerpt": "We took our seven-year-old to watch this delightful movie about a big friendly vegetarian giant and the entire family enjoyed it. Directed by Steven Spielberg, the live action and CGI cast bring this lovely story to…",
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
      "name": "Family Movie",
      "slug": "family-movie",
      "url": "/topics/family-movie/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Movies for Vegetarian Kids",
      "slug": "movies-for-vegetarian-kids",
      "url": "/topics/movies-for-vegetarian-kids/"
    },
    {
      "name": "Portrayal of Vegetarians in Film",
      "slug": "portrayal-of-vegetarians-in-film",
      "url": "/topics/portrayal-of-vegetarians-in-film/"
    },
    {
      "name": "Roald Dahl",
      "slug": "roald-dahl",
      "url": "/topics/roald-dahl/"
    },
    {
      "name": "Steven Spielberg",
      "slug": "steven-spielberg",
      "url": "/topics/steven-spielberg/"
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
    "description": "We took our seven-year-old to watch this delightful movie about a big friendly vegetarian giant and the entire family enjoyed it. Directed by Steven Spielberg, the live action and CGI cast bring this lovely story to…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Mercy: The Incredible Story of Henry Bergh, Founder of the ASPCA and Friend to Animals",
    "url": "/reviews/mercy-the-incredible-story-of-henry-bergh-founder-of-the-aspca-and-friend-to-animals/"
  },
  "next": {
    "title": "The BFG",
    "url": "/reviews/the-bfg/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Girl holding a movie camera - stock image to accompany movie review"} width={210} height={317} />
      </figure>
      <p>{"We took our seven-year-old to watch this delightful movie about a big friendly vegetarian giant and the entire family enjoyed it. Directed by Steven Spielberg, the live action and CGI cast bring this lovely story to life. The giant’s CGI features are so friendly and loveable."}</p>
      <p>{"Based on the chapter book of the same name by Roald Dahl (author of "}<em>{"Charlie and the Chocolate Factory"}</em>{" and "}<em><a href={"/reviews/the-magic-finger/"}>{"The Magic Finger"}</a></em>{"), “The BFG” tells the story of a Big Friendly Giant who chooses not to eat human beings like all the other giants. The giant captures a little girl, Sophie, and they become great friends."}</p>
      <p>{"There is a nice representation of what it is like to fear being eaten as Sophie at first thinks The BFG is going to eat her and then several scenes of Sophie being hunted by the other giants who do eat people. Sophie and The BFG concoct a plan to stop all of the other giants from eating people, a successful plan in which none of the giant’s is harmed."}</p>
      <p>{"I was really looking forward to this movie because the book has such a strong vegetarian message. The movie removes many of the conversations in which Sophie and The BFG discuss vegetarian topics. But there is still a strong vegetarian vibe to this movie and a vegetarian child will really enjoy it. There are not a lot of scary parts–a few scenes in which giants are hunting Sophie and a few scenes in which the other giants bully The BFG. But overall it’s not a super scary movie. There are some flatulence jokes which my seven year old said was her favorite part but others may consider crass."}</p>
      <p>{"Rated PG. "}<a href={"https://www.commonsensemedia.org/movie-reviews/the-bfg"} target="_blank" rel="noopener noreferrer">{"Common Sense Media"}</a>{" recommends this movie for ages 7+ and my seven-year-old really loved it."}</p>
    </div>
  );
}
