import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2846",
  "slug": "the-fox-and-the-hound",
  "url": "/reviews/the-fox-and-the-hound/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/08/10/the-fox-and-the-hound/",
  "title": "The Fox and the Hound (1981)",
  "publishedAt": "2010-08-10",
  "publishedLabel": "August 10th, 2010",
  "excerpt": "“The Fox and the Hound” is classic Disney, in the best sense. In this 1980s animated film, the makers of “Bambi” are at it again, taking on hunting from the animals’ perspective. While some scenes are a little scary…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "The Fox and the Hound (1981)",
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
      "name": "1980s Childrens Movies",
      "slug": "1980s-childrens-movies",
      "url": "/topics/1980s-childrens-movies/"
    },
    {
      "name": "Animated Movies",
      "slug": "animated-movies",
      "url": "/topics/animated-movies/"
    },
    {
      "name": "Disney",
      "slug": "disney",
      "url": "/topics/disney/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Foxes",
      "slug": "foxes",
      "url": "/topics/foxes/"
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
    "description": "“The Fox and the Hound” is classic Disney, in the best sense. In this 1980s animated film, the makers of “Bambi” are at it again, taking on hunting from the animals’ perspective. While some scenes are a little scary…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Swine Divine",
    "url": "/reviews/swine-divine/"
  },
  "next": {
    "title": "Uncover a Horse",
    "url": "/reviews/uncover-a-horse/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"The Fox and the Hound (1981)"} width={210} height={317} /></a>
      </figure>
      <p>{"“"}<a href={"http://www.commonsensemedia.org/movie-reviews/fox-and-hound"} target="_blank" rel="noopener noreferrer">{"The Fox and the Hound"}</a>{"” is classic Disney, in the best sense. In this 1980s animated film, the makers of “"}<a href={"http://www.dailymail.co.uk/tvshowbiz/article-371387/Macca-Bambi-turned-vegetarian.html"} target="_blank" rel="noopener noreferrer">{"Bambi"}</a>{"” are at it again, taking on hunting from the animals’ perspective."}</p>
      <p>{"While some scenes are a little scary — the hunting scenes frightened my kiddo, as did a scene with an angry bear — the storyline is solid, allowing the watcher to feel empathy for the animals involved in the hunting (hound dog Copper) and those who are hunted (rehabilitated fox Tod). What impressed my daughter most was the loyalty that Copper felt for his person. She was surprised a dog who had befriended a fox would participate in hunting at all."}</p>
      <p>{"Rated G. Ages 5-10."}</p>
    </div>
  );
}
