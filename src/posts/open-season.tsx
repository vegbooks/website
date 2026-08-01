import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4992",
  "slug": "open-season",
  "url": "/reviews/open-season/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/05/05/open-season/",
  "title": "Open Season",
  "publishedAt": "2011-05-05",
  "publishedLabel": "May 5th, 2011",
  "excerpt": "You gotta love that kids movies sometimes say what adult films never could. Continuing the tradition of “Bambi” and “The Fox and the Hound,” the 2006 release “Open Season” depicts hunting from the animals’…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Open Season",
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
      "name": "Animated Movies",
      "slug": "animated-movies",
      "url": "/topics/animated-movies/"
    },
    {
      "name": "Anti-Hunting",
      "slug": "anti-hunting",
      "url": "/topics/anti-hunting/"
    },
    {
      "name": "Bears",
      "slug": "bears",
      "url": "/topics/bears/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Hunting",
      "slug": "hunting",
      "url": "/topics/hunting/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Rabbits",
      "slug": "rabbits",
      "url": "/topics/rabbits/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
    },
    {
      "name": "Wildlife Rehabilitation",
      "slug": "wildlife-rehabilitation",
      "url": "/topics/wildlife-rehabilitation/"
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
    "description": "You gotta love that kids movies sometimes say what adult films never could. Continuing the tradition of “Bambi” and “The Fox and the Hound,” the 2006 release “Open Season” depicts hunting from the animals’…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "The Ocean Story",
    "url": "/reviews/the-ocean-story/"
  },
  "next": {
    "title": "Fred Stays With Me!",
    "url": "/reviews/fred-stays-with-me/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Open Season"} width={210} height={317} /></a>
      </figure>
      <p>{"You gotta love that kids movies sometimes say what adult films never could. Continuing the tradition of “Bambi” and “"}<a href={"/reviews/the-fox-and-the-hound/"}>{"The Fox and the Hound"}</a>{",” the 2006 release “"}<a href={"http://www.commonsensemedia.org/movie-reviews/Open-Season.html"} target="_blank" rel="noopener noreferrer">{"Open Season"}</a>{"” depicts hunting from the animals’ perspective, and of course, it isn’t pretty."}</p>
      <p>{"The main character is a grizzly bear named Boog, who was rehabilitated by a kind-hearted educator named Beth but never released to the wild. He lives in the garage, sleeps on an oversized dog bed, and eats fish snacks, until one day, he gets into some trouble with a friend and Beth realizes that he belongs in the wild. The plot revolves around his attempts to navigate his way home from the wilderness (to Beth’s garage) in one piece during hunting season."}</p>
      <p>{"Families who care about animal rights will get a kick out of the fact that the villain in the story — an avid hunter named Shaw — begins imagining that the animals are plotting against the humans in order to upset the “natural order” of humans dominating everyone else. In one particularly funny scene, Shaw imagines that the animals treat us the way we often treat them. Of course, this reality never materializes — but the animals are able to drive the hunters out of the forest."}</p>
      <p>{"While there are some sexual references (!) and a lot of potty humor, the real downside to this film from a veg perspective is that there’s a running gag which involves throwing rabbits. (The rabbits appear to be unharmed.) On a positive note, Boog realizes that his true home is in the wild and Beth is able to let him go, as any wildlife rehabilitator should."}</p>
      <p>{"Rated PG, this film is appropriate for kids ages 6 and up."}</p>
    </div>
  );
}
