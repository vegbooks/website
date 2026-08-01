import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5523",
  "slug": "all-the-seasons-of-the-year",
  "url": "/reviews/all-the-seasons-of-the-year/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/07/02/all-the-seasons-of-the-year/",
  "title": "All the Seasons of the Year",
  "publishedAt": "2011-07-02",
  "publishedLabel": "July 2nd, 2011",
  "excerpt": "Year-long Forecast: 100% chance of love. Deborah Lee Rose writes a sweet story of cherishing children through each literal and metaphorical season of the year. She rains poetic descriptions of each season beginning…",
  "image": {
    "src": "/media/2011/07/allthe-seasons.jpg",
    "alt": "All the Seasons of the Year",
    "width": 210,
    "height": 261
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
      "name": "Deborah Lee Rose",
      "slug": "deborah-lee-rose",
      "url": "/topics/deborah-lee-rose/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Kay Chorao",
      "slug": "kay-chorao",
      "url": "/topics/kay-chorao/"
    },
    {
      "name": "Love",
      "slug": "love",
      "url": "/topics/love/"
    },
    {
      "name": "Parenting",
      "slug": "parenting",
      "url": "/topics/parenting/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Seasons",
      "slug": "seasons",
      "url": "/topics/seasons/"
    },
    {
      "name": "Weather",
      "slug": "weather",
      "url": "/topics/weather/"
    }
  ],
  "reviewer": {
    "name": "Huyen MacMichael",
    "slug": "huyen-macmichael",
    "url": "/contributors/huyen-macmichael/",
    "aliases": [
      "HUYEN MACMICHAEL"
    ]
  },
  "seo": {
    "description": "Year-long Forecast: 100% chance of love. Deborah Lee Rose writes a sweet story of cherishing children through each literal and metaphorical season of the year. She rains poetic descriptions of each season beginning…",
    "image": "https://vegbooks.org/media/2011/07/allthe-seasons.jpg"
  },
  "previous": {
    "title": "What about Daisy?",
    "url": "/reviews/what-about-daisy/"
  },
  "next": {
    "title": "Mother to Tigers",
    "url": "/reviews/mother-to-tigers/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/07/allthe-seasons.jpg"}><img src={"/media/2011/07/allthe-seasons.jpg"} alt={"All the Seasons of the Year"} width={210} height={261} /></a>
      </figure>
      <p>{"Year-long Forecast: 100% chance of love."}</p>
      <p><a href={"http://www.deborahleerose.com/"}>{"Deborah Lee Rose"}</a>{" writes a sweet story of cherishing children through each literal and metaphorical season of the year. She rains poetic descriptions of each season beginning with fall and follows up with warm rhymes demonstrating examples of outdoor quality time activities with the child. Written like a loving note a parent sends to a child, it simultaneously sends a personal message to children as well as models affectionate parenting. Kay Chorao offers sunny and colorful illustrations depicting an anthropomorphized mother cat and her child enjoying each season together."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
