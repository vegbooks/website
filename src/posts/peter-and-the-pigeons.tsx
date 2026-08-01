import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3656",
  "slug": "peter-and-the-pigeons",
  "url": "/reviews/peter-and-the-pigeons/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/11/30/peter-and-the-pigeons/",
  "title": "Peter and the Pigeons",
  "publishedAt": "2010-11-30",
  "publishedLabel": "November 30th, 2010",
  "excerpt": "Children’s literature is notoriously easy on the zoo industry. Zoos are depicted as places that animals want to be — with little mention of whether it’s natural for elephants to stand on concrete, or whether lions…",
  "image": {
    "src": "/media/2010/10/girl-reading.jpg",
    "alt": "Peter and the Pigeons",
    "width": 210,
    "height": 280
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
      "name": "Animals in Captivity",
      "slug": "animals-in-captivity",
      "url": "/topics/animals-in-captivity/"
    },
    {
      "name": "Birds",
      "slug": "birds",
      "url": "/topics/birds/"
    },
    {
      "name": "Charlotte Zolotow",
      "slug": "charlotte-zolotow",
      "url": "/topics/charlotte-zolotow/"
    },
    {
      "name": "City",
      "slug": "city",
      "url": "/topics/city/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Lions",
      "slug": "lions",
      "url": "/topics/lions/"
    },
    {
      "name": "Martine Gourbault",
      "slug": "martine-gourbault",
      "url": "/topics/martine-gourbault/"
    },
    {
      "name": "Pigeons",
      "slug": "pigeons",
      "url": "/topics/pigeons/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Urban",
      "slug": "urban",
      "url": "/topics/urban/"
    },
    {
      "name": "Zoo",
      "slug": "zoo",
      "url": "/topics/zoo/"
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
    "description": "Children’s literature is notoriously easy on the zoo industry. Zoos are depicted as places that animals want to be — with little mention of whether it’s natural for elephants to stand on concrete, or whether lions…",
    "image": "https://vegbooks.org/media/2010/10/girl-reading.jpg"
  },
  "previous": {
    "title": "The Magic School Bus and the Climate Challenge",
    "url": "/reviews/the-magic-school-bus-and-the-climate-challenge/"
  },
  "next": {
    "title": "I Love Dogs",
    "url": "/reviews/i-love-dogs/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/10/girl-reading.jpg"}><img src={"/media/2010/10/girl-reading.jpg"} alt={"Peter and the Pigeons"} width={210} height={280} /></a>
      </figure>
      <p>{"Children’s literature is "}<a href={"/reviews/gorilla/"}>{"notoriously easy on the zoo industry"}</a>{". Zoos are depicted as places that animals want to be — with little mention of whether it’s natural for elephants to stand on concrete, or whether lions should really be pacing in their enclosures. So when a kids book is even a little skeptical of zoos, it’s reason to rejoice."}</p>
      <p>{"The boy in "}<em>{"Peter and the Pigeons"}</em>{" loves pigeons, so his father decides to bring him to the zoo. The two move from exhibit to exhibit, watching and admiring the animals — and with each species, Peter’s father asks him if this animal is his favorite. His inevitable answer is no. At the end, Peter tells his father that pigeons are his favorite because he sees them every day, knows their sounds, and even the feel of their feathers. “If I knew the others better,” Peter says, “maybe I’d choose them. But right now, it’s pigeons I like best.”"}</p>
      <p>{"I like this book not only because there is passing criticism of zoos (Peter tells his father that the lion should be in a jungle), but also because it debunks "}<a href={"http://www.wildlife.org.nz/zoocheck/myths.htm"} target="_blank" rel="noopener noreferrer">{"the myth that viewing captive animals makes people care for them"}</a>{". People love the animals most familiar to them — which makes you wonder why we lock up wild animals at all."}</p>
      <p>{"Ages 3-6."}</p>
    </div>
  );
}
