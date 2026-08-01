import type { PostMetadata } from '../content/types';

export const article = {
  "id": "7555",
  "slug": "turtle-the-incredible-journey",
  "url": "/reviews/turtle-the-incredible-journey/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/05/30/turtle-the-incredible-journey/",
  "title": "Turtle: The Incredible Journey (2009)",
  "publishedAt": "2012-05-30",
  "publishedLabel": "May 30th, 2012",
  "excerpt": "Following a loggerhead turtle from her hatching on a Florida beach until she returns 25 years later to lay eggs of her own, “Turtle: The Incredible Journey” is a visual feast, with beautiful images of life underwater…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Turtle: The Incredible Journey (2009)",
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
      "name": "Atlantic Ocean",
      "slug": "atlantic-ocean",
      "url": "/topics/atlantic-ocean/"
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
      "name": "Florida",
      "slug": "florida",
      "url": "/topics/florida/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
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
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Turtles",
      "slug": "turtles",
      "url": "/topics/turtles/"
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
    "description": "Following a loggerhead turtle from her hatching on a Florida beach until she returns 25 years later to lay eggs of her own, “Turtle: The Incredible Journey” is a visual feast, with beautiful images of life underwater…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Compost It",
    "url": "/reviews/compost-it/"
  },
  "next": {
    "title": "I Wear My Tutu Everywhere!",
    "url": "/reviews/i-wear-my-tutu-everywhere/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Turtle: The Incredible Journey (2009)"} width={210} height={321} /></a>
      </figure>
      <p>{"Following a loggerhead turtle from her hatching on a Florida beach until she returns 25 years later to lay eggs of her own, “"}<a href={"http://www.turtle-film.com/"} target="_blank" rel="noopener noreferrer">{"Turtle: The Incredible Journey"}</a>{"” is a visual feast, with beautiful images of life underwater and in far-flung places along the Atlantic."}</p>
      <p>{"The film also has a strong conservation theme. On her journey, the turtle encounters plastic bags floating in the ocean that resemble jellyfish (her favorite food) and is nearly hit by a massive cargo ship. She survives both encounters, but the danger is palpable, and the ship breaks up the seaweed mass that she used for resting and feeding as a newly-hatched turtle, leaving other sea creatures without habitat, certain to die."}</p>
      <p>{"And there’s more than that. There’s sex. Violence. Even death. It’s a testament to our ability to separate ourselves from other species that this movie is rated G. I was able to sit next to my 6-year-old daughter without squirming as two turtles coupled in an extended 30- or 60-second scene. We winced a bit as predators ate other turtles, but chalked it up to the intricate food web, secure in our knowledge that the filmmakers would not depict “our” turtle, the protagonist, being eaten alive. But all this reflects far more on us than it does on the film, which is nothing short of wonderful."}</p>
      <p>{"Available on DVD/Blu-ray, on cable, and streaming on Netflix, this movie is appropriate for all ages."}</p>
    </div>
  );
}
