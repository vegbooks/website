import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9698",
  "slug": "peep-and-the-big-wide-world",
  "url": "/reviews/peep-and-the-big-wide-world/",
  "legacyUrl": "https://vegbooks.org/index.php/2014/05/20/peep-and-the-big-wide-world/",
  "title": "Peep and the Big Wide World",
  "publishedAt": "2014-05-20",
  "publishedLabel": "May 20th, 2014",
  "excerpt": "If you are looking for new options for your little ones, I highly recommend “Peep and the Big Wide World,” available on PBS, Netflix, and Hulu Plus. Each episode includes a mix of animation and real life stories all…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany movie review",
    "width": 210,
    "height": 317
  },
  "categories": [
    {
      "name": "Television",
      "slug": "television",
      "url": "/television/"
    }
  ],
  "tags": [
    {
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Conservation",
      "slug": "conservation",
      "url": "/topics/conservation/"
    },
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    },
    {
      "name": "Joan Cusak",
      "slug": "joan-cusak",
      "url": "/topics/joan-cusak/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    }
  ],
  "reviewer": {
    "name": "Homa Woodrum",
    "slug": "homa-woodrum",
    "url": "/contributors/homa-woodrum/",
    "aliases": [
      "HOMA WOODRUM"
    ]
  },
  "seo": {
    "description": "If you are looking for new options for your little ones, I highly recommend “Peep and the Big Wide World,” available on PBS, Netflix, and Hulu Plus. Each episode includes a mix of animation and real life stories all…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Prickly Rose",
    "url": "/reviews/prickly-rose/"
  },
  "next": {
    "title": "Wild About Bears",
    "url": "/reviews/wild-about-bears/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/reviews/the-little-mermaid/"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Girl holding a movie camera - stock image to accompany movie review"} width={210} height={317} /></a>
      </figure>
      <p>{"If you are looking for new options for your little ones, I highly recommend “Peep and the Big Wide World,” available on PBS, Netflix, and Hulu Plus. Each episode includes a mix of animation and real life stories all with themes of investigation and discovery. In one episode, for example, Peep (a chick) and Chirp (a bird) follow their shadows. They take a nap at midday and continue to follow their shadows (trying to reach the sun) only to end up right where they started. The real-life component follows some children measuring and tracing their shadows. Conservation is another big theme (with episode titles like “An Inconvenient Tooth” about Beaver’s tree habit). My favorite character is Duck. In one episode, he jealously guards a piece of bread only to have missed out on eating it before it becomes moldy. Luckily there are a lot of other critters still interested in the bread."}</p>
      <p>{"Joan Cusak narrates the show with a soothing style and all the humor is very gentle and not at all mean spirited as may be the case with other cartoons. Check out "}<a href={"http://www.peepandthebigwideworld.com/video/peep_psa/"} target="_blank" rel="noopener noreferrer">{"this video"}</a>{" encouraging parents to foster curiosity and exploration with their children. The themes are very friendly for veg kids and families, plus you won’t mind watching along with the children in your life. I think that the fact that all the animals are in the world in general, instead of in a farm setting, also makes this a great choice if that is something that causes concern in children’s literature or TV involving baby ducks, birds, and chickens. My kids are 3 and 5, but whatever age you feel comfortable starting television with your child would be appropriate for this show."}</p>
    </div>
  );
}
