import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1878",
  "slug": "the-little-mermaid",
  "url": "/reviews/the-little-mermaid/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/01/the-little-mermaid/",
  "title": "The Little Mermaid (1989)",
  "publishedAt": "2010-07-01",
  "publishedLabel": "July 1st, 2010",
  "excerpt": "As a mom and a feminist, I’m not crazy that “The Little Mermaid” is premised on Ariel’s decision to leave her family and literally give up her voice for a man she’s only just met. I worry what this teaches our…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "The Little Mermaid (1989)",
    "width": 254,
    "height": 383
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
      "name": "1980s Childrens Movies",
      "slug": "1980s-childrens-movies",
      "url": "/topics/1980s-childrens-movies/"
    },
    {
      "name": "Crabs",
      "slug": "crabs",
      "url": "/topics/crabs/"
    },
    {
      "name": "Disney",
      "slug": "disney",
      "url": "/topics/disney/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
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
      "name": "Mermaids",
      "slug": "mermaids",
      "url": "/topics/mermaids/"
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
    "description": "As a mom and a feminist, I’m not crazy that “The Little Mermaid” is premised on Ariel’s decision to leave her family and literally give up her voice for a man she’s only just met. I worry what this teaches our…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Our Farm",
    "url": "/reviews/our-farm/"
  },
  "next": {
    "title": "The Vegetables We Eat",
    "url": "/reviews/the-vegetables-we-eat/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"The Little Mermaid (1989)"} width={254} height={383} /></a>
      </figure>
      <p>{"As a mom and a feminist, I’m not crazy that “The Little Mermaid” is premised on Ariel’s decision to leave her family and "}<em>{"literally"}</em>{" give up her voice for a man she’s only just met. I worry what this teaches our daughters about love."}</p>
      <p>{"That said, I’m the first to admit that this movie does have some nuggets for vegetarian children. After a weak opening, there’s no shortage of "}<a href={"http://www.fishinghurts.com/"}>{"criticism of fishing"}</a>{" and the consumption of sea animals. When King Triton reprimands Ariel for approaching the surface of the ocean, he expresses a fear that she will be “snared by some fish-eater’s hook.” In another scene, he refers to humans as “spineless, savage, harpooning fish-eaters, incapable of any feeling.” Not to mention that Sebastian the Crab nearly faints at the view of sea animals being cooked on the humans’ stove, cringes at the view of the chef preparing "}<em>{"les poissons"}</em>{" for dinner, and narrowly escapes being part of the entree himself!"}</p>
      <p>{"Families concerned with animal rights should note that dolphins and fish pull carriages for King Triton and Sebastian the Crab, and that Ursula the Sea Witch captures and tortures souls (merfolk & others?) in her underwater dungeon."}</p>
      <p>{"Rated G. "}<a href={"http://www.commonsensemedia.org/movie-reviews/little-mermaid"} target="_blank" rel="noopener noreferrer">{"Common Sense Media"}</a>{" says this is good for ages 5 and up. My 4-year-old was a little frightened during the scary parts."}</p>
    </div>
  );
}
