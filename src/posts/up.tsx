import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2551",
  "slug": "up",
  "url": "/reviews/up/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/11/up/",
  "title": "Up (2009)",
  "publishedAt": "2010-07-11",
  "publishedLabel": "July 11th, 2010",
  "excerpt": "All I’d heard about Pixar’s animated film “Up” was that it was about the loss of a loved one, so was I surprised when I discovered that it’s also about the protection of endangered animals! When widower Carl (voiced…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Up (2009)",
    "width": 226,
    "height": 341
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
      "name": "Animal Abuse",
      "slug": "animal-abuse",
      "url": "/topics/animal-abuse/"
    },
    {
      "name": "Birds",
      "slug": "birds",
      "url": "/topics/birds/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Endangered Species",
      "slug": "endangered-species",
      "url": "/topics/endangered-species/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Environmental Kids Movies",
      "slug": "environmental-kids-movies",
      "url": "/topics/environmental-kids-movies/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Pixar",
      "slug": "pixar",
      "url": "/topics/pixar/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
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
    "description": "All I’d heard about Pixar’s animated film “Up” was that it was about the loss of a loved one, so was I surprised when I discovered that it’s also about the protection of endangered animals! When widower Carl (voiced…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "When Lulu Went to the Zoo",
    "url": "/reviews/when-lulu-went-to-the-zoo/"
  },
  "next": {
    "title": "A Home for Dixie",
    "url": "/reviews/a-home-for-dixie/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Up (2009)"} width={226} height={341} /></a>
      </figure>
      <p>{"All I’d heard about Pixar’s animated film “"}<a href={"http://www.commonsensemedia.org/movie-reviews/up"} target="_blank" rel="noopener noreferrer">{"Up"}</a>{"” was that it was about the loss of a loved one, so was I surprised when I discovered that it’s also about the protection of endangered animals!"}</p>
      <p>{"When widower Carl (voiced by animal advocate "}<a href={"http://www.thepetpress-la.com/articles/edasner.htm"} target="_blank" rel="noopener noreferrer">{"Ed Asner"}</a>{") and his stowaway Russell take off for South America in a house buoyed by helium balloons, they end up befriending a golden retriever named Dug and an endangered bird whom Russell names Kevin. They soon find out that Kevin is actually a momma bird, and that Dug’s “master” Charles is a collector who wants to kill Kevin and make her into a museum mount. The rest of the film is about the growing friendship among the old man, the boy, and the dog — and their efforts to keep Kevin and her brood safe from Charles and his pack of dogs."}</p>
      <p>{"Kids who care about animals will appreciate Carl’s transformation from a grieving man who is desperately trying to hold onto the past to a fearless advocate who risks it all to keep Kevin and her family safe and preserve her species for the future. And everyone will cheer the happy ending, where Carl and Russell rescue the birds and "}<a href={"http://www.examiner.com/x-5831-Animal-Welfare-Examiner~y2009m6d24-Surprising-messages-in-Pixars"} target="_blank" rel="noopener noreferrer">{"dogs"}</a>{" alike."}</p>
      <p>{"Rated PG. Ages 6 and up."}</p>
    </div>
  );
}
