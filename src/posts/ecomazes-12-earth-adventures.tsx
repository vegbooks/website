import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3077",
  "slug": "ecomazes-12-earth-adventures",
  "url": "/reviews/ecomazes-12-earth-adventures/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/09/17/ecomazes-12-earth-adventures/",
  "title": "EcoMazes: 12 Earth Adventures",
  "publishedAt": "2010-09-17",
  "publishedLabel": "September 17th, 2010",
  "excerpt": "You’re a scientist on an Alpine High Mountain hiking from Base Camp to Upper Camp. No, no, wait. You’re snorkeling with a friend between fragile coral reefs, passing stingrays and moray eels on the way back to the…",
  "image": {
    "src": "/media/2010/10/eco-mazes-cvr.jpg",
    "alt": "EcoMazes: 12 Earth Adventures",
    "width": 210,
    "height": 207
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
      "name": "Activities",
      "slug": "activities",
      "url": "/topics/activities/"
    },
    {
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Earth",
      "slug": "earth",
      "url": "/topics/earth/"
    },
    {
      "name": "Ecosystems",
      "slug": "ecosystems",
      "url": "/topics/ecosystems/"
    },
    {
      "name": "Habitats",
      "slug": "habitats",
      "url": "/topics/habitats/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Roxie Munro",
      "slug": "roxie-munro",
      "url": "/topics/roxie-munro/"
    }
  ],
  "reviewer": {
    "name": "Carolyn M. Mullin",
    "slug": "carolyn-m-mullin",
    "url": "/contributors/carolyn-m-mullin/",
    "aliases": [
      "CAROLYN M. MULLIN"
    ]
  },
  "seo": {
    "description": "You’re a scientist on an Alpine High Mountain hiking from Base Camp to Upper Camp. No, no, wait. You’re snorkeling with a friend between fragile coral reefs, passing stingrays and moray eels on the way back to the…",
    "image": "https://vegbooks.org/media/2010/10/eco-mazes-cvr.jpg"
  },
  "previous": {
    "title": "Hunwick’s Egg",
    "url": "/reviews/hunwicks-egg/"
  },
  "next": {
    "title": "Hello, Baby!",
    "url": "/reviews/hello-baby/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/10/eco-mazes-cvr.jpg"}><img src={"/media/2010/10/eco-mazes-cvr.jpg"} alt={"EcoMazes: 12 Earth Adventures"} width={210} height={207} /></a>
      </figure>
      <p>{"You’re a scientist on an Alpine High Mountain hiking from Base Camp to Upper Camp. No, no, wait. You’re snorkeling with a friend between fragile coral reefs, passing stingrays and moray eels on the way back to the beach. Feeling up to helping a baby elephant find his herd in the Savanna? How about trekking through tundra, wetlands, grasslands, and the other ecosystems Roxie Munro depicts in "}<a href={"http://www.roxiemunro.com/home.html"} target="_blank" rel="noopener noreferrer">{"EcoMazes"}</a>{"? (The website offers a few mazes for download.)"}</p>
      <p>{"Illustrated over a two-page spread, each environment challenges readers to finagle their way through a maze and discover over 350 animals scattered throughout the book. Informative answer keys are provided in the back, outlining the path that solves the maze, as well as location IDs for all the animals, and mini essays on each ecosystem. Any kid would be enraptured with these inviting puzzles (I found myself relentlessly trying to solve one or two) and appreciate the diversity found on Earth."}</p>
      <p>{"A few downsides to my enthusiasm for Munro’s work are two other titles she’s undertaken including one involving circuses and the other rodeos. We all know "}<a href={"http://www.peta.org/actioncenter/entertainment.asp"} target="_blank" rel="noopener noreferrer">{"performing animals"}</a>{" lead very depressing, abusive lives in such venues."}</p>
      <p>{"Ages 4–8."}</p>
    </div>
  );
}
