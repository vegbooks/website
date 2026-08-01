import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3091",
  "slug": "hunwicks-egg",
  "url": "/reviews/hunwicks-egg/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/09/16/hunwicks-egg/",
  "title": "Hunwick’s Egg",
  "publishedAt": "2010-09-16",
  "publishedLabel": "September 16th, 2010",
  "excerpt": "Mem Fox spent seven years writing this lovely little book about a rabbit-eared bandicoot — an adorable Australian desert animal — and the devotion he showers on an egg that he has found. While there’s some ambiguity…",
  "image": {
    "src": "/media/2010/09/0152163182-lres-1.jpg",
    "alt": "Hunwick’s Egg",
    "width": 210,
    "height": 210
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
      "name": "Australia",
      "slug": "australia",
      "url": "/topics/australia/"
    },
    {
      "name": "Biomes",
      "slug": "biomes",
      "url": "/topics/biomes/"
    },
    {
      "name": "Conservation",
      "slug": "conservation",
      "url": "/topics/conservation/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eggs",
      "slug": "eggs",
      "url": "/topics/eggs/"
    },
    {
      "name": "Endangered Species",
      "slug": "endangered-species",
      "url": "/topics/endangered-species/"
    },
    {
      "name": "Habitats",
      "slug": "habitats",
      "url": "/topics/habitats/"
    },
    {
      "name": "Mem Fox",
      "slug": "mem-fox",
      "url": "/topics/mem-fox/"
    },
    {
      "name": "Pamela Lofts",
      "slug": "pamela-lofts",
      "url": "/topics/pamela-lofts/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "vegan",
      "slug": "vegan",
      "url": "/topics/vegan/"
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
    "description": "Mem Fox spent seven years writing this lovely little book about a rabbit-eared bandicoot — an adorable Australian desert animal — and the devotion he showers on an egg that he has found. While there’s some ambiguity…",
    "image": "https://vegbooks.org/media/2010/09/0152163182-lres-1.jpg"
  },
  "previous": {
    "title": "I See a Kookaburra!",
    "url": "/reviews/i-see-a-kookaburra/"
  },
  "next": {
    "title": "EcoMazes: 12 Earth Adventures",
    "url": "/reviews/ecomazes-12-earth-adventures/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/09/0152163182-lres-1.jpg"}><img src={"/media/2010/09/0152163182-lres-1.jpg"} alt={"Hunwick’s Egg"} width={210} height={210} /></a>
      </figure>
      <p><a href={"http://www.memfox.net/hunwicks-egg.html"} target="_blank" rel="noopener noreferrer">{"Mem Fox"}</a>{" spent seven years writing this lovely little book about a rabbit-eared bandicoot — an adorable Australian desert animal — and the devotion he showers on an egg that he has found."}</p>
      <p>{"While there’s some ambiguity about whether the egg is in fact an egg, or just a rock (since it does not hatch), this tale is great for vegan kids. At the heart of veganism is love for other animals and a desire that they be simply who they are, and Hunwick befriends the egg and cares for it out of sheer love, expecting nothing in return."}</p>
      <p>{"This book also offers a good launchpad for discussing "}<a href={"http://www.enchantedlearning.com/biomes/desert/desert.shtml"} target="_blank" rel="noopener noreferrer">{"desert biomes"}</a>{", "}<a href={"http://www.amnh.org/nationalcenter/Endangered/index.html"} target="_blank" rel="noopener noreferrer">{"endangered and imperiled animals"}</a>{", or "}<a href={"http://www.ausinternet.com/kids.htm"} target="_blank" rel="noopener noreferrer">{"Australia"}</a>{"."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
