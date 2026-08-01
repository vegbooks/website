import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2794",
  "slug": "101-dalmatians",
  "url": "/reviews/101-dalmatians/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/30/101-dalmatians/",
  "title": "101 Dalmatians (1961)",
  "publishedAt": "2010-07-30",
  "publishedLabel": "July 30th, 2010",
  "excerpt": "Revisiting this classic animated film with my little girl, I realized for the first time how much of the plot is one big chase scene. Still, if you can stand that, you’ll find yourself cheering for the Dalmatians as…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "101 Dalmatians (1961)",
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
      "name": "1960s Movies",
      "slug": "1960s-movies",
      "url": "/topics/1960s-movies/"
    },
    {
      "name": "Animal Rescue",
      "slug": "animal-rescue",
      "url": "/topics/animal-rescue/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
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
      "name": "Fur",
      "slug": "fur",
      "url": "/topics/fur/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
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
    "description": "Revisiting this classic animated film with my little girl, I realized for the first time how much of the plot is one big chase scene. Still, if you can stand that, you’ll find yourself cheering for the Dalmatians as…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Amy’s Light",
    "url": "/reviews/amys-light/"
  },
  "next": {
    "title": "Hug Time",
    "url": "/reviews/hug-time/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"101 Dalmatians (1961)"} width={210} height={317} /></a>
      </figure>
      <p>{"Revisiting this classic animated film with my little girl, I realized for the first time "}<em>{"how much"}</em>{" of the plot is one big chase scene. Still, if you can stand that, you’ll find yourself cheering for the Dalmatians as they try to elude Cruella de Vil and her goons."}</p>
      <p>{"As the film approaches its fiftieth birthday, it’s amazing to consider how progressive “101 Dalmatians” was for its time. Not only is the movie’s anti-fur message still relevant– especially now that "}<a href={"http://animals.change.org/blog/view/why_you_shouldnt_be_wearing_even_faux_fur_trims"} target="_blank" rel="noopener noreferrer">{"fur trim"}</a>{" is so ubiquitous — but people who care about animals will also appreciate that the dogs are considered part of the family. Still, one small part of the plot does seem dated — Roger and Anita (the humans in the film) allow their dogs Pongo and Perdita to mate. With so many lovely dogs in need of homes now, it’s worth giving your kiddo a gentle reminder that the best option in 2010 is to adopt."}</p>
      <p>{"Rated G. "}<a href={"http://www.commonsensemedia.org/movie-reviews/101-Dalmatians.html"} target="_blank" rel="noopener noreferrer">{"Ages 5-12"}</a>{"."}</p>
    </div>
  );
}
