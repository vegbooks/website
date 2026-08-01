import type { PostMetadata } from '../content/types';

export const article = {
  "id": "843",
  "slug": "finding-nemo",
  "url": "/reviews/finding-nemo/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/02/23/finding-nemo/",
  "title": "Finding Nemo (2003)",
  "publishedAt": "2010-02-23",
  "publishedLabel": "February 23rd, 2010",
  "excerpt": "“Fish are friends, not food!” No wonder PETA loved this animated flick aimed at the preschool and early elementary crowd. While parts were scary for my kiddo, she empathized with the plight of fish in captivity,…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Finding Nemo (2003)",
    "width": 210,
    "height": 316
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
      "name": "Animals as Food",
      "slug": "animals-as-food",
      "url": "/topics/animals-as-food/"
    },
    {
      "name": "Animals in Captivity",
      "slug": "animals-in-captivity",
      "url": "/topics/animals-in-captivity/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Fish",
      "slug": "fish",
      "url": "/topics/fish/"
    },
    {
      "name": "Fishing",
      "slug": "fishing",
      "url": "/topics/fishing/"
    },
    {
      "name": "Movies for Vegetarian Kids",
      "slug": "movies-for-vegetarian-kids",
      "url": "/topics/movies-for-vegetarian-kids/"
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
      "name": "Vegetarian Characters",
      "slug": "vegetarian-characters",
      "url": "/topics/vegetarian-characters/"
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
    "description": "“Fish are friends, not food!” No wonder PETA loved this animated flick aimed at the preschool and early elementary crowd. While parts were scary for my kiddo, she empathized with the plight of fish in captivity,…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "It’s Raining Cats and Cats",
    "url": "/reviews/cats/"
  },
  "next": {
    "title": "Earth Mother",
    "url": "/reviews/earth-mother/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Finding Nemo (2003)"} width={210} height={316} /></a>
      </figure>
      <p>{"“Fish are friends, not food!” No wonder "}<a href={"http://www.peta.org/feat/nemo/"} target="_blank" rel="noopener noreferrer">{"PETA loved"}</a>{" this animated flick aimed at the preschool and early elementary crowd. While parts were scary for my kiddo, she empathized with the plight of fish in captivity, reasoning that they would be happier in the wild with their families."}</p>
      <p>{"Personally, I loved that the sharks had formed a support group to wean themselves from eating fish. How many of us have felt the need for a little help — particularly in the early days of our vegetarianism or veganism? I guess our veg meetups and picnics function as informal support groups, but imagine what the world would be like if people trying to rid themselves of meat-eating had sponsors and twelve-step programs!"}</p>
      <p>{"Rated G. "}<a href={"http://www.commonsensemedia.org/movie-reviews/Finding-Nemo.html"} target="_blank" rel="noopener noreferrer">{"Common Sense Media"}</a>{" rates this is as “on” for ages 4+, but some veg kids might appreciate this more when they’re 6+."}</p>
    </div>
  );
}
