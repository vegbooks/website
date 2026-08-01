import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1520",
  "slug": "biscuits-earth-day-celebration",
  "url": "/reviews/biscuits-earth-day-celebration/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/04/22/biscuits-earth-day-celebration/",
  "title": "Biscuit’s Earth Day Celebration",
  "publishedAt": "2010-04-22",
  "publishedLabel": "April 22nd, 2010",
  "excerpt": "This new title from Alyssa Satin Capucilli introduces kids to the concept of Earth Day and provides suggestions for how kids can take care of the earth. I appreciate that the author considers caring for animals to be…",
  "image": {
    "src": "/media/2010/04/s-earth-day-celebration.jpg",
    "alt": "Biscuit’s Earth Day Celebration",
    "width": 240,
    "height": 240
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
      "name": "Biscuit",
      "slug": "biscuit",
      "url": "/topics/biscuit/"
    },
    {
      "name": "Earth Day",
      "slug": "earth-day",
      "url": "/topics/earth-day/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Environmental Children's Literature",
      "slug": "environmental-childrens-literature",
      "url": "/topics/environmental-childrens-literature/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "This new title from Alyssa Satin Capucilli introduces kids to the concept of Earth Day and provides suggestions for how kids can take care of the earth. I appreciate that the author considers caring for animals to be…",
    "image": "https://vegbooks.org/media/2010/04/s-earth-day-celebration.jpg"
  },
  "previous": {
    "title": "Souperchicken",
    "url": "/reviews/souperchicken/"
  },
  "next": {
    "title": "Green Guide for Artists",
    "url": "/reviews/green-guide-for-artists/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/04/s-earth-day-celebration.jpg"}><img src={"/media/2010/04/s-earth-day-celebration.jpg"} alt={"Biscuit’s Earth Day Celebration"} width={240} height={240} /></a>
      </figure>
      <p>{"This new title from Alyssa Satin Capucilli introduces kids to the concept of Earth Day and provides suggestions for how kids can take care of the earth. I appreciate that the author considers caring for animals to be a part of caring for the earth. And of course kiddo loves "}<a href={"/reviews/biscuit/"}>{"Biscuit"}</a>{"!"}</p>
      <p>{"Among the ideas presented are conserving water, planting a garden, cleaning up trash, providing nesting material for birds, and using cloth bags to go shopping. Although it’s not mentioned in the book, veggie kids can add "}<a href={"http://www.treehugger.com/files/2009/03/vegetarian-diet-could-cut-climate-change-mitigation-costs-by-70-percent.php"} target="_blank" rel="noopener noreferrer">{"eating plant-based foods"}</a>{" to the list!"}</p>
      <p>{"Ages 2-6."}</p>
    </div>
  );
}
