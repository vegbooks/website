import type { PostMetadata } from '../content/types';

export const article = {
  "id": "437",
  "slug": "all-about-garbage-and-recycling",
  "url": "/reviews/all-about-garbage-and-recycling/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/12/14/all-about-garbage-and-recycling/",
  "title": "All About Garbage and Recycling (2008)",
  "publishedAt": "2009-12-14",
  "publishedLabel": "December 14th, 2009",
  "excerpt": "Kiddo has been asking about what happens to trash, and she was appalled to learn about landfills. So you can imagine her excitement when we rented Backpack Jack’s “All About Garbage and Recycling.” I’d never watched…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "All About Garbage and Recycling (2008)",
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
      "name": "Activities",
      "slug": "activities",
      "url": "/topics/activities/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Educational Kids Films",
      "slug": "educational-kids-films",
      "url": "/topics/educational-kids-films/"
    },
    {
      "name": "Environmental Kids Movies",
      "slug": "environmental-kids-movies",
      "url": "/topics/environmental-kids-movies/"
    },
    {
      "name": "Garbage",
      "slug": "garbage",
      "url": "/topics/garbage/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Recycling",
      "slug": "recycling",
      "url": "/topics/recycling/"
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
    "description": "Kiddo has been asking about what happens to trash, and she was appalled to learn about landfills. So you can imagine her excitement when we rented Backpack Jack’s “All About Garbage and Recycling.” I’d never watched…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Wolfsnail: Backyard Predator",
    "url": "/reviews/wolfsnail-backyard-predator/"
  },
  "next": {
    "title": "The Little Yellow Leaf",
    "url": "/reviews/the-yellow-leaf/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"All About Garbage and Recycling (2008)"} width={210} height={321} /></a>
      </figure>
      <p>{"Kiddo has been asking about what happens to trash, and she was appalled to learn about landfills. So you can imagine her excitement when we rented Backpack Jack’s “All About Garbage and Recycling.”"}</p>
      <p>{"I’d never watched anything with Backpack Jack in it before. He reminded me of Steve Burns, the original host of Blue’s Clues — young, friendly, and upbeat. Kids will love all the car- and can-crushing machines, but some might not get Backpack Jack’s sense of humor. Kiddo, for example, thought he was serious when he said a machine was crushing "}<em>{"his"}</em>{" car!"}</p>
      <p>{"This movie has a definite pro-recycling perspective, so it made kiddo very happy. Still, I wish it talked a little bit about reducing and reusing old materials."}</p>
      <p>{"Not Rated. Ages 4-8."}</p>
      <p>{"For recycling activities (including instructions on making a necklace from magazines), check out "}<a href={"http://www.educationworld.com/a_lesson/lesson308.shtml"} target="_blank" rel="noopener noreferrer">{"Education World"}</a>{". To play a recycling-themed game, visit the Environmental Protection Agency’s "}<a href={"http://www.epa.gov/recyclecity/mainmap.htm"} target="_blank" rel="noopener noreferrer">{"Recycle City"}</a>{"."}</p>
    </div>
  );
}
