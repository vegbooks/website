import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5953",
  "slug": "grin-and-bear-it",
  "url": "/reviews/grin-and-bear-it/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/09/06/grin-and-bear-it/",
  "title": "Grin and Bear It",
  "publishedAt": "2011-09-06",
  "publishedLabel": "September 6th, 2011",
  "excerpt": "Leo Landry’s new book Grin and Bear It is a good pick for kids interested in a silly book with short chapters and lots of illustrations. Consisting of 7 chapters over 48 pages, the book tells the story of Bear, a…",
  "image": {
    "src": "/media/2011/08/grin-bear-it-72.jpg",
    "alt": "Grin and Bear It",
    "width": 210,
    "height": 285
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
      "name": "Bears",
      "slug": "bears",
      "url": "/topics/bears/"
    },
    {
      "name": "Chapter Books",
      "slug": "chapter-books",
      "url": "/topics/chapter-books/"
    },
    {
      "name": "Comedy",
      "slug": "comedy",
      "url": "/topics/comedy/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Leo Landry",
      "slug": "leo-landry",
      "url": "/topics/leo-landry/"
    },
    {
      "name": "Overcoming Fear",
      "slug": "overcoming-fear",
      "url": "/topics/overcoming-fear/"
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
    "name": "Jessica Almy",
    "slug": "jessica-almy",
    "url": "/contributors/jessica-almy/",
    "aliases": [
      "Jessica",
      "JESSICA ALMY"
    ]
  },
  "seo": {
    "description": "Leo Landry’s new book Grin and Bear It is a good pick for kids interested in a silly book with short chapters and lots of illustrations. Consisting of 7 chapters over 48 pages, the book tells the story of Bear, a…",
    "image": "https://vegbooks.org/media/2011/08/grin-bear-it-72.jpg"
  },
  "previous": {
    "title": "Bears, Bees & Butterflies",
    "url": "/reviews/bears-bees-butterflies/"
  },
  "next": {
    "title": "Pigs Make Me Sneeze",
    "url": "/reviews/pigs-make-me-sneeze/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/08/grin-bear-it-72.jpg"}><img src={"/media/2011/08/grin-bear-it-72.jpg"} alt={"Grin and Bear It"} width={210} height={285} /></a>
      </figure>
      <p>{"Leo Landry’s new book "}<em><a href={"http://www.publishersweekly.com/978-1-57091-745-5"} target="_blank" rel="noopener noreferrer">{"Grin and Bear It"}</a></em>{" is a good pick for kids interested in a silly book with short chapters and lots of illustrations. Consisting of 7 chapters over 48 pages, the book tells the story of Bear, a comedian with plenty of material and a serious case of stage fright. In the end, he finds a solution that makes his friends laugh but spares him the anxiety of performing."}</p>
      <p>{"I like the fact that Bear eats berries for breakfast. Some parents might cringe when he falls asleep while drinking a root beer at the local watering hole, but my kiddo didn’t think anything of it."}</p>
      <p>{"While all the puns might be a bit much for some adults reading aloud, "}<a href={"http://www.amazon.com/gp/entity/Leo-Landry/B001ITYVQQ?ie=UTF8&ref_=ntt_athr_dp_pel_1&tag=vegbooks-20&linkCode=ur2&camp=1789&creative=390957"} target="_blank" rel="noopener noreferrer">{"Landry’s classic illustrations"}</a>{" are quite attractive and the story moves quickly, making this a fun read."}</p>
      <p>{"Ages 5-8."}</p>
    </div>
  );
}
