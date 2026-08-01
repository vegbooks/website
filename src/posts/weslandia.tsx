import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2890",
  "slug": "weslandia",
  "url": "/reviews/weslandia/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/08/15/weslandia/",
  "title": "Weslandia",
  "publishedAt": "2010-08-15",
  "publishedLabel": "August 15th, 2010",
  "excerpt": "In the hum drum of suburbia, Wesley is an inharmonious presence, disliking pizza, soda and, goodness gracious, even professional football! Let’s root for the ambitious young underdog as he subtly sticks it to his…",
  "image": {
    "src": "/media/2010/08/weslandia.jpg",
    "alt": "Weslandia",
    "width": 210,
    "height": 180
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
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Green Living",
      "slug": "green-living",
      "url": "/topics/green-living/"
    },
    {
      "name": "Natural Living",
      "slug": "natural-living",
      "url": "/topics/natural-living/"
    },
    {
      "name": "Nature Books",
      "slug": "nature-books",
      "url": "/topics/nature-books/"
    },
    {
      "name": "Paul Fleischman",
      "slug": "paul-fleischman",
      "url": "/topics/paul-fleischman/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    }
  ],
  "reviewer": {
    "name": "Carolyn M. Mullin",
    "slug": "carolyn-m-mullin",
    "url": "/contributors/carolyn-m-mullin/",
    "aliases": [
      "CAROLYN M. MULLIN"
    ]
  },
  "seo": {
    "description": "In the hum drum of suburbia, Wesley is an inharmonious presence, disliking pizza, soda and, goodness gracious, even professional football! Let’s root for the ambitious young underdog as he subtly sticks it to his…",
    "image": "https://vegbooks.org/media/2010/08/weslandia.jpg"
  },
  "previous": {
    "title": "The Polar Bears’ Home",
    "url": "/reviews/the-polar-bears-home/"
  },
  "next": {
    "title": "Babe (1995)",
    "url": "/reviews/babe/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/weslandia.jpg"}><img src={"/media/2010/08/weslandia.jpg"} alt={"Weslandia"} width={210} height={180} /></a>
      </figure>
      <p>{"In the hum drum of suburbia, Wesley is an inharmonious presence, disliking pizza, soda and, goodness gracious, even professional football! Let’s root for the ambitious young underdog as he subtly sticks it to his more normal classmates in this tale about a special summertime project."}</p>
      <p>{"Utilizing knowledge he soaked up in school, Wesley decides to establish his own civilization, "}<em>{"Weslandia"}</em>{". Harnessing the raw materials provided by an extraordinary crop, our hero breakfasts on the fruit, whole or juiced, boils, fries and roasts the tubers, weaves fibers from the woody bark to fashion a robe, and grinds the seeds to produce oil, which serves as a viable bug repellent. In more grandiose accomplishments, Wesley devises a new counting system, creates his own sporting event, engineers suitable housing, and even develops a native language. More importantly, through the rise of his culture, Wesley becomes a happier, morale-boosted youth and attracts friends on his own terms, in his own way."}</p>
      <p>{"A great book for any misfit, budding “founding father,” or back-to-nature enthusiast. "}<a href={"http://www.trumpetclub.com/primary/activities/weslandia.htm"}>{"Look here"}</a>{" for related activities."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
