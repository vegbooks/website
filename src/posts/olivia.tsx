import type { PostMetadata } from '../content/types';

export const article = {
  "id": "26",
  "slug": "olivia",
  "url": "/reviews/olivia/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/10/26/olivia/",
  "title": "Olivia",
  "publishedAt": "2009-10-26",
  "publishedLabel": "October 26th, 2009",
  "excerpt": "We love Olivia! This piglet is smart, funny, and just a little mischievous. She admires Degas, imitates Pollock, and dreams of performing in an opera. Adult readers will surely catch on that Ian Falconer’s…",
  "image": {
    "src": "/media/2011/07/i-stock-000009594887-x-small.jpg",
    "alt": "Olivia",
    "width": 210,
    "height": 288
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
      "name": "animal intelligence",
      "slug": "animal-intelligence",
      "url": "/topics/animal-intelligence/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "factory farming",
      "slug": "factory-farming",
      "url": "/topics/factory-farming/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Ian Falconer",
      "slug": "ian-falconer",
      "url": "/topics/ian-falconer/"
    },
    {
      "name": "Olivia",
      "slug": "olivia",
      "url": "/topics/olivia/"
    },
    {
      "name": "Pig",
      "slug": "pig",
      "url": "/topics/pig/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Vegetarian",
      "slug": "vegetarian",
      "url": "/topics/vegetarian/"
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
    "description": "We love Olivia! This piglet is smart, funny, and just a little mischievous. She admires Degas, imitates Pollock, and dreams of performing in an opera. Adult readers will surely catch on that Ian Falconer’s…",
    "image": "https://vegbooks.org/media/2011/07/i-stock-000009594887-x-small.jpg"
  },
  "previous": {
    "title": "Fancy Nancy and the Posh Puppy",
    "url": "/reviews/fancy-nancy-and-the-posh-puppy/"
  },
  "next": {
    "title": "Who Is the Beast?",
    "url": "/reviews/who-is-the-beast/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/07/i-stock-000009594887-x-small.jpg"}><img src={"/media/2011/07/i-stock-000009594887-x-small.jpg"} alt={"Olivia"} width={210} height={288} /></a>
      </figure>
      <p>{"We love "}<a href={"http://www.oliviathepiglet.com/"} target="_blank" rel="noopener noreferrer">{"Olivia"}</a>{"! This piglet is smart, funny, and just a little mischievous. She admires Degas, imitates Pollock, and dreams of performing in an opera."}</p>
      <p>{"Adult readers will surely catch on that Ian Falconer’s protagonist Olivia is not in fact a pig but a little girl, but this book provides a great opportunity to talk to kids about what pigs are really like. We know "}<a href={"http://www.tonic.com/article/mirror-use-reflects-pigs-intelligence-hunger/"} target="_blank" rel="noopener noreferrer">{"pigs are smart"}</a>{". Are they as smart as Olivia? Are they funny and mischievous? Olivia likes to build sand castles on the beach. What would pigs do if they were in charge? And how does that compare to how they’re routinely kept in "}<a href={"http://www.goveg.com/factoryFarming_pigs_farms.asp"} target="_blank" rel="noopener noreferrer">{"factory farms"}</a>{"?"}</p>
      <p>{"Ages 3 to 7."}</p>
    </div>
  );
}
