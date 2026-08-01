import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2853",
  "slug": "the-polar-bears-home",
  "url": "/reviews/the-polar-bears-home/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/08/14/the-polar-bears-home/",
  "title": "The Polar Bears’ Home",
  "publishedAt": "2010-08-14",
  "publishedLabel": "August 14th, 2010",
  "excerpt": "This little book by Lara Bergen and Vincent Nguyen introduces kids to the concept of climate change. When a little girl from the Arctic takes a canoe ride with her father, they spy two polar bear cubs alone on the…",
  "image": {
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "The Polar Bears’ Home",
    "width": 210,
    "height": 139
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
      "name": "Climate Change",
      "slug": "climate-change",
      "url": "/topics/climate-change/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
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
      "name": "Green Publishing",
      "slug": "green-publishing",
      "url": "/topics/green-publishing/"
    },
    {
      "name": "Lara Bergen",
      "slug": "lara-bergen",
      "url": "/topics/lara-bergen/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Vincent Nguyen",
      "slug": "vincent-nguyen",
      "url": "/topics/vincent-nguyen/"
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
    "description": "This little book by Lara Bergen and Vincent Nguyen introduces kids to the concept of climate change. When a little girl from the Arctic takes a canoe ride with her father, they spy two polar bear cubs alone on the…",
    "image": "https://vegbooks.org/media/2010/06/boy-book-pic-from-istock1.jpg"
  },
  "previous": {
    "title": "Cookies: Bite-Size Life Lessons",
    "url": "/reviews/cookies/"
  },
  "next": {
    "title": "Weslandia",
    "url": "/reviews/weslandia/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/boy-book-pic-from-istock1.jpg"}><img src={"/media/2010/06/boy-book-pic-from-istock1.jpg"} alt={"The Polar Bears’ Home"} width={210} height={139} /></a>
      </figure>
      <p>{"This little book by Lara Bergen and Vincent Nguyen introduces kids to the concept of "}<a href={"http://www.epa.gov/climatechange/kids/"} target="_blank" rel="noopener noreferrer">{"climate change"}</a>{"."}</p>
      <p>{"When a little girl from the Arctic takes a canoe ride with her father, they spy two polar bear cubs alone on the ice. This provides an opportunity for the father to explain to his daughter how climate change is melting the sea ice. The two worry about the cubs until their mother comes to rescue them. Ms. Bergen explains that not all polar bears are so lucky, and the book ends with tips for ways that kids can help prevent climate change."}</p>
      <p>{"While there isn’t a whole lot of storyline here — most of the book is spent explaining climate change — readers will delight in Mr. Nguyen’s illustrations. Environmentally oriented parents will also appreciate the practical tips for eco-conscious living and the fact that the book is printed on recycled paper. Parents concerned with animal rights, however, should note that "}<a href={"http://www.peta.org/mc/factsheet_display.asp?ID=130"} target="_blank" rel="noopener noreferrer">{"dog sledding"}</a>{" is portrayed in a positive light."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
