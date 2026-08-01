import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3399",
  "slug": "martha-and-skits",
  "url": "/reviews/martha-and-skits/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/11/01/martha-and-skits/",
  "title": "Martha and Skits",
  "publishedAt": "2010-11-01",
  "publishedLabel": "November 1st, 2010",
  "excerpt": "Readers of the Martha Speaks book series — or viewers of the PBS show — will enjoy reading that Martha has a new puppy in her life, Skits. The lovable pup is nothing but energy, and he tests Martha’s patience when he…",
  "image": {
    "src": "/media/2010/10/9780618609178-lres.jpg",
    "alt": "Martha and Skits",
    "width": 213,
    "height": 270
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
      "name": "Differences",
      "slug": "differences",
      "url": "/topics/differences/"
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
      "name": "Friendship",
      "slug": "friendship",
      "url": "/topics/friendship/"
    },
    {
      "name": "Inclusion",
      "slug": "inclusion",
      "url": "/topics/inclusion/"
    },
    {
      "name": "Intelligence",
      "slug": "intelligence",
      "url": "/topics/intelligence/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Susan Meddaugh",
      "slug": "susan-meddaugh",
      "url": "/topics/susan-meddaugh/"
    },
    {
      "name": "Talent",
      "slug": "talent",
      "url": "/topics/talent/"
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
    "description": "Readers of the Martha Speaks book series — or viewers of the PBS show — will enjoy reading that Martha has a new puppy in her life, Skits. The lovable pup is nothing but energy, and he tests Martha’s patience when he…",
    "image": "https://vegbooks.org/media/2010/10/9780618609178-lres.jpg"
  },
  "previous": {
    "title": "The Perfect Pumpkin Pie",
    "url": "/reviews/the-perfect-pumpkin-pie/"
  },
  "next": {
    "title": "Tinker Bell and the Great Fairy Rescue (2010)",
    "url": "/reviews/tinker-bell-and-the-great-fairy-rescue/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/10/9780618609178-lres.jpg"}><img src={"/media/2010/10/9780618609178-lres.jpg"} alt={"Martha and Skits"} width={213} height={270} /></a>
      </figure>
      <p>{"Readers of the "}<em><a href={"/reviews/martha-speaks/"}>{"Martha Speaks"}</a></em>{" book series — or viewers of the PBS show — will enjoy reading that Martha has a new puppy in her life, Skits."}</p>
      <p>{"The lovable pup is nothing but energy, and he tests Martha’s patience when he spills her bowl of alphabet soup. She explains how the soup empowers her to speak and assures the pup that someday he will be old enough for his own bowl of alphabet soup. When that day arrives, however, Martha and her family are disappointed to discover that the alphabet soup has no effect on Skits — leading him to believe that Martha is special and he is not. Skits soon disappears."}</p>
      <p>{"Just as the disappearance of the younger dog in Mary Casanova and Ard Hoyt’s picture book "}<a href={"/reviews/some-dog/"}><em>{"Some Dog!"}</em></a>{" gets the older (jealous) dog to appreciate him, so too does Martha come to realize what Skits means to her after he goes missing. The book ends happily, with the family reunited and a gentle reminder that everyone’s talents are unique, and all of us are important."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
