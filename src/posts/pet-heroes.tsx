import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3743",
  "slug": "pet-heroes",
  "url": "/reviews/pet-heroes/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/12/17/pet-heroes/",
  "title": "Pet Heroes",
  "publishedAt": "2010-12-17",
  "publishedLabel": "December 17th, 2010",
  "excerpt": "Nicole Corse’s Pet Heroes is a short book of fourteen stories about animals who have acted heroically to save lives. Some are companion animals, and others trained service dogs who have been called to duty. While…",
  "image": {
    "src": "/media/2010/12/i1915-scholrdrlvl3-4cc.jpg",
    "alt": "Pet Heroes",
    "width": 210,
    "height": 315
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
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
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
      "name": "Early Readers",
      "slug": "early-readers",
      "url": "/topics/early-readers/"
    },
    {
      "name": "Emergencies",
      "slug": "emergencies",
      "url": "/topics/emergencies/"
    },
    {
      "name": "Heroes",
      "slug": "heroes",
      "url": "/topics/heroes/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Pigs",
      "slug": "pigs",
      "url": "/topics/pigs/"
    },
    {
      "name": "Rabbits",
      "slug": "rabbits",
      "url": "/topics/rabbits/"
    },
    {
      "name": "Rescue",
      "slug": "rescue",
      "url": "/topics/rescue/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Gannett",
    "slug": "jennifer-gannett",
    "url": "/contributors/jennifer-gannett/",
    "aliases": [
      "JENNIFER G",
      "JENNIFER GANNETT"
    ]
  },
  "seo": {
    "description": "Nicole Corse’s Pet Heroes is a short book of fourteen stories about animals who have acted heroically to save lives. Some are companion animals, and others trained service dogs who have been called to duty. While…",
    "image": "https://vegbooks.org/media/2010/12/i1915-scholrdrlvl3-4cc.jpg"
  },
  "previous": {
    "title": "Max Goes to the Recycling Center",
    "url": "/reviews/max-goes-to-the-recycling-center/"
  },
  "next": {
    "title": "Simple Food for Busy Families: The Whole Life Nutrition Approach",
    "url": "/reviews/simple-food-for-busy-families-the-whole-life-nutrition-approach/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/12/i1915-scholrdrlvl3-4cc.jpg"}><img src={"/media/2010/12/i1915-scholrdrlvl3-4cc.jpg"} alt={"Pet Heroes"} width={210} height={315} /></a>
      </figure>
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0545258375"} alt={""} width={1} height={1} />
      </figure>
      <p>{"Nicole Corse’s "}<a href={"http://www.amazon.com/gp/product/0545258375?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0545258375"} target="_blank" rel="noopener noreferrer"><em>{"Pet Heroes"}</em></a>{" is a short book of fourteen stories about animals who have acted heroically to save lives. Some are companion animals, and others trained service dogs who have been called to duty. While most of the lives saved are human, some of the hero animals are given credit for saving non-humans. Some of the animals to whom we are introduced include a pot-bellied pig who escaped through a dog door to seek help, a border collie who acts as a guide dog for another border collie, and a rabbit who alerted his people to a fire. The profiles of the animals include photographs of them, often with those who they have saved."}</p>
      <p><em>{"Pet Heroes"}</em>{" is a good way to open a discussion with kids about the connections between animals (human and non-human), and what behaviors our culture considers heroic. Not all veg parents will appreciate the constant reference to the animals as “pets.” Another consideration for parents of sensitive children is that the situations in which the animal rescuers are involved are often scary or concerning for young children (e.g. September 11, 2001, fires, medical emergencies and numerous other perilous circumstances)."}</p>
      <p><em>{"Pet Heroes"}</em>{" is for ages 5 and up."}</p>
    </div>
  );
}
