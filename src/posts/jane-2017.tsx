import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10518",
  "slug": "jane-2017",
  "url": "/reviews/jane-2017/",
  "legacyUrl": "https://vegbooks.org/index.php/2017/11/16/jane-2017/",
  "title": "JANE (2017)",
  "publishedAt": "2017-11-16",
  "publishedLabel": "November 16th, 2017",
  "excerpt": "Jane Goodall made her name 50 years ago through painstakingly observing chimpanzees in Gombe, and has recently been traveling all over the world promoting responsible stewardship of the earth and all of its…",
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
      "name": "Brett Morgen",
      "slug": "brett-morgen",
      "url": "/topics/brett-morgen/"
    },
    {
      "name": "Chimpanzees",
      "slug": "chimpanzees",
      "url": "/topics/chimpanzees/"
    },
    {
      "name": "Documentaries",
      "slug": "documentaries",
      "url": "/topics/documentaries/"
    },
    {
      "name": "Hugo van Lawick",
      "slug": "hugo-van-lawick",
      "url": "/topics/hugo-van-lawick/"
    },
    {
      "name": "Jane Goodall",
      "slug": "jane-goodall",
      "url": "/topics/jane-goodall/"
    },
    {
      "name": "Kristin Wald",
      "slug": "kristin-wald",
      "url": "/topics/kristin-wald/"
    },
    {
      "name": "National Geographic",
      "slug": "national-geographic",
      "url": "/topics/national-geographic/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Wild Animals",
      "slug": "wild-animals",
      "url": "/topics/wild-animals/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
    }
  ],
  "reviewer": {
    "name": "Kristin Wald",
    "slug": "kristin-wald",
    "url": "/contributors/kristin-wald/",
    "aliases": [
      "KRISITN WALD",
      "Kristin Wald",
      "KRISTIN WALD"
    ]
  },
  "seo": {
    "description": "Jane Goodall made her name 50 years ago through painstakingly observing chimpanzees in Gombe, and has recently been traveling all over the world promoting responsible stewardship of the earth and all of its…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Bee Movie (2007)",
    "url": "/reviews/bee-movie-2007/"
  },
  "next": {
    "title": "Star Wars: The Last Jedi (2017)",
    "url": "/reviews/star-wars-the-last-jedi-2017/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Girl holding a movie camera - stock image to accompany movie review"} width={210} height={317} />
      </figure>
      <p>{"Jane Goodall made her name 50 years ago through painstakingly observing chimpanzees in Gombe, and has recently been traveling all over the world promoting responsible stewardship of the earth and all of its inhabitants. “JANE,” from director Brett Morgen, is a wonderful new documentary that tells the story of how a young, untrained animal lover became one of the world’s most powerful advocates for chimpanzees and baboons, and conservation. (The trailer is online "}<a href={"https://www.youtube.com/watch?v=FRlUJrEUn0Y"}>{"here"}</a>{".) It is a documentary well worth seeing for its story as well as its stunning imagery. Children sensitive to the range of nature’s realities and those under the age of eight may be upset by some scenes."}</p>
      <p>{"The footage used includes scenes from over 100 hours of newly rediscovered film from National Geographic photographer and filmmaker Hugo van Lawick, who became Jane Goodall’s husband after spending time in Gombe documenting her early work. It is intimate and beautiful, and it shows a casual, human, and even silly side to the work "}<a href={"http://www.janegoodall.org/"} target="_blank" rel="noopener noreferrer">{"Jane Goodall"}</a>{" did with chimpanzees. Her patience and love for the chimpanzees she followed, her disillusionment and horror at discovering the warlike aspects of chimp culture, and her sorrow at losses in the chimpanzee community she loves mirror the personal joys, separations, and frustrations involving her family and life choices."}</p>
      <p>{"The voiceovers in the film are a combination of new interviews with the filmmaker and audio from Jane Goodall’s audiobooks. Edited together with the original footage, the film becomes a smooth story arc that lets viewers feel they’ve really gotten to know this iconic figure, even as they feel inspired by Goodall’s minor and monumental achievements. It is the new interview material, however, that brings us some particular humor and touching moments as Jane Goodall tweaks past researchers’ techniques and admits to emotional pain regarding her son and first marriage. It is also when we hear her turmoil and sorrow regarding a polio outbreak in the chimpanzee community and the deaths of two of her most closely followed chimps."}</p>
      <p>{"All in all, “JANE” is a joy to watch for those who know her work, and it will also serve as a comprehensive introduction to her work for those who don’t yet know it well. The end of the film promotes Jane Goodall’s goal of encouraging and fostering the "}<a href={"http://rootsandshoots.org/"} target="_blank" rel="noopener noreferrer">{"next generation"}</a>{" in showing compassion for all living things, cultures, and the environment. In a few scenes, sensitive children will be disturbed by animals attacking each other and in one particularly gory scene, eating each other. There is also a brief scene of chimpanzees mating. The language is gentle, save for one instance at the beginning where a colloquial term for excrement is used. Highly recommended for children ages 8 and up."}</p>
      <p>{"Rated PG."}</p>
    </div>
  );
}
